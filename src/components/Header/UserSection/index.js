import React from 'react';
import InputSearch from 'react-search';
import { MdSearch, MdForum, MdNotifications } from 'react-icons/md';
import { Container, SearchInputWrapper, InputSelect, UserInfo } from './styles';

const visionOption = [
  { value: 'master', label: 'Visão Master' },
  { value: 'company-assistance', label: 'Visão Assistente de empresas' },
  { value: 'hospital-assistance', label: 'Visão Assistente de hospitais' },
  { value: 'person', label: 'Visão Voluntário pessoa física' },
  { value: 'company', label: 'Visão Voluntário pessoa jurídica' },
];

const userOption = [
  { value: 'perfil', label: 'Perfil' },
  { value: 'exit', label: 'Sair' },
];

const items = [
  { id: 0, value: 'Pedidos' },
  { id: 1, value: 'Hospitais' },
  { id: 2, value: 'Doações' },
  { id: 3, value: 'Agendamentos' },
  { id: 4, value: 'Empresa e Voluntários' },
];

export default function UserSection() {
  function handleChange(e) {
    if (e.value === 'exit') {
      localStorage.removeItem('login');
    }
  }

  return (
    <Container>
      <SearchInputWrapper>
        <MdSearch className="search" size={22} color="#bcbccb" />
        <InputSearch items={items} placeholder="Buscar" />
      </SearchInputWrapper>

      <InputSelect
        name="vision-option"
        options={visionOption}
        placeholder="Visão Master"
        theme={(theme) => {
          return {
            ...theme,
            colors: {
              ...theme.colors,
              primary: '#fed308',
              primary75: '#fed308',
              primary50: '#fed308',
              primary25: '#fed308',
            },
          };
        }}
      />

      <button type="button">
        <MdForum size={22} color="#bcbccb" />
      </button>

      <button type="button">
        <MdNotifications size={22} color="#bcbccb" />
      </button>

      <UserInfo>
        <InputSelect
          name="user-option"
          options={userOption}
          placeholder="Marcos Willian"
          onChange={handleChange}
          theme={(theme) => {
            return {
              ...theme,
              colors: {
                ...theme.colors,
                primary: '#fed308',
                primary75: '#fed308',
                primary50: '#fed308',
                primary25: '#fed308',
              },
            };
          }}
          on
        />

        <img
          src="https://api.adorable.io/avatars/90/abott@adorable.png"
          alt="IRETI"
        />
      </UserInfo>
    </Container>
  );
}
