import React from 'react';
import ProductCard from './ProductCard'; // Importa o ProductCard
import './ProductList.css';

function ProductList({ produtos, onAdicionarAoCarrinho }) {
  return (
    <div className="produtos-container">
      <h2>Produtos em Destaque</h2>
      <div className="grid-produtos">
        {produtos.map(produto => (
          <ProductCard 
            key={produto.id} 
            produto={produto} 
            onAdicionarAoCarrinho={onAdicionarAoCarrinho} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;