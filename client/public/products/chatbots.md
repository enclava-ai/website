# Confidential Chatbots

> OpenAI-compatible endpoints automatically enriched with your private knowledge base. Deploy support bots and Q&A systems that understand your proprietary data without exposing it.

## RAG-Enhanced Chat, Zero Configuration

Every request to your chatbot is automatically enriched with relevant context from your knowledge base. No complex RAG pipeline setup required - just point your app at our OpenAI-compatible endpoint.

- **Auto-Enriched Context**: Each query automatically retrieves relevant information from your knowledge base and includes it in the context window.
- **Drop-In Replacement**: Works anywhere the OpenAI API is supported. Change the endpoint URL, and you're done - no code changes needed.
- **Confidential by Default**: Your documents never leave the secure enclave. RAG processing happens entirely within the encrypted environment.

## Use Cases

### Customer Support Bots
Deploy chatbots that can answer questions using your internal documentation, support tickets, and product knowledge.

### Internal Q&A Systems
Give employees instant access to company policies, procedures, and institutional knowledge through a simple chat interface.

### Developer Documentation Assistants
Help developers navigate complex API documentation and internal code standards with an AI assistant that knows your codebase.

### Knowledge Base Search
Transform static knowledge bases into interactive conversational interfaces that understand context and can surface relevant information.

## Simple Integration

Replace your OpenAI endpoint with Enclava's chatbot endpoint. We handle the RAG pipeline automatically.

1. Upload your documents to a knowledge base
2. Get your chatbot endpoint URL
3. Point your application at the new endpoint
4. Every query is automatically enriched with relevant context

### Example

```javascript
import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://your-enclava.com/chatbot/kb_123',
  apiKey: process.env.ENCLAVA_API_KEY
});

// That's it! All queries now use your KB
const response = await client.chat.completions.create({
  model: 'claude-3-5-sonnet-20241022',
  messages: [
    { role: 'user', content: 'How do I reset my password?' }
  ]
});

// Response is enriched with your docs automatically
```

## Links

- [Get Started](/get-started.md)
- [Documentation](https://docs.enclava.ai)
