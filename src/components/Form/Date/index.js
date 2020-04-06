import React, { useRef, useState, useEffect } from 'react';
import { useField } from '@unform/core';
import pt from 'date-fns/locale/pt';
import ReactInputMask from 'react-input-mask';

import { DateInput } from './styles';

const DatePicker = ({ name, ...rest }) => {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [date, setDate] = useState(defaultValue || null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: (ref) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <DateInput
      ref={datepickerRef}
      selected={date}
      onChange={setDate}
      customInput={<ReactInputMask mask="99/99/9999" />}
      name="date"
      locale={pt}
      todayButton="Hoje"
      minDate={new Date()}
      showDisabledMonthNavigation
      placeholderText="Escolha a data"
      dateFormat="dd'/'MM'/'yyyy"
      {...rest}
    />
  );
};

export default DatePicker;
