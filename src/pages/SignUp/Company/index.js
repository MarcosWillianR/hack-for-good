import React, { useRef, useEffect, useState, useMemo } from 'react';
import ReactInputMask from 'react-input-mask';

import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import Input from '~/components/Form/Input';

import buscaCep from '~/services/cep';

import validator from './validator';
import { Container, InputWrapper, ErrorMessage } from './styles';

import { removeNonNumeric } from '~/utils/formatter';

export default function Company() {
  const formRef = useRef(null);

  const [cep, setCep] = useState('');
  const [cepInvalid, setcepInvalid] = useState(false);
  const [cepError, setCepError] = useState('');

  const [cnpj, setCnpj] = useState('');
  const [cnpjError, setCnpjError] = useState('');

  const cleanedCep = useMemo(() => removeNonNumeric(cep), [cep]);
  const cleanedCnpj = useMemo(() => removeNonNumeric(cnpj), [cnpj]);

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
      cnpj: cleanedCnpj,
      cep: cleanedCep,
      ...data,
    };

    await validator(payload, formRef);

    const cnpjHasError = formRef.current.getFieldError('cnpj');

    if (cnpjHasError) {
      setCnpjError(cnpjHasError);
    } else {
      setCnpjError('');
    }

    const cepHasError = formRef.current.getFieldError('cep');

    if (cepHasError) {
      setCepError(cepHasError);
    } else {
      setCepError('');
    }

    reset();
    setCep('');
    setCnpj('');
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="company" placeholder="Nome da empresa" />
        <Input type="email" name="email" placeholder="E-mail" />
        <Input name="login" placeholder="Login" />
        <Input type="password" name="password" placeholder="Senha" />

        <InputWrapper>
          <ReactInputMask
            name="cnpj"
            placeholder="Informe seu CNPJ"
            mask="99.999.999/9999-99"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />

          {cnpjError && <ErrorMessage>{cnpjError}</ErrorMessage>}
        </InputWrapper>

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
