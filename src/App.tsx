import { useState } from "react"
import SearchForm from '../Components/form/SearchForm'
import UserProfile from '../Components/user/UserProfile'


function App() {
  const [userName,setUserName] = useState('anuPhoenixbis')
  return (
    <main className="mx-auto max-w-6xl px-8 py-20">
      <SearchForm userName={userName} setUserName={setUserName} />
      <UserProfile userName={userName}/>
    </main>
  )
}

export default App

/**
  GraphQL is a way for the frontend to ask exactly for the data it needs, and nothing more.
  Instead of many REST endpoints like:

GET /users
GET /users/1/posts
GET /users/1/profile


You have one endpoint:

POST /graphql


And you send a query like:

query {
  user(id: "1") {
    name
    posts {
      title
    }
  }
}

Key idea:

The client controls the shape of the data, not the server.

Apollo Client is a GraphQL client library for frontend apps (React, Next.js, etc.).

It handles:

Sending GraphQL queries & mutations

Caching results

Managing loading & error states

Updating UI automatically when data changes

Think of it as:

React Query + Axios + Cache, but specifically for GraphQL.
 */