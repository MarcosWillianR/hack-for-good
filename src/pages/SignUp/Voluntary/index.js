import React, { useRef, useEffect, useState, useMemo } from 'react';
import ReactInputMask from 'react-input-mask';

import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import Input from '~/components/Form/Input';

import buscaCep from '~/services/cep';

import validator from './validator';
import { Container, InputWrapper, ErrorMessage } from './styles';

import { removeNonNumeric } from '~/utils/formatter';

export default function Voluntary() {
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
      cep: cleanedCep,
      cpf: removeNonNumeric(data.cpf),
    };

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
        <Input name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="seu e-mail" />
        <Input name="login" placeholder="Login" />
        <Input type="password" name="password" placeholder="Senha" />
        <Input name="cpf" placeholder="Informe seu CPF" mask="999.999.999-99" />

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
