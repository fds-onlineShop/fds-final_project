import React from 'react';
import { Link } from 'react-router-dom';
import { ShoesListConsumer } from '../contexts/ShoesListContext';
import LoadingBox from '../components/LoadingBox';
import ShoesList from '../components/ShoesList';

export default class ShoesListContainer extends React.Component {
  render() {
    return (
      <ShoesListConsumer>
        {({ loading, shoes, submit, handleOver, handleOut }) =>
          loading ? (
            <LoadingBox />
          ) : (
            <ShoesList
              shoes={shoes}
              onSubmit={submit}
              brandAs={Link}
              handleOver={handleOver}
              handleOut={handleOut}
            />
          )
        }
      </ShoesListConsumer>
    );
  }
}
