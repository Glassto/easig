import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Breadcrump from '../components/Breadcrump.jsx';
import CoursesCard from '../components/coursesCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { coursesIntermediary, coursesCredits } from '../data/coursesCardsData.js';

const Courses = () => {
  return (
    <section className="relative bg-[#101323] py-0.5">
      <div className="bg-courses absolute z-30 h-full w-full bg-cover bg-center" />

      <div className="relative z-40 h-max bg-gradient-to-b from-transparent to-[#101323] px-6 md:px-12 lg:px-16">
        <img src="/svg/small-vector.svg" alt="" className="blur-4xl absolute top-50 left-24 z-40 h-max w-max" />
        <img src="/svg/small-vector.svg" alt="" className="blur-4xl absolute right-6 bottom-32 z-40 h-max w-max" />

        <Breadcrump>Cursuri</Breadcrump>
        <SectionHeader title="Cursurile noastre sunt optimizate pentru o învățare eficientizată:" color="text-white" />

        <div className="relative z-50 mb-16">
          <div className="my-4 flex w-full items-center justify-between">
            <p className="font-oddval text-[26px] tracking-wide text-white">Cursuri cu credite:</p>
            <a href="/all-courses" className="mr-2 flex items-center gap-2">
              <p className="font-inter font-bold tracking-wide text-white">Vezi toate</p>
              <ArrowLongRightIcon className="size-5 text-white" />
            </a>
          </div>
          <div className="mb-30 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {coursesIntermediary.map((card, index) => (
              <CoursesCard key={index} {...card} />
            ))}
          </div>
          <div className="my-4 flex w-full items-center justify-between">
            <p className="font-oddval text-[26px] tracking-wide text-white">Cursuri cu credite:</p>
            <a href="/all-courses" className="mr-2 flex items-center gap-2">
              <p className="font-inter font-bold tracking-wide text-white">Vezi toate</p>
              <ArrowLongRightIcon className="size-5 text-white" />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coursesCredits.map((card, index) => (
              <CoursesCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
