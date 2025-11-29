# Games API

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)
![Fastify](https://img.shields.io/badge/Fastify-5.0+-black.svg)
![Biome](https://img.shields.io/badge/Biome-Enabled-yellow.svg)

A robust and scalable backend API built with **Fastify**, **TypeScript**, and **MongoDB**. This project is designed to be high-performance and developer-friendly, utilizing modern tooling and best practices.

## 🚀 Tech Stack

- **Framework:** [Fastify](https://www.fastify.io/) - High performance and low overhead web framework.
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
- **Database:** [MongoDB](https://www.mongodb.com/) - NoSQL database for flexible data storage.
- **Validation:** [Zod](https://zod.dev/) - TypeScript-first schema declaration and validation.
- **Logging:** [Pino](https://github.com/pinojs/pino) - Very low overhead Node.js logger.
- **Tooling:** [Biome](https://biomejs.dev/) - Fast formatter and linter.
- **Package Manager:** [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager.

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [pnpm](https://pnpm.io/installation)
- [MongoDB](https://www.mongodb.com/try/download/community) (or a cloud instance like MongoDB Atlas)

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd games-api-ts
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory. You can use the following template:

    ```env
    # Server Configuration
    PORT=3000

    # Database Configuration
    MONGO_CONN_STRING=mongodb://localhost:27017/games-db
    ```

## 🏃‍♂️ Running the Application

### Development Mode
Starts the server with hot-reloading using `nodemon`.
```bash
pnpm dev
```

### Production Build
Compiles the TypeScript code to JavaScript in the `dist` folder.
```bash
pnpm build
```

### Run Production Build
Runs the compiled JavaScript code.
```bash
pnpm serve
```

### Code Quality
Run the Biome linter and formatter to ensure code quality and consistency.
```bash
# Check for issues
pnpm check

# Automatically fix issues
pnpm check:fix
```

## 📂 Project Structure

The project follows a clean and modular structure:

```
games-api-ts/
├── server/
│   ├── config/         # Configuration files (logger, etc.)
│   ├── controllers/    # Request handlers (Route logic)
│   ├── database/       # Database connection and providers
│   ├── routes/         # API route definitions
│   ├── services/       # Business logic layer
│   ├── app.ts          # Fastify app instance setup
│   └── server.ts       # Application entry point
├── dist/               # Compiled JavaScript (generated)
├── .env                # Environment variables (not committed)
├── biome.json          # Biome configuration
├── package.json        # Project dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
