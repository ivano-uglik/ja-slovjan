// our current stepComponents available:
// TranslateSentence.tsx, title: string; options: { option: string; isCorrect: boolean }[];. title is for the title of what sentence to translate, and options are the available options, of which one is correct.
// TextCompletion, title: string; titleTranslated: string;, this is to translate a word/sentence, titleTranslated is a form's input's correct answer
// ImageSelect, word: string; options: { imageURL: string; isCorrect: boolean }[];, guess what image corresponds to the word in the foreign language, and click on the correct one
// GuessCyrillicLetter, cyrillicLetter: string; options: { text: string; isCorrect: boolean }[];, guess a cyrillic letter in latin
// GuessLatinLetter, latinLetter: string; options: { text: string; isCorrect: boolean }[];, guess a latin letter in cyrillic
export const Groups = [
  {
    group: "Pozdravi",
    levels: [
      {
        level: 1,
        isCompleted: false,
        steps: [
          {
            step: 1,
            stepComponent: "TranslateSentenceStep.tsx",
            inputComponent: "TranslateSentenceInput.tsx",
            params: {
              title: "Привет",
              options: [
                { text: "Hello", isCorrect: true },
                { text: "Goodbye", isCorrect: false },
                { text: "Thank you", isCorrect: false },
              ],
            },
          },
          {
            step: 2,
            stepComponent: "TextCompletionStep.tsx",
            inputComponent: "TextCompletionInput.tsx",
            params: {
              title: "Доброе утро.",
              titleTranslated: "Good morning.",
            },
          },
        ],
      },
      {
        level: 2,
        isCompleted: false,
        steps: [
          {
            step: 2,
            stepComponent: "TranslateSentenceStep.tsx",
            inputComponent: "TranslateSentenceInput.tsx",
            params: {
              title: "Спасибо",
              options: [
                { text: "Goodbye", isCorrect: false },
                { text: "Thank you", isCorrect: true },
                { text: "Excuse me", isCorrect: false },
              ],
            },
          },
        ],
      },
      {
        level: 3,
        isCompleted: false,
        steps: [
          {
            step: 2,
            stepComponent: "TextCompletionStep.tsx",
            inputComponent: "TextCompletionInput.tsx",
            params: {
              title: "Живем",
              titleTranslated: "Living",
            },
          },
        ],
      },
    ],
  },
];

// /dashboard > Group > Level > step > step
// Groups[0].levels[0].steps[0].stepComponent
