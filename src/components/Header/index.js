import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdHome,
  MdEqualizer,
  MdMailOutline,
  MdMood,
  MdForum,
  MdSettings,
  MdPermIdentity,
  MdReceipt,
  MdEventNote,
  MdHelpOutline,
} from 'react-icons/md';
import { Container, MenuContainer, MenuList } from './styles';

import UserSection from './UserSection';

const menuItems = [
  { name: 'Home', icon: <MdHome size={18} />, to: '/' },
  { name: 'Dashboard', icon: <MdEqualizer size={18} />, to: '/' },
  { name: 'Pedidos', icon: <MdMailOutline size={18} />, to: '/' },
  { name: 'Doações', icon: <MdMood size={18} />, to: '/' },
  { name: 'Conversas', icon: <MdReceipt size={18} />, to: '/' },
  {
    name: 'Empresa e Voluntários',
    icon: <MdPermIdentity size={18} />,
    to: '/',
  },
  { name: 'Hospitais', icon: <MdForum size={18} />, to: '/' },
  { name: 'Agendamentos', icon: <MdEventNote size={18} />, to: '/' },
  { name: 'Central de Ajuda', icon: <MdHelpOutline size={18} />, to: '/' },
  { name: 'Configuração', icon: <MdSettings size={18} />, to: '/' },
];

export default function Header() {
  return (
    <Container>
      <MenuContainer>
        <span>IRETI</span>

        <MenuList>
          {menuItems.map((item) => (
            <li>
              <Link to={item.to}>
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </MenuList>
      </MenuContainer>

      <UserSection />
    </Container>
  );
}
