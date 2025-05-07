const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 w-full max-w-4xl mx-auto px-4 sm:px-6">
      <h3 className="font-oddval text-gray-900 text-3xl lg:text-4xl text-center">{title}</h3>
      <p className="max-w-2xl text-center font-inter font-medium text-sm sm:text-base text-gray-600 leading-relaxed">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
