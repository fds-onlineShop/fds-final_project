import React from 'react';
import { Link } from 'react-router-dom';
import { BottomListConsumer } from '../contexts/BottomListContext';
import LoadingBox from '../components/LoadingBox';
import BottomList from '../components/BottomList';

export default class BottomListContainer extends React.Component {
  render() {
    return (
      <BottomListConsumer>
        {({
          loading,
          bottoms,
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
            <BottomList
              bottoms={bottoms}
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
      </BottomListConsumer>
    );
  }
}
