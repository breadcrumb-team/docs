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
- **Responsive design support**
- **Secure authentication**
- **Customizable appearance**

## Create a space

### Create a space via the Breadcrumb UI

See [Spaces](/Spaces).

### Create a space via the Breadcrumb API

1. **Set up a data source**: Connect your data source using the [Sources API](/Developer%20Guide/api_ref/#tag/sources).
2. **Create a Space**: Set up a space for your data using the [Spaces API](/Developer%20Guide/api_ref/#tag/spaces).

## Embedd a space

### Embed a public space

To embed a publicly accessible space, simply copy the iframe code below and replace `your-space-id` with your actual space ID:

```html
<iframe
  src="https://app.breadcrumb.ai/embed/spaces/<your-space-id>"
  width="100%"
  height="600px"
  frameborder="0"
></iframe>
```

### Embed a private space

1. **Generate an embed token**

Call the [/embed/token](/Developer%20Guide/api_ref/#tag/embed) API endpoint from your server to obtain a secure embed token.

2. **Add the embed code**

Once you have obtained the embed token, add it to your iframe code:

```html
<iframe
  src="https://app.breadcrumb.ai/embed/spaces/<your-space-id>?embedToken=<your-embed-token>"
  width="100%"
  height="600px"
  frameborder="0"
></iframe>
```

## Security Best Practices

- Embed tokens are short-lived. You should always call the `/embed/token` API to obtain a fresh token every time the embeded space is rendered.
- The `/embed/token` API endpoint requires authentication via API key. For security purposes, all token generation requests must be handled server-side to prevent exposure of API credentials in client-side code.

## Support

Need help with embedding? Contact our support team or visit our [Help Center](/help) for additional resources.
