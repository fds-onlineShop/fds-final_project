import React from 'react';
import { Link } from 'react-router-dom';
import { TopListConsumer } from '../contexts/TopListContext';
import LoadingBox from '../components/LoadingBox';
import TopPreList from '../components/TopPreList';

export default class TopListContainer extends React.Component {
  render() {
    return (
      <TopListConsumer>
        {({ loading, submit, infor, RemoveEvent }) =>
          loading ? (
            <LoadingBox />
          ) : (
            <TopPreList
              infor={infor}
              onSubmit={submit}
              brandAs={Link}
              RemoveEvent={RemoveEvent}
            />
          )
        }
      </TopListConsumer>
    );
  }
}
