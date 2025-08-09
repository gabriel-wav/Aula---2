import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import LoginModal from './components/LoginModal';
import ProductList from './components/ProductList';
import CarrinhoModal from './components/CarrinhoModal';
import logo192 from './logo192.png'; // Agora importa corretamente da pasta src

function App() {
  const [mostrarModalLogin, setMostrarModalLogin] = useState(false);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const [carrinho, setCarrinho] = useState([]);

  const produtos = [
    { id: 1, nome: 'Camisa Gabriel Shop', preco: 59.90, imagem: logo192 },
    { id: 2, nome: 'Boné Estiloso', preco: 39.90, imagem: logo192 },
    { id: 3, nome: 'Tênis Urbano', preco: 129.90, imagem: logo192 }
  ];

  const abrirModalLogin = () => setMostrarModalLogin(true);
  const fecharModalLogin = () => setMostrarModalLogin(false);
  const abrirCarrinho = () => setMostrarCarrinho(true);
  const fecharCarrinho = () => setMostrarCarrinho(false);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerItemDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  return (
    <div>
      <Header cartItemCount={carrinho.length} onCartClick={abrirCarrinho} />

      <main>
        <Routes>
          <Route path="/" element={<HeroSection onLoginClick={abrirModalLogin} />} />
          <Route path="/produtos" element={<ProductList produtos={produtos} onAdicionarAoCarrinho={adicionarAoCarrinho} />} />
        </Routes>
      </main>

      <Footer />

      {mostrarModalLogin && <LoginModal onClose={fecharModalLogin} />}
      
      {mostrarCarrinho && (
        <CarrinhoModal
          carrinho={carrinho}
          onFechar={fecharCarrinho}
          onRemoverItem={removerItemDoCarrinho}
        />
      )}
    </div>
  );
}

export default App;