import { Scope } from '@unform/core';
import { Form } from '@unform/web';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import Input from '~/components/Form/Input';
import buscaCep from '~/services/cep';
import firebase from '~/services/firebase';
import { removeNonNumeric } from '~/utils/formatter';
import { Container, ErrorMessage, InputWrapper } from './styles';
import validator from './validator';

export default function Company() {
  const formRef = useRef(null);

  const [cep, setCep] = useState('');
  const [cepInvalid, setcepInvalid] = useState(false);
  const [cepError, setCepError] = useState('');

  const cleanedCep = useMemo(() => removeNonNumeric(cep), [cep]);

  useEffect(() => {
    async function getCep() {
      if (cleanedCep.length >= 8) {
        const address = await buscaCep(cep);

        if (address?.error || !address) {
          setcepInvalid(true);
        }

        formRef.current.setData({ address });
      }
    }
    getCep();
  }, [cep, cleanedCep.length]);

  async function handleSubmit(data, { reset }) {
    /** Dados do formulário para enviar para o backend */
    const payload = {
      ...data,
      cnpj: removeNonNumeric(data.cnpj),
      cep: cleanedCep,
    };

    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword('teste@gmail.com', '123456');
    } catch (err) {
      console.log(err.code);
      console.log(err.message);
    }

    await validator(payload, formRef);

    const cepHasError = formRef.current.getFieldError('cep');

    if (cepHasError) {
      setCepError(cepHasError);
    } else {
      setCepError('');
    }

    reset();
    setCep('');
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="company" placeholder="Nome da empresa" />
        <Input type="email" name="email" placeholder="E-mail" />
        <Input name="login" placeholder="Login" />
        <Input type="password" name="password" placeholder="Senha" />
        <Input
          name="cnpj"
          placeholder="Informe seu CNPJ"
          mask="99.999.999/9999-99"
        />

        <InputWrapper>
          <ReactInputMask
            name="cep"
            placeholder="Informe seu CEP"
            mask="99999-999"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />

          {cepError && <ErrorMessage>{cepError}</ErrorMessage>}
        </InputWrapper>

        <Scope path="address">
          <Input name="street" placeholder="Rua" disabled={!cepInvalid} />
          <Input
            name="neighborhood"
            placeholder="Bairro"
            disabled={!cepInvalid}
          />
          <Input name="city" placeholder="Cidade" disabled={!cepInvalid} />
          <Input
            name="uf"
            placeholder="UF"
            disabled={!cepInvalid}
            maxLength="2"
          />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
