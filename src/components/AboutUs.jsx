import React from "react";
import Breadcrump from "./Breadcrump";
import SectionHeader from "./SectionHeader";
import { RectangleGroupIcon, SquaresPlusIcon, MapPinIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";

const AboutUs = () => {
  return (
    <section>
      <Breadcrump>Despre noi</Breadcrump>

      <SectionHeader
        title="Cine suntem noi și ce ne propunem?"
        subtitle="Suntem o companie nouă, dedicată simplificării procesului de învățare în domeniul asigurărilor. Ne concentrăm pe eficiență,
        claritate și accesibilitate, prin 3 metode cheie:"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 px-4 md:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16 mt-14">
        <div className="bg-gradient-to-b from-[#F9FAFC] to-[#EBEEFA] rounded-3xl border border-gray-200 transition-all duration-300 p-6 lg:p-8 h-full flex flex-col justify-between gap-16">
          <div className="space-y-3">
            <div className="flex justify-between items-center w-full h-max">
              <h4 className="w-5/6 font-oddval text-3xl sm:text-3xl text-gray-900">Învățare Structurată</h4>
              <RectangleGroupIcon className="min-w-16 h-16 text-slate-400" />
            </div>
            <div className="flex items-center gap-4 h-max">
              <div className="bg-sky-500 min-w-3 h-9 rounded-full"></div>
              <p className="font-inter font-semibold text-sm sm:text-base text-slate-700">
                Materiale împărțite pe module, cu progres clar și explicații ușor de înțeles.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:gap-8">
            <p className="font-inter text-zinc-600">
              Fiecare curs este gândit logic, începând cu noțiunile de bază și terminând cu aplicații practice. Structura te ajută
              să înveți pas cu pas, fără stres.
            </p>
            <a
              href="#"
              className="group flex items-center gap-2 text-sky-500 font-inter font-semibold text-sm hover:text-sky-600 transition-colors"
            >
              Află mai multe
              <ArrowLongRightIcon className="size-5 text-sky-500 group-hover:text-sky-600" />
            </a>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#F9FAFC] to-[#EBEEFA] rounded-3xl border border-gray-200 transition-all duration-300 p-6 lg:p-8 h-full flex flex-col justify-between gap-16">
          <div className="space-y-3">
            <div className="flex justify-between items-center w-full h-max">
              <h4 className="w-3/4 font-oddval text-3xl sm:text-3xl text-gray-900">Suport Interactiv</h4>
              <SquaresPlusIcon className="min-w-16 h-16 text-slate-400" />
            </div>
            <div className="flex items-center gap-4 h-max">
              <div className="bg-yellow-500 min-w-3 h-9 rounded-full"></div>
              <p className="font-inter font-semibold text-sm sm:text-base text-slate-700">
                Teste rapide, chestionare și exemple reale pentru a fixa și reîmprospăta cunoștințele.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:gap-8">
            <p className="font-inter text-zinc-600">
              Creierul reține mai bine prin învățare activă. De aceea, fiecare lecție conține verificări de cunoștințe, simulări de
              examene și exerciții aplicate.
            </p>
            <a
              href="#"
              className="group flex items-center gap-2 text-sky-500 font-inter font-semibold text-sm hover:text-sky-600 transition-colors"
            >
              Află mai multe
              <ArrowLongRightIcon className="size-5 text-sky-500 group-hover:text-sky-600" />
            </a>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#F9FAFC] to-[#EBEEFA] rounded-3xl border border-gray-200 transition-all duration-300 p-6 lg:p-8 h-full flex flex-col justify-between gap-16">
          <div className="space-y-3">
            <div className="flex justify-between items-center w-full h-max">
              <h4 className="w-5/6 font-oddval text-3xl sm:text-3xl text-gray-900">Acces Oriunde, Oricând</h4>
              <MapPinIcon className="min-w-16 h-16 text-slate-400" />
            </div>
            <div className="flex items-center gap-4 h-max">
              <div className="bg-violet-500 min-w-3 h-9 rounded-full"></div>
              <p className="font-inter font-semibold text-sm sm:text-base text-slate-700">
                Platformă 100% online, 24/7, accesibilă de pe orice dispozitiv, în ritmul tău.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:gap-8">
            <p className="font-inter text-zinc-600">
              Fie că te afli acasă, la birou sau în autobuz, înveți când vrei și cât vrei. Tot ce îți trebuie este o conexiune la
              internet.
            </p>
            <a
              href="#"
              className="group flex items-center gap-2 text-sky-500 font-inter font-semibold text-sm hover:text-sky-600 transition-colors"
            >
              Află mai multe
              <ArrowLongRightIcon className="size-5 text-sky-500 group-hover:text-sky-600" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 pl-4 py-4 md:pl-6 md:py-6 lg:pl-8 lg:py-8 mb-8 sm:mb-12 lg:mb-16 mt-14 w-full h-full bg-slate-100">
        <div className="lg:w-1/2 h-max max-lg:mr-28 max-md:mr-20 max-sm:mr-12 p-6 lg:py-10 lg:px-8">
          <div className="space-y-3">
            <h4 className="w-3/4 font-oddval text-3xl sm:text-3xl text-gray-900">Misiunea noastră:</h4>
            <p className="font-inter font-semibold text-balance text-sm sm:text-base text-slate-700">
              La baza platformei noastre stă o misiune simplă, dar ambițioasă: "Să facem educația în asigurări accesibilă, clară și
              relevantă pentru toți."
            </p>
            <p className="font-inter text-zinc-600 mt-7">
              Ne dorim ca fiecare persoană care interacționează cu platforma noastră să înțeleagă nu doar "ce" trebuie să învețe, ci
              și "de ce" este important. Prin materiale moderne, conținut actualizat și o abordare centrată pe utilizator,
              transformăm procesul de învățare într-o experiență eficientă, personalizată și prietenoasă. Credem că accesul la
              educație de calitate în domeniul asigurărilor nu trebuie să fie un privilegiu, ci un standard. Iar noi construim acel
              standard, lecție cu lecție.
            </p>
          </div>
        </div>
        <div className="bg-white border-4 border-r-0 border-slate-300 rounded-l-3xl lg:w-1/2 h-max max-lg:ml-28 max-md:ml-20 max-sm:ml-12 p-6 lg:py-10 lg:px-8">
          <div className="space-y-3">
            <h4 className="w-3/4 font-oddval text-3xl sm:text-3xl text-gray-900">Istoria noastră:</h4>
            <p className="font-inter font-semibold text-balance text-sm sm:text-base text-slate-700">
              Totul a început în 2025, cu o idee simplă, dar curajoasă: "Să revoluționăm modul în care oamenii învață despre
              asigurări."
            </p>
            <p className="font-inter text-zinc-600 mt-7">
              Am observat că domeniul asigurărilor este adesea perceput ca fiind complex și rigid. Cursurile existente erau
              învechite, greu de parcurs și nu răspundeau nevoilor reale ale cursanților. <br /> <br /> Așa a apărut platforma
              noastră - din dorința de a schimba acest peisaj. Am adus împreună specialiști în educație digitală și experți din
              industria asigurărilor pentru a crea o experiență de învățare modernă, clară și adaptată vremurilor. <br /> <br /> Și
              abia am început.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
