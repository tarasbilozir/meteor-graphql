import { Random } from 'meteor/random';

import Todos from '/imports/api/todos/todos';

export const resolvers = {
  Query: {
    anything: () => Random.id(),
    todos() {
      return Todos.find().fetch();
    },
  },
};
