'use client';

import { useId } from 'react';
import { Hidden } from './Hidden';
import { InputTextWrapper, InputTextBase } from '../styles/inputTextStyle';

interface InputTextProps extends React.HTMLAttributes<HTMLInputElement> {
  labelText?: string;
}

export const InputText = ({ id, labelText, ...restProps }: InputTextProps) => {
  const tempId = useId();
  const textId = id ?? `text-input-${id}`;

  return (
    <InputTextWrapper>
      <Hidden>{labelText ?? 'asdasd'}</Hidden>
      <InputTextBase type="text" id={textId} aria-labelledby={tempId} {...restProps} />
    </InputTextWrapper>
  );
};
