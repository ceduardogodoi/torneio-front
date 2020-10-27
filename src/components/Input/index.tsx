import React from 'react';
import MaskedInput from 'react-text-mask';
import {
  FormControl,
  InputLabel,
  Input as MaterialInput,
  InputProps as MaterialInputProps
} from '@material-ui/core';

import { getMask, MaskProps } from './Masking';

type MaskedProps = {
  /**
   * The parent's component ref.
   */
  inputRef(ref: HTMLElement): void | null;
} & MaskProps;

const Masked: React.FC<MaskedProps> = (props: MaskedProps) => {
  const { inputRef, mask, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: MaskedInput) => {
        inputRef(ref?.inputElement ?? null);
      }}
      mask={getMask(mask)}
      placeholderChar={'\u2000'}
    />
  );
};

type InputProps = {
  /**
   * The id of the input element. Use this prop to make label and helperText accessible for screen readers.
   */
  id: string;

  /**
   * The label content.
   */
  label: string;

  /**
   * Name attribute of the input element.
   */
  name: string;
} & MaterialInputProps &
  MaskProps;

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { id, label, name, value, mask, fullWidth, ...other } = props;

  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel disableAnimation htmlFor={id}>
        {label}
      </InputLabel>
      <MaterialInput
        {...other}
        value={value}
        name={name}
        id={id}
        inputComponent={Masked as any}
        inputProps={{ mask }}
      />
    </FormControl>
  );
};

export default Input;
