import React from 'react';
import { getMorePokes } from '../../services';
import { BtnShow } from './styled';

function MeuBotao() {
  const handleClick = (valueOff, setOffset) => {
        getMorePokes(valueOff)
        setOffset(valueOff + 30)
  };

  return (
    <BtnShow onClick={() => handleClick}>Clique aqui</BtnShow>
  );
}

export default MeuBotao;