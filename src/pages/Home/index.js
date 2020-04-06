import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import FirstSection from './FirstSection';
import AboutSection from './AboutSection';
import HospitalSection from './HospitalSection';
import RegionsSection from './RegionsSection';

import { Wrapper } from '~/styles/default';

import {
  ContactSection,
  FormComponent,
  InputWrapper,
  Footer,
  HelpWrapper,
  FooterWrapper,
} from './styles';

import Input from '~/components/Form/Input';
import Date from '~/components/Form/Date';

export default function Home() {
  function handleSubmit(data, { reset }) {
    reset();
  }

  return (
    <>
      <Header />
      <FirstSection /> {/** A maneira... e Noticias Do SUS */}
      <Wrapper>
        <AboutSection /> {/** Os três itens sobre nossa empresa */}
      </Wrapper>
      <HospitalSection /> {/** Video e os hospitais precisam da nossa ajuda */}
      <RegionsSection /> {/** Sessão com o mapa */}
      <ContactSection>
        <h1>Quer agendar uma conversa?</h1>
        <FormComponent onSubmit={handleSubmit} id="create_schedule">
          <InputWrapper>
            <Input name="name" placeholder="Nome" />
            <Input name="fone" placeholder="Celular" mask="(99) 9999-9999" />
          </InputWrapper>

          <InputWrapper>
            <Input type="email" name="email" placeholder="E-mail" />
            <Date name="date" placeholderText="Escolha a data" />
          </InputWrapper>
        </FormComponent>

        <button type="submit" form="create_schedule">
          Cadastrar
        </button>
      </ContactSection>
      <Footer>
        <Wrapper>
          <FooterWrapper>
            <h2>Patrocinadores</h2>

            <HelpWrapper>
              <Link to="/">Sobre</Link>
              <Link to="/">Nossos Valores</Link>
              <Link to="/">Central de Ajuda</Link>
            </HelpWrapper>
          </FooterWrapper>
        </Wrapper>
      </Footer>
    </>
  );
}
