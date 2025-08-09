import React from 'react';
import './ProductCard.css';

function ProductCard({ produto, onAdicionarAoCarrinho }) {
  return (
    <div className="produto-card">
      <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
      <h3>{produto.nome}</h3>
      <p>R$ {produto.preco.toFixed(2)}</p>
      <button onClick={() => onAdicionarAoCarrinho(produto)}>Comprar</button>
    </div>
  );
}

export default ProductCard;