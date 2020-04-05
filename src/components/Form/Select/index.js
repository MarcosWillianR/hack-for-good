import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { InputSelect } from './styles';

export default function Select({ name, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <InputSelect
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      {...rest}
      theme={(theme) => {
        return {
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#fed308',
            primary75: '#fed308',
            primary50: '#fed308',
            primary25: '#fed308',
          },
        };
      }}
    />
  );
}
