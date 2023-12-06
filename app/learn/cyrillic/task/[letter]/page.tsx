import CyrillicLatin from "../../steps/CyrillicLatin";

export default function Page({ params }: { params: { letter: string } }) {
  return (
    <div>
      <CyrillicLatin
        cyrillicLetter={decodeURIComponent(params.letter)}
        options={[
          { text: "TBD", isCorrect: true },
          { text: "TBD", isCorrect: false },
          { text: "TBD", isCorrect: false },
          { text: "TBD", isCorrect: false },
        ]}
      />
    </div>
  );
}
