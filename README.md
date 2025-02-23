# Enterprise E-Commerce Microservices Platform

A production-ready, scalable e-commerce platform built with Java Spring Boot microservices and React.

## Architecture

The system follows a microservices architecture pattern with the following components:

- **Service Discovery**: Eureka Server
- **API Gateway**: Spring Cloud Gateway
- **Config Server**: Spring Cloud Config
- **Identity Provider**: User Service with JWT
- **Core Services**: Product, Inventory, Order, Cart, Payment, Notification, Admin

### Tech Stack
- **Backend**: Java 17+, Spring Boot 3, Spring Cloud
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Data**: PostgreSQL, Redis, MongoDB
- **Messaging**: Apache Kafka
- **Infrastructure**: Docker, Kubernetes ready

## Getting Started

### Prerequisites
- Java 17 or higher
- Docker & Docker Compose
- Node.js v18+

### Setup

1.  **Start Infrastructure**
    ```bash
    docker-compose up -d
    ```

2.  **Build Services**
    ```bash
    mvn clean install -DskipTests
    ```
    *(Note: If Maven is not installed, use the included wrapper `mvnw` if available, or install Maven)*

3.  **Run Services**
    Start the services in the following order:
    1.  Discovery Server
    2.  Config Server
    3.  API Gateway
    4.  User, Product, Inventory, Cart, Order, Payment, Notification, Admin

4.  **Run Frontend**
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

## API Documentation
Once services are running, access the API Gateway at `http://localhost:8080`.
Individual Swagger UIs are available at `http://localhost:<port>/swagger-ui.html` (if dependency added).

## Future Roadmap
- [ ] Advanced Recommendation Engine
- [ ] Kubernetes Helm Charts
- [ ] ELK Stack Integration
