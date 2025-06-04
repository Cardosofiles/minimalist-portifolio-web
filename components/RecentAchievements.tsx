import { FeaturesSectionHover } from './ui/FeatureSectionHover'

const RecentAchievements = () => {
  return (
    <div className="w-full pb-40 pt-36">
      <h1 className="heading" id="knowledge">
        <span className="text-white">Minha</span>{' '}
        <span className="bg-gradient-to-r from-blue-600 to-purple bg-clip-text text-transparent">
          Biografia Dev
        </span>
      </h1>
      <div className="mt-12">
        <FeaturesSectionHover />
      </div>
    </div>
  )
}

export default RecentAchievements
