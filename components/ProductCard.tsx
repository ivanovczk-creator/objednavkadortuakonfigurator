import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
  onOrder: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOrder }) => {
  // Seznam koncovek, které zkoušíme v pořadí, pokud se obrázek nepodaří načíst
  const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG'];
  
  const [extIndex, setExtIndex] = useState(0);
  const [usePlaceholder, setUsePlaceholder] = useState(false);

  // Reset stavu při změně produktu (např. při filtrování/změně dat)
  useEffect(() => {
    setExtIndex(0);
    setUsePlaceholder(false);
  }, [product.id]);

  // Získání aktuální URL obrázku
  const getImageUrl = () => {
    if (usePlaceholder) {
      return `https://placehold.co/600x600/fecdd3/881337?text=Foto+chybí`;
    }
    const extension = EXTENSIONS[extIndex];
    return `images/${product.id}.${extension}`;
  };

  // Pokud se obrázek nepodaří načíst, zkusíme další koncovku
  const handleImageError = () => {
    if (extIndex < EXTENSIONS.length - 1) {
      setExtIndex(prev => prev + 1);
    } else {
      // Pokud jsme vyzkoušeli všechny koncovky a nic, zobrazíme placeholder
      setUsePlaceholder(true);
    }
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl border border-stone-100">
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <img
          src={getImageUrl()}
          alt={product.imageAlt}
          onError={handleImageError}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-gray-900 shadow-sm backdrop-blur-sm">
          {product.price} Kč
        </div>
      </div>
      
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-serif font-bold text-gray-900">{product.name}</h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">
          {product.description}
        </p>
        
        <Button 
          onClick={() => onOrder(product)} 
          variant="secondary" 
          fullWidth
          className="group-hover:bg-rose-50 group-hover:border-rose-300"
        >
          Objednat dort
        </Button>
      </div>
    </div>
  );
};