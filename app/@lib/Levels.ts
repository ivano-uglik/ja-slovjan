// our current components available:
// TranslateSentence.tsx, title: string; options: { option: string; isCorrect: boolean }[];. title is for the title of what sentence to translate, and options are the available options, of which one is correct.
// TextCompletionStep.tsx, title: string; titleTranslated: string;, this is to translate a word/sentence, titleTranslated is a form's input's correct answer
// ImageSelectStep.tsx, word: string; options: { imageURL: string; isCorrect: boolean }[];, guess what image corresponds to the word in the foreign language, and click on the correct one
// GuessCyrillicLetterStep.tsx, cyrillicLetter: string; options: { text: string; isCorrect: boolean }[];, guess a cyrillic letter in latin
// GuessLatinLetterStep.tsx, latinLetter: string; options: { text: string; isCorrect: boolean }[];, guess a latin letter in cyrillic

// THIS FILE IS USED FOR PROP TEMPLATES FOR APP DEVELOPMENT ( so that we can develop on the front-end with dummy data without needing data from our DB)

export const Groups = [
  {
    group:
      "Čto jest Medžuslovjansky? - sličnosti i razlike u slavenskim jezicima",
    id: "ij94b",
    levels: [
      {
        level: 1,
        isCompleted: true,
        steps: [
          {
            step: 1,
            component: "TextCompletion",
            params: {
              title: "_Slovjan_",
              titleTranslated: "Slaven",
            },
          },
        ],
      },
      {
        level: 2,
        isCompleted: true,
        steps: [
          {
            step: 1,
            component: "TextCompletion",
            params: {
              title: "_Slovjan_",
              titleTranslated: "Slaven",
            },
          },
        ],
      },
      {
        level: 3,
        isCompleted: false,
        steps: [
          {
            step: 1,
            component: "TextCompletion",
            params: {
              title: "_Slovjan_",
              titleTranslated: "Slaven",
            },
          },
        ],
      },
    ],
  },
  {
    group: "Razlike u osnovnom vokabularu i gramatici",
    id: "WsDSUygGm",
    levels: [
      {
        level: 1,
        isCompleted: true,
        steps: [
          {
            step: 1,
            component: "TextCompletion",
            params: {
              title: "_Slovjan_",
              titleTranslated: "Slaven",
            },
          },
        ],
      },
      {
        level: 2,
        isCompleted: true,
        steps: [
          {
            step: 1,
            component: "TextCompletion",
            params: {
              title: "_Slovjan_",
              titleTranslated: "Slaven",
            },
          },
        ],
      },
      {
        level: 3,
        isCompleted: false,
        steps: [
          {
            step: 1,
            component: "Markdown",
            params: {
              markdown: `# Full-Screen Markdown Sample\n\n ## Introduction\n \n This is a sample Markdown text intended to demonstrate the rendering capabilities of a Markdown component. It contains various Markdown elements such as headings, lists, links, images, and more.\n \n ## Features\n \n - Headings: There are multiple levels of headings to demonstrate hierarchy.\n - Subheadings: Nested headings to show structure.\n \n - Lists: Both unordered and ordered lists are used.\n - Unordered List:\n - Item 1\n - Item 2\n - Ordered List:\n 1. First item\n 2. Second item\n \n - Links: Hyperlinks to external sites and anchors within the document.\n - OpenAI\n - Jump to Introduction\n \n - Images: Displaying images within the Markdown content.\nSample Image\n \n - Blockquotes: Quotations and citations.\n > "To be or not to be, that is the question." - Shakespeare\n \n ## Conclusion\n \n This Markdown sample provides a comprehensive overview of various Markdown elements. It can be used to test the rendering and styling of a Markdown component in different environments and applications.\n \n`,
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
        isCompleted: true,
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
            component: "ImageSelect",
            params: {
              word: "Časovnik",
              options: [
                {
                  imageURL:
                    "https://www.american-time.com/wp-content/uploads/2021/02/04-15in-Black-Steel-Round-Surface-Mount.jpg",
                  isCorrect: true,
                },
                {
                  imageURL:
                    "https://ca.frankandoak.com/cdn/shop/files/2120225-017_800x.jpg?v=1692209329",
                  isCorrect: false,
                },
                {
                  imageURL:
                    "https://sothebys-com.brightspotcdn.com/16/16/9f6768884e9784a63b4fde461c3c/ancien-sculpture-006l19260-b45nz-a-unique556.jpg",
                  isCorrect: false,
                },
              ],
            },
          },
          {
            step: 3,
            component: "MarkdownText",
            params: {
              text: "",
            },
          },
        ],
      },
    ],
  },
];

// /dashboard > Group > Level > step > step
// Groups[0].levels[0].steps[0].component
