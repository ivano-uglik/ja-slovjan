import CyrillicLatin from "../../../steps/cyrillic/CyrillicLatin";
import { letters } from "@/app/@lib/letters";
export default function CyrillicLatinStep({
  params,
}: {
  params: { letter: number };
}) {
  // Find the corresponding entry in the letters array
  const letterEntry = letters.find(
    (entry) => entry.id === Number(decodeURIComponent(params.letter.toString()))
  );

  // If the letter entry is not found, handle it accordingly
  if (!letterEntry) {
    return <div>Letter not found</div>;
  }

  // Get three random indices for incorrect options
  const randomIndices = getRandomIndices(letters.length, 3);

  // Generate options array with three random incorrect letters and one correct letter
  const options = [
    { text: letterEntry.latin, isCorrect: true },
    { text: letters[randomIndices[0]].latin, isCorrect: false },
    { text: letters[randomIndices[1]].latin, isCorrect: false },
    { text: letters[randomIndices[2]].latin, isCorrect: false },
  ];

  const shuffledOptions = shuffleArray(options);

  return (
    <div>
      <CyrillicLatin
        cyrillicLetter={letterEntry.cyrillic}
        options={shuffledOptions}
      />
    </div>
  );
}

// Function to generate an array of random indices
function getRandomIndices(max: number, count: number): number[] {
  const indices: number[] = [];
  while (indices.length < count) {
    const randomIndex = Math.floor(Math.random() * max);
    if (!indices.includes(randomIndex)) {
      indices.push(randomIndex);
    }
  }
  return indices;
}

// Function to shuffle an array randomly
function shuffleArray(array: any[]): any[] {
  const shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
