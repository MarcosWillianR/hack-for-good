import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Input from '~/components/Form/Input';

import validator from './validator';
import { Container, RegisterText } from './styles';

export default function Company() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    await validator(data, formRef);

    localStorage.setItem('login', JSON.stringify({ login: true }));

    reset();
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <strong>LOGO</strong>
        <Input type="email" name="email" placeholder="e-mail" />
        <Input type="password" name="password" placeholder="senha" />

        <Link to="/">Esqueci minha senha</Link>

        <button type="submit">Entrar</button>

        <RegisterText>
          Ainda não é voluntário?
          <Link to="/signup">Cadastre-se</Link>
        </RegisterText>
      </Form>
    </Container>
  );
}
