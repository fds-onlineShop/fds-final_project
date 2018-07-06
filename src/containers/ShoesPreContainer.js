import React from 'react';
import { Link } from 'react-router-dom';
import { ShoesListConsumer } from '../contexts/ShoesListContext';
import LoadingBox from '../components/LoadingBox';
import ShoesPreList from '../components/ShoesPreList';

export default class ShoesListContainer extends React.Component {
  render() {
    return (
      <ShoesListConsumer>
        {({ loading, submit, infor, RemoveEvent }) =>
          loading ? (
            <LoadingBox />
          ) : (
            <ShoesPreList
              infor={infor}
              onSubmit={submit}
              brandAs={Link}
              RemoveEvent={RemoveEvent}
            />
          )
        }
      </ShoesListConsumer>
    );
  }
}
