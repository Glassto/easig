import React, { useState } from 'react';
import { ArrowLongRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Newsletter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsData = [
    {
      id: 1,
      image: '/TOP Asiguratori.png',
      title: 'TOP asiguratori CASCO in 2024',
      category: 'Analiză de piață',
      variant: 'dark', // pentru card-ul cu fundal închis
    },
    {
      id: 2,
      image: '/path/to/chart-image.jpg',
      title: 'Despăgubirile plătite au crescut cu 38%...',
      category: 'Statistici',
      variant: 'light',
    },
    {
      id: 3,
      image: '/path/to/futuristic-car.jpg',
      title: 'Viitorul asigurărilor sub impact',
      category: 'Tehnologie',
      variant: 'light',
    },
    {
      id: 4,
      image: '/path/to/futuristic-car.jpg',
      title: 'Viitorul sub impact AI',
      category: 'Tehnologie',
      variant: 'light',
    },
    {
      id: 5,
      image: '/path/to/futuristic-car.jpg',
      title: 'Viitorul impact AI',
      category: 'Tehnologie',
      variant: 'light',
    },
  ];

  return (
    <section className="to-beige-50 relative bg-gradient-to-b from-purple-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
              <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                {/* Newsletter icon */}
              </svg>
            </div>
            <span className="text-sm font-medium text-blue-600">Newsletter</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Ultimele noutăți din domeniul asigurărilor:</h2>
        </div>

        {/* News Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {newsData.map((news) => (
            <div key={news.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={news.image}
                  alt={news.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text Box */}
              <div
                className={`rounded-lg p-4 ${
                  news.variant === 'dark' ? 'bg-gray-900 text-white' : 'border border-gray-200 bg-white text-gray-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm leading-tight font-semibold">{news.title}</h3>
                  <ArrowLongRightIcon className="h-4 w-4 flex-shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-50"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
          </button>

          <div className="flex gap-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide(Math.min(2, currentSlide + 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-50"
          >
            <ChevronRightIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
