import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const App = ({ data: { todos, loading } }) => {
  return (
    <div>
      {loading
        ?
      <span>Loading...</span>
        :
      <div>{todos.map(todo => <span key={todo._id}>{todo.text}<br /></span>)}</div>
      }
    </div>
  );
};

const withData = graphql(
  gql`
  query {
    anything
    todos {
      _id
      text
    }
  }
  `
);

export default withData(App);
