// our current components available:
// TranslateSentence.tsx, title: string; options: { option: string; isCorrect: boolean }[];. title is for the title of what sentence to translate, and options are the available options, of which one is correct.
// TextCompletionStep.tsx, title: string; titleTranslated: string;, this is to translate a word/sentence, titleTranslated is a form's input's correct answer
// ImageSelectStep.tsx, word: string; options: { imageURL: string; isCorrect: boolean }[];, guess what image corresponds to the word in the foreign language, and click on the correct one
// GuessCyrillicLetterStep.tsx, cyrillicLetter: string; options: { text: string; isCorrect: boolean }[];, guess a cyrillic letter in latin
// GuessLatinLetterStep.tsx, latinLetter: string; options: { text: string; isCorrect: boolean }[];, guess a latin letter in cyrillic

// THIS FILE IS USED FOR PROP TEMPLATES FOR APP DEVELOPMENT ( so that we can develop on the front-end with dummy data without needing data from our DB)

export const Groups = [
  {
    group: "Rěčenja na medžuslovjanskomu",
    id: "ij94b",
    levels: [
      {
        level: 1,
        isCompleted: false,
        steps: [
          {
            step: 1,
            component: "TextCompletion",
            params: {
              title:
                "Vsi ljudi sut _rodženi_ svobodni i rovni v svojih dostojenstvu i pravah.",
              titleTranslated:
                "Svi ljudi su rođeni slobodni i jednaki u dostojanstvu i pravima.",
            },
          },
          {
            step: 2,
            component: "TextCompletion",
            params: {
              title:
                "Turisti _posětet_ Niderlandiju, že by _fotografovali_ tulipany.",
              titleTranslated:
                "Turisti posjećuju Nizozemsku, da bi fotografirali tulipane.",
            },
          },
          {
            step: 3,
            component: "TextCompletion",
            params: {
              title: "Ona _prinosi_ jablka, da by _děti_ byli zdrave.",
              titleTranslated: "Ona donosi jabuke, da bi djeca bila zdrava.",
            },
          },
          {
            step: 4,
            component: "TextCompletion",
            params: {
              title: "Koja žena _ljubi_ togo muža?",
              titleTranslated: "Koja žena voli tog muškarca?",
            },
          },
          {
            step: 5,
            component: "TextCompletion",
            params: {
              title: "Koju knigu _kupil_ otec?",
              titleTranslated: "Koju je knjigu kupio otac?",
            },
          },
          {
            step: 6,
            component: "TextCompletion",
            params: {
              title: "_Kde_ jest tvoj pes?",
              titleTranslated: "Gdje je tvoj pas?",
            },
          },
          {
            step: 7,
            component: "TextCompletion",
            params: {
              title: "To je _mně_ žalostno.",
              titleTranslated: "To mi je žalosno.",
            },
          },
          {
            step: 8,
            component: "TextCompletion",
            params: {
              title:
                "Vymysljenje jest _najlučši_ put prědpovědanja budučnosti.",
              titleTranslated:
                "Izmišljanje je najbolji put predviđanja budućnosti.",
            },
          },
        ],
      },
    ],
  },
  {
    group: "Zadatci - vokabular",
    id: "LcuDkkyaNiVHrb",
    levels: [
      {
        level: 1,
        isCompleted: false,
        steps: [
          {
            step: 1,
            component: "TextCompletion",
            params: {
              title:
                "Mudri ljudi _znajut_ , že ne _znajut_ . Drugi ljudi ne _znajut_ , že ne _znajut_ .",
              titleTranslated:
                "Mudri ljudi znaju da ne znaju. Drugi ljudi ne znaju da ne znaju.",
            },
          },
          {
            step: 2,
            component: "TextCompletion",
            params: {
              title: "Slovenci _praznujejo_ nacionalne praznike.",
              titleTranslated: "Slovenci slave nacionalne praznike.",
            },
          },
          {
            step: 3,
            component: "ImageSelect",
            params: {
              word: "Konserva",
              options: [
                {
                  imageURL:
                    "https://d248k8q1c80cf8.cloudfront.net/WK_Seito_0017_tif_584372fb43.jpg",
                  isCorrect: false,
                },
                {
                  imageURL:
                    "https://www.vivita.hr/wp-content/uploads/2017/03/coca-cola-330ml.jpg",
                  isCorrect: true,
                },
                {
                  imageURL:
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/451b4531-1090-4044-ad0f-fa9e2b6cd902/streakfly-road-racing-shoes-wWhMKs.png",
                  isCorrect: false,
                },
              ],
            },
          },
          {
            step: 4,
            component: "TextCompletion",
            params: {
              title: "Poljaki _igrajo_ tradicionalne ljudske igre.",
              titleTranslated: "Poljaci igraju tradicionalne narodne igre.",
            },
          },
          {
            step: 5,
            component: "TextCompletion",
            params: {
              title: "Hrvati _uživajo_ v morskim dobrotama.",
              titleTranslated: "Hrvati uživaju u morskim specijalitetima.",
            },
          },
          {
            step: 6,
            component: "TextCompletion",
            params: {
              title: "Bosanci _potujejo_ po prelepem gorovju.",
              titleTranslated: "Bosanci putuju po prekrasnim planinama.",
            },
          },
          {
            step: 7,
            component: "TextCompletion",
            params: {
              title: "Srbi _slavijo_ tradicionalne poroke.",
              titleTranslated: "Srbi slave tradicionalne svadbe.",
            },
          },
        ],
      },
      {
        level: 2,
        isCompleted: false,
        steps: [
          {
            step: 1,
            component: "ImageSelect",
            params: {
              word: "Konserva",
              options: [
                {
                  imageURL:
                    "https://d248k8q1c80cf8.cloudfront.net/WK_Seito_0017_tif_584372fb43.jpg",
                  isCorrect: false,
                },
                {
                  imageURL:
                    "https://www.vivita.hr/wp-content/uploads/2017/03/coca-cola-330ml.jpg",
                  isCorrect: true,
                },
                {
                  imageURL:
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/451b4531-1090-4044-ad0f-fa9e2b6cd902/streakfly-road-racing-shoes-wWhMKs.png",
                  isCorrect: false,
                },
              ],
            },
          },
          {
            step: 2,
            component: "Markdown",
            params: {
              markdown:
                "# Unlocking Cultural Connections: Learning Interslavic\n\n**Author:** LanguageEnthusiast\n\n**Date:** 2024-01-31\n\n**Tags:** Language Learning, Slavic Languages, Interslavic\n\n## Introduction\n\nInterslavic: A Bridge Between Slavic Cultures\n\nInterslavic is a language used by Slavs of different nationalities for communication among themselves. This unique linguistic phenomenon is rooted in the cohesive nature of the Slavic languages, where knowledge of one often provides a basic understanding of others. Over centuries, Slavs have developed improvised language forms to communicate with their neighbors, leading to the evolution of Interslavic.\n\n![Map of Slavic Languages](https://upload.wikimedia.org/wikipedia/commons/e/e6/Slavic_languages_map_en.svg)\n\n## Why Learn Interslavic?\n\n### 1. **Cultural Connectivity**\n\nLearning Interslavic opens doors to rich cultural exchanges among Slavic communities. It enables you to connect with people from various Slavic backgrounds and appreciate the nuances of their languages.\n\n![Diverse Slavic Cultures](https://i.pinimg.com/736x/44/7e/e3/447ee3325d671083f9d5a14afd35f3db.jpg)\n\n### 2. **Linguistic Coherence**\n\nThe inherent coherence within the Slavic language family makes Interslavic an accessible choice. Proficiency in one Slavic language often acts as a foundation for understanding others, facilitating smoother communication.\n\n## Getting Started with Interslavic\n\n### 1. **Building on Slavic Roots**\n\nIf you already know a Slavic language, you have a head start. Focus on common vocabulary, grammar, and sentence structures shared among Slavic languages.\n\n![Common Slavic Vocabulary](https://i.redd.it/roy5xzulvtna1.png)\n\n### 2. **Language Exchange Platforms**\n\nParticipate in language exchange platforms to practice Interslavic with native speakers. This real-world interaction enhances your conversational skills and cultural understanding.\n\n## Challenges and Rewards\n\n### Challenges\n- *Dialectal Differences:* Be aware of regional variations within Interslavic.\n- *Limited Learning Resources:* Given its unique nature, finding comprehensive resources may be challenging.\n\n### Rewards\n- *Cultural Proficiency:* Unlock a deeper appreciation for Slavic cultures.\n- *Linguistic Versatility:* Enhance your ability to navigate various Slavic languages.\n\n![Language Learning Rewards](https://example.com/language_learning_rewards.jpg)\n\n## Conclusion\n\nEmbracing the challenge of learning Interslavic is a rewarding journey that goes beyond language acquisition. It's a key to unraveling the rich tapestry of Slavic cultures and fostering meaningful connections among Slavic communities.\n\nStart your Interslavic adventure today and witness the linguistic and cultural bridges it can build!",
            },
          },
          {
            step: 3,
            component: "TranslateSentence",
            params: {
              title: "Dziś jest piękny słoneczny dzień.",
              options: [
                { text: "Today is a beautiful sunny day.", isCorrect: true },
                { text: "Today is a beautiful sunny night.", isCorrect: false },
                {
                  text: "Yesterday was a beautiful sunny night.",
                  isCorrect: false,
                },
                { text: "Today is a beautiful rainy day.", isCorrect: false },
              ],
            },
          },
          {
            step: 4,
            component: "TextCompletion",
            params: {
              title:
                "Turisti _sut_ v Niderlandijy, že by _fotografovali_ tulipany.",
              titleTranslated:
                "Turisti su u Nizozemskoj, da bi fotografirali tulipane.",
            },
          },
          {
            step: 5,
            component: "GuessCyrillicLetter",
            params: {
              title: "Ya",
              options: [
                { string: "correct", isCorrect: true },
                { string: "false", isCorrect: false },
              ],
            },
          },
          {
            step: 6,
            component: "GuessLatinLetter",
            params: {
              title: "Ja",
              options: [
                { string: "correct", isCorrect: true },
                { string: "false", isCorrect: false },
              ],
            },
          },
        ],
      },
    ],
  },
];

// /dashboard > Group > Level > step > step
// Groups[0].levels[0].steps[0].component
