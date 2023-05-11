import React from 'react';
import { fetchData } from '../../services';
import { BtnShow } from './styled';

function MeuBotao({valueOff, setOffset, setPoke, setLoad, poke}) {
  const handleClick = async () => { 
        setLoad(true)
        await fetchData(setPoke, valueOff + 30, setLoad, poke)
        setOffset(valueOff + 30)
  };

  return (
    <BtnShow onClick={handleClick}>Show more</BtnShow>
  );
}

export default MeuBotao;