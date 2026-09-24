# AI WeatherWise — Intelligent Weather Insights Platform

## 📌 Project Overview
**AI WeatherWise** is a robust, production-ready RESTful backend platform built using **Node.js** and the **Express.js** web framework. The system interfaces cleanly with **MongoDB** via Mongoose structures to manage user portfolios and saved location metrics. 

By marrying real-time environmental metrics with the semantic reasoning capabilities of the **Google Gemini AI Engine (`@google/genai`)**, the platform converts raw atmospheric figures (temperature, humidity, pressure parameters) into plain-text summaries, outdoor event suggestions, and safety advisories tailored to real-time local conditions.

---

## 📂 SmartBridge Phase-Wise Project Tracking
This repository has been structured strictly according to the **8 mandated engineering implementation phases** requested by the SmartBridge training board. Click on any section header link below to inspect its explicit delivery files:

### [Phase 1: Brainstorming & Ideation](./01_Brainstorming_&_Ideation/Project_Proposal.md)
* Functional project overview, core target problem breakdowns, product value matrices, and definitive project use-case storyboards.

### [Phase 2: Requirement Analysis](./02_Requirement_Analysis/Software_Requirements_Specification.md)
* Software and hardware minimum configurations, functional target matrices, and non-functional engineering runtime constraints.

### [Phase 3: Project Design](./03_Project_Design/Architecture_&_ERD.md)
* Model-View-Controller (MVC) architecture design layouts, database collections layouts, and Mongoose schema models tracking mappings.

### [Phase 4: Project Planning](./04_Project_Planning/Development_Roadmap.md)
* Targeted agile development lifecycles tracking sprints, implementation milestones, and system exception mitigation plans.

### [Phase 5: Project Development](./05_Project_Development/)
* Source tree housing the production-ready application backend ecosystem code including framework entryways, router layers, token guards, and AI integration services.

### [Phase 6: Project Testing](./06_Project_Testing/API_Testing_Report.md)
* API assertion matrices, route security checking strategies, and route sanitation verification tests recorded via Postman suite testing.

### [Phase 7: Project Documentation](./07_Project_Documentation/User_&_Developer_Guide.md)
* Step-by-step local workspace setup guidelines, environment mapping instructions (`.env`), and fully mapped REST API endpoint path references.

### [Phase 8: Project Demonstration](./08_Project_Demonstration/)
* Houses the official submission documentation, containing the public-access Google Drive link hosting the recorded screen-shared project video demonstration.

---

## 🛠️ Core Engineering Infrastructure Matrix
* **Runtime Node Ecosystem:** Node.js (v16+) & npm (v8+)
* **Server Framework Web Layer:** Express.js 
* **Data Storage Management Layer:** MongoDB Engine & Mongoose ODM
* **Cognitive AI Layer:** Google Gemini AI SDK (`@google/genai`)
* **Security & Payload Shields:** JSON Web Tokens (JWT), BcryptJS encryption, and CORS parameters
