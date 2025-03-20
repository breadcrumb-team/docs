---
sidebar_position: 5
---

# Embedding Content

Breadcrumb allows you to embed real-time, interactive data visualizations on your website with ease. This guide will walk you through the process of embedding Breadcrumb analytics into your application.

## Features

- **Real-time interactive visualizations**
- **Simple widget integration**
- **Easy HTML embedding**
- **Live data updates**
- **Hassle-free embedding process**

## Prerequisites

Before embedding Breadcrumb analytics, you'll need to:

1. **Set up Sources**: Connect your database using the [Sources API](/Developer%20Guide/api_ref/#tag/sources).
2. **Create a Space**: Set up a space for your data using the [Spaces API](/Developer%20Guide/api_ref/#tag/spaces).
3. **Generate an Embed Token**: Get an authentication token using the [Embed API](/Developer%20Guide/api_ref/#tag/embed).

## Embedding the Widget

Once you have your space created and embed token generated, you can embed the widget using an iframe:

```html
<iframe src="https://app.breadcrumb.ai/embed/spaces/your-space-id?embed_token=your-embed-token">
</iframe>
```

For detailed API documentation and examples, visit our [API Reference](https://api.breadcrumb.ai/v1/redoc#tag/embed).
