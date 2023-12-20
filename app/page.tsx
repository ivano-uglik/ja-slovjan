import CyrillicLatin from "./learn/steps/cyrillic/CyrillicLatin";
import HomePage from "./sections/HomePage";
import Sidebar from "./sections/Layout";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      {/* <CyrillicLatin
        cyrillicLetter="Я"
        options={[
          { text: "Ya", isCorrect: true },
          { text: "Ye", isCorrect: false },
          { text: "Rr", isCorrect: false },
          { text: "Zh", isCorrect: false },
        ]}
      /> */}
      <HomePage
        levels={[
          { name: "Pozdravi", stages: 3, completedStages: 3 },
          {
            name: "Osnovna rěčenja",
            stages: 5,
            completedStages: 4,
          },
          { name: "Putovanje", stages: 4, completedStages: 0 },
          { name: "Hobi & Interesy", stages: 6, completedStages: 0 },
          { name: "Padeže", stages: 13, completedStages: 0 },
          { name: "Kulturny Pogledy", stages: 7, completedStages: 0 },
        ]}
      />
    </div>
  );
}
