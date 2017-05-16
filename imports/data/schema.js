export const typeDefs = [
  `
type Todo {
  _id: String
  text: String
}

type Query {
  anything: String
  todos: [Todo]
}

schema {
  query: Query
}
`,
];
