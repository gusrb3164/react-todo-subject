import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { MainLayoutContainer } from './styles';

function MainPage(): JSX.Element {
  return (
    <MainLayoutContainer>
      <Header />
      <Footer />
    </MainLayoutContainer>
  )
}

export default MainPage;