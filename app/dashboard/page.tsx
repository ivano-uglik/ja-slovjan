import HomePage from "../sections/HomePage";

export default function Home() {
  return (
    <div>
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
