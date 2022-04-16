import React, { useContext } from 'react';
import UIContext from '../../context/UIContext';
import Header from '../../components/Header/Header';
import LabelList from '../../components/List/LabelList';
import TodoList from '../../components/List/TodoList';
import Footer from '../../components/Footer/Footer';
import FilterModal from '../../components/Modal/FilterModal';
import AddModal from '../../components/Modal/AddModal';
import { MainLayoutContainer, ContentsContainer, BackgroundContainer } from './styles';

const MainPage: React.VFC = () => {
  const {
    bgColor,
    filterModalVisible,
    addModalVisible
  } = useContext(UIContext);

  return (
    <BackgroundContainer>
      <MainLayoutContainer bgColor={bgColor}>
        <Header />
        <ContentsContainer>
          <section>
            <h2>Labels</h2>
            <LabelList />
          </section>
          <section>
            <h2>TODYs</h2>
            <TodoList />
          </section>
        </ContentsContainer>
        <Footer />
        {filterModalVisible && <FilterModal />}
        {addModalVisible && <AddModal />}
      </MainLayoutContainer>
    </BackgroundContainer>
  )
}

export default MainPage;