export const Templates = [
  {
    template: "TranslateSentence.tsx",
    title: "Multiple choice",
    description: "A string translated, with several options.",
    props: {
      title: "",
      options: [{ string: "", isCorrect: false }],
    },
  },
  {
    template: "TextCompletionStep.tsx",
    title: "Text Completion",
    description: "Write out a string.",
    props: {
      title: "",
      titleTranslated: "",
    },
  },
  {
    template: "ImageSelectStep.tsx",
    title: "Image selection",
    description: "A string, with several image options.",
    props: {
      title: "",
      options: [{ string: "", isCorrect: false }],
    },
  },
  {
    template: "GuessCyrillicLetterStep.tsx",
    title: "Letter Guesser 1",
    description: "A cyrillic letter, with several options.",
    props: {
      title: "",
      options: [{ string: "", isCorrect: false }],
    },
  },
  {
    template: "GuessLatinLetterStep.tsx",
    title: "Letter Guesser 2",
    description: "A latin letter, with several options.",
    props: {
      title: "",
      options: [{ string: "", isCorrect: false }],
    },
  },
];
