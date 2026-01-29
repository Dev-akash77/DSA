# 🚀 The Ultimate SDE-1 Master Roadmap & Interview Question Bank
**Target:** SDE-1 (6 LPA - 12 LPA)  
**Companies:** Flipkart, Zomato, Razorpay, TCS Digital, Deloitte, Startup Unicorns  
**Prepared For:** Akash (The Project-First Developer)

---

## Part 1: The 8-Week Battle Plan (Roadmap)

This isn't just a list; it's a schedule. Stick to this to crack product companies.

### Phase 1: The Foundation (Weeks 1-3)
*Goal: Clear the "Online Assessment" (OA) - The biggest rejection filter.*

| Activity | Time/Day | Focus Area |
| :--- | :--- | :--- |
| **DSA Grind** | 1.5 Hours | Arrays, Strings, HashMaps, Two Pointers (LeetCode Easy/Medium). |
| **Aptitude** | 30 Mins | Quants & Logical Reasoning (Crucial for TCS/Wipro). |
| **Outcome** | **Speed.** | Solve Easy questions in <15 mins, Medium in <30 mins. |

### Phase 2: The Core Defense (Weeks 4-6)
*Goal: Dominate the Technical Interview with your strengths.*

| Activity | Time/Day | Focus Area |
| :--- | :--- | :--- |
| **System Design** | 1 Hour | Draw architectures for **ResumePilot** & **Zyra AI**. Know *Why* you used X tech. |
| **Backend Core** | 45 Mins | Node.js Internals (Event Loop), SQL vs NoSQL, Indexing, Caching. |
| **Outcome** | **Depth.** | Be able to explain every line of code in your projects. |

### Phase 3: The Final Polish (Weeks 7-8)
*Goal: Cracking the HR & Behavioral Rounds.*

| Activity | Time/Day | Focus Area |
| :--- | :--- | :--- |
| **Mock Interviews**| Weekend | Speak in front of a mirror. Record yourself answering "Tell me about yourself". |
| **CS Theory** | 30 Mins | OS (Process/Thread), CN (TCP/HTTP), DBMS (ACID/Normalization). |
| **Outcome** | **Confidence.** | Fluent English delivery of your introduction and project details. |

---

## Part 2: The 100 "Real-World" Interview Questions

This collection covers everything from "Hello World" to "System Architecture".

### Section A: Project Defense (Your Superpower)
*These questions are your ticket to a higher package. Answer these with "Founder Energy".*

#### **Architecture & Design**
1.  **[Microservices]** "You used Microservices for ResumePilot. Why not a Monolith? What problems did it solve?"
2.  **[Scalability]** "If ResumePilot hits 100k active users, which component breaks first? How do you fix it?"
3.  **[Design Pattern]** "Draw the **Hexagonal Architecture**. Explain how 'Ports and Adapters' decouple your business logic."
4.  **[Database]** "Why **Drizzle ORM**? How does it compare to TypeORM or Prisma in terms of performance?"
5.  **[Message Queue]** "Why **RabbitMQ**? Explain a scenario where a message might get lost and how you prevent it."

#### **Advanced Backend**
6.  **[NestJS]** "Walk me through the NestJS Request Lifecycle (Middleware → Guard → Interceptor → Pipe → Controller)."
7.  **[Redis]** "How are you using Redis? Is it for caching API responses, session storage, or rate limiting?"
8.  **[Security]** "How do you implement **Rate Limiting**? Is it Distributed? How do you handle DDOS?"
9.  **[AI/LLM]** "In **Zyra AI**, how do you manage the LLM Context Window? How does your RAG pipeline work?"
10. **[Docker]** "Explain your Dockerfile optimization. Why is `COPY package.json` done before `COPY . .`?"

---

### Section B: Data Structures & Algorithms (The Filter)
*Don't memorize code. Memorize the **Logic** and **Patterns**.*

