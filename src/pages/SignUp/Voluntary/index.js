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

  const helpOptions = [
    { value: 'voluntary-online', label: 'Voluntário on-line' },
    { value: 'hospital-voluntary', label: 'Voluntário em hospitais' },
    { value: 'delivery', label: 'Entrega' },
    { value: 'donations', label: 'Doações' },
  ];

  const specialtyOptions = [
    { value: 'treatment', label: 'Atendimento' },
    { value: 'Logistics', label: 'Logística' },
    { value: 'health', label: 'Saúde' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'nurse', label: 'Enfermeiro(a)' },
    { value: 'doctor', label: 'Médico(a)' },
  ];

  const sex = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' },
    { value: 'other', label: 'Outro' },
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
      cpf: removeNonNumeric(data.cpf),
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
        <Title>Cadastro de Voluntário</Title>

        <Input name="name" placeholder="Nome completo" className="input__100" />

        <Input name="password" placeholder="senha" type="password" />

        <InputSelect
          name="sex"
          options={sex}
          placeholder="Sexo"
          styles={{ width: 550 }}
          className="input__50"
        />

        <Input
          name="cpf"
          placeholder="CPF"
          mask="999.999.999-99"
          className="input__50"
        />

        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          className="input__50"
        />

        <Input
          name="fone"
          placeholder="Celular"
          mask="(99) 9999-9999"
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

          <Input name="number" placeholder="Número" mask="9999" />
          <Input name="residence_type" placeholder="Complemento" />

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

        <Title>Como você pode ajudar?</Title>

        <InputSelect
          name="help-type"
          options={helpOptions}
          placeholder="Escolha alguma das opções"
          styles={{ width: 500 }}
          className="input__50"
        />

        <InputSelect
          name="specialty"
          options={specialtyOptions}
          placeholder="Qual a sua especialidade?"
          styles={{ width: 500 }}
          className="input__50"
        />

        <ButtonsWrapper>
          <Link to="/">Cancelar</Link>
          <button type="submit">Cadastrar</button>
        </ButtonsWrapper>
      </Form>
    </Container>
  );
}
