import React from 'react';
import { fetchData, getMorePokes } from '../../services';
import { BtnShow } from './styled';

function MeuBotao({valueOff, setOffset, setPoke}) {
  const handleClick = async () => { 
        console.log(await fetchData(setPoke, valueOff))
        getMorePokes(valueOff)
        setOffset(valueOff + 30)
  };

  return (
    <BtnShow onClick={handleClick}>Clique aqui</BtnShow>
  );
}

export default MeuBotao;