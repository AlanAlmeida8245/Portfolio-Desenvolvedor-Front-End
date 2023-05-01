import React, { useState, useEffect } from 'react';
import {AiOutlineArrowUp} from "react-icons/ai"

const BotaoScrollParaCima = () => {
  const [mostrarBotao, setMostrarBotao] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', verificarPosicaoScroll);

    return () => {
      window.removeEventListener('scroll', verificarPosicaoScroll);
    };
  }, []);

  const verificarPosicaoScroll = () => {
    if (window.pageYOffset > 600) {
      setMostrarBotao(true);
    } else {
      setMostrarBotao(false);
    }
  };

  const scrollParaCima = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`fixed right-4 bottom-4 p-3 rounded-md bg-gold text-white transition-opacity ${
        mostrarBotao ? 'opacity-100' : 'opacity-0'
      } z-20`}
      onClick={scrollParaCima}
    >
      <AiOutlineArrowUp/>
    </button>
  );
};

export default BotaoScrollParaCima;
