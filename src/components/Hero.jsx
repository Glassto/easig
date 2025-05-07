import React from "react";
import Button from "./Button.jsx";

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-200 bg-white flex flex-col border-b border-gray-200 shadow-[inset_0px_-4px_6px_-2px_rgba(0,_0,_0,_0.1)]">
      <div className="bg-hero-pattern w-full h-full bg-center bg-cover absolute -z-0" />

      <img src="/svg/small-vector.svg" alt="" className="absolute w-max h-max top-50 left-24 blur-4xl z-0" />
      <img src="/svg/big-vector.svg" alt="" className="absolute w-max h-max -bottom-32 right-6 blur-4xl z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 pt-30 md:pt-44">
        <h1 className="text-4xl md:text-6xl pb-6 font-oddval font-bold leading-tight text-gray-900">
          Educație în domeniul asigurărilor aprobată de ASF & ISF
        </h1>
        <p className="max-w-4xl mx-auto font-inter font-semibold text-md md:text-lg text-gray-600">
          Platformă de e-learning aprobată de Autoritatea de Supraveghere Financiară (ASF), dobândirea cunoștințelor necesare pentru
          a activa în domeniul asigurărilor și/sau reasigurărilor.
        </p>
        <div className="flex max-sm:flex-col justify-center items-center max-sm:gap-3 gap-6 w-full py-10">
          <Button variant="secondary" link="/login">
            Conectează-te
          </Button>
          <Button variant="primary" link="/cursuri">
            Cursuri pentru tine
          </Button>
        </div>
      </div>

      <div className="relative w-full flex-1 bg-slate-300 shadow-2xl max-w-7xl mx-auto px-1 pt-1 rounded-t-xl overflow-hidden z-10">
        <img src="/dashboard.png" alt="Captură platformă eASIG" className="w-full h-full object-cover object-top rounded-t-lg" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/10 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
