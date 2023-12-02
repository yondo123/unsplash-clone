'use client';

import { useId } from 'react';
import { Hidden } from './Hidden';
import { Button } from './Button';
import { InputTextBase, InputTextWrapper } from '../styles/inputTextStyle';

interface InputTextProps extends React.HTMLAttributes<HTMLInputElement> {
  labelText?: string;
  submitIcon?: React.ReactNode;
}

export const InputText = ({ id, labelText, submitIcon, ...restProps }: InputTextProps) => {
  const tempId = useId();
  const textId = id ?? `text-input-${id}`;

  return (
    <InputTextWrapper>
      <Hidden>{labelText ?? 'text input'}</Hidden>
      <InputTextBase type="text" id={textId} aria-labelledby={tempId} {...restProps} />
      {submitIcon && (
        <Button variant="ghost" type="submit">
          {submitIcon}
        </Button>
      )}
    </InputTextWrapper>
  );
};
