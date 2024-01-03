export const Templates = [
  {
    template: "Markdown",
    title: "Markdown Blog Post",
    description: "A normal blog post page where you can explain a concept first before the user starts doing tasks.",
    props: {
      markdown: ``
    },
  },
  {
    template: "TranslateSentence",
    title: "Multiple Choice",
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
    title: "Image Selection",
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
