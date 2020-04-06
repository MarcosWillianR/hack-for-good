import { Scope } from '@unform/core';
import { Form } from '@unform/web';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import buscaCep from '~/services/cep';
import firebase from '~/services/firebase';
import { removeNonNumeric } from '~/utils/formatter';

import {
  Container,
  ErrorMessage,
  InputWrapper,
  Title,
  ButtonsWrapper,
} from './styles';
import validator from './validator';

import Input from '~/components/Form/Input';
import InputSelect from '~/components/Form/Select';

export default function Company() {
  const formRef = useRef(null);

  const [cep, setCep] = useState('');
  const [cepInvalid, setcepInvalid] = useState(false);
  const [cepError, setCepError] = useState('');

  const cleanedCep = useMemo(() => removeNonNumeric(cep), [cep]);

  const options = [
    { value: 'delivery', label: 'Entrega' },
    { value: 'donations', label: 'Doações' },
  ];

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
        <Title>Cadastro de Empresa</Title>

        <Input
          name="social-reason"
          placeholder="Razão Social"
          className="input__100"
        />

        <Input
          name="fantasy-name"
          placeholder="Nome Fantasia"
          className="input__100"
        />

        <Input
          name="cnpj"
          placeholder="CNPJ"
          mask="99.999.999/9999-99"
          className="input__50"
          left="true"
        />

        <Input
          name="economic-activity"
          placeholder="Atividade econômica/profissão"
          className="input__50"
        />

        <InputWrapper>
          <ReactInputMask
            name="cep"
            placeholder="Informe seu CEP"
            mask="99999-999"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />

          <p>
            Não sabe o CEP?
            <a
              href="http://www.buscacep.correios.com.br/sistemas/buscacep/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clique aqui
            </a>
          </p>
        </InputWrapper>
        {cepError && <ErrorMessage>{cepError}</ErrorMessage>}

        <Scope path="address">
          <Input name="street" placeholder="Rua" disabled={!cepInvalid} />
          <Input
            name="neighborhood"
            placeholder="Bairro"
            disabled={!cepInvalid}
            className="input__50"
          />
          <Input
            name="state"
            placeholder="Estado"
            disabled={!cepInvalid}
            maxLength="2"
            className="input__50"
          />
          <Input
            name="city"
            placeholder="Cidade"
            disabled={!cepInvalid}
            className="input__50"
          />
          <Input name="country" placeholder="País" className="input__50" />
        </Scope>

        <Title>Contato da Empresa</Title>

        <Input name="contact-name" placeholder="Nome" className="input__100" />

        <Input
          type="password"
          name="password"
          placeholder="Senha para logar no sistema"
        />

        <Input
          name="email"
          placeholder="E-mail para logar no sistema"
          className="input__50"
        />
        <Input
          name="fone"
          placeholder="Celular"
          className="input__50"
          mask="(99) 9999-9999"
        />

        <Title>Como você pode ajudar?</Title>

        <InputSelect
          name="help-type"
          options={options}
          placeholder="Escolha alguma das opções"
          styles={{ width: 500 }}
        />

        <ButtonsWrapper>
          <Link to="/">Cancelar</Link>
          <button type="submit">Cadastrar</button>
        </ButtonsWrapper>
      </Form>
    </Container>
  );
}
