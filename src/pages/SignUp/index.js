import { Form } from '@unform/web';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

import Select from '~/components/Form/Select';

export default function SelectRegister() {
  const formRef = useRef(null);
  const history = useHistory();

  const [error, setError] = useState(false);

  async function handleSubmit({ select }) {
    if (select === 'pj') {
      setError(false);
      history.push('/company-signup');
    }

    if (select === 'pf') {
      setError(false);
      history.push('/voluntary-signup');
    }

    setError(true);
  }

  const options = [
    { value: 'pf', label: 'Pessoa Física' },
    { value: 'pj', label: 'Pessoa Júridica' },
  ];

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Você é uma empresa ou Pessoa física?</h1>
        <Select
          name="select"
          options={options}
          placeholder=""
          styles={{ width: 500 }}
        />
        {error && <span>Por favor, selecione uma opção</span>}

        <button type="submit">Próximo</button>
      </Form>
    </Container>
  );
}
