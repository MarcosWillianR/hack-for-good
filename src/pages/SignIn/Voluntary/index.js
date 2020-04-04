import React, { useRef } from 'react';

import { Form } from '@unform/web';
import Input from '~/components/Form/Input';

import validator from './validator';
import { Container } from './styles';

export default function Voluntary() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    await validator(data, formRef);

    reset();
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="login" placeholder="Login" />
        <Input type="password" name="password" placeholder="Senha" />

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
