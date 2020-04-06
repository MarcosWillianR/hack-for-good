import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { SignIn } from '~/store/modules/auth/actions';

import Input from '~/components/Form/Input';

import validator from './validator';
import { Container, RegisterText } from './styles';

export default function Company() {
  const formRef = useRef(null);

  const dispatch = useDispatch();

  async function handleSubmit(data, { reset }) {
    await validator(data, formRef);

    if (!Object.keys(formRef.current.getErrors()).length) {
      dispatch(SignIn());
    }

    reset();
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <strong>IRETI</strong>
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
