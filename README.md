## General Information

Thank you for downloading our technical test.

This test is designed to serve as a practical code review. Through it, we aim to assess your technical capabilities, coding style, and problem-solving skills. Your approach to this project will give us valuable insights into how you may contribute to our team, both in terms of code quality and functionality.

The scenario is the following: you are responsible of this project and its successful deployment. You have to review the code and make sure it's safe, optimized, well structured, scalable and ready to go in production.

**This test is a Code Review, you don't need to code anything except if you want to demonstrate something**

**Submission Timeline:**

Please complete and return the test within 3 hours to the following email address: [thomas@wp-umbrella.com](mailto:thomas@wp-umbrella.com).

**For Backend Developers:**

We recommend that you focus on the "workers" section and the API to best demonstrate your skills.

**For Front-end Developers:**

Your primary focus should be on the application part, specifically within **`app` and `components`**.

**Additional Information:**

Regardless of your specialization, we encourage you to provide comprehensive details about your work. You are responsible for this project and its successful deployment.

---

## Guidelines for Code Review and Submission.

During this test, you are encouraged to engage in thorough commentary—be it criticism, suggestions for changes, or identifying acceptable and unacceptable code practices. Keep in mind that if this project goes into production, it will directly impact over 15,000 customers.

As this is an entirely new project, you have the opportunity to suggest improvements not just at the code level, but also in the overall architecture, methodologies, and code organization.

**Points to Note:**

- Please ignore sections marked with "No need to review this part."
- The file **`data/projects.ts`** serves to simulate a "Projects" table. While you should not review this file itself, do consider its implementation when reviewing the code. While the test environment only includes four projects, the actual database holds 20,000 projects.

**Submitting Your Review:**
To provide your feedback, you have a couple of options:

1. Create a dedicated file that collates your various comments and observations.
2. Comment directly within the codebase.

Please refrain from including your review comments in the body of the email. If you make any code changes, ensure they are clearly marked so we can easily identify what has been altered.

This test serves as a practical code review and will help us evaluate your technical capabilities, coding style, and problem-solving skills. Your approach to this exercise will provide valuable insights into how you could contribute to our team in terms of both code quality and overall project execution.

---

### **Context and Tech Requirements**

### User Identification

While the application currently lacks a login system, please assume that you are operating as a user with the ID of 1 for this test.

### Project Status

You're stepping into a brand-new project that a team member has just delivered. You have been designated to conduct the final code review before this project is moved into production.

### Project Features

The core functionality of this project includes:

- A webpage that lists all projects associated with a specific client.
- The capability to view detailed information about each project.

### Feature Requirements

The immediate challenge is to implement a tag management system to help our clients categorize their projects effectively. The product team has specific color-coding preferences for these tags:

- Blue: **`#3B82F6`**
- Red: **`#EF4444`**
- Yellow: **`#F59E0B`**
  If a tag's name doesn't match any of the above, the default background color should be grey (**`#6B7280`**).

Additionally, we need a queue system capable of pinging all projects at 2-minute intervals. The information gathered from these pings will be used to monitor the operational status of each site, indicating whether it's up or down.

---

### **Thank You**

Thank you for taking the time to complete this technical test. We appreciate your effort and are excited to review your work. We understand that tests like this require a substantial investment of time and energy, and we want you to know that we value that commitment. We look forward to potentially collaborating with you in the future.
