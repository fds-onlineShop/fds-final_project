import React from 'react';
import { Link } from 'react-router-dom';
import { TopListConsumer } from '../contexts/TopListContext';
import LoadingBox from '../components/LoadingBox';
import TopList from '../components/TopList';

export default class TopListContainer extends React.Component {
  render() {
    return (
      <TopListConsumer>
        {({ loading, tops, submit }) =>
          loading ? (
            <LoadingBox />
          ) : (
            <TopList tops={tops} onSubmit={submit} brandAs={Link} />
          )
        }
      </TopListConsumer>
    );
  }
}
