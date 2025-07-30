---
id: deployment-docker
slug: /operations/deployment/docker
sidebar_label: Docker Deployment
title: Docker Deployment
---

# Docker Deployment

This page explains how to deploy AgamX using Docker.

## Steps
1. Build the Docker image:
   ```bash
   docker build -t agamx-agent .
   ```
2. Run the container:
   ```bash
   docker run -d -p 8000:8000 agamx-agent
   ```

## Best Practices
- Use environment variables for configuration
- Mount volumes for persistent data
- Monitor container logs for issues

---

See the Dockerfile and deployment scripts in the repository for details. 