const { description } = require("../../package")

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "The Society of Mind",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    algolia: {
      appId: "B7YHEYSK1Q",
      apiKey: "830068331e7c4c30802776f15ac67c98",
      indexName: "som",
    },
    nav: [
      {
        text: "The Society of Mind",
        link: "/text/1_prologue",
      },
      {
        text: "SOM Glossary",
        link: "/glossary/",
      },
      {
        text: "The Emotion Machine",
        link: "/em/part9",
      },
    ],
    sidebar: {
      "/em/": [
        {
          title: `9 The Self`,
          path: `/em/part9`,
          collapsable: false,
          sidebarDepth: 3,
        },
      ],

      "/text/": [
        {
          title: `1 PROLOGUE`,
          path: `/text/1_prologue/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/1_1_the_agents_of_the_mind`, `1.1 THE AGENTS OF THE MIND`],
            [`text/1_2_the_mind_and_the_brain`, `1.2 THE MIND AND THE BRAIN`],
            [`text/1_3_the_society_of_mind`, `1.3 THE SOCIETY OF MIND`],
            [`text/1_4_the_world_of_blocks`, `1.4 THE WORLD OF BLOCKS`],
          ],
        },
        {
          title: `2 WHOLES AND PARTS`,
          path: `/text/2_wholes_and_parts/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [
              `text/2_1_components_and_connections`,
              `2.1 COMPONENTS AND CONNECTIONS`,
            ],
            [
              `text/2_2_novelists_and_reductionists`,
              `2.2 NOVELISTS AND REDUCTIONISTS`,
            ],
            [`text/2_3_parts_and_wholes`, `2.3 PARTS AND WHOLES`],
            [`text/2_4_holes_and_parts`, `2.4 HOLES AND PARTS`],
            [`text/2_5_easy_things_are_hard`, `2.5 EASY THINGS ARE HARD`],
            [`text/2_6_are_people_machines`, `2.6 ARE PEOPLE MACHINES`],
          ],
        },
        {
          title: `3 CONFLICT AND COMPROMISE`,
          path: `/text/3_conflict_and_compromise/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/3_1_conflict`, `3.1 CONFLICT`],
            [`text/3_2_noncompromise`, `3.2 NONCOMPROMISE`],
            [`text/3_3_hierarchies`, `3.3 HIERARCHIES`],
            [`text/3_4_heterarchies`, `3.4 HETERARCHIES`],
            [`text/3_5_destructiveness`, `3.5 DESTRUCTIVENESS`],
            [
              `text/3_6_pain_and_pleasure_simplified`,
              `3.6 PAIN AND PLEASURE SIMPLIFIED`,
            ],
          ],
        },
        {
          title: `4 THE SELF`,
          path: `/text/4_the_self/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/4_1_the_self`, `4.1 THE SELF`],
            [`text/4_2_one_self_or_many`, `4.2 ONE SELF OR MANY`],
            [`text/4_3_the_soul`, `4.3 THE SOUL`],
            [`text/4_4_the_conservative_self`, `4.4 THE CONSERVATIVE SELF`],
            [`text/4_5_exploitation`, `4.5 EXPLOITATION`],
            [`text/4_6_self-control`, `4.6 SELF-CONTROL`],
            [`text/4_7_long-range_plans`, `4.7 LONG-RANGE PLANS`],
            [`text/4_8_ideals`, `4.8 IDEALS`],
          ],
        },
        {
          title: `5 INDIVIDUALITY`,
          path: `/text/5_individuality/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/5_1_circular_causality`, `5.1 CIRCULAR CAUSALITY`],
            [`text/5_2_unanswerable_questions`, `5.2 UNANSWERABLE QUESTIONS`],
            [`text/5_3_the_remote-control_self`, `5.3 THE REMOTE-CONTROL SELF`],
            [`text/5_4_personal_identity`, `5.4 PERSONAL IDENTITY`],
            [`text/5_5_fashion_and_style`, `5.5 FASHION AND STYLE`],
            [`text/5_6_traits`, `5.6 TRAITS`],
            [`text/5_7_permanent_identity`, `5.7 PERMANENT IDENTITY`],
          ],
        },
        {
          title: `6 INSIGHT AND INTROSPECTION`,
          path: `/text/6_insight_and_introspection/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/6_1_consciousness`, `6.1 CONSCIOUSNESS`],
            [`text/6_2_signals_and_signs`, `6.2 SIGNALS AND SIGNS`],
            [`text/6_3_thought-experiments`, `6.3 THOUGHT-EXPERIMENTS`],
            [`text/6_4_b-brains`, `6.4 B-BRAINS`],
            [`text/6_5_frozen_reflection`, `6.5 FROZEN REFLECTION`],
            [`text/6_6_momentary_mental_time`, `6.6 MOMENTARY MENTAL TIME`],
            [`text/6_7_the_causal_now`, `6.7 THE CAUSAL NOW`],
            [
              `text/6_8_thinking_without_thinking`,
              `6.8 THINKING WITHOUT THINKING`,
            ],
            [`text/6_9_heads_in_the_clouds`, `6.9 HEADS IN THE CLOUDS`],
            [`text/6_10_worlds_out_of_mind`, `6.10 WORLDS OUT OF MIND`],
            [`text/6_11_in-sight`, `6.11 IN-SIGHT`],
            [`text/6_12_internal_communication`, `6.12 INTERNAL COMMUNICATION`],
            [
              `text/6_13_self-knowledge_is_dangerous`,
              `6.13 SELF-KNOWLEDGE IS DANGEROUS`,
            ],
          ],
        },
        {
          title: `7 PROBLEMS AND GOALS`,
          path: `/text/7_problems_and_goals/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/7_1_intelligence`, `7.1 INTELLIGENCE`],
            [`text/7_2_uncommon_sense`, `7.2 UNCOMMON SENSE`],
            [`text/7_3_the_puzzle_principle`, `7.3 THE PUZZLE PRINCIPLE`],
            [`text/7_4_problem_solving`, `7.4 PROBLEM SOLVING`],
            [`text/7_5_learning_and_memory`, `7.5 LEARNING AND MEMORY`],
            [
              `text/7_6_reinforcement_and_reward`,
              `7.6 REINFORCEMENT AND REWARD`,
            ],
            [`text/7_7_local_responsibility`, `7.7 LOCAL RESPONSIBILITY`],
            [`text/7_8_difference-engines`, `7.8 DIFFERENCE-ENGINES`],
            [`text/7_9_intentions`, `7.9 INTENTIONS`],
            [`text/7_10_genius`, `7.10 GENIUS`],
          ],
        },
        {
          title: `8 A THEORY OF MEMORY`,
          path: `/text/8_a_theory_of_memory/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [
              `text/8_1_k-lines_a_theory_of_memory`,
              `8.1 K-LINES A THEORY OF MEMORY`,
            ],
            [`text/8_2_re-membering`, `8.2 RE-MEMBERING`],
            [
              `text/8_3_mental_states_and_dispositions`,
              `8.3 MENTAL STATES AND DISPOSITIONS`,
            ],
            [`text/8_4_partial_mental_states`, `8.4 PARTIAL MENTAL STATES`],
            [`text/8_5_level-bands`, `8.5 LEVEL-BANDS`],
            [`text/8_6_levels`, `8.6 LEVELS`],
            [`text/8_7_fringes`, `8.7 FRINGES`],
            [`text/8_8_societies_of_memories`, `8.8 SOCIETIES OF MEMORIES`],
            [`text/8_9_knowledge-trees`, `8.9 KNOWLEDGE-TREES`],
            [
              `text/8_10_levels_and_classifications`,
              `8.10 LEVELS AND CLASSIFICATIONS`,
            ],
            [`text/8_11_layers_of_societies`, `8.11 LAYERS OF SOCIETIES`],
          ],
        },

        {
          title: `9 SUMMARIES`,
          path: `/text/9_summaries`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/9_1_wanting_and_liking`, `9.1 WANTING AND LIKING`],
            [`text/9_2_gerrymandering`, `9.2 GERRYMANDERING`],
            [`text/9_3_learning_from_failure`, `9.3 LEARNING FROM FAILURE`],
            [`text/9_4_enjoying_discomfort`, `9.4 ENJOYING DISCOMFORT`],
          ],
        },
        {
          title: `10 PAPERTS PRINCIPLE`,
          path: `/text/10_paperts_principle/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/10_1_piagets_experiments`, `10.1 PIAGETS EXPERIMENTS`],
            [
              `text/10_2_reasoning_about_amounts`,
              `10.2 REASONING ABOUT AMOUNTS`,
            ],
            [`text/10_3_priorities`, `10.3 PRIORITIES`],
            [`text/10_4_paperts_principle`, `10.4 PAPERTS PRINCIPLE`],
            [`text/10_5_the_society-of-more`, `10.5 THE SOCIETY-OF-MORE`],
            [
              `text/10_6_about_piagets_experiments`,
              `10.6 ABOUT PIAGETS EXPERIMENTS`,
            ],
            [`text/10_7_the_concept_of_concept`, `10.7 THE CONCEPT OF CONCEPT`],
            [
              `text/10_8_education_and_development`,
              `10.8 EDUCATION AND DEVELOPMENT`,
            ],
            [`text/10_9_learning_a_hierarchy`, `10.9 LEARNING A HIERARCHY`],
          ],
        },
        {
          title: `11 THE SHAPE OF SPACE`,
          path: `/text/11_the_shape_of_space/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/11_1_seeing_red`, `11.1 SEEING RED`],
            [`text/11_2_the_shape_of_space`, `11.2 THE SHAPE OF SPACE`],
            [`text/11_3_nearnesses`, `11.3 NEARNESSES`],
            [`text/11_4_innate_geography`, `11.4 INNATE GEOGRAPHY`],
            [`text/11_5_sensing_similarities`, `11.5 SENSING SIMILARITIES`],
            [`text/11_6_the_centered_self`, `11.6 THE CENTERED SELF`],
            [`text/11_7_predestined_learning`, `11.7 PREDESTINED LEARNING`],
            [`text/11_8_half-brains`, `11.8 HALF-BRAINS`],
            [`text/11_9_dumbbell_theories`, `11.9 DUMBBELL THEORIES`],
          ],
        },
        {
          title: `12 LEARNING MEANING`,
          path: `/text/12_learning_meaning/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/12_1_a_block-arch_scenario`, `12.1 A BLOCK-ARCH SCENARIO`],
            [`text/12_2_learning_meaning`, `12.2 LEARNING MEANING`],
            [`text/12_3_uniframes`, `12.3 UNIFRAMES`],
            [`text/12_4_structure_and_function`, `12.4 STRUCTURE AND FUNCTION`],
            [
              `text/12_5_the_function_of_structures`,
              `12.5 THE FUNCTION OF STRUCTURES`,
            ],
            [`text/12_6_accumulation`, `12.6 ACCUMULATION`],
            [
              `text/12_7_accumulation_strategies`,
              `12.7 ACCUMULATION STRATEGIES`,
            ],
            [`text/12_8_problems_of_disunity`, `12.8 PROBLEMS OF DISUNITY`],
            [
              `text/12_9_the_exception_principle`,
              `12.9 THE EXCEPTION PRINCIPLE`,
            ],
            [`text/12_10_how_towers_work`, `12.10 HOW TOWERS WORK`],
            [`text/12_11_how_causes_work`, `12.11 HOW CAUSES WORK`],
            [
              `text/12_12_meaning_and_definition`,
              `12.12 MEANING AND DEFINITION`,
            ],
            [`text/12_13_bridge-definitions`, `12.13 BRIDGE-DEFINITIONS`],
          ],
        },
        {
          title: `13 SEEING AND BELIEVING`,
          path: `/text/13_seeing_and_believing/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/13_1_reformulation`, `13.1 REFORMULATION`],
            [`text/13_2_boundaries`, `13.2 BOUNDARIES`],
            [`text/13_3_seeing_and_believing`, `13.3 SEEING AND BELIEVING`],
            [
              `text/13_4_childrens_drawing-frames`,
              `13.4 CHILDRENS DRAWING-FRAMES`,
            ],
            [`text/13_5_learning_a_script`, `13.5 LEARNING A SCRIPT`],
            [`text/13_6_the_frontier_effect`, `13.6 THE FRONTIER EFFECT`],
            [`text/13_7_duplications`, `13.7 DUPLICATIONS`],
          ],
        },
        {
          title: `14 REFORMULATION`,
          path: `/text/14_reformulation/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/14_1_using_reformulation`, `14.1 USING REFORMULATION`],
            [`text/14_2_means_and_ends`, `14.2 MEANS AND ENDS`],
            [`text/14_3_seeing_squares`, `14.3 SEEING SQUARES`],
            [`text/14_4_brainstorming`, `14.4 BRAINSTORMING`],
            [
              `text/14_5_the_investment_principle`,
              `14.5 THE INVESTMENT PRINCIPLE`,
            ],
            [`text/14_6_parts_and_holes`, `14.6 PARTS AND HOLES`],
            [
              `text/14_7_the_power_of_negative_thinking`,
              `14.7 THE POWER OF NEGATIVE THINKING`,
            ],
            [`text/14_8_the_interaction-square`, `14.8 THE INTERACTION-SQUARE`],
          ],
        },
        {
          title: `15 CONSCIOUSNESS AND MEMORY`,
          path: `/text/15_consciousness_and_memory/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/15_1_momentary_mental_state`, `15.1 MOMENTARY MENTAL STATE`],
            [`text/15_2_self-examination`, `15.2 SELF-EXAMINATION`],
            [`text/15_3_memory`, `15.3 MEMORY`],
            [`text/15_4_memories_of_memories`, `15.4 MEMORIES OF MEMORIES`],
            [`text/15_5_the_immanence_illusion`, `15.5 THE IMMANENCE ILLUSION`],
            [`text/15_6_many_kinds_of_memory`, `15.6 MANY KINDS OF MEMORY`],
            [`text/15_7_memory_rearrangements`, `15.7 MEMORY REARRANGEMENTS`],
            [`text/15_8_anatomy_of_memory`, `15.8 ANATOMY OF MEMORY`],
            [
              `text/15_9_interruption_and_recovery`,
              `15.9 INTERRUPTION AND RECOVERY`,
            ],
            [`text/15_10_losing_track`, `15.10 LOSING TRACK`],
            [
              `text/15_11_the_recursion_principle`,
              `15.11 THE RECURSION PRINCIPLE`,
            ],
          ],
        },
        {
          title: `16 EMOTION`,
          path: `/text/16_emotion/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/16_1_emotion`, `16.1 EMOTION`],
            [`text/16_2_mental_growth`, `16.2 MENTAL GROWTH`],
            [
              `text/16_3_mental_proto-specialists`,
              `16.3 MENTAL PROTO-SPECIALISTS`,
            ],
            [`text/16_4_cross-exclusion`, `16.4 CROSS-EXCLUSION`],
            [`text/16_5_avalanche_effects`, `16.5 AVALANCHE EFFECTS`],
            [`text/16_6_motivation`, `16.6 MOTIVATION`],
            [`text/16_7_exploitation`, `16.7 EXPLOITATION`],
            [`text/16_8_stimulus_vs_simulus`, `16.8 STIMULUS VS. SIMULUS`],
            [`text/16_9_infant_emotions`, `16.9 INFANT EMOTIONS`],
            [`text/16_10_adult_emotions`, `16.10 ADULT EMOTIONS`],
          ],
        },
        {
          title: `17 DEVELOPMENT`,
          path: `/text/17_development/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [
              `text/17_1_sequences_of_teaching-selves`,
              `17.1 SEQUENCES OF TEACHING-SELVES`,
            ],
            [`text/17_2_attachment-learning`, `17.2 ATTACHMENT-LEARNING`],
            [`text/17_3_attachment_simplifies`, `17.3 ATTACHMENT SIMPLIFIES`],
            [`text/17_4_functional_autonomy`, `17.4 FUNCTIONAL AUTONOMY`],
            [`text/17_5_developmental_stages`, `17.5 DEVELOPMENTAL STAGES`],
            [
              `text/17_6_prerequisites_for_growth`,
              `17.6 PREREQUISITES FOR GROWTH`,
            ],
            [`text/17_7_genetic_timetables`, `17.7 GENETIC TIMETABLES`],
            [`text/17_8_attachment-images`, `17.8 ATTACHMENT-IMAGES`],
            [
              `text/17_9_different_spans_of_memories`,
              `17.9 DIFFERENT SPANS OF MEMORIES`,
            ],
            [`text/17_10_intellectual_trauma`, `17.10 INTELLECTUAL TRAUMA`],
            [`text/17_11_intellectual_ideals`, `17.11 INTELLECTUAL IDEALS`],
          ],
        },
        {
          title: `18 REASONING`,
          path: `/text/18_reasoning/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [
              `text/18_1_must_machines_be_logical`,
              `18.1 MUST MACHINES BE LOGICAL`,
            ],
            [`text/18_2_chains_of_reasoning`, `18.2 CHAINS OF REASONING`],
            [`text/18_3_chaining`, `18.3 CHAINING`],
            [`text/18_4_logical_chains`, `18.4 LOGICAL CHAINS`],
            [`text/18_5_strong_arguments`, `18.5 STRONG ARGUMENTS`],
            [
              `text/18_6_magnitude_from_multitude`,
              `18.6 MAGNITUDE FROM MULTITUDE`,
            ],
            [`text/18_7_what_is_a_number`, `18.7 WHAT IS A NUMBER`],
            [`text/18_8_mathematics_made_hard`, `18.8 MATHEMATICS MADE HARD`],
            [
              `text/18_9_robustness_and_recovery`,
              `18.9 ROBUSTNESS AND RECOVERY`,
            ],
          ],
        },
        {
          title: `19 WORDS AND IDEAS`,
          path: `/text/19_words_and_ideas/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/19_1_the_roots_of_intention`, `19.1 THE ROOTS OF INTENTION`],
            [`text/19_2_the_language-agency`, `19.2 THE LANGUAGE-AGENCY`],
            [`text/19_3_words_and_ideas`, `19.3 WORDS AND IDEAS`],
            [`text/19_4_objects_and_properties`, `19.4 OBJECTS AND PROPERTIES`],
            [`text/19_5_polynemes`, `19.5 POLYNEMES`],
            [`text/19_6_recognizers`, `19.6 RECOGNIZERS`],
            [`text/19_7_weighing_evidence`, `19.7 WEIGHING EVIDENCE`],
            [`text/19_8_generalizing`, `19.8 GENERALIZING`],
            [`text/19_9_recognizing_thoughts`, `19.9 RECOGNIZING THOUGHTS`],
            [`text/19_10_closing_the_ring`, `19.10 CLOSING THE RING`],
          ],
        },
        {
          title: `20 CONTEXT AND AMBIGUITY`,
          path: `/text/20_context_and_ambiguity/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/20_1_ambiguity`, `20.1 AMBIGUITY`],
            [`text/20_2_negotiating_ambiguity`, `20.2 NEGOTIATING AMBIGUITY`],
            [`text/20_3_visual_ambiguity`, `20.3 VISUAL AMBIGUITY`],
            [
              `text/20_4_locking-in_and_weeding-out`,
              `20.4 LOCKING-IN AND WEEDING-OUT`,
            ],
            [`text/20_5_micronemes`, `20.5 MICRONEMES`],
            [`text/20_6_the_nemeic_spiral`, `20.6 THE NEMEIC SPIRAL`],
            [`text/20_7_connections`, `20.7 CONNECTIONS`],
            [`text/20_8_connection_lines`, `20.8 CONNECTION LINES`],
            [`text/20_9_distributed_memory`, `20.9 DISTRIBUTED MEMORY`],
          ],
        },
        {
          title: `21 TRANS-FRAMES`,
          path: `/text/21_trans-frames/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [
              `text/21_1_the_pronouns_of_the_mind`,
              `21.1 THE PRONOUNS OF THE MIND`,
            ],
            [`text/21_2_pronomes`, `21.2 PRONOMES`],
            [`text/21_3_trans-frames`, `21.3 TRANS-FRAMES`],
            [
              `text/21_4_communication_among_agents`,
              `21.4 COMMUNICATION AMONG AGENTS`,
            ],
            [`text/21_5_automatism`, `21.5 AUTOMATISM`],
            [`text/21_6_trans-frame_pronomes`, `21.6 TRANS-FRAME PRONOMES`],
            [
              `text/21_7_generalizing_with_pronomes`,
              `21.7 GENERALIZING WITH PRONOMES`,
            ],
            [`text/21_8_attention`, `21.8 ATTENTION`],
          ],
        },
        {
          title: `22 EXPRESSION`,
          path: `/text/22_expression/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/22_1_pronomes_and_polynemes`, `22.1 PRONOMES AND POLYNEMES`],
            [`text/22_2_isonomes`, `22.2 ISONOMES`],
            [`text/22_3_de-specializing`, `22.3 DE-SPECIALIZING`],
            [`text/22_4_learning_and_teaching`, `22.4 LEARNING AND TEACHING`],
            [`text/22_5_inference`, `22.5 INFERENCE`],
            [`text/22_6_expression`, `22.6 EXPRESSION`],
            [`text/22_7_causes_and_clauses`, `22.7 CAUSES AND CLAUSES`],
            [`text/22_8_interruptions`, `22.8 INTERRUPTIONS`],
            [
              `text/22_9_pronouns_and_references`,
              `22.9 PRONOUNS AND REFERENCES`,
            ],
            [`text/22_10_verbal_expression`, `22.10 VERBAL EXPRESSION`],
            [`text/22_11_creative_expression`, `22.11 CREATIVE EXPRESSION`],
            [`text/23_1_a_world_of_differences`, `23.1 A WORLD OF DIFFERENCES`],
            [
              `text/23_2_differences_and_duplicates`,
              `23.2 DIFFERENCES AND DUPLICATES`,
            ],
            [`text/23_3_time_blinking`, `23.3 TIME BLINKING`],
            [`text/23_4_the_meanings_of_more`, `23.4 THE MEANINGS OF MORE`],
            [`text/23_5_foreign_accents`, `23.5 FOREIGN ACCENTS`],
          ],
        },
        {
          title: `24 FRAMES`,
          path: `/text/24_frames/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/24_1_the_speed_of_thought`, `24.1 THE SPEED OF THOUGHT`],
            [`text/24_2_frames_of_mind`, `24.2 FRAMES OF MIND`],
            [`text/24_3_how_trans-frames_work`, `24.3 HOW TRANS-FRAMES WORK`],
            [`text/24_4_default_assumptions`, `24.4 DEFAULT ASSUMPTIONS`],
            [`text/24_5_nonverbal_reasoning`, `24.5 NONVERBAL REASONING`],
            [`text/24_6_direction-nemes`, `24.6 DIRECTION-NEMES`],
            [`text/24_7_picture-frames`, `24.7 PICTURE-FRAMES`],
            [
              `text/24_8_how_picture-frames_work`,
              `24.8 HOW PICTURE-FRAMES WORK`,
            ],
            [
              `text/24_9_recognizers_and_memorizers`,
              `24.9 RECOGNIZERS AND MEMORIZERS`,
            ],
          ],
        },
        {
          title: `25 FRAME ARRAYS`,
          path: `/text/25_frame_arrays/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/25_1_one_frame_at_a_time`, `25.1 ONE FRAME AT A TIME`],
            [`text/25_2_frame-arrays`, `25.2 FRAME-ARRAYS`],
            [`text/25_3_the_stationary_world`, `25.3 THE STATIONARY WORLD`],
            [
              `text/25_4_the_sense_of_continuity`,
              `25.4 THE SENSE OF CONTINUITY`,
            ],
            [`text/25_5_expectations`, `25.5 EXPECTATIONS`],
            [`text/25_6_the_frame_idea`, `25.6 THE FRAME IDEA`],
          ],
        },
        {
          title: `26 LANGUAGE-FRAMES`,
          path: `/text/26_language-frames/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/26_1_understanding_words`, `26.1 UNDERSTANDING WORDS`],
            [`text/26_2_understanding_stories`, `26.2 UNDERSTANDING STORIES`],
            [`text/26_3_sentence-frames`, `26.3 SENTENCE-FRAMES`],
            [`text/26_4_a_party-frame`, `26.4 A PARTY-FRAME`],
            [`text/26_5_story-frames`, `26.5 STORY-FRAMES`],
            [`text/26_6_sentence_and_nonsense`, `26.6 SENTENCE AND NONSENSE`],
            [`text/26_7_frames_for_nouns`, `26.7 FRAMES FOR NOUNS`],
            [`text/26_8_frames_for_verbs`, `26.8 FRAMES FOR VERBS`],
            [`text/26_9_language_and_vision`, `26.9 LANGUAGE AND VISION`],
            [`text/26_10_learning_language`, `26.10 LEARNING LANGUAGE`],
            [`text/26_11_grammar`, `26.11 GRAMMAR`],
            [`text/26_12_coherent_discourse`, `26.12 COHERENT DISCOURSE`],
            [`text/27_1_demons`, `27.1 DEMONS`],
            [`text/27_2_suppressors`, `27.2 SUPPRESSORS`],
            [`text/27_3_censors`, `27.3 CENSORS`],
            [`text/27_4_exceptions_to_logic`, `27.4 EXCEPTIONS TO LOGIC`],
            [`text/27_5_jokes`, `27.5 JOKES`],
            [`text/27_6_humor_and_censorship`, `27.6 HUMOR AND CENSORSHIP`],
            [`text/27_7_laughter`, `27.7 LAUGHTER`],
            [`text/27_8_good_humor`, `27.8 GOOD HUMOR`],
          ],
        },
        {
          title: `28 THE MIND AND THE WORLD`,
          path: `/text/28_the_mind_and_the_world/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [
              `text/28_1_the_myth_of_mental_energy`,
              `28.1 THE MYTH OF MENTAL ENERGY`,
            ],
            [
              `text/28_2_magnitude_and_marketplace`,
              `28.2 MAGNITUDE AND MARKETPLACE`,
            ],
            [`text/28_3_quantity_and_quality`, `28.3 QUANTITY AND QUALITY`],
            [`text/28_4_mind_over_matter`, `28.4 MIND OVER MATTER`],
            [`text/28_5_the_mind_and_the_world`, `28.5 THE MIND AND THE WORLD`],
            [`text/28_6_minds_and_machines`, `28.6 MINDS AND MACHINES`],
            [`text/28_7_individual_identities`, `28.7 INDIVIDUAL IDENTITIES`],
            [`text/28_8_overlapping_minds`, `28.8 OVERLAPPING MINDS`],
          ],
        },
        {
          title: `29 THE REALMS OF THOUGHT`,
          path: `/text/29_the_realms_of_thought/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/29_1_the_realms_of_thought`, `29.1 THE REALMS OF THOUGHT`],
            [
              `text/29_2_several_thoughts_at_once`,
              `29.2 SEVERAL THOUGHTS AT ONCE`,
            ],
            [`text/29_3_paranomes`, `29.3 PARANOMES`],
            [
              `text/29_4_cross-realm_correspondences`,
              `29.4 CROSS-REALM CORRESPONDENCES`,
            ],
            [`text/29_5_the_problem_of_unity`, `29.5 THE PROBLEM OF UNITY`],
            [`text/29_6_autistic_children`, `29.6 AUTISTIC CHILDREN`],
            [
              `text/29_7_likenesses_and_analogies`,
              `29.7 LIKENESSES AND ANALOGIES`,
            ],
            [`text/29_8_metaphors`, `29.8 METAPHORS`],
          ],
        },
        {
          title: `30 MENTAL MODELS`,
          path: `/text/30_mental_models/`,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            [`text/30_1_knowing`, `30.1 KNOWING`],
            [`text/30_2_knowing_and_believing`, `30.2 KNOWING AND BELIEVING`],
            [`text/30_3_mental_models`, `30.3 MENTAL MODELS`],
            [`text/30_4_world_models`, `30.4 WORLD MODELS`],
            [`text/30_5_knowing_ourselves`, `30.5 KNOWING OURSELVES`],
            [`text/30_6_freedom_of_will`, `30.6 FREEDOM OF WILL`],
            [
              `text/30_7_the_myth_of_the_third_alternative`,
              `30.7 THE MYTH OF THE THIRD ALTERNATIVE`,
            ],
            [
              `text/30_8_intelligence_and_resourcefulness`,
              `30.8 INTELLIGENCE AND RESOURCEFULNESS`,
            ],
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
}
