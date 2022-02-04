import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import LabelList from '../../components/List/LabelList';
import TodoList from '../../components/List/TodoList';
import Footer from '../../components/Footer/Footer';
import { MainLayoutContainer, ContentsContainer } from './styles';
import FilterModal from '../../components/Modal/FilterModal';
import AddModal from '../../components/Modal/AddModal';

function MainPage(): JSX.Element {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [bgColor, setBgColor] = useState("#FFFFFF");

  return (
    <MainLayoutContainer bgColor={bgColor}>
      <div>
        <Header
          bgColor={bgColor}
          setBgColor={setBgColor}
          filterModalVisible={filterModalVisible}
          addModalVisible={addModalVisible}
          setFilterModalVisible={setFilterModalVisible}
          setAddModalVisible={setAddModalVisible}
        />
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
      </div>
      <Footer />
      {filterModalVisible &&
        <FilterModal
          setFilterModalVisible={setFilterModalVisible}
        />
      }
      {addModalVisible &&
        <AddModal
          setAddModalVisible={setAddModalVisible}
        />
      }
    </MainLayoutContainer>
  )
}

export default MainPage;