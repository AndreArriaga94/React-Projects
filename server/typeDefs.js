const { gql } = require("apollo-server");

const typeDefs = gql`
  type Post {
    id: Int!
    userName: String!
    image: String!
    text: String!
    totalStars: Float!
    totalComments: Float!
    stars: [Star]
    comments: [Comment]
  }
  type Comment {
    id: Int!
    userName: String!
    text: String!
  }
  type Star {
    id: Int!
    userName: String!
  }
  type User {
    userName: String!
    token: String!
  }
  type Query {
    posts: [Post]
    post(userName: String!): Post
  }
  type Mutation {
    addPost(image: String!, text: String!): Post
    loginUser(userName: String!, password: String!): User
  }
  type Subscription {
    commentAdded(userName: String!): Comment
    starAdded(userName: String!): Star
  }
`;

module.exports = typeDefs;