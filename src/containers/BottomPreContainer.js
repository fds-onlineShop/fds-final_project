import React from 'react';
import { Link } from 'react-router-dom';
import { BottomListConsumer } from '../contexts/BottomListContext';
import LoadingBox from '../components/LoadingBox';
import BottomPreList from '../components/BottomPreList';

export default class BottomListContainer extends React.Component {
  render() {
    return (
      <BottomListConsumer>
        {({ loading, submit, infor, RemoveEvent }) =>
          loading ? (
            <LoadingBox />
          ) : (
            <BottomPreList
              infor={infor}
              onSubmit={submit}
              brandAs={Link}
              RemoveEvent={RemoveEvent}
            />
          )
        }
      </BottomListConsumer>
    );
  }
}
