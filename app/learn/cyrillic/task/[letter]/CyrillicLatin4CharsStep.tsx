import CyrillicLatin from "../../steps/CyrillicLatin";
import { letters } from "@/app/@lib/letters";
import CyrillicLatin4Chars from "../../steps/CyrillicLatin4Chars";
export default function CyrillicLatin4CharsStep({
  params,
}: {
  params: { letter: string };
}) {
  // Decode the URI component
  const cyrillicLetter = decodeURIComponent(params.letter);

  // Find the corresponding entry in the letters array
  const letterEntry = letters.find(
    (entry) => entry.cyrillic === cyrillicLetter
  );

  // If the letter entry is not found, handle it accordingly
  if (!letterEntry) {
    return <div>Letter not found</div>;
  }
  // Get three random indices for incorrect options
  const randomIndices = getRandomIndices(letters.length, 3);

  // Generate options array with three random incorrect letters and one correct letter
  const options = [
    { text: letterEntry.cyrillic, isCorrect: true },
    { text: letters[randomIndices[0]].cyrillic, isCorrect: false },
    { text: letters[randomIndices[1]].cyrillic, isCorrect: false },
    { text: letters[randomIndices[2]].cyrillic, isCorrect: false },
  ];

  const shuffledOptions = shuffleArray(options);

  return (
    <div>
      <CyrillicLatin4Chars
        latinLetter={letterEntry.latin}
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
