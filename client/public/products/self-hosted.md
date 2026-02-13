# Self-Hosted Enclava Platform

> Available Now - Open Source. Deploy private AI in your environment with full control. Keep your data within your security perimeter while meeting the strictest compliance requirements.

## Benefits

- **Complete Control**: Deploy on your infrastructure with full administrative access. No third-party dependencies for your sensitive data.
- **Maximum Security**: Keep your data within your security perimeter. Meet SOC 2, HIPAA, and GDPR requirements with on-premise deployment.
- **Full Customization**: Modify, extend, and integrate freely. Access to source code and unlimited customization options.

## Production Ready Architecture

The self-hosted package comes with everything you need to run at scale.

- Docker-deployed with PostgreSQL cluster
- Load balancing & auto-scaling configuration
- High availability setup included
- Comprehensive monitoring & logging
- Automated backup & recovery scripts

### Example Docker Compose

```yaml
services:
  enclava-core:
    image: enclava/core:latest
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]
    environment:
      - TEE_MODE=sgx
      - ENCRYPTION_KEY=${KEY}
    volumes:
      - ./secure-data:/data:ro
    networks:
      - secure-mesh

  database:
    image: postgres:15-alpine
    encrypted: true
```

## Links

- [GitHub Repository](https://github.com/enclava-ai/enclava)
- [Documentation](https://docs.enclava.ai)
- [Schedule a Call](https://cal.com/aljaz/enclava)
