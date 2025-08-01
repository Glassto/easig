import Button from '../components/Button.jsx';

const Hero = () => {
  return (
    <section className="relative flex h-200 flex-col overflow-hidden border-b border-gray-200 bg-white shadow-[inset_0px_-4px_6px_-2px_rgba(0,_0,_0,_0.1)]">
      <div className="bg-hero-pattern absolute -z-0 h-full w-full bg-cover bg-center" />

      <img src="svg/small-vector.svg" alt="" className="blur-4xl absolute top-50 left-24 z-0 h-max w-max" />
      <img src="svg/big-vector.svg" alt="" className="blur-4xl absolute right-6 -bottom-32 z-0 h-max w-max" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-30 text-center md:pt-44">
        <h1 className="font-oddval pb-6 text-3xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-6xl">
          Educație în domeniul asigurărilor aprobată de ASF & ISF
        </h1>
        <p className="font-inter mx-auto max-w-4xl text-sm font-semibold text-gray-600 md:text-lg">
          Platformă de e-learning aprobată de Autoritatea de Supraveghere Financiară (ASF), dobândirea cunoștințelor necesare pentru
          a activa în domeniul asigurărilor și/sau reasigurărilor.
        </p>
        <div className="flex w-full items-center justify-center gap-6 py-10 max-sm:flex-col max-sm:gap-3">
          <Button variant="secondary" link="/login">
            Conectează-te
          </Button>
          <Button variant="primary" link="/cursuri">
            Cursuri pentru tine
          </Button>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl flex-1 overflow-hidden rounded-t-xl bg-slate-300 px-1 pt-1 shadow-2xl">
        <img src="dashboard.png" alt="Captură platformă eASIG" className="h-full w-full rounded-t-lg object-cover object-top" />
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-20 bg-gradient-to-t from-black/10 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
