import React, { useState } from 'react';
import Breadcrump from '../components/Breadcrump';
import SectionHeader from '../components/SectionHeader';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, UserCircleIcon, ArrowLongRightIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import Button from '../components/Button';

const faqData = [
  {
    id: 1,
    title: 'Ce tipuri de cursuri oferiți?',
    answer:
      'Oferim o gamă variată de cursuri în domeniul asigurărilor, axate în principal pe asigurări de viață, RCA și PAD. Aceste cursuri acoperă atât aspectele teoretice, cât și cele practice, fiind potrivite pentru cei care doresc să intre în domeniu, dar și pentru cei care activează deja și vor să se perfecționeze sau să-și reînnoiască certificările. Ne propunem să adăugăm în permanență noi cursuri relevante pentru piața actuală.',
  },
  {
    id: 2,
    title: 'Cui i se adresează aceste cursuri?',
    answer:
      'Cursurile noastre sunt destinate atât celor care doresc să înceapă o carieră în domeniul asigurărilor, cât și profesioniștilor deja activi care doresc să-și reînnoiască acreditările sau să se perfecționeze. Indiferent de nivelul de experiență, avem cursuri adaptate nevoilor fiecărui participant.',
  },
  {
    id: 3,
    title: 'Este platforma autorizată de ASF și ISF?',
    answer:
      'Da, platforma noastră oferă cursuri aprobate de Institutul de Studii Financiare (ISF), autoritatea competentă în domeniul educației financiare din România. Acest lucru înseamnă că programele noastre respectă standardele legale și de calitate necesare pentru a fi recunoscute oficial.',
  },
  {
    id: 4,
    title: 'Primesc o diplomă sau certificat la final?',
    answer:
      'Bineînțeles, la finalul fiecărui curs, participanții primesc un certificat de absolvire care atestă competențele dobândite. Acest certificat este recunoscut de către ASF și poate fi folosit pentru a reînnoi acreditările necesare în domeniul asigurărilor.',
  },
];

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);

  return (
    <section className="px-4 pb-4 sm:px-6 sm:pb-6 lg:px-16 lg:pb-16">
      <Breadcrump variant="faq">Întrebări frecvente</Breadcrump>

      <section className="grid grid-cols-5 gap-10">
        <section className="col-span-2 flex h-full flex-col gap-120">
          <div className="flex-col gap-6">
            <SectionHeader title="Vă oferim suport 24/7 pentru orice problemă." variant="faq" />
            <div className="mt-3 flex gap-8">
              <div className="flex items-center gap-2">
                <PhoneIcon className="size-4 text-slate-600" />
                <p className="font-inter border-l border-slate-400 pl-2 text-xs font-medium text-slate-600">+40 722 333 444</p>
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="size-4 text-slate-600" />
                <p className="font-inter border-l border-slate-400 pl-2 text-xs font-medium text-slate-600">contact@easig.ro</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="size-4 text-slate-600" />
                <p className="font-inter border-l border-slate-400 pl-2 text-xs font-medium text-slate-600">Suceava, România</p>
              </div>
            </div>
          </div>

          <div className="max-w-sm">
            <div className="flex items-center gap-4">
              <UserCircleIcon className="size-12 text-sky-500" />
              <div>
                <h3 className="font-inter text-sm font-semibold text-slate-600">Denis Maciuc</h3>
                <p className="font-inter text-xs text-slate-500">Intermediar în asigurări, InsureTech</p>
              </div>
            </div>
            <div>
              <p className="font-inter mt-2 text-sm font-medium text-slate-600">
                „Am fost plăcut surprins de calitatea materialelor și de suportul oferit. Platforma este intuitivă, iar cursurile
                sunt structurate clar și eficient. Certificatul obținut m-a ajutat să-mi reînnoiesc acreditarea fără bătăi de cap.
                Recomand cu încredere!”
              </p>
            </div>
          </div>
        </section>

        <section className="col-span-3 flex w-full flex-col gap-20">
          <div className="flex w-full justify-end">
            <Button variant="thin" link="/contact">
              Contactează-ne
              <ArrowLongRightIcon className="size-6 text-white" />
            </Button>
          </div>
          {faqData.map((question) => {
            return (
              <button key={question.id} className="flex flex-col gap-10">
                <div className="flex flex-col justify-center">
                  <button
                    onClick={() => {
                      setActiveQuestion(activeQuestion === question.id ? null : question.id);
                    }}
                    id={question.id}
                    className="w-full cursor-pointer rounded-2xl border border-gray-200 bg-zinc-50"
                  >
                    <div className="flex items-center justify-between gap-4 px-6 py-4">
                      <h3 className="font-oddval text-xl text-gray-700">{question.title}</h3>
                      <PlusCircleIcon className={`size-6 transition-all ${activeQuestion === question.id ? 'rotate-45' : ''}`} />
                    </div>
                  </button>
                  <div
                    id={`answer-${question.id}`}
                    className={`mx-auto w-29/30 rounded-b-xl border-x border-b border-gray-200 bg-zinc-50 ${
                      activeQuestion === question.id ? 'h-full px-6 py-4' : 'hidden'
                    }`}
                  >
                    <p className={`font-inter overflow-y-hidden text-start font-medium text-slate-600`}>{question.answer}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default FAQ;
