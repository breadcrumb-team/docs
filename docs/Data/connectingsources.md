---
sidebar_position: 7
---

# Managing and Connecting Sources

Effective data management starts with connecting your sources to Breadcrumb. Breadcrumb supports both **spreadsheet uploads** and **data connectors**, giving you the flexibility to work with your data seamlessly.

---

## 1. Spreadsheet Uploads

If you work with data stored in spreadsheets, Breadcrumb makes it easy to upload and manage these files directly in your space.

### How to Upload a Spreadsheet:
1. Navigate to your **Manage Sources** in Breadcrumb or **Create a space**.
2. Click on **Add Sources** and select **Upload Spreadsheet**.
3. Choose your file in one of the supported formats:
   - Excel (.xlsx)
   - CSV (.csv)
4. Once uploaded, Breadcrumb will:
   - Automatically parse and clean the data.

### Best Practices for Spreadsheet Uploads:

Breadcrumb's AI will automa

- **Organize Your Data:** Ensure column headers are clear and descriptive for better parsing and usability.
- **File Size:** For larger files, ensure they do not exceed the platform's upload limits (check the Help Center for specifics).
- **Data Types:** Review your dataset to ensure correct formats (e.g., dates, numbers, text).

---

## 2. Data Connectors

Breadcrumb also supports integrations with popular databases and third-party tools via **data connectors**. This allows you to sync live data directly into your workspace.

### Supported Data Connectors:
- **Databases:** MySQL, PostgreSQL, SQL Server, MongoDB, etc.
- **Cloud Platforms:** Snowflake, BigQuery, Redshift, etc.
- **APIs:** RESTful APIs for custom integrations.
- **Other Tools:** Airtable, Google Sheets, Salesforce, etc.

### How to Connect a Data Source:
1. Navigate to your **Space** and click **Add Sources**.
2. Select **Connect Data Source** and choose your preferred connector from the list.
3. Enter the required connection details:
   - **Database Name**
   - **Host Address**
   - **Port**
   - **Authentication Credentials (username/password or API key)**
4. Click **Test Connection** to verify the connection.
5. Once verified, select the tables or datasets you wish to import and click **Connect**.

### Key Features of Data Connectors:
- **Real-Time Syncing:** Automatically fetch updated data to keep your dashboards current.
- **Custom Queries:** Run SQL queries or filters to import only the data you need.
- **Secure Integrations:** All connections are encrypted to ensure data security.

---

## Managing Connected Sources

Breadcrumb provides tools to manage your connected sources effectively:
- **Source Settings:** Access settings for each connected source to update configurations or change credentials.
- **Data Refresh:** Schedule automatic data refreshes or manually trigger updates.
- **Source Logs:** View connection and sync logs to troubleshoot issues or monitor activity.

---

## Tips for Managing and Connecting Sources:
- Regularly review connected sources to ensure they’re up to date and relevant.
- Use Breadcrumb’s AI agents to quickly explore connected datasets and generate insights.
- Combine multiple sources into a single dashboard to analyze data from various tools side by side.

---

With Breadcrumb’s flexible options for managing and connecting sources, you can easily centralize and organize your data for deeper analysis and collaboration.