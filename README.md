🔍 GitHub User Search (GraphQL + Apollo Client)

A mini project built to learn and understand GraphQL and Apollo Client by interacting with the GitHub GraphQL API.
The app allows searching GitHub users by username and fetching structured profile data using GraphQL queries.

🚀 Project Overview

This project was created as a hands-on learning exercise to explore:

how GraphQL queries differ from REST

how Apollo Client manages data fetching, caching, and errors

how a frontend can precisely control the shape of data it receives

Instead of focusing on UI complexity, the emphasis is on correct GraphQL usage and client-side data management.

✨ Features

🔎 Search GitHub users by username

📄 Fetch user profile data using GraphQL

⚡ Efficient data fetching with Apollo Client

🧠 Centralized error handling using Apollo links

🗂️ Structured and typed GraphQL responses

🧠 What I Learned

Writing GraphQL queries against a real-world API (GitHub)

Using Apollo Client for:

queries

caching

loading & error states

Understanding GraphQL error vs network error handling

How GraphQL avoids over-fetching compared to REST

Practical usage of tokens with GraphQL APIs

🛠️ Tech Stack

Frontend: React (Vite)

GraphQL Client: Apollo Client

API: GitHub GraphQL API

Language: TypeScript

Styling: CSS / Tailwind (if applicable)

📦 Setup & Installation
1️⃣ Clone the repository
git clone git@github.com:anuPhoenixbis/github_Search_users_project.git
cd github_Search_users_project

2️⃣ Install dependencies
npm install

3️⃣ Environment variables

Create a .env file:

VITE_GITHUB_TOKEN=your_github_personal_access_token


⚠️ The token is required to access the GitHub GraphQL API.

4️⃣ Run the project
npm run dev

🔐 Notes on Authentication

GitHub GraphQL API requires authentication

The token is used only for learning purposes

In production, this should be handled via a backend proxy to avoid exposing secrets

🎯 Why GraphQL Here?

GitHub’s API is a great example of where GraphQL shines:

deeply nested data

flexible query structure

reduced network requests

This project demonstrates why and when GraphQL + Apollo Client are useful.

🔮 Possible Enhancements

User repositories & followers

Pagination with GraphQL cursors

UI improvements

Server-side proxy for secure token handling

Search history

👨‍💻 Author

Anubhav Biswas
Computer Science Student | Full-Stack & AI Enthusiast
Learning by building and experimenting with real-world tools.