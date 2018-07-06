import React from 'react';
import { Link } from 'react-router-dom';
import { CoatListConsumer } from '../contexts/CoatListContext';
import LoadingBox from '../components/LoadingBox';
import CoatPreList from '../components/CoatPreList';

export default class CoatListContainer extends React.Component {
  render() {
    return (
      <CoatListConsumer>
        {({ loading, submit, infor, RemoveEvent }) =>
          loading ? (
            <LoadingBox />
          ) : (
            <CoatPreList
              infor={infor}
              onSubmit={submit}
              brandAs={Link}
              RemoveEvent={RemoveEvent}
            />
          )
        }
      </CoatListConsumer>
    );
  }
}
