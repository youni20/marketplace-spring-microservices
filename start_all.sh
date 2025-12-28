#!/bin/bash

# Start Infrastructure
echo "Starting Database, Redis, and Kafka..."
docker-compose up -d

echo "Infrastructure started."
echo "Please run the microservices using your IDE or 'mvn spring-boot:run' in each service directory."
echo ""
echo "To start the frontend:"
echo "cd frontend && npm run dev"
