import React from 'react';
import { FooterBase,  ImgLogo} from './styles';
import logo from '../../assets/imagem/LogoMain.png'
function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <ImgLogo src={logo} alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
