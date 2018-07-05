import React from 'react';
import { Link } from 'react-router-dom';
import { BottomListConsumer } from '../contexts/BottomListContext';
import LoadingBox from '../components/LoadingBox';
import BottomList from '../components/BottomList';

export default class BottomListContainer extends React.Component {
  render() {
    return (
      <BottomListConsumer>
        {({ loading, bottoms, submit }) =>
          loading ? (
            <LoadingBox />
          ) : (
            <BottomList bottoms={bottoms} onSubmit={submit} brandAs={Link} />
          )
        }
      </BottomListConsumer>
    );
  }
}
