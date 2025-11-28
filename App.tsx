import React, { useState } from 'react';
import { Product } from './types';
import { PRODUCTS } from './constants';
import { Modal } from './components/Modal';
import { OrderForm } from './components/OrderForm';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300); // Clear after animation
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Navigation - Simple Logo */}
      <nav className="absolute top-0 left-0 w-full p-6 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-tighter text-gray-900">
            CB.
          </div>
          <div className="text-sm font-semibold text-gray-500">
            Tel: +420 123 456 789
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Catalog Section */}
      <section className="py-20 px-4 md:px-8 bg-white" id="nabidka">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Nebo si vyberte z naší nabídky
            </h2>
            <div className="h-1 w-20 bg-rose-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Naše nejoblíbenější klasiky, které pro vás pečeme každý den čerstvé. 
              Objednejte si je snadno online a vyzvedněte na pobočce.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PRODUCTS.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onOrder={handleOrderClick} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-4">
        <div className="container mx-auto text-center space-y-6">
          <h3 className="text-2xl font-serif text-white">Cukrářství Blahutovi</h3>
          <p>© {new Date().getFullYear()} Všechna práva vyhrazena.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Ochrana údajů</a>
            <a href="#" className="hover:text-white transition-colors">Obchodní podmínky</a>
            <a href="#" className="hover:text-white transition-colors">Kontakt</a>
          </div>
        </div>
      </footer>

      {/* Order Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title="Nová objednávka"
      >
        {selectedProduct && (
          <OrderForm 
            product={selectedProduct} 
            onCancel={handleCloseModal} 
          />
        )}
      </Modal>
    </div>
  );
};

export default App;