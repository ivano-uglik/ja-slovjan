import LanguageSelect from "../sections/LanguageSelect";
import WelcomeScreen from "../sections/WelcomeScreen";
import WhyAreYouLearning from "../sections/WhyAreYouLearning";
import HowWellDoYouKnow from "../sections/HowWellDoYouKnow";
import HowMuchTimeToSpend from "../sections/HowMuchTimeToSpend";
import SetStreakGoal from "../sections/SetStreakGoal";

export default function Page() {
  return (
    <div className="flex flex-col gap-64">
      <LanguageSelect />
      <WelcomeScreen />
      <WhyAreYouLearning />
      <HowWellDoYouKnow />
      <HowMuchTimeToSpend />
      <SetStreakGoal />
    </div>
  );
}
