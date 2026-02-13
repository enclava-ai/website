# Confidential Document Extraction

> Extract and process data from sensitive documents - PII, corporate files, invoices - with AI while maintaining complete confidentiality. Predefined and custom templates for structured JSON output.

## Process Sensitive Documents Without Exposure

Upload documents containing PII, financial data, or proprietary information. Our extraction engine structures the data using AI - all within the secure enclave.

- **PII & Sensitive Data Handling**: Process documents containing personal information, medical records, financial data, and corporate secrets with complete confidentiality.
- **Structured JSON Extraction**: Define custom templates to extract specific fields and return structured JSON data ready for your automation workflows.
- **Predefined Templates**: Use our built-in templates for common document types - invoices, receipts, ID cards, forms - or create your own.

## Use Cases

### Invoice & Receipt Processing
Automatically extract vendor information, line items, totals, and tax details from invoices and receipts for accounting systems.

### Identity Document Verification
Process driver's licenses, passports, and ID cards to extract personal information for KYC compliance without exposing PII.

### Medical Records Processing
Extract patient information, diagnoses, medications, and treatment plans from medical documents while maintaining HIPAA compliance.

### Contract & Legal Document Analysis
Extract key terms, dates, parties, and clauses from contracts and legal documents to populate contract management systems.

### Form Data Extraction
Process filled forms - applications, surveys, claims - and extract responses into structured data for downstream processing.

### Corporate Document Management
Extract metadata and content from internal documents - memos, reports, presentations - to build searchable document repositories.

## Custom Template System

Define exactly what data you need extracted and in what format. Our AI-powered extraction adapts to your specific document types and output requirements.

1. Define custom extraction schemas with JSON templates
2. Specify field types, validation rules, and formats
3. Use predefined templates or create your own
4. Support for complex nested data structures
5. Built-in validation and error handling

### Example Template

```json
{
  "template": "invoice",
  "fields": {
    "vendor": {
      "type": "object",
      "fields": {
        "name": "string",
        "address": "string",
        "tax_id": "string"
      }
    },
    "invoice_number": "string",
    "invoice_date": "date",
    "due_date": "date",
    "line_items": {
      "type": "array",
      "items": {
        "description": "string",
        "quantity": "number",
        "unit_price": "number",
        "total": "number"
      }
    },
    "subtotal": "number",
    "tax": "number",
    "total": "number"
  },
  "validation": {
    "total": "subtotal + tax"
  }
}
```

## Built for Automation Workflows

Enclava Extract is designed to integrate seamlessly into your existing automation pipelines. Upload documents via API, get structured JSON responses, and feed them directly into your systems.

- **REST API**: Simple HTTP endpoints for document upload and processing
- **Webhook Support**: Get notified when processing completes
- **Batch Processing**: Process multiple documents in parallel
- **Structured Output**: Receive clean JSON ready for your systems

## Links

- [Get Started](/get-started.md)
- [Documentation](https://docs.enclava.ai)
