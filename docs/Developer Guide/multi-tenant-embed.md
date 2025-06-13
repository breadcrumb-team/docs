---
sidebar_position: 6
---

# Multi-tenant Embedding

Multi-tenant embedding is an advanced use case that allows you to provide personalized Breadcrumb dashboards to each of your users while maintaining control over the data and customization options. This guide will walk you through implementing multi-tenant embedding in your application.

## Overview

Multi-tenant embedding enables you to:
- Embed personalized dashboards for each user using a multi-tenant data source (e.g., a database)
- Allow users to customize their dashboards individually while maintaining administrative control
- Securely filter data based on user ownership
- Manage user access and permissions effectively

## Implementation Steps

### 1. Create a Space Template

First, create a space template using the Breadcrumb UI:
1. Connect your multi-tenant data source and [create a space](/Spaces) that will serve as your template
3. Design your visualizations and layouts
4. Note down the template space ID for later use

### 2. User Authentication

When a user logs into your application:
1. Authenticate the user in your system
2. Generate a secure embed token by calling the [/embed/token](/Developer%20Guide/api_ref/#tag/embed) API endpoint, passing the user's name and email address as parameters. This token will be used to display the embedded space in step 4.

### 3. Create User-Specific Space

For each user, create a space based on your template:
1. Call the [Spaces API](/Developer%20Guide/api_ref/#tag/spaces) to create a new space
2. Specify the template space ID from step 1
3. Include a row filter to restrict data access to the user's data only
4. Store the new space ID for future reference

### 4. Embed the Space

Embed the user's space in your application by adding the iframe code to your application. Replace `<embed-token>` with the token obtained from step 2.

```html
<iframe
  src="https://app.breadcrumb.ai/embed/spaces/<user-space-id>?embedToken=<embed-token>"
  width="100%"
  height="600px"
  frameborder="0"
></iframe>
```

## Data Security

- Each user's space is isolated from other users
- Row filters ensure users can only access their own data
- JWT authentication provides secure user identification
- Embed tokens are short-lived and should not be persisted permanently

## Customization Control

While users can customize their dashboards, you maintain control through:
- Template-based space creation
- Configurable customization options
- Ability to reset spaces to template defaults if needed
- Administrative oversight of all user spaces

## Best Practices

1. **Token Management**
   - Generate fresh embed tokens for each session
   - Handle token generation server-side
   - Implement proper token refresh mechanisms

2. **Space Management**
   - Clean up unused spaces
   - Monitor space usage and performance
   - Implement proper error handling for space creation

3. **User Experience**
   - Provide clear loading states during space creation
   - Handle authentication errors gracefully
   - Implement proper error messages for data access issues

## Support

Need help with multi-tenant embedding? Contact our support team or visit our [Help Center](/help) for additional resources.
