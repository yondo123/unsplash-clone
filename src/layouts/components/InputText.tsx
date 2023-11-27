'use client';

import { useId } from 'react';
import { Hidden } from './Hidden';
import { InputTextBase } from '../styles/inputTextStyle';

interface InputTextProps extends React.HTMLAttributes<HTMLInputElement> {
  labelText?: string;
}

export const InputText = ({ id, labelText, ...restProps }: InputTextProps) => {
  const tempId = useId();
  const textId = id ?? `text-input-${id}`;

  return (
    <>
      <Hidden>{labelText ?? 'text input'}</Hidden>
      <InputTextBase type="text" id={textId} aria-labelledby={tempId} {...restProps} />
    </>
  );
};
