import { gql } from "apollo-server-express";

export default /* GraphQL */ gql`
  type Token {
    token: String
  }

  type UserInfo {
    firstName: String
    lastName: String
    mobileNo: String
    email: String
    token: String
  }

  type Mutation {
    """
    It allows users to register
    """
    registerUser(
      firstName: String!
      lastName: String!
      mobileNo: String!
      email: String!
      password: String!
    ): UserInfo

    """
    It allows users to authenticate
    """
    authUser(email: String!, password: String!): UserInfo

    """
    It allows to user to delete their account permanently
    """
    deleteMyUserAccount: DeleteResult
  }
`;
