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
              title: "Slovjan",
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
              title: "Slovjan",
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
              title: "Slovjan",
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
              title: "Slovjan",
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
              title: "Slovjan",
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
              title: "Slovjan",
              titleTranslated: "Slaven",
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
              title: "Priklad",
              titleTranslated: "Primjer",
            },
          },
          {
            step: 2,
            component: "TextCompletion",
            params: {
              title: "Rok",
              titleTranslated: "Godina",
            },
          },
          {
            step: 3,
            component: "TextCompletion",
            params: {
              title: "Slovo",
              titleTranslated: "Riječ",
            },
          },
          {
            step: 4,
            component: "TextCompletion",
            params: {
              title: "Ktory",
              titleTranslated: "Koji",
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
