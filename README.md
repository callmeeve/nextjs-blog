# Blog Website

This project is a full-featured blog website built with modern web technologies. It leverages **Next.js 14** for server-side rendering and API routes, **Prisma** as the ORM for interacting with a **MongoDB** database, and **NextAuth** for authentication. **ShadCN UI** and **Magic UI** are used to create a sleek, responsive user interface.

## Features

- **Next.js 14**: Fast server-side rendering, static generation, and API route handling.
- **Prisma**: Database ORM to interact with MongoDB.
- **MongoDB**: Scalable NoSQL database to store blog data.
- **NextAuth**: Flexible authentication solution supporting email and third-party providers.
- **ShadCN UI**: Modern, customizable UI components for a polished user experience.
- **Magic UI**: Additional UI elements for added functionality and design.

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (version 16+)
- MongoDB (local instance or MongoDB Atlas)
- Prisma CLI

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/callmeeve/nextjs-blog.git
   cd your-blog-website

   ```

2. **Install dependencies:**

    ```bash
    npm install

    ```

3. **Set up environment variables:**

    Create a .env file in the root directory and fill in the following:

    ```bash
    DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/mydb"
    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="your-secret-key"

    ```

    Adjust the DATABASE_URL according to your MongoDB setup.

4. **Running the Application**

    To start the development server:

    ```bash
    npm run dev

    ```
