const {buildSchema} = require('graphql')

module.exports = buildSchema(`
    type TestData {
        text: String!
        views: Int!
    }

    type Rootquery {
        hello: TestData!
    }
    schema {
        query: Rootquery
    }
`)