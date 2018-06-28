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
            <TopList
              as={Link}
              onSubmit={submit}
              tops={tops.map(p => ({
                linkProps: { to: `/top/${p.id}` },
                ...p,
              }))}
            />
          )
        }
      </TopListConsumer>
    );
  }
}
