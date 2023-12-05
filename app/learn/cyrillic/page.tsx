export default function Cyrillic() {
  const letters: {
    cyrillic: string;
    latin: string;
    isLearned: boolean;
    level: number;
  }[] = [
    { cyrillic: "Аа", latin: "Aa", isLearned: true, level: 1 },
    { cyrillic: "Бб", latin: "Bb", isLearned: true, level: 2 }, // Resembles Latin "B" but sounds like "V"
    { cyrillic: "Вв", latin: "Vv", isLearned: false, level: 5 }, // Resembles Latin "B" but sounds like "V"
    { cyrillic: "Гг", latin: "Gg", isLearned: false, level: 3 },
    { cyrillic: "Дд", latin: "Dd", isLearned: false, level: 3 },
    { cyrillic: "Ее", latin: "Ee", isLearned: true, level: 1 },
    { cyrillic: "Ёё", latin: "Yo", isLearned: false, level: 4 }, // Extra character in Russian, similar to "Ee"
    { cyrillic: "Жж", latin: "Zh", isLearned: true, level: 4 }, // Unique character in Russian
    { cyrillic: "Зз", latin: "Zz", isLearned: false, level: 2 },
    { cyrillic: "Ии", latin: "Ii", isLearned: true, level: 3 },
    { cyrillic: "Йй", latin: "Yi", isLearned: false, level: 3 }, // Similar to "N" but with a different sound
    { cyrillic: "Кк", latin: "Kk", isLearned: true, level: 1 },
    { cyrillic: "Лл", latin: "Ll", isLearned: false, level: 2 },
    { cyrillic: "Мм", latin: "Mm", isLearned: false, level: 1 },
    { cyrillic: "Нн", latin: "Nn", isLearned: true, level: 5 },
    { cyrillic: "Оо", latin: "Oo", isLearned: true, level: 1 },
    { cyrillic: "Пп", latin: "Pp", isLearned: true, level: 2 },
    { cyrillic: "Рр", latin: "Rr", isLearned: false, level: 5 },
    { cyrillic: "Сс", latin: "Ss", isLearned: false, level: 5 },
    { cyrillic: "Тт", latin: "Tt", isLearned: true, level: 1 },
    { cyrillic: "Уу", latin: "Uu", isLearned: false, level: 5 },
    { cyrillic: "Фф", latin: "Ff", isLearned: false, level: 3 }, // Uncommon in Latin script
    { cyrillic: "Хх", latin: "Kh", isLearned: true, level: 5 }, // Similar to "X" but with a different sound
    { cyrillic: "Цц", latin: "Ts", isLearned: true, level: 4 }, // Unique character in Russian
    { cyrillic: "Чч", latin: "Ch", isLearned: false, level: 4 }, // Unique character in Russian
    { cyrillic: "Шш", latin: "Sh", isLearned: true, level: 4 }, // Unique character in Russian
    { cyrillic: "Щщ", latin: "Shch", isLearned: true, level: 4 }, // Unique character in Russian
    { cyrillic: "Ъъ", latin: "Hard sign", isLearned: true, level: 5 }, // Extra character in Russian
    { cyrillic: "Ыы", latin: "Y", isLearned: false, level: 5 }, // Unique character in Russian
    { cyrillic: "Ьь", latin: "Soft sign", isLearned: false, level: 5 }, // Extra character in Russian
    { cyrillic: "Ээ", latin: "E", isLearned: false, level: 4 }, // Uncommon in Latin script
    { cyrillic: "Юю", latin: "Yu", isLearned: true, level: 4 }, // Unique character in Russian
    { cyrillic: "Яя", latin: "Ya", isLearned: false, level: 4 }, // Unique character in Russian
  ];

  // Get unique levels from the letters array
  const uniqueLevels = Array.from(
    new Set(letters.map((letter) => letter.level))
  ).sort((a, b) => a - b);

  return (
    <div>
      <div className="text-center content-wrap mx-auto">
        <h2 className="font-bold text-5xl pb-4">Kirilica</h2>
        <h3 className="pb-4">
          O 250 miliona ljudi koristajut kirilsko pismo. Spoznaj se so Kirilovom
          azbukoju tutdenj!
        </h3>
        <button className="btn btn-lg btn-secondary btn-wide mt-8">
          Започни!
        </button>
        <div className="py-16 flex flex-col gap-8">
          {uniqueLevels.map((level) => (
            <div key={level}>
              <h3 className="pb-8 text-3xl font-black">Level {level}</h3>
              <div className="flex gap-8 justify-center flex-wrap">
                {letters.map((letter, index: number) => {
                  if (letter.level === level) {
                    return (
                      <div
                        key={index}
                        className={`flex flex-col px-10 py-4 rounded-2xl border gap-2 cursor-pointer ${
                          letter.isLearned
                            ? "bg-slate-50 opacity-75 hover:opacity-50"
                            : "hover:opacity-75 shadow-md hover:shadow-lg transition-shadow duration-100 ease-out"
                        }`}
                      >
                        <p className="text-3xl font-semibold">
                          {letter.cyrillic}
                        </p>
                        <p>{letter.latin}</p>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
