# Breadcrumb Prompting Guidelines

These guidelines help you craft effective prompts for [Breadcrumb.ai](http://breadcrumb.ai/) to analyze your data and produce the right visualizations and insights.

## What Breadcrumb can do

- Analyze data across multiple sources
- Visualize results as charts, tables, dashboards, and reports
- Answer follow-up questions and remember context
- Brainstorm data-driven business decisions

## How to write effective prompts

Breadcrumb understands everyday language, but giving it a bit more direction helps it deliver exactly what you need.

### Include these elements in your prompt

- **Business goal**: what decision or question are you answering?
- **Metric(s)**: e.g., revenue, orders, MAU, conversion rate
- **Filters**: e.g., region = US, channel = paid, status = completed
- **Time range & grain**: e.g., last 12 months by month; last 30 days by day
- **Breakdowns/grouping**: e.g., by region, product, channel
- **Output type**: chart, table, or KPI (and preferred chart type if any)
- **Formatting/units**: currency, percent, decimals, top N, sorting

The more concrete you are on the 6 items above, the less clarification is needed.

### Ask a clear question

Start with what you want to know or measure.

Examples:

- “Show total sales by month.”
- “What’s our average order value this year?”
- “Which customer segment brings in the most revenue?”

Avoid vague prompts:

- “Sales report”
- “Customer data”

### Describe how you’d like to see the result

Breadcrumb automatically picks a visualization, but you can request a specific format.

**Examples**

- “Show this as a line chart.”
- “Make a bar chart by category.”
- “Create a table with totals.”
- “Put this into a dashboard comparing all regions.”

### Ask follow-up questions

Breadcrumb remembers the context of your last question. You can keep refining your analysis naturally.

**Example flow**

> “Show sales by product.”
>
> “Now break that down by region.”
>
> “Add a trend line for the past 6 months.”
>

You don’t need to restate everything — Breadcrumb will build on your previous results.

### Quick-start prompt templates

- Trend over time
    - "Show [metric] for [time range] by [grain], filtered by [filters], as a [chart type]."
- Category comparison
    - "Compare [metric] by [dimension] for [time range], top [N], sorted [desc/asc], as a [bar/column] chart."
- KPI
    - "Show KPI for [metric] in [time range], with unit [currency/%] and delta vs [previous period/same period last year]."
- Table
    - "Create a table with columns [col1, col2, col3] for [time range] filtered by [filters], sorted by [col] [asc/desc], limit [N]."
- Investigation
    - "Diagnose the change in [metric] from [period A] to [period B] by [dimension], and visualize top drivers."

### Let Breadcrumb Guide You

You don’t need to know the perfect question to begin. Breadcrumb can **suggest ideas** and **ask clarifying questions** to help you find what matters. You can structure your prompts as questions, and Breadcrumb will help narrow them down.

> “What interesting things about our product data can you look into?”
>
> → *“Do you want me to focus on usage, revenue, or retention?”*
>
> “Let’s take a look at retention. What can you do about it?”
>
> → “I can show retention trends, segment users by activity, or highlight where drop-offs happen. Which would you like to start with?
>

## Advance prompting techniques

### Break big questions into smaller steps

Complex analysis often works best when you guide Breadcrumb step by step. Start simple, then refine and broaden the scope.

Example: Understand why Q3 revenue dropped

- **Start simple:**

    > “Show total revenue by month for 2024.”
    >
- **Spot the issue:**

    > “Highlight any drops or anomalies.”
    >
- **Drill down:**

    > “Break down Q3 revenue by product category.”
    >
- **Compare:**

    > “Compare that to Q2 performance.”
    >
- **Find drivers:**

    > “Which regions or products contributed most to the decline?”
    >
- **Summarize:**

    > “Give me a summary of key takeaways.”
    >

## Set up space knowledge

Space knowledge allows you to define **custom instructions and data context** that Breadcrumb will use automatically for all prompts in a workspace. This is especially useful if you want consistent terminology, metrics definitions, or company-specific rules applied.

**What you can define**

1. **Metric definitions**
    - Clarify what metrics mean to your organization.
    - Example: “Revenue is net revenue after discounts and refunds.”
2. **Data sources**
    - Name and describe key datasets or tables.
    - Example: “Orders table contains all completed orders with columns: order_id, customer_id, product_id, order_date, revenue.”
3. **Business rules**
    - Any special calculations or logic.
    - Example: “Churn rate is defined as customers active last month but inactive this month.”
4. **Units and formats**
    - Default units, currency, or date formatting.
    - Example: “All monetary values should be in USD with 2 decimal places.”
5. **AI behavior**
    - Instructions on how the AI should interpret prompts or respond.
    - Example: “Always suggest top 3 insights first. Provide charts only when meaningful.”

**How to use**

- Once space knowledge is set, you can reference terms naturally without redefining them in every prompt.
- Breadcrumb will apply these rules automatically, reducing errors and improving clarity.

### Use group filters

Group filters allow you to apply a **single filter across multiple widgets or visualizations** within a group. This makes it easier to explore data consistently without updating each chart individually. Group filters are expressed in **natural language**, so you can describe the condition just as you would in a question.

**How it works:**

- When you set a group filter, **every widget in the group automatically respects that filter**.
- Filters can include **dimensions, metrics, time ranges, or conditions**.
- Breadcrumb updates all related visualizations **in real time** when the filter changes.

**Examples:**

1. **Basic filter**
    - Filter: “Show US region only”
    - Effect: All charts in the group now only show data for the United States.
2. **Multiple conditions**
    - Filter: “Region = US and Channel = Paid”
    - Effect: Every widget shows only paid channel performance in the US.
3. **Dynamic time filter**
    - Filter: “Last 30 days”
    - Effect: All visualizations automatically adjust to display data from the past 30 days.
4. **Top-N filter**
    - Filter: “Top 5 products by revenue”
    - Effect: Only the top 5 products appear across all charts in the group.