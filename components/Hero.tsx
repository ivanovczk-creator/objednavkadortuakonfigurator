import React from 'react';
import { Button } from './Button';
import { CONFIGURATOR_URL } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-rose-50 px-4 text-center">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100/50 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-orange-100/50 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <span className="inline-block rounded-full bg-rose-100 px-4 py-1.5 text-sm font-semibold tracking-wider text-rose-600 uppercase">
            Rodinná tradice od roku 1995
          </span>
          <h1 className="text-5xl font-bold leading-tight text-gray-900 sm:text-6xl md:text-7xl font-serif">
            Cukrářství <span className="text-rose-500">Blahutovi</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl font-light">
            Tradiční cukrárna s láskou k řemeslu. Pečeme z poctivých surovin, 
            čerstvého másla a pravé smetany.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={CONFIGURATOR_URL} target="_blank" rel="noopener noreferrer">
            <Button size="xl" className="shadow-rose-300/50 shadow-2xl animate-pulse hover:animate-none">
              <span className="mr-2">🍰</span> Sestavit vlastní dort
            </Button>
          </a>
        </div>
        
        <p className="text-sm text-gray-400">
          Přejdete do našeho online konfigurátoru
        </p>
      </div>
    </section>
  );
};