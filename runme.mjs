import som from "./SOM.json"
import mkdirp from "mkdirp"
import { dirname } from "path"
import fse from "fs-extra"
import axios from "axios"

const downloadImage = async (url, path) => {
  await mkdirp(dirname(path))
  axios({
    url,
    responseType: "stream",
  }).then(
    (response) =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(fse.createWriteStream(path))
          .on("finish", () => resolve())
          .on("error", (e) => reject(e))
      })
  )
}

const saveMarkdown = (filename, body) =>
  fse.outputFile(`./src/text/${filename}.md`, body, function(err) {
    if (err) return console.log(err)
    console.log("created " + filename + ".md")
  })

const createSidebar = (page) => {
  let articles = []
  let sidebar = ""

  if (!page.html) return
  const titleSplitPos = page.title.indexOf(" ")
  const ordinal = page.title.substr(0, titleSplitPos)
  const [chapter, section] = ordinal.split(".")
  const title = page.title.substr(titleSplitPos + 1)
  console.log(page.title)
}

const processPage = async (page) => {
  if (!page.html) return
  const titleSplitPos = page.title.indexOf(" ")
  const ordinal = page.title.substr(0, titleSplitPos)
  const [chapter, section] = ordinal.split(".")
  const title = page.title.substr(titleSplitPos + 1)
  let images = []
  if (page.images) {
    images = page.images.map((x) => x.url)
  }
  let filename = section
    ? `${chapter}_${section}_${title.split(" ").join("_")}`
    : `${chapter}_${title.split(" ").join("_")}`

  filename = filename.replace(/['?]/gm, "")

  const head = `---
ordinal: ${ordinal}
title: ${title}
---\n
# ${ordinal} ${title.toUpperCase()} \n
`

  //<img src="http://aurellem.org/society-of-mind/illus/ch11/11-2.png"></img>;

  const body = page.html
    .split("http://aurellem.org/society-of-mind/illus")
    .join("/images")

  // purge files

  await fse.emptyDir("./src/.vuepress/public/images/")
  await fse.emptyDir("./src/text/")

  images.forEach((x) =>
    downloadImage(
      x,
      `./src/.vuepress/public/images/ch${chapter}/${x.substr(
        x.lastIndexOf("/") + 1
      )}`
    )
  )

  saveMarkdown(filename.toLowerCase(), head + body)
}

//som.slice(0, 5).forEach(processPage);
//som.forEach(createSidebar)
som.forEach(processPage)
