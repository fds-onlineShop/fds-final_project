import React from 'react';
import { Link } from 'react-router-dom';
import { BagListConsumer } from '../contexts/BagListContext';
import LoadingBox from '../components/LoadingBox';
import BagList from '../components/BagList';

export default class BagListContainer extends React.Component {
  render() {
    return (
      <BagListConsumer>
        {({
          loading,
          bags,
          submit,
          handleOver,
          handleOut,
          ClickEvent,
          infor,
          RemoveEvent,
        }) =>
          loading ? (
            <LoadingBox />
          ) : (
            <BagList
              bags={bags}
              onSubmit={submit}
              brandAs={Link}
              handleOver={handleOver}
              handleOut={handleOut}
              ClickEvent={ClickEvent}
              infor={infor}
              RemoveEvent={RemoveEvent}
            />
          )
        }
      </BagListConsumer>
    );
  }
}
