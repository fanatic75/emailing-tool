# Node Email Sender App

This Node.js application is designed to send emails using the SMTP protocol. It's built on the NestJS framework and utilizes Drizzle ORM for database operations. The application is containerized using Docker for easy deployment and management.

## Prerequisites

Before running this application, ensure you have the following dependencies installed:

- Docker
- Docker Compose
- Node.js

## Swagger Documentation

The Swagger documentation for the API endpoints is available at `/api` when the application is running. This documentation provides detailed information about each endpoint, including request parameters, response formats, and example requests and responses.

To view the Swagger documentation, open your web browser and navigate to `http://localhost:3000/api`.


## Configuration

This application relies on environment variables for configuration. Please ensure the following environment variables are properly set before running the application:

These environment variables can be set either directly in your system environment or by creating a `.env` file in the root directory of the project.

Example `.env` file:
NODE_ENV = development
DATABASE_URL = postgres://postgres:password@db:5432/postgres
POSTGRES_USER = postgres
POSTGRES_PASSWORD = password


## Usage

To run the application, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project.
3. Set the required environment variables as described in the Configuration section.
4. Run the following command to build and start the Docker containers:`docker-compose up -d --build`
5. Once the containers are up and running, the application will be accessible at `http://localhost:3000`.

## Development

If you want to make modifications to the application or debug it locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project.
3. Install dependencies using npm:
pnpm install

4. Set the required environment variables as described in the Configuration section.
5. Start the development server: `docker compose up -d --build`
6. You can now access the application locally at `http://localhost:3000`.

## Docker Deployment

This application is Dockerized, making it easy to deploy in various environments. To deploy the application using Docker, follow the steps outlined in the Usage section above.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [MIT](LICENSE) file for details.