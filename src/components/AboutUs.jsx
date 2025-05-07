import React from "react";
import Breadcrump from "./Breadcrump";
import SectionHeader from "./SectionHeader";
import { RectangleGroupIcon, SquaresPlusIcon, MapPinIcon } from "@heroicons/react/24/solid";

const AboutUs = () => {
  return (
    <section>
      <Breadcrump>Despre noi</Breadcrump>

      <SectionHeader
        title="Cine suntem noi și ce ne propunem?"
        subtitle="Suntem o companie nouă, dedicată simplificării procesului de învățare în domeniul asigurărilor. Ne concentrăm pe eficiență,
        claritate și accesibilitate, prin 3 metode cheie:"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16 mt-14">
        <div className="bg-gradient-to-b from-[#F9FAFC] to-[#EBEEFA] rounded-xl border border-gray-200 transition-all duration-300 p-6 lg:p-8 h-90 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex justify-between items-center w-full h-max">
              <h4 className="w-5/6 font-oddval text-3xl sm:text-3xl text-gray-900">Învățare Structurată</h4>
              <MapPinIcon className="w-16 h-16 text-slate-400" />
            </div>
            <div className="flex items-center gap-2 h-max">
              <div className="bg-sky-500 min-w-3 h-9 rounded-full"></div>
              <p className="font-inter font-semibold text-sm sm:text-base text-gray-600">
                Materiale împărțite pe module, cu progres clar și explicații ușor de înțeles.
              </p>
            </div>
          </div>
          <a href="#" className="text-sky-500 font-inter font-semibold text-sm hover:text-sky-600 transition-colors">
            Află mai multe →
          </a>
        </div>
        <div className="bg-gradient-to-b from-[#F9FAFC] to-[#EBEEFA] rounded-xl border border-gray-200 transition-all duration-300 p-6 lg:p-8 h-90 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex justify-between items-center w-full h-max">
              <h4 className="w-3/4 font-oddval text-3xl sm:text-3xl text-gray-900">Suport Interactiv</h4>
              <SquaresPlusIcon className="w-16 h-16 text-slate-400" />
            </div>
            <div className="flex items-center gap-2 h-max">
              <div className="bg-yellow-500 min-w-3 h-9 rounded-full"></div>
              <p className="font-inter font-semibold text-sm sm:text-base text-gray-600">
                Teste rapide, chestionare și exemple reale pentru a fixa și reîmprospăta cunoștințele.
              </p>
            </div>
          </div>
          <a href="#" className="text-sky-500 font-inter font-semibold text-sm hover:text-sky-600 transition-colors">
            Află mai multe →
          </a>
        </div>
        <div className="bg-gradient-to-b from-[#F9FAFC] to-[#EBEEFA] rounded-xl border border-gray-200 transition-all duration-300 p-6 lg:p-8 h-90 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex justify-between items-center w-full h-max">
              <h4 className="w-5/6 font-oddval text-3xl sm:text-3xl text-gray-900">Acces Oriunde, Oricând</h4>
              <MapPinIcon className="w-16 h-16 text-slate-400" />
            </div>
            <div className="flex items-center gap-2 h-max">
              <div className="bg-violet-500 min-w-3 h-9 rounded-full"></div>
              <p className="font-inter font-semibold text-sm sm:text-base text-gray-600">
                Platformă 100% online, 24/7, accesibilă de pe orice dispozitiv, în ritmul tău.
              </p>
            </div>
          </div>
          <a href="#" className="text-sky-500 font-inter font-semibold text-sm hover:text-sky-600 transition-colors">
            Află mai multe →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
