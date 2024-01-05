// # Čto jest Medžuslovjansky?

// Medžuslovjansky (međuslavenski) je jezik koji Slaveni raznih naroda koriste da bi komunicirali jedni s drugima. To je moguće zato što su slavenski jezici povezana i srodna grupa. Znanje jednog slavenskog jezika je obično dovoljno da bi se imalo približno razumijevanje o čemu je tekst na nekom drugom slavenskom jeziku.
// Ovo je prijevod ovoga teksta na međuslavenski jezik:
// <InterslavicText>
// Medžuslovjansky jest jezyk, ktory Slovjani raznyh narodnostij koristajut, da by komunikovali jedin s drugym. To jest možno, ibo slovjanske jezyky sut shodna i srodna grupa. Znanje jednogo jezyka obyčno jest dostatočno, da by imělo se priblizno razuměnje o čem jest tekst na kojem-nebud drugom slovjanskom jezyku.
// <InterslavicText'/>

// Primjetimo par stvari:
// 1. Međuslavenski može biti pisan na latinici i na ćirilici. Koristeći Ja, Slovjan moguće je naučiti koristiti međuslavenski na oba pisma.
// 2. Razumljivost - kao što mi na hrvatskom jeziku možemo razumijeti ovaj tekst, tako i Rus, Poljak, Čes, Bugarin itd. mogu razumijeti isti tekst, sa par nedostataka
// 3. Podebljane riječi - ovo su riječi koje govornik hrvatskog jezika ne bi mogao razumijeti u ovom tekstu. Ja, Slovjan se fokusira na ovakve, rijetke riječi kako bi korisnika naučio međuslavenski.

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
    template: "MarkdownText",
    title: "Text",
    description: "Text-based template, written in Markdown",
    props: {
      text: "",
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
