import React from 'react';
import MaskedInput from 'react-text-mask';

const InputCNPJ: React.FC = () => (
  <MaskedInput
    mask={[/\d{2}/, '.', /\d{3}/, '.', /\d{3}/, '/', /\d{4}/, '-', /\d{2}/]}
    showMask
  />
);

export default InputCNPJ;