#### **Arrays & Strings (High Priority)**
11. **[Classic]** Trapping Rain Water.
12. **[Sliding Window]** Longest Substring Without Repeating Characters.
13. **[Binary Search]** Search in a Rotated Sorted Array.
14. **[Two Pointer]** 3Sum (Find three numbers that add up to zero).
15. **[Hashmap]** Group Anagrams.
16. **[Kadane's Algo]** Maximum Subarray Sum.
17. **[Intervals]** Merge Intervals.

#### **Linked Lists & Stacks**
18. Reverse a Linked List (Iterative & Recursive).
19. Detect a Cycle in a Linked List (Floyd’s Cycle Finding Algo).
20. Implement a Queue using Stacks.
21. Valid Parentheses (Stack).
22. Next Greater Element.

#### **Trees & Graphs (Product Company Favorites)**
23. Level Order Traversal (BFS) of a Binary Tree.
24. Lowest Common Ancestor (LCA) in a BST.
25. Number of Islands (Grid DFS/BFS).
26. Validate Binary Search Tree (BST).
27. ZigZag Traversal of a Binary Tree.
28. Maximum Depth of a Binary Tree.

#### **Dynamic Programming (Basic)**
29. Climbing Stairs.
30. House Robber.
31. Longest Common Subsequence (LCS).
32. Coin Change Problem.

---

### Section C: JavaScript & Node.js (The Core)
*Expect deep-dive questions here. You cannot fail this section.*

33. **[Event Loop]** "Explain the Node.js Event Loop phases (Timers, Poll, Check) with a diagram."
34. **[Async]** "`process.nextTick()` vs `setImmediate()` - Which runs first?"
35. **[Closure]** "What is a Closure? Give a real-world example (e.g., Data Privacy)."
36. **[Scope]** "Explain `var`, `let`, and `const` in terms of Hoisting and Temporal Dead Zone."
37. **[Coercion]** "`==` vs `===`. Explain with an example where `==` causes a bug."
38. **[Async/Await]** "Promise vs Async/Await. How do you handle errors in `async` functions?"
39. **[Flow Control]** "What is 'Callback Hell'? Write code to fix it using Promises."
40. **[Performance]** "Node.js is single-threaded. How does it handle concurrent requests? (Libuv)."
41. **[Streams]** "How do Streams work? (Readable, Writable, Pipe). Why use them for file uploads?"
42. **[TypeScript]** "Interface vs Type. When to use which?"
43. **[Generics]** "Write a generic Typescript function to swap two variables."

---

### Section D: CS Fundamentals (The Degree Check)
*Service-based companies (TCS, Wipro) love these questions.*

#### **DBMS (Database Management)**
44. **[ACID]** "Explain ACID properties with a banking transaction example."
45. **[Keys]** "Primary Key vs Unique Key vs Foreign Key."
46. **[Normalization]** "Explain 1NF, 2NF, 3NF. Why is 3NF important?"
47. **[Indexing]** "How does a B-Tree Index make reads faster but writes slower?"
48. **[SQL vs NoSQL]** "When would you choose MongoDB over PostgreSQL? Be specific."
49. **[Query]** "Write a SQL query to find the 2nd Highest Salary."
50. **[Query]** "Explain `GROUP BY` and `HAVING` clause."

#### **OS (Operating Systems)**
51. **[Core]** "Process vs Thread. Which one is lighter?"
52. **[Deadlock]** "What is a Deadlock? What are the 4 necessary conditions?"
53. **[Memory]** "Segmentation vs Paging."
54. **[Concurrency]** "Multithreading vs Multiprocessing."
55. **[Kernel]** "What is the Kernel in an OS?"

#### **CN (Computer Networks)**
56. **[Protocol]** "TCP vs UDP. Why is video streaming often UDP?"
57. **[Browser]** "What happens when you type `google.com` and hit Enter? (DNS -> IP -> Handshake)."
58. **[Security]** "HTTP vs HTTPS. Explain the SSL/TLS Handshake simply."
59. **[Model]** "Name the 7 layers of the OSI Model."
60. **[Status Codes]** "Meaning of 200, 301, 401, 403, 404, 500."

---

### Section E: System Design (SDE-1 Level)
*Don't panic. Just use your common sense from your projects.*

61. **[Scaling]** Vertical Scaling (Bigger Machine) vs Horizontal Scaling (More Machines).
62. **[Load Balancer]** Round Robin vs Least Connection algorithms.
63. **[CAP Theorem]** Consistency, Availability, Partition Tolerance.
64. **[Architecture]** Monolith vs Microservices vs Serverless.
65. **[API Design]** REST vs GraphQL. What is 'Over-fetching'?
66. **[Auth]** JWT vs Session-based Authentication.
67. **[DB Scaling]** Sharding vs Replication.

---

### Section F: Logic & Aptitude (For Mass Recruiters)
68. **[OOPs]** 4 Pillars: Encapsulation, Abstraction, Inheritance, Polymorphism.
69. **[OOPs]** Method Overloading vs Overriding.
70. **[OOPs]** Abstract Class vs Interface.
71. **[C/C++]** Pointer vs Reference.
72. **[Puzzle]** 3 Bulbs and 3 Switches puzzle.
73. **[Puzzle]** Measure 4 Liters using 3L and 5L buckets.
74. **[Clock]** Angle between hour and minute hand at 3:15.
75. **[Time & Work]** "A does work in 10 days, B in 15 days..."
76. **[Trains]** Train passing a platform problem.

---

### Section G: Behavioral & HR (The Culture Fit)
*Answer these in simple English. No Hinglish here.*

77. **[Intro]** "Tell me about yourself." *(Your Pitch: 4 Yrs Exp + Projects + Passion).*
78. **[Why You?]** "You are from ETCE, why Software Engineering?"
79. **[Failure]** "Tell me about a project that failed or a bug you couldn't fix."
80. **[Conflict]** "Tell me about a time you disagreed with a teammate."
81. **[Strengths]** "What is your biggest strength?" *(Self-taught, Product Mindset).*
82. **[Weakness]** "What is your biggest weakness?" *(Public Speaking - improving it).*
83. **[Vision]** "Where do you see yourself in 5 years?"
84. **[Company]** "Why do you want to join Flipkart/Zomato?"
85. **[Pressure]** "How do you handle tight deadlines?"

---

### Section H: Rapid Fire (One-Liners)
*Instant answers required.*

86. **CORS:** Cross-Origin Resource Sharing.
87. **Race Condition:** Two processes accessing shared data simultaneously.
88. **Dependency Injection:** Providing dependencies from outside (Inversion of Control).
89. **PUT vs PATCH:** Replace whole object vs Update partial object.
90. **Foreign Key:** Link between two tables.
91. **Null vs Undefined:** Assignment vs Declared but not assigned.
92. **API Gateway:** Entry point for microservices (Routing, Auth).
93. **CI/CD:** Continuous Integration / Continuous Deployment.
94. **Git Merge vs Rebase:** Combine history vs Clean linear history.
95. **Linux `top`:** Shows running processes.
96. **Linux `chmod`:** Change file permissions.
97. **Memory Leak:** Memory not released after use.
98. **SQL Injection:** Malicious SQL code insertion (Use parameterized queries).
99. **Idempotency:** Making multiple identical requests has the same effect as one.
100. **The Final Question:** "Do you have any questions for us?" *(Always ask about their Tech Stack).*

---

### Reality Check for Akash

* **English:** Keep it simple. Don't use big words. Just be clear. "I built X using Y because Z."
* **Confidence:** You have built things that 4th-year B.Tech students dream of. Own that experience.
* **Goal:** Don't just aim for 6 LPA. Your profile is good enough to negotiate for **8-10 LPA** if you clear the DSA rounds.

> **"Code is your voice. Projects are your proof."**

---
<div align="center">
  <sub>Made with ❤️ by <b>Akash</b></sub>
</div>
