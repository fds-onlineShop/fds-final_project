import React from 'react';
import { Link } from 'react-router-dom';
import { BagListConsumer } from '../contexts/BagListContext';
import LoadingBox from '../components/LoadingBox';
import BagPreList from '../components/BagPreList';

export default class BagListContainer extends React.Component {
  render() {
    return (
      <BagListConsumer>
        {({ loading, submit, infor, RemoveEvent }) =>
          loading ? (
            <LoadingBox />
          ) : (
            <BagPreList
              infor={infor}
              onSubmit={submit}
              brandAs={Link}
              RemoveEvent={RemoveEvent}
            />
          )
        }
      </BagListConsumer>
    );
  }
}
