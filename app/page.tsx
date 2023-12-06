import CyrillicLatin from "./learn/cyrillic/steps/CyrillicLatin";
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
      <HomePage />
    </div>
  );
}
