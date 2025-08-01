import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

const FeaturesCard = ({ title, icon: Icon, subtitle, description, color }) => {
  return (
    <div className="flex h-full flex-col justify-between gap-12 rounded-3xl border border-gray-200 bg-gradient-to-b from-[#F9FAFC] to-[#EBEEFA] p-6 transition-all duration-300 sm:gap-16 lg:p-8">
      <div className="space-y-3">
        <div className="flex h-max w-full items-center justify-between">
          <h4 className="font-oddval w-5/6 text-2xl text-gray-900 sm:text-3xl">{title}</h4>
          {Icon && <Icon className="h-12 min-h-12 text-slate-400 sm:h-16 sm:min-w-16" />}
        </div>
        <div className="flex h-max items-center gap-4">
          <div className={`h-9 min-w-3 rounded-full ${color}`}></div>
          <p className="font-inter text-sm font-semibold text-slate-700">{subtitle}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:gap-8">
        <p className="font-inter text-sm text-zinc-600">{description}</p>
        <a
          href="#"
          className="group font-inter flex items-center gap-2 text-sm font-semibold text-sky-500 transition-colors hover:text-sky-600"
        >
          Află mai multe
          <ArrowLongRightIcon className="size-5 text-sky-500 group-hover:text-sky-600" />
        </a>
      </div>
    </div>
  );
};

export default FeaturesCard;
