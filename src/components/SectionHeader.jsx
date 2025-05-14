const SectionHeader = ({ title, subtitle, color = 'text-gray-900' }) => {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-3 px-4 sm:gap-4 sm:px-6">
      <h3 className={`font-oddval text-center text-3xl ${color} lg:text-4xl`}>{title}</h3>
      <p className="font-inter max-w-2xl text-center text-sm leading-relaxed font-medium text-gray-600 sm:text-base">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
