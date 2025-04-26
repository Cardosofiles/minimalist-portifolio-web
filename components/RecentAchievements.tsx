import { FeaturesSectionHover } from "./ui/FeatureSectionHover";

const RecentAchievements = () => {
  return (
    <div className="pt-36 pb-40 w-full">
      <h1 className="heading" id="knowledge">
        <span className="text-white">Minha</span>{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple bg-clip-text text-transparent">
          Biografia Dev
        </span>
      </h1>
      <div className="mt-12">
        <FeaturesSectionHover />
      </div>
    </div>
  );
};

export default RecentAchievements;
