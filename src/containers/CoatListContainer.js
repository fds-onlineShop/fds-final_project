import React from 'react';
import { Link } from 'react-router-dom';
import { CoatListConsumer } from '../contexts/CoatListContext';
import LoadingBox from '../components/LoadingBox';
import CoatList from '../components/CoatList';

export default class CoatListContainer extends React.Component {
  render() {
    return (
      <CoatListConsumer>
        {({ loading, coats, submit, handleOver, handleOut }) =>
          loading ? (
            <LoadingBox />
          ) : (
            <CoatList
              coats={coats}
              onSubmit={submit}
              brandAs={Link}
              handleOver={handleOver}
              handleOut={handleOut}
            />
          )
        }
      </CoatListConsumer>
    );
  }
}
