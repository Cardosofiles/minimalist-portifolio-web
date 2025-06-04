import Certificates from '@/components/Certificates'
import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import Knowledge from '@/components/Knowledge'
import Languages from '@/components/Languages'
import RecentAchievements from '@/components/RecentAchievements'
import { RecentProjects } from '@/components/RecentProjects'
import { CardsCarouselRepositories } from '@/components/ui/CardCarouselRepository'
import { FloatingNav } from '@/components/ui/FloatingNav'
import { navItems } from '@/data'

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Knowledge />
        <Certificates />
        <Languages />
        <RecentAchievements />
        <CardsCarouselRepositories />
        <Footer />
      </div>
    </main>
  )
}
