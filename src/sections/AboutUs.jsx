import Breadcrump from '../components/Breadcrump.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Button from '../components/Button.jsx';
import FeaturesCard from '../components/FeaturesCard.jsx';
import InfoCard from '../components/InfoCard.jsx';
import { featuresCard, infoCard } from '../data/aboutUsData.js';

const AboutUs = () => {
  return (
    <section>
      <Breadcrump>Despre noi</Breadcrump>

      <SectionHeader
        title="Cine suntem noi și ce ne propunem?"
        subtitle="Suntem o companie nouă, dedicată simplificării procesului de învățare în domeniul asigurărilor. Ne concentrăm pe eficiență, claritate și accesibilitate, prin 3 metode cheie:"
      />

      <div className="mt-14 mb-8 grid grid-cols-1 gap-4 px-4 sm:mb-12 sm:grid-cols-2 sm:gap-6 md:px-6 lg:mb-16 lg:grid-cols-3 lg:gap-10 lg:px-8">
        {featuresCard.map((card, index) => (
          <FeaturesCard key={index} {...card} />
        ))}
      </div>

      <div className="relative mt-14 mb-8 flex h-full w-full flex-col items-center justify-between gap-10 bg-slate-100 py-12 sm:mb-12 md:pl-6 lg:mb-16 lg:flex-row lg:pl-8">
        {infoCard.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}

        <div className="absolute right-8 -bottom-4">
          <Button variant="secondary" link="/certifications" className="flex items-center gap-4">
            Vezi Aprobarea ISF
            <ArrowLongRightIcon className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
