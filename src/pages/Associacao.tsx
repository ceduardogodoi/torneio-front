import React, { useState } from 'react';
import Input from '../components/Input';

const Associacao: React.FC = () => {
  const [value, setValue] = useState('');

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  return (
    <Input
      id="cep"
      label="CEP"
      name="cep"
      value={value}
      onChange={handleOnChange}
      mask="cep"
    />
  );
};

export default Associacao;
