import React from 'react';
import { fetchData } from '../../services';
import { BtnShow } from './styled';

function MeuBotao({valueOff, setOffset, setPoke}) {
  const handleClick = async () => { 
        await fetchData(setPoke, valueOff + 30)
        setOffset(valueOff + 30)
  };

  return (
    <BtnShow onClick={handleClick}>Show more</BtnShow>
  );
}

export default MeuBotao;