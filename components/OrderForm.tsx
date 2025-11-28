import React, { useState } from 'react';
import { Product, BRANCHES, OrderFormData } from '../types';
import { Button } from './Button';
import { EMAIL_TO } from '../constants';

interface OrderFormProps {
  product: Product;
  onCancel: () => void;
}

export const OrderForm: React.FC<OrderFormProps> = ({ product, onCancel }) => {
  // Calculate minimum date (today + 7 days)
  const getMinDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date.toISOString().split('T')[0];
  };

  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    phone: '',
    date: getMinDate(),
    branch: BRANCHES[0],
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Objednávka dortu: ${product.name}`);
    const body = encodeURIComponent(`
Dobrý den,

Mám zájem o závaznou objednávku dortu.

DETAILY PRODUKTU:
-----------------
Dort: ${product.name}
Cena: ${product.price} Kč
ID Produktu: ${product.id}

ÚDAJE ZÁKAZNÍKA:
----------------
Jméno: ${formData.name}
Telefon: ${formData.phone}
Datum vyzvednutí: ${formData.date}
Pobočka: ${formData.branch}

Poznámka:
${formData.notes || '-'}

Děkuji.
    `);

    // Open mail client
    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
    
    // Optionally close modal after a slight delay or immediately
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="rounded-lg bg-rose-50 p-4 mb-4">
        <p className="text-sm font-semibold text-rose-800 uppercase tracking-wide">Vybraný produkt</p>
        <p className="text-lg font-bold text-gray-900">{product.name}</p>
        <p className="text-gray-600">{product.price} Kč</p>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Jméno a Příjmení</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 bg-white px-4 py-2 shadow-sm ring-1 ring-gray-300 focus:border-rose-500 focus:ring-rose-500"
          placeholder="Jan Novák"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon</label>
        <input
          required
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 bg-white px-4 py-2 shadow-sm ring-1 ring-gray-300 focus:border-rose-500 focus:ring-rose-500"
          placeholder="+420 777 888 999"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Datum vyzvednutí</label>
          <input
            required
            type="date"
            id="date"
            name="date"
            min={getMinDate()}
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 bg-white px-4 py-2 shadow-sm ring-1 ring-gray-300 focus:border-rose-500 focus:ring-rose-500"
          />
          <p className="mt-1 text-xs text-gray-500">Nejdříve za 7 dní</p>
        </div>

        <div>
          <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Pobočka</label>
          <select
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 bg-white px-4 py-2 shadow-sm ring-1 ring-gray-300 focus:border-rose-500 focus:ring-rose-500"
          >
            {BRANCHES.map(branch => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Poznámka (nepovinné)</label>
        <textarea
          id="notes"
          name="notes"
          rows={2}
          value={formData.notes}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 bg-white px-4 py-2 shadow-sm ring-1 ring-gray-300 focus:border-rose-500 focus:ring-rose-500"
          placeholder="Speciální přání..."
        />
      </div>

      <div className="pt-4 flex gap-3">
        <Button type="button" variant="secondary" fullWidth onClick={onCancel}>
          Zrušit
        </Button>
        <Button type="submit" variant="primary" fullWidth>
          Odeslat objednávku
        </Button>
      </div>
      <p className="text-center text-xs text-gray-400">Objednávka bude odeslána do vašeho emailového klienta.</p>
    </form>
  );
};