export const Templates = [
  {
    template: "TranslateSentence",
    title: "Multiple choice",
    description: "A string translated, with several options.",
    props: {
      title: "",
      options: [{ string: "", isCorrect: false }],
    },
  },
  {
    template: "TextCompletion",
    title: "Text Completion",
    description: "Write out a string.",
    props: {
      title: "",
      titleTranslated: "",
    },
  },
  {
    template: "ImageSelect",
    title: "Image selection",
    description: "A string, with several image options.",
    props: {
      title: "",
      options: [{ string: "", isCorrect: false }],
    },
  },
  {
    template: "GuessCyrillicLetter",
    title: "Letter Guesser 1",
    description: "A cyrillic letter, with several options.",
    props: {
      title: "",
      options: [{ string: "", isCorrect: false }],
    },
  },
  {
    template: "GuessLatinLetter",
    title: "Letter Guesser 2",
    description: "A latin letter, with several options.",
    props: {
      title: "",
      options: [{ string: "", isCorrect: false }],
    },
  },
];
