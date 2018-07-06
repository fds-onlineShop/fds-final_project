import React from 'react';
import { Link } from 'react-router-dom';
import { ShoesListConsumer } from '../contexts/ShoesListContext';
import LoadingBox from '../components/LoadingBox';
import ShoesList from '../components/ShoesList';

export default class ShoesListContainer extends React.Component {
  render() {
    return (
      <ShoesListConsumer>
        {({
          loading,
          shoes,
          submit,
          handleOver,
          handleOut,
          ClickEvent,
          infor,
          RemoveEvent,
        }) =>
          loading ? (
            <LoadingBox />
          ) : (
            <ShoesList
              shoes={shoes}
              onSubmit={submit}
              brandAs={Link}
              handleOver={handleOver}
              handleOut={handleOut}
              ClickEvent={ClickEvent}
              infor={infor}
              RemoveEvent={RemoveEvent}
            />
          )
        }
      </ShoesListConsumer>
    );
  }
}
