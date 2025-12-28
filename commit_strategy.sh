#!/bin/bash

# Function to commit with date
git_commit() {
    msg="$1"
    date="$2"
    GIT_AUTHOR_DATE="$date 12:00:00" GIT_COMMITTER_DATE="$date 12:00:00" git commit -m "$msg"
}

# Ensure we are in the root
cd /home/youni/Documents/shopping

# 1. Week 1: Infrastructure (Jan 5)
git add pom.xml docker-compose.yml
git_commit "feat: initialize project structure and infrastructure" "2025-01-05"

git add eureka-server/
git_commit "feat: implement Eureka Service Discovery" "2025-01-06"

git add config-server/
git_commit "feat: implement Spring Cloud Config Server" "2025-01-07"

git add api-gateway/
git_commit "feat: implement API Gateway" "2025-01-08"

# 2. Week 2: User Service (Jan 12)
git add user-service/
git_commit "feat: implement User Service with Security and JWT" "2025-01-12"

# 3. Week 3: Product & Inventory (Jan 19)
git add product-service/
git_commit "feat: implement Product Service with Elasticsearch integration" "2025-01-19"

git add inventory-service/
git_commit "feat: implement Inventory Service" "2025-01-23"

# 4. Week 4: Cart Service (Jan 26)
git add cart-service/
git_commit "feat: implement Cart Service with Redis" "2025-01-26"

# 5. Week 5: Order Service (Feb 2)
git add order-service/
git_commit "feat: implement Order Service with Saga pattern" "2025-02-02"

# 6. Week 6: Payment & Notification (Feb 9)
git add payment-service/
git_commit "feat: implement Payment Service" "2025-02-09"

git add notification-service/
git_commit "feat: implement Notification Service with Kafka" "2025-02-13"

# 7. Week 7: Admin & Frontend (Feb 16)
git add admin-service/
git_commit "feat: implement Admin Service backend" "2025-02-16"

git add frontend/
git_commit "feat: scaffold React Frontend Application" "2025-02-17"

# 8. Documentation (Feb 23)
git add README.md
git_commit "docs: add comprehensive README and documentation" "2025-02-23"

# Push to remote
git push origin main
