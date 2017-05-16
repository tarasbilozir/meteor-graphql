import { Meteor } from 'meteor/meteor';

import Todos from '/imports/api/todos/todos';

Meteor.startup(() => {
  const todos = [
    {
      text: 'Play football',
    },
    {
      text: 'Go for a walk',
    },
  ];

  const todosCount = Todos.find().fetch().length;

  if (!todosCount) {
    todos.forEach(todo => Todos.insert(todo));
  }
});
