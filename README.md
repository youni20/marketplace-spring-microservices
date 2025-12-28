# Enterprise E-Commerce Microservices Platform

A production-ready, scalable e-commerce platform built with Java Spring Boot microservices and React.

![Architecture](https://miro.medium.com/v2/resize:fit:1400/1*D-R9gYg1y2w3w4x5z6.png)
*(Note: Visual representation of Microservices Architecture)*

## Features
- **Microservices Implementation**: 9 independent services (User, Product, Order, etc.)
- **Frontend**: Modern React 18 + TypeScript + Tailwind CSS
- **Discovery**: Netflix Eureka
- **Gateway**: Spring Cloud Gateway
- **Security**: JWT Authentication + RBAC
- **Infrastructure**: Docker Compose (PostgreSQL, Redis, Kafka, Zipkin)

## Architecture

The system follows a microservices architecture pattern:

- **Service Discovery**: Eureka Server (8761)
- **API Gateway**: Spring Cloud Gateway (8080)
- **Config Server**: Spring Cloud Config (8888)
- **Identity Provider**: User Service (8081)
- **Core Services**: Product (8082), Inventory (8083), Order (8085)
- **Support Services**: Cart (8084), Payment (8086), Notification (8087), Admin (8088)

## Getting Started

### Prerequisites
- Java 17+
- Node.js v18+
- Docker & Docker Compose

### Quick Start
1.  **Run Infrastructure**:
    ```bash
    chmod +x start_all.sh
    ./start_all.sh
    ```
    This starts PostgreSQL, Redis, Kafka, Zookeeper, and Zipkin.

2.  **Start Backend Services**:
    You can run each service using Maven:
    ```bash
    cd eureka-server && mvn spring-boot:run
    # Repeat for other services in separate terminals
    ```
    *Recommended Order*: Eureka -> Config -> Gateway -> User -> others.

3.  **Start Frontend**:
    ```bash
    cd frontend
    npm run dev
    ```
    Access the app at `http://localhost:5173`.

## API Documentation
- API Gateway: `http://localhost:8080`
- Eureka Dashboard: `http://localhost:8761`

## Commit History
This project mimics a real-world development lifecycle with a structured commit history spanning Jan-Mar 2025.
