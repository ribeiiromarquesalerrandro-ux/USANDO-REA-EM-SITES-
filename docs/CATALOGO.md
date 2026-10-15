# Catálogo de especialistas — Real Corp

Índice dos agentes aprovados na triagem de segurança. **Não leia inteiro: procure com grep**
(ex.: `grep -i "kubernetes" docs/CATALOGO.md`). O arquivo de cada agente fica em
`real-corp/catalogo/ORIGEM/<origem>/<nome>.md`. Regras de uso: `docs/CEO.md`.

Fontes (clone raso, só os `.md` de agentes foram lidos; nada foi executado):
- **voltagent**: https://github.com/VoltAgent/awesome-claude-code-subagents @ `408d3c9eee2d0c75c12a3abb5de29e53c2ca6b9e` (MIT) — 158 aprovados de 163
- **wshobson**: https://github.com/wshobson/agents @ `044b4b21f083948e69ec878a7b07c8d0951a6ffa` (MIT) — 198 aprovados de 202

Rejeitados (9) e motivos: `docs/DECISOES.md`. Descrição = início da descrição original (inglês), até 12 palavras.
`(RC)` = a fonte não definia `tools`; a lista mínima foi definida pela Real Corp.

nome | origem | descrição | tools | model
--- | --- | --- | --- | ---
ab-test-analysis | voltagent | Analyze A/B test results, interpret p-values, determine statistical significance, or make a… | Read, Grep, Glob, WebFetch, WebSearch | herda
accessibility-expert | wshobson | Expert accessibility specialist ensuring WCAG compliance, inclusive design, and assistive technology compatibility.… | Read, Write, Edit, Glob, Grep (RC) | inherit
accessibility-tester | voltagent | Comprehensive accessibility testing, WCAG compliance verification, or assessment of assistive technology support. | Read, Grep, Glob, Bash | haiku
ad-security-reviewer | voltagent | Audit Active Directory security posture, evaluate privilege escalation risks, review identity delegation… | Read, Write, Edit, Bash, Glob, Grep | inherit
agent-orchestration-context-manager | wshobson | Elite AI context engineering specialist mastering dynamic context management, vector databases, knowledge… | Read, Grep, Glob (RC) | inherit
agent-organizer | voltagent | Break a complex task into subtasks, match each to the capabilities of… | Read, Write, Edit, Glob, Grep | sonnet
ai-engineer | voltagent | Architecting, implementing, or optimizing end-to-end AI systems—from model selection and training pipelines… | Read, Write, Edit, Bash, Glob, Grep | inherit
ai-engineer | wshobson | Build production-ready LLM applications, advanced RAG systems, and intelligent agents. Implements vector… | Read, Write, Edit, Glob, Grep (RC) | inherit
ai-writing-auditor | voltagent | Audit content for AI writing patterns and rewrite text to remove them. | Read, Write, Edit, Bash, Glob, Grep | inherit
angular-architect | voltagent | Architecting enterprise Angular 15+ applications with complex state management, optimizing RxJS patterns,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
api-designer | voltagent | Designing new APIs, creating API specifications, or refactoring existing API architecture for… | Read, Write, Edit, Bash, Glob, Grep | sonnet
api-documenter | voltagent | Creating or improving API documentation, writing OpenAPI specifications, building interactive documentation portals,… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | haiku
api-scaffolding-backend-architect | wshobson | Expert backend architect specializing in scalable API design, microservices architecture, and distributed… | Read, Grep, Glob (RC) | inherit
api-scaffolding-django-pro | wshobson | Master Django 5.x with async views, DRF, Celery, and Django Channels. Build… | Read, Write, Edit, Glob, Grep (RC) | opus
api-scaffolding-fastapi-pro | wshobson | Build high-performance async APIs with FastAPI, SQLAlchemy 2.0, and Pydantic V2. Master… | Read, Write, Edit, Glob, Grep (RC) | opus
api-scaffolding-graphql-architect | wshobson | Master modern GraphQL with federation, performance optimization, and enterprise security. Build scalable… | Read, Grep, Glob (RC) | opus
api-testing-observability-api-documenter | wshobson | Master API documentation with OpenAPI 3.1, AI-powered tools, and modern developer experience… | Read, Write, Edit, Glob, Grep (RC) | sonnet
application-performance-frontend-developer | wshobson | Build React components, implement responsive layouts, and handle client-side state management. Masters… | Read, Write, Edit, Glob, Grep (RC) | inherit
application-performance-observability-engineer | wshobson | Build production-ready monitoring, logging, and tracing systems. Implements comprehensive observability strategies, SLI/SLO… | Read, Write, Edit, Glob, Grep (RC) | inherit
application-performance-performance-engineer | wshobson | Expert performance engineer specializing in modern observability, application optimization, and scalable system… | Read, Write, Edit, Glob, Grep (RC) | inherit
architect | wshobson | Architect agent. Reads orchestrator-output.md, AGENTS.md, and project-doc.md to produce a numbered step-by-step… | Read, Grep, Glob (RC) | inherit
architect-reviewer | voltagent | Evaluate system design decisions, architectural patterns, and technology choices at the macro… | Read, Write, Edit, Bash, Glob, Grep | inherit
arm-cortex-expert | wshobson | Senior embedded software engineer specializing in firmware and driver development for ARM… | Read, Write, Edit, Glob, Grep (RC) | inherit
assumption-mapping | voltagent | Identify and prioritize risky assumptions in a product idea, feature, or strategy.… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | herda
auth-integration-engineer | voltagent | Implementing authentication and authorization — OAuth 2.1/OIDC flows, SAML enterprise SSO, session… | Read, Write, Edit, Bash, Glob, Grep | sonnet
azure-infra-engineer | voltagent | Designing, deploying, or managing Azure infrastructure with focus on network architecture, Entra… | Read, Write, Edit, Bash, Glob, Grep | sonnet
backend-api-security-backend-architect | wshobson | Expert backend architect specializing in scalable API design, microservices architecture, and distributed… | Read, Grep, Glob (RC) | inherit
backend-api-security-backend-security-coder | wshobson | Expert in secure backend coding practices specializing in input validation, authentication, and… | Read, Write, Edit, Glob, Grep (RC) | sonnet
backend-developer | voltagent | Building server-side APIs, microservices, and backend systems that require robust architecture, scalability… | Read, Write, Edit, Bash, Glob, Grep | sonnet
backend-development-backend-architect | wshobson | Expert backend architect specializing in scalable API design, microservices architecture, and distributed… | Read, Grep, Glob (RC) | inherit
backend-development-graphql-architect | wshobson | Master modern GraphQL with federation, performance optimization, and enterprise security. Build scalable… | Read, Grep, Glob (RC) | opus
backend-development-performance-engineer | wshobson | Profile and optimize application performance including response times, memory usage, query efficiency,… | Read, Write, Edit, Glob, Grep (RC) | sonnet
backend-development-security-auditor | wshobson | Review code and architecture for security vulnerabilities, OWASP Top 10, auth flaws,… | Read, Grep, Glob (RC) | sonnet
backend-development-tdd-orchestrator | wshobson | Master TDD orchestrator specializing in red-green-refactor discipline, multi-agent workflow coordination, and comprehensive… | Read, Grep, Glob (RC) | opus
backend-development-test-automator | wshobson | Create comprehensive test suites including unit, integration, and E2E tests. Supports TDD/BDD… | Read, Write, Edit, Glob, Grep (RC) | sonnet
backlog-grooming | voltagent | Groom, refine, or clean up a product backlog. Triggers on: 'groom backlog',… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | herda
bash-pro | wshobson | Master of defensive Bash scripting for production automation, CI/CD pipelines, and system… | Read, Write, Edit, Glob, Grep (RC) | sonnet
blockchain-developer | voltagent | Building smart contracts, DApps, and blockchain protocols that require expertise in Solidity,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
blockchain-developer | wshobson | Build production-ready Web3 applications, smart contracts, and decentralized systems. Implements DeFi protocols,… | Read, Write, Edit, Glob, Grep (RC) | opus
build-engineer | voltagent | Optimize build performance, reduce compilation times, or scale build systems across growing… | Read, Write, Edit, Bash, Glob, Grep | haiku
business-analyst | voltagent | Analyzing business processes, gathering requirements from stakeholders, or identifying process improvement opportunities… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | sonnet
business-analyst | wshobson | Master modern business analysis with AI-powered analytics, real-time dashboards, and data-driven insights.… | Read, Grep, Glob, WebFetch, WebSearch (RC) | sonnet
c-pro | wshobson | Write efficient C code with proper memory management, pointer arithmetic, and system… | Read, Write, Edit, Glob, Grep (RC) | opus
c4-code | wshobson | Expert C4 Code-level documentation specialist. Analyzes code directories to create comprehensive C4… | Read, Write, Edit, Glob, Grep (RC) | haiku
c4-component | wshobson | Expert C4 Component-level documentation specialist. Synthesizes C4 Code-level documentation into Component-level architecture,… | Read, Write, Edit, Glob, Grep (RC) | sonnet
c4-container | wshobson | Expert C4 Container-level documentation specialist. Synthesizes Component-level documentation into Container-level architecture, mapping… | Read, Write, Edit, Glob, Grep (RC) | sonnet
c4-context | wshobson | Expert C4 Context-level documentation specialist. Creates high-level system context diagrams, documents personas,… | Read, Write, Edit, Glob, Grep (RC) | sonnet
chaos-engineer | voltagent | Design and execute controlled failure experiments, validate system resilience before incidents occur,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
cicd-automation-cloud-architect | wshobson | Expert cloud architect specializing in AWS/Azure/GCP/OCI multi-cloud infrastructure design, advanced IaC (Terraform/OpenTofu/CDK),… | Read, Grep, Glob (RC) | opus
cicd-automation-deployment-engineer | wshobson | Expert deployment engineer specializing in modern CI/CD pipelines, GitOps workflows, and advanced… | Read, Write, Edit, Glob, Grep (RC) | haiku
cicd-automation-devops-troubleshooter | wshobson | Expert DevOps troubleshooter specializing in rapid incident response, advanced debugging, and modern… | Read, Grep, Glob (RC) | sonnet
cicd-automation-kubernetes-architect | wshobson | Expert Kubernetes architect specializing in cloud-native infrastructure, advanced GitOps workflows (ArgoCD/Flux), and… | Read, Grep, Glob (RC) | opus
cicd-automation-terraform-specialist | wshobson | Expert Terraform/OpenTofu specialist mastering advanced IaC automation, state management, and enterprise infrastructure… | Read, Write, Edit, Glob, Grep (RC) | opus
cli-developer | voltagent | Building command-line tools and terminal applications that require intuitive command design, cross-platform… | Read, Write, Edit, Bash, Glob, Grep | sonnet
cloud-architect | voltagent | Design, evaluate, or optimize cloud infrastructure architecture at scale. Invoke when designing… | Read, Write, Edit, Bash, Glob, Grep | inherit
cloud-infrastructure-cloud-architect | wshobson | Expert cloud architect specializing in AWS/Azure/GCP/OCI multi-cloud infrastructure design, advanced IaC (Terraform/OpenTofu/CDK),… | Read, Grep, Glob (RC) | opus
cloud-infrastructure-deployment-engineer | wshobson | Expert deployment engineer specializing in modern CI/CD pipelines, GitOps workflows, and advanced… | Read, Write, Edit, Glob, Grep (RC) | haiku
cloud-infrastructure-kubernetes-architect | wshobson | Expert Kubernetes architect specializing in cloud-native infrastructure, advanced GitOps workflows (ArgoCD/Flux), and… | Read, Grep, Glob (RC) | opus
cloud-infrastructure-network-engineer | wshobson | Expert network engineer specializing in modern cloud networking, security architectures, and performance… | Read, Write, Edit, Glob, Grep (RC) | sonnet
cloud-infrastructure-terraform-specialist | wshobson | Expert Terraform/OpenTofu specialist mastering advanced IaC automation, state management, and enterprise infrastructure… | Read, Write, Edit, Glob, Grep (RC) | opus
code-documentation-code-reviewer | wshobson | Elite code review expert specializing in modern AI-powered code analysis, security vulnerabilities,… | Read, Grep, Glob (RC) | opus
code-documentation-docs-architect | wshobson | Creates comprehensive technical documentation from existing codebases. Analyzes architecture, design patterns, and… | Read, Write, Edit, Glob, Grep (RC) | sonnet
code-documentation-tutorial-engineer | wshobson | Creates step-by-step tutorials and educational content from code. Transforms complex concepts into… | Read, Write, Edit, Glob, Grep (RC) | sonnet
code-refactoring-code-reviewer | wshobson | Elite code review expert specializing in modern AI-powered code analysis, security vulnerabilities,… | Read, Grep, Glob (RC) | opus
code-refactoring-legacy-modernizer | wshobson | Refactor legacy codebases, migrate outdated frameworks, and implement gradual modernization. Handles technical… | Read, Write, Edit, Glob, Grep (RC) | sonnet
code-review-preshipment | wshobson | Comprehensive pre-ship review of all changes since the last deploy or a… | Bash, Read, Glob, Grep | sonnet
code-reviewer | voltagent | Conduct comprehensive code reviews focusing on code quality, security vulnerabilities, and best… | Read, Write, Edit, Bash, Glob, Grep | inherit
codebase-cleanup-code-reviewer | wshobson | Elite code review expert specializing in modern AI-powered code analysis, security vulnerabilities,… | Read, Grep, Glob (RC) | opus
codebase-cleanup-test-automator | wshobson | Master AI-powered test automation with modern frameworks, self-healing tests, and comprehensive quality… | Read, Write, Edit, Glob, Grep (RC) | sonnet
codebase-orchestrator | voltagent | Repository-wide refactor governance with explicit approval loops, weighted risk prioritization, diff previews,… | Read, Write, Edit, Bash, Glob, Grep, WebFetch, airis-mcp-gateway, context-manager, error-coordinator, pied-piper, subagent-catalog:search, subagent-catalog:fetch | inherit
cohort-analysis | voltagent | Analyze retention, cohort behavior, engagement trends, or understand how different user groups… | Read, Grep, Glob, WebFetch, WebSearch | herda
competitive-analyst | voltagent | Analyze direct and indirect competitors, benchmark against market leaders, or develop strategies… | Read, Grep, Glob, WebFetch, WebSearch | sonnet
compliance-auditor | voltagent | Achieve regulatory compliance, implement compliance controls, or prepare for audits across frameworks… | Read, Grep, Glob | inherit
comprehensive-review-architect-review | wshobson | Master software architect specializing in modern architecture patterns, clean architecture, microservices, event-driven… | Read, Grep, Glob (RC) | opus
comprehensive-review-code-reviewer | wshobson | Elite code review expert specializing in modern AI-powered code analysis, security vulnerabilities,… | Read, Grep, Glob (RC) | opus
comprehensive-review-security-auditor | wshobson | Expert security auditor specializing in DevSecOps, comprehensive cybersecurity, and compliance frameworks. Masters… | Read, Grep, Glob (RC) | opus
conductor-validator | wshobson | Validates Conductor project artifacts for completeness, consistency, and correctness. Use after setup,… | Read, Glob, Grep, Bash | opus
content-marketer | voltagent | Develop comprehensive content strategies, create SEO-optimized marketing content, or execute multi-channel content… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | haiku
content-marketer | wshobson | Elite content marketing strategist specializing in AI-powered content creation, omnichannel distribution, SEO… | Read, Write, Edit, Glob, Grep (RC) | haiku
context-management-context-manager | wshobson | Elite AI context engineering specialist mastering dynamic context management, vector databases, knowledge… | Read, Grep, Glob (RC) | inherit
context-manager | voltagent | Use to organize the shared context and state that a multi-agent workflow… | Read, Write, Edit, Glob, Grep | sonnet
cpp-pro | voltagent | Building high-performance C++ systems requiring modern C++20/23 features, template metaprogramming, or zero-overhead… | Read, Write, Edit, Bash, Glob, Grep | sonnet
cpp-pro | wshobson | Write idiomatic C++ code with modern features, RAII, smart pointers, and STL… | Read, Write, Edit, Glob, Grep (RC) | opus
csharp-developer | voltagent | Building ASP.NET Core web APIs, cloud-native .NET solutions, or modern C# applications… | Read, Write, Edit, Bash, Glob, Grep | sonnet
csharp-pro | wshobson | Write modern C# code with advanced features like records, pattern matching, and… | Read, Write, Edit, Glob, Grep (RC) | inherit
customer-success-manager | voltagent | Assess customer health, develop retention strategies, identify upsell opportunities, or maximize customer… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | sonnet
customer-support | wshobson | Elite AI-powered customer support specialist mastering conversational AI, automated ticketing, sentiment analysis,… | Read, Write, Edit, Glob, Grep (RC) | haiku
data-analyst | voltagent | Extract insights from business data, create dashboards and reports, or perform statistical… | Read, Write, Edit, Bash, Glob, Grep | haiku
data-engineer | voltagent | Design, build, or optimize data pipelines, ETL/ELT processes, and data infrastructure. Invoke… | Read, Write, Edit, Bash, Glob, Grep | sonnet
data-engineer | wshobson | Build scalable data pipelines, modern data warehouses, and real-time streaming architectures. Implements… | Read, Write, Edit, Glob, Grep (RC) | opus
data-engineering-backend-architect | wshobson | Expert backend architect specializing in scalable API design, microservices architecture, and distributed… | Read, Grep, Glob (RC) | inherit
data-researcher | voltagent | Discover, collect, and validate data from multiple sources to fuel analysis and… | Read, Grep, Glob, WebFetch, WebSearch | sonnet
data-scientist | voltagent | Analyze data patterns, build predictive models, or extract statistical insights from datasets.… | Read, Write, Edit, Bash, Glob, Grep | sonnet
data-scientist | wshobson | Expert data scientist for advanced analytics, machine learning, and statistical modeling. Handles… | Read, Grep, Glob (RC) | inherit
data-validation-suite-backend-security-coder | wshobson | Expert in secure backend coding practices specializing in input validation, authentication, and… | Read, Write, Edit, Glob, Grep (RC) | sonnet
database-admin | wshobson | Expert database administrator specializing in modern cloud databases, automation, and reliability engineering.… | Read, Write, Edit, Glob, Grep (RC) | sonnet
database-administrator | voltagent | Optimizing database performance, implementing high-availability architectures, setting up disaster recovery, or managing… | Read, Write, Edit, Bash, Glob, Grep | sonnet
database-cloud-optimization-backend-architect | wshobson | Expert backend architect specializing in scalable API design, microservices architecture, and distributed… | Read, Grep, Glob (RC) | inherit
database-cloud-optimization-cloud-architect | wshobson | Expert cloud architect specializing in AWS/Azure/GCP/OCI multi-cloud infrastructure design, advanced IaC (Terraform/OpenTofu/CDK),… | Read, Grep, Glob (RC) | sonnet
database-cloud-optimization-database-architect | wshobson | Expert database architect specializing in data layer design from scratch, technology selection,… | Read, Grep, Glob (RC) | inherit
database-cloud-optimization-database-optimizer | wshobson | Expert database optimizer specializing in modern performance tuning, query optimization, and scalable… | Read, Write, Edit, Glob, Grep (RC) | inherit
database-design-database-architect | wshobson | Expert database architect specializing in data layer design from scratch, technology selection,… | Read, Grep, Glob (RC) | opus
database-migrations-database-optimizer | wshobson | Expert database optimizer specializing in modern performance tuning, query optimization, and scalable… | Read, Write, Edit, Glob, Grep (RC) | inherit
database-optimizer | voltagent | Analyze slow queries, optimize database performance across multiple systems, or implement indexing… | Read, Write, Edit, Bash, Glob, Grep | sonnet
debugger | voltagent | Diagnose and fix bugs, identify root causes of failures, or analyze error… | Read, Write, Edit, Bash, Glob, Grep | sonnet
debugging-toolkit-debugger | wshobson | Debugging specialist for errors, test failures, and unexpected behavior. Use proactively when… | Read, Write, Edit, Glob, Grep (RC) | sonnet
debugging-toolkit-dx-optimizer | wshobson | Developer Experience specialist. Improves tooling, setup, and workflows. Use PROACTIVELY when setting… | Read, Write, Edit, Glob, Grep (RC) | sonnet
dependency-management-legacy-modernizer | wshobson | Refactor legacy codebases, migrate outdated frameworks, and implement gradual modernization. Handles technical… | Read, Write, Edit, Glob, Grep (RC) | sonnet
dependency-manager | voltagent | Audit dependencies for vulnerabilities, resolve version conflicts, optimize bundle sizes, or implement… | Read, Write, Edit, Bash, Glob, Grep | haiku
deploy-with-verification | wshobson | Deploying to production. Runs tests, builds, deploys, verifies live, and updates the… | Bash, Read, Edit | sonnet
deployment-engineer | voltagent | Designing, building, or optimizing CI/CD pipelines and deployment automation strategies. | Read, Write, Edit, Bash, Glob, Grep | haiku
deployment-strategies-deployment-engineer | wshobson | Expert deployment engineer specializing in modern CI/CD pipelines, GitOps workflows, and advanced… | Read, Write, Edit, Glob, Grep (RC) | haiku
deployment-strategies-terraform-specialist | wshobson | Expert Terraform/OpenTofu specialist mastering advanced IaC automation, state management, and enterprise infrastructure… | Read, Write, Edit, Glob, Grep (RC) | opus
deployment-validation-cloud-architect | wshobson | Expert cloud architect specializing in AWS/Azure/GCP/OCI multi-cloud infrastructure design, advanced IaC (Terraform/OpenTofu/CDK),… | Read, Grep, Glob (RC) | sonnet
design-bridge | voltagent | Translate a DESIGN.md from the VoltAgent/awesome-design-md repository into polished Claude Code instructions… | Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch | inherit
design-system-architect | wshobson | Expert design system architect specializing in design tokens, component libraries, theming infrastructure,… | Read, Write, Edit, Glob, Grep (RC) | inherit
devops-engineer | voltagent | Building or optimizing infrastructure automation, CI/CD pipelines, containerization strategies, and deployment workflows… | Read, Write, Edit, Bash, Glob, Grep | sonnet
devops-incident-responder | voltagent | Actively responding to production incidents, diagnosing critical service failures, or conducting incident… | Read, Write, Edit, Bash, Glob, Grep | sonnet
dgx-spark-ops-engineer | wshobson | NVIDIA DGX Spark environment doctor for GB10/aarch64/CUDA-13 systems. Diagnoses and fixes ML… | Read, Write, Edit, Glob, Grep (RC) | sonnet
distributed-debugging-devops-troubleshooter | wshobson | Expert DevOps troubleshooter specializing in rapid incident response, advanced debugging, and modern… | Read, Grep, Glob (RC) | sonnet
distributed-debugging-error-detective | wshobson | Search logs and codebases for error patterns, stack traces, and anomalies. Correlates… | Read, Grep, Glob (RC) | sonnet
django-developer | voltagent | Building Django 4+ web applications, REST APIs, or modernizing existing Django projects… | Read, Write, Edit, Bash, Glob, Grep | sonnet
docker-expert | voltagent | Build, optimize, or secure Docker container images and orchestration for production environments. | Read, Write, Edit, Bash, Glob, Grep | sonnet
docs-drift-editor | voltagent | Update Markdown documentation pages that have drifted out of sync with a… | Read, Edit, Grep, Glob, Bash | sonnet
documentation-engineer | voltagent | Create, architect, or overhaul comprehensive documentation systems including API docs, tutorials, guides,… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | haiku
documentation-generation-api-documenter | wshobson | Master API documentation with OpenAPI 3.1, AI-powered tools, and modern developer experience… | Read, Write, Edit, Glob, Grep (RC) | sonnet
documentation-generation-docs-architect | wshobson | Creates comprehensive technical documentation from existing codebases. Analyzes architecture, design patterns, and… | Read, Write, Edit, Glob, Grep (RC) | sonnet
documentation-generation-tutorial-engineer | wshobson | Creates step-by-step tutorials and educational content from code. Transforms complex concepts into… | Read, Write, Edit, Glob, Grep (RC) | sonnet
dotnet-architect | wshobson | Expert .NET backend architect specializing in C#, ASP.NET Core, Entity Framework, Dapper,… | Read, Grep, Glob (RC) | sonnet
dotnet-core-expert | voltagent | Building .NET Core applications requiring cloud-native architecture, high-performance microservices, modern C# patterns,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
dotnet-framework-4.8-expert | voltagent | Working on legacy .NET Framework 4.8 enterprise applications that require maintenance, modernization,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
dx-optimizer | voltagent | Optimizing the complete developer workflow including build times, feedback loops, testing efficiency,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
electron-pro | voltagent | Building Electron desktop applications that require native OS integration, cross-platform distribution, security… | Read, Write, Edit, Bash, Glob, Grep | sonnet
elixir-expert | voltagent | Build fault-tolerant, concurrent systems leveraging OTP patterns, GenServer architectures, and Phoenix framework… | Read, Write, Edit, Bash, Glob, Grep | sonnet
elixir-pro | wshobson | Write idiomatic Elixir code with OTP patterns, supervision trees, and Phoenix LiveView.… | Read, Write, Edit, Glob, Grep (RC) | inherit
email-deliverability-engineer | voltagent | Configuring email authentication, integrating transactional or marketing email providers, diagnosing deliverability problems,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
embedded-systems | voltagent | Developing firmware for resource-constrained microcontrollers, implementing RTOS-based applications, or optimizing real-time systems… | Read, Write, Edit, Bash, Glob, Grep | sonnet
error-coordinator | voltagent | Mine error logs and agent output for recurring failure and cascade patterns,… | Read, Write, Edit, Glob, Grep | sonnet
error-debugging-debugger | wshobson | Debugging specialist for errors, test failures, and unexpected behavior. Use proactively when… | Read, Write, Edit, Glob, Grep (RC) | sonnet
error-debugging-error-detective | wshobson | Search logs and codebases for error patterns, stack traces, and anomalies. Correlates… | Read, Grep, Glob (RC) | sonnet
error-detective | voltagent | Diagnose why errors are occurring in your system, correlate errors across services,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
error-diagnostics-debugger | wshobson | Debugging specialist for errors, test failures, and unexpected behavior. Use proactively when… | Read, Write, Edit, Glob, Grep (RC) | sonnet
error-diagnostics-error-detective | wshobson | Search logs and codebases for error patterns, stack traces, and anomalies. Correlates… | Read, Grep, Glob (RC) | sonnet
eval-judge | wshobson | LLM judge for plugin quality assessment. Scores skills on triggering accuracy, orchestration… | Read, Grep, Glob | sonnet
eval-orchestrator | wshobson | Orchestrates plugin quality evaluation. Use PROACTIVELY when evaluating, scoring, or certifying plugin… | Read, Grep, Glob (RC) | opus
event-sourcing-architect | wshobson | Expert in event sourcing, CQRS, and event-driven architecture patterns. Masters event store… | Read, Grep, Glob (RC) | inherit
expo-react-native-expert | voltagent | Building mobile applications with Expo and React Native that require native module… | Read, Write, Edit, Bash, Glob, Grep | sonnet
fastapi-developer | voltagent | Building modern async Python APIs with FastAPI, implementing Pydantic v2 validation, dependency… | Read, Write, Edit, Bash, Glob, Grep | sonnet
fintech-engineer | voltagent | Building payment systems, financial integrations, or compliance-heavy financial applications that require secure… | Read, Write, Edit, Bash, Glob, Grep | inherit
firmware-analyst | wshobson | Expert firmware analyst specializing in embedded systems, IoT security, and hardware reverse… | Read, Grep, Glob (RC) | opus
first-principles-thinking | voltagent | Challenge assumptions, break down a complex problem from scratch, or approach something… | Read, Grep, Glob, WebFetch, WebSearch | herda
flutter-expert | voltagent | Building cross-platform mobile applications with Flutter 3+ that require custom UI implementation,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
flutter-expert | wshobson | Master Flutter development with Dart 3, advanced widgets, and multi-platform deployment. Handles… | Read, Write, Edit, Glob, Grep (RC) | inherit
framework-migration-architect-review | wshobson | Master software architect specializing in modern architecture patterns, clean architecture, microservices, event-driven… | Read, Grep, Glob (RC) | opus
framework-migration-legacy-modernizer | wshobson | Refactor legacy codebases, migrate outdated frameworks, and implement gradual modernization. Handles technical… | Read, Write, Edit, Glob, Grep (RC) | fable
frontend-developer | voltagent | Building complete frontend applications across React, Vue, and Angular frameworks requiring multi-framework… | Read, Write, Edit, Bash, Glob, Grep | sonnet
frontend-mobile-development-frontend-developer | wshobson | Build React components, implement responsive layouts, and handle client-side state management. Masters… | Read, Write, Edit, Glob, Grep (RC) | inherit
frontend-mobile-development-mobile-developer | wshobson | Develop React Native, Flutter, or native mobile apps with modern architecture patterns.… | Read, Write, Edit, Glob, Grep (RC) | inherit
frontend-mobile-security-frontend-developer | wshobson | Build React components, implement responsive layouts, and handle client-side state management. Masters… | Read, Write, Edit, Glob, Grep (RC) | inherit
frontend-security-coder | wshobson | Expert in secure frontend coding practices specializing in XSS prevention, output sanitization,… | Read, Write, Edit, Glob, Grep (RC) | sonnet
full-stack-orchestration-deployment-engineer | wshobson | Expert deployment engineer specializing in modern CI/CD pipelines, GitOps workflows, and advanced… | Read, Grep, Glob (RC) | haiku
full-stack-orchestration-performance-engineer | wshobson | Expert performance engineer specializing in modern observability, application optimization, and scalable system… | Read, Grep, Glob (RC) | inherit
full-stack-orchestration-security-auditor | wshobson | Expert security auditor specializing in DevSecOps, comprehensive cybersecurity, and compliance frameworks. Masters… | Read, Grep, Glob (RC) | opus
full-stack-orchestration-test-automator | wshobson | Master AI-powered test automation with modern frameworks, self-healing tests, and comprehensive quality… | Read, Grep, Glob (RC) | sonnet
fullstack-developer | voltagent | Build complete features spanning database, API, and frontend layers together as a… | Read, Write, Edit, Bash, Glob, Grep | sonnet
gallery-researcher | wshobson | Gallery search and inspiration agent. Delegates here when user wants to find… | mcp__meigen__search_gallery, mcp__meigen__get_inspiration | haiku
game-developer | voltagent | Implementing game systems, optimizing graphics rendering, building multiplayer networking, or developing gameplay… | Read, Write, Edit, Bash, Glob, Grep | sonnet
gdpr-ccpa-compliance | voltagent | Understand GDPR or CCPA compliance, review data practices, or assess privacy requirements.… | Read, Grep, Glob, WebFetch, WebSearch | herda
git-pr-workflows-code-reviewer | wshobson | Elite code review expert specializing in modern AI-powered code analysis, security vulnerabilities,… | Read, Grep, Glob (RC) | opus
git-workflow-manager | voltagent | Design, establish, or optimize Git workflows, branching strategies, and merge management for… | Read, Write, Edit, Bash, Glob, Grep | haiku
golang-pro | voltagent | Building Go applications requiring concurrent programming, high-performance systems, microservices, or cloud-native architectures… | Read, Write, Edit, Bash, Glob, Grep | sonnet
golang-pro | wshobson | Master Go 1.21+ with modern patterns, advanced concurrency, performance optimization, and production-ready… | Read, Write, Edit, Glob, Grep (RC) | opus
graphql-architect | voltagent | Designing or evolving GraphQL schemas across microservices, implementing federation architectures, or optimizing… | Read, Write, Edit, Bash, Glob, Grep | inherit
growth-loops | voltagent | Design a growth loop, understand PLG mechanics, or build sustainable acquisition. Triggers… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | herda
haskell-pro | wshobson | Expert Haskell engineer specializing in advanced type systems, pure functional design, and… | Read, Write, Edit, Glob, Grep (RC) | sonnet
hipaa-compliance | voltagent | The user is building a healthcare product and needs to understand HIPAA… | Read, Grep, Glob, WebFetch, WebSearch | herda
hr-pro | wshobson | Professional, ethical HR partner for hiring, onboarding/offboarding, PTO and leave, performance, compliant… | Read, Write, Edit, Glob, Grep (RC) | sonnet
hybrid-cloud-architect | wshobson | Expert hybrid cloud architect specializing in complex multi-cloud solutions across AWS/Azure/GCP/OCI and… | Read, Grep, Glob (RC) | opus
image-generator | wshobson | Image generation executor agent. Delegates here for ALL generate_image calls to keep… | mcp__meigen__generate_image | inherit
implement | wshobson | Developer agent. Implements the architect plan step-by-step, guided by AGENTS.md guardrails. Writes… | Read, Write, Edit, Glob, Grep (RC) | sonnet
incident-responder | voltagent | An active security breach, service outage, or operational incident requires immediate response,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
incident-responder | wshobson | Expert SRE incident responder specializing in rapid problem resolution, modern observability, and… | Read, Grep, Glob (RC) | sonnet
incident-response-code-reviewer | wshobson | Reviews code for logic flaws, type safety gaps, error handling issues, architectural… | Read, Grep, Glob (RC) | sonnet
incident-response-debugger | wshobson | Performs deep root cause analysis through code path tracing, git bisect automation,… | Read, Write, Edit, Glob, Grep (RC) | sonnet
incident-response-devops-troubleshooter | wshobson | Expert DevOps troubleshooter specializing in rapid incident response, advanced debugging, and modern… | Read, Grep, Glob (RC) | sonnet
incident-response-error-detective | wshobson | Analyzes error traces, logs, and observability data to identify error signatures, reproduction… | Read, Grep, Glob (RC) | sonnet
incident-response-test-automator | wshobson | Creates comprehensive test suites including unit, integration, regression, and security tests. Validates… | Read, Write, Edit, Glob, Grep (RC) | sonnet
ios-developer | wshobson | Develop native iOS applications with Swift/SwiftUI. Masters iOS 18, SwiftUI, UIKit integration,… | Read, Write, Edit, Glob, Grep (RC) | inherit
iot-engineer | voltagent | Designing and deploying IoT solutions requiring expertise in device management, edge computing,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
it-ops-orchestrator | voltagent | Orchestrating complex IT operations tasks that span multiple domains (PowerShell automation, .NET… | Read, Write, Edit, Bash, Glob, Grep | sonnet
java-architect | voltagent | Designing enterprise Java architectures, migrating Spring Boot applications, or establishing microservices patterns… | Read, Write, Edit, Bash, Glob, Grep | sonnet
java-pro | wshobson | Master Java 21+ with modern features like virtual threads, pattern matching, and… | Read, Write, Edit, Glob, Grep (RC) | opus
javascript-pro | voltagent | Build, optimize, or refactor modern JavaScript code for browser, Node.js, or full-stack… | Read, Write, Edit, Bash, Glob, Grep | sonnet
javascript-pro | wshobson | Master modern JavaScript with ES6+, async patterns, and Node.js APIs. Handles promises,… | Read, Write, Edit, Glob, Grep (RC) | inherit
julia-pro | wshobson | Master Julia 1.10+ with modern features, performance optimization, multiple dispatch, and production-ready… | Read, Write, Edit, Glob, Grep (RC) | sonnet
knowledge-synthesizer | voltagent | Mine recurring patterns from agent logs, session transcripts, and workflow history, then… | Read, Write, Edit, Glob, Grep | sonnet
kotlin-specialist | voltagent | Building Kotlin applications requiring advanced coroutine patterns, multiplatform code sharing, or Android/server-side… | Read, Write, Edit, Bash, Glob, Grep | sonnet
kubernetes-operations-kubernetes-architect | wshobson | Expert Kubernetes architect specializing in cloud-native infrastructure, advanced GitOps workflows (ArgoCD/Flux), and… | Read, Grep, Glob (RC) | opus
kubernetes-specialist | voltagent | Design, deploy, configure, or troubleshoot Kubernetes clusters and workloads in production environments. | Read, Write, Edit, Bash, Glob, Grep | sonnet
landing-page-copywriter | voltagent | Writing or optimizing landing page copy, hero sections, CTAs, or conversion-focused funnel… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | sonnet
laravel-specialist | voltagent | Building Laravel 10+ applications, architecting Eloquent models with complex relationships, implementing queue… | Read, Write, Edit, Bash, Glob, Grep | sonnet
legacy-modernizer | voltagent | Modernizing legacy systems that need incremental migration strategies, technical debt reduction, and… | Read, Write, Edit, Bash, Glob, Grep | sonnet
legal-advisor | voltagent | Draft contracts, review compliance requirements, develop IP protection strategies, or assess legal… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | sonnet
legal-advisor | wshobson | Draft privacy policies, terms of service, disclaimers, and legal notices. Creates GDPR-compliant… | Read, Grep, Glob, WebFetch, WebSearch (RC) | sonnet
license-engineer | voltagent | Architecting, implementing, or optimizing end-to-end legal licensing systems—from OSI standard selection and… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | inherit
llm-architect | voltagent | Designing LLM systems for production, implementing fine-tuning or RAG architectures, optimizing inference… | Read, Write, Edit, Bash, Glob, Grep | inherit
llm-finetuning-architect | wshobson | Fine-tuning strategist who owns the eval gate and method/model selection. Refuses to… | Read, Grep, Glob (RC) | opus
llm-finetuning-eval-engineer | wshobson | Evaluation gatekeeper for fine-tuning — builds golden sets and graders, calibrates judges,… | Read, Write, Edit, Glob, Grep (RC) | sonnet
llm-finetuning-training-engineer | wshobson | Fine-tuning implementation workhorse — prepares datasets, generates Unsloth-first training scripts, launches and… | Read, Write, Edit, Glob, Grep (RC) | sonnet
m365-admin | voltagent | Automating Microsoft 365 administrative tasks including Exchange Online mailbox provisioning, Teams collaboration… | Read, Write, Edit, Bash, Glob, Grep | sonnet
machine-learning-engineer | voltagent | Deploy, optimize, or serve machine learning models at scale in production environments. | Read, Write, Edit, Bash, Glob, Grep | sonnet
malware-analyst | wshobson | Expert malware analyst specializing in defensive malware research, threat intelligence, and incident… | Read, Grep, Glob (RC) | opus
market-researcher | voltagent | Analyze markets, understand consumer behavior, assess competitive landscapes, and size opportunities to… | Read, Grep, Glob, WebFetch, WebSearch | sonnet
mcp-developer | voltagent | Build, debug, or optimize Model Context Protocol (MCP) servers and clients that… | Read, Write, Edit, Bash, Glob, Grep | sonnet
memory-curator | voltagent | Use to maintain an agent's long-term memory across sessions — deciding what… | Read, Write, Edit, Glob, Grep | sonnet
mermaid-expert | wshobson | Create Mermaid diagrams for flowcharts, sequences, ERDs, and architectures. Masters syntax for… | Read, Write, Edit, Glob, Grep (RC) | haiku
microservices-architect | voltagent | Designing distributed system architecture, decomposing monolithic applications into independent microservices, or establishing… | Read, Write, Edit, Bash, Glob, Grep | inherit
minecraft-bukkit-pro | wshobson | Master Minecraft server plugin development with Bukkit, Spigot, and Paper APIs. Specializes… | Read, Write, Edit, Glob, Grep (RC) | opus
ml-engineer | voltagent | Building production ML systems requiring model training pipelines, model serving infrastructure, performance… | Read, Write, Edit, Bash, Glob, Grep | sonnet
ml-engineer | wshobson | Build production ML systems with PyTorch 2.x, TensorFlow, and modern ML frameworks.… | Read, Write, Edit, Glob, Grep (RC) | inherit
mlops-engineer | voltagent | Design and implement ML infrastructure, set up CI/CD for machine learning models,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
mlops-engineer | wshobson | Build comprehensive ML pipelines, experiment tracking, and model registries with MLflow, Kubeflow,… | Read, Write, Edit, Glob, Grep (RC) | inherit
mobile-app-developer | voltagent | Developing iOS and Android mobile applications with focus on native or cross-platform… | Read, Write, Edit, Bash, Glob, Grep | sonnet
mobile-developer | voltagent | Building cross-platform mobile applications requiring native performance optimization, platform-specific features, and offline-first… | Read, Write, Edit, Bash, Glob, Grep | sonnet
mobile-security-coder | wshobson | Expert in secure mobile coding practices specializing in input validation, WebView security,… | Read, Write, Edit, Glob, Grep (RC) | sonnet
monorepo-architect | wshobson | Expert in monorepo architecture, build systems, and dependency management at scale. Masters… | Read, Grep, Glob (RC) | opus
multi-agent-coordinator | voltagent | Plan how multiple concurrent subagents should communicate, sequence their work, share state… | Read, Write, Edit, Glob, Grep | inherit
multi-platform-apps-backend-architect | wshobson | Expert backend architect specializing in scalable API design, microservices architecture, and distributed… | Read, Grep, Glob (RC) | inherit
multi-platform-apps-frontend-developer | wshobson | Build React components, implement responsive layouts, and handle client-side state management. Masters… | Read, Write, Edit, Glob, Grep (RC) | inherit
multi-platform-apps-mobile-developer | wshobson | Develop React Native, Flutter, or native mobile apps with modern architecture patterns.… | Read, Write, Edit, Glob, Grep (RC) | inherit
network-engineer | voltagent | Designing, optimizing, or troubleshooting cloud and hybrid network infrastructures, or when addressing… | Read, Write, Edit, Bash, Glob, Grep | sonnet
nextjs-developer | voltagent | Building production Next.js 14+ applications that require full-stack development with App Router,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
nlp-engineer | voltagent | Building production NLP systems, implementing text processing pipelines, developing language models, or… | Read, Write, Edit, Bash, Glob, Grep | sonnet
node-specialist | voltagent | Build, optimize, or debug Node.js backend applications, APIs, CLIs, or microservices requiring… | Read, Write, Edit, Bash, Glob, Grep | sonnet
observability-monitoring-database-optimizer | wshobson | Expert database optimizer specializing in modern performance tuning, query optimization, and scalable… | Read, Write, Edit, Glob, Grep (RC) | inherit
observability-monitoring-network-engineer | wshobson | Expert network engineer specializing in modern cloud networking, security architectures, and performance… | Read, Write, Edit, Glob, Grep (RC) | sonnet
observability-monitoring-observability-engineer | wshobson | Build production-ready monitoring, logging, and tracing systems. Implements comprehensive observability strategies, SLI/SLO… | Read, Write, Edit, Glob, Grep (RC) | inherit
observability-monitoring-performance-engineer | wshobson | Expert performance engineer specializing in modern observability, application optimization, and scalable system… | Read, Write, Edit, Glob, Grep (RC) | inherit
orchestrate | wshobson | Product Orchestrator agent. Reads the active story file, asks clarifying product questions… | Read, Grep, Glob (RC) | sonnet
payment-integration | voltagent | Implementing payment systems, integrating payment gateways, or handling financial transactions that require… | Read, Write, Edit, Bash, Glob, Grep | inherit
payment-integration | wshobson | Integrate Stripe, PayPal, and payment processors. Handles checkout flows, subscriptions, webhooks, and… | Read, Grep, Glob (RC) | sonnet
penetration-tester | voltagent | Conduct authorized security penetration tests to identify real vulnerabilities through active exploitation… | Read, Grep, Glob, Bash | inherit
performance-engineer | voltagent | Identify and eliminate performance bottlenecks in applications, databases, or infrastructure systems, and… | Read, Write, Edit, Bash, Glob, Grep | sonnet
performance-monitor | voltagent | Analyze existing metric, log, and output files to spot performance patterns and… | Read, Write, Edit, Glob, Grep | haiku
performance-testing-review-performance-engineer | wshobson | Expert performance engineer specializing in modern observability, application optimization, and scalable system… | Read, Grep, Glob (RC) | inherit
performance-testing-review-test-automator | wshobson | Master AI-powered test automation with modern frameworks, self-healing tests, and comprehensive quality… | Read, Grep, Glob (RC) | sonnet
php-pro | voltagent | Working with PHP 8.3+ projects that require strict typing, modern language features,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
php-pro | wshobson | Write idiomatic PHP code with generators, iterators, SPL data structures, and modern… | Read, Write, Edit, Glob, Grep (RC) | inherit
platform-engineer | voltagent | Building or improving internal developer platforms (IDPs), designing self-service infrastructure, or optimizing… | Read, Write, Edit, Bash, Glob, Grep | inherit
policy-enforcer | wshobson | Cedar policy author and reviewer for Claude Code tool calls. Writes, audits,… | Read, Grep, Glob (RC) | opus
posix-shell-pro | wshobson | Expert in strict POSIX sh scripting for maximum portability across Unix-like systems.… | Read, Write, Edit, Glob, Grep (RC) | sonnet
postgres-pro | voltagent | Optimize PostgreSQL performance, design high-availability replication, or troubleshoot database issues at scale.… | Read, Write, Edit, Bash, Glob, Grep | sonnet
powershell-5.1-expert | voltagent | Automating Windows infrastructure tasks requiring PowerShell 5.1 scripts with RSAT modules for… | Read, Write, Edit, Bash, Glob, Grep | sonnet
powershell-7-expert | voltagent | Building cross-platform cloud automation scripts, Azure infrastructure orchestration, or CI/CD pipelines requiring… | Read, Write, Edit, Bash, Glob, Grep | sonnet
powershell-module-architect | voltagent | Architecting and refactoring PowerShell modules, designing profile systems, or creating cross-version compatible… | Read, Write, Edit, Bash, Glob, Grep | sonnet
powershell-security-hardening | voltagent | Harden PowerShell automation, secure remoting configuration, enforce least-privilege design, or align scripts… | Read, Write, Edit, Bash, Glob, Grep | inherit
powershell-ui-architect | voltagent | Designing or building desktop graphical interfaces (WinForms, WPF, Metro-style dashboards) or terminal… | Read, Write, Edit, Bash, Glob, Grep | sonnet
pptx-deck-creation-builder | wshobson | Creating, repairing, or auditing a production-ready editable PowerPoint (PPTX) deck from a… | Read, Write, Edit, Glob, Grep (RC) | inherit
prod-logs-health-check | wshobson | Pulls recent production logs filtered for errors, warnings, and anomalies. Use after… | Bash, Read | haiku
product-manager | voltagent | Make product strategy decisions, prioritize features, or define roadmap plans based on… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | haiku
project-idea-validator | voltagent | An idea pressure-tested with brutal honesty, competitor teardown, market validation, and clear… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | sonnet
project-manager | voltagent | Establish project plans, track execution progress, manage risks, control budget/schedule, and coordinate… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | haiku
prompt-crafter | wshobson | Batch prompt writing agent. Delegates here when you need to write multiple… | Read, Write, Edit, Glob, Grep (RC) | haiku
prompt-engineer | voltagent | Design, optimize, test, or evaluate prompts for large language models in production… | Read, Write, Edit, Bash, Glob, Grep | sonnet
prompt-engineer | wshobson | Expert prompt engineer specializing in advanced prompting techniques, LLM optimization, and AI… | Read, Write, Edit, Glob, Grep (RC) | inherit
python-development-django-pro | wshobson | Master Django 5.x with async views, DRF, Celery, and Django Channels. Build… | Read, Write, Edit, Glob, Grep (RC) | opus
python-development-fastapi-pro | wshobson | Build high-performance async APIs with FastAPI, SQLAlchemy 2.0, and Pydantic V2. Master… | Read, Write, Edit, Glob, Grep (RC) | opus
python-pro | voltagent | Build type-safe, production-ready Python code for web APIs, system utilities, or complex… | Read, Write, Edit, Bash, Glob, Grep | sonnet
python-pro | wshobson | Master Python 3.12+ with modern features, async programming, performance optimization, and production-ready… | Read, Write, Edit, Glob, Grep (RC) | opus
qa | wshobson | QA Agent. Tests all acceptance criteria and edge cases from orchestrator-output.md. Generates… | Read, Grep, Glob (RC) | sonnet
qa-expert | voltagent | Comprehensive quality assurance strategy, test planning across the entire development cycle, or… | Read, Grep, Glob, Bash | sonnet
quant-analyst | voltagent | Develop quantitative trading strategies, build financial models with rigorous mathematical foundations, or… | Read, Write, Edit, Bash, Glob, Grep | inherit
quant-analyst | wshobson | Build financial models, backtest trading strategies, and analyze market data. Implements risk… | Read, Grep, Glob, WebFetch, WebSearch (RC) | inherit
rails-expert | voltagent | Building or modernizing Rails applications requiring API development, Hotwire reactivity, real-time features,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
react-specialist | voltagent | Optimizing existing React applications for performance, implementing advanced React 18+ features, or… | Read, Write, Edit, Bash, Glob, Grep | sonnet
readme-generator | voltagent | A maintainer-ready README built from exact repository reality, with deep codebase scanning,… | Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch | sonnet
refactoring-specialist | voltagent | Transform poorly structured, complex, or duplicated code into clean, maintainable systems while… | Read, Write, Edit, Bash, Glob, Grep | sonnet
reference-builder | wshobson | Creates exhaustive technical references and API documentation. Generates comprehensive parameter listings, configuration… | Read, Write, Edit, Glob, Grep (RC) | haiku
reinforcement-learning-engineer | voltagent | Designing RL environments, training agents with reward optimization, implementing policy gradient methods,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
research-analyst | voltagent | Comprehensive research across multiple sources with synthesis of findings into actionable insights,… | Read, Grep, Glob, WebFetch, WebSearch | sonnet
reverse-engineer | wshobson | Expert reverse engineer specializing in binary analysis, disassembly, decompilation, and software analysis.… | Read, Grep, Glob (RC) | opus
review | wshobson | PR Reviewer agent. Reviews implemented code using a 3-tier taxonomy (🔴 Critical… | Read, Grep, Glob (RC) | inherit
risk-manager | voltagent | Identify, quantify, and mitigate enterprise-level risks across financial, operational, regulatory, and strategic… | Read, Write, Edit, Bash, Glob, Grep | inherit
risk-manager | wshobson | Monitor portfolio risk, R-multiples, and position limits. Creates hedging strategies, calculates expectancy,… | Read, Grep, Glob, WebFetch, WebSearch (RC) | inherit
ruby-pro | wshobson | Write idiomatic Ruby code with metaprogramming, Rails patterns, and performance optimization. Specializes… | Read, Write, Edit, Glob, Grep (RC) | inherit
rust-engineer | voltagent | Building Rust systems where memory safety, ownership patterns, zero-cost abstractions, and performance… | Read, Write, Edit, Bash, Glob, Grep | sonnet
rust-pro | wshobson | Master Rust 1.75+ with modern async patterns, advanced type system features, and… | Read, Write, Edit, Glob, Grep (RC) | opus
sales-automator | wshobson | Draft cold emails, follow-ups, and proposal templates. Creates pricing pages, case studies,… | Read, Write, Edit, Glob, Grep (RC) | haiku
sales-engineer | voltagent | Conduct technical pre-sales activities including solution architecture, proof-of-concept development, and technical demonstrations… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | sonnet
scala-pro | wshobson | Master enterprise-grade Scala development with functional programming, distributed systems, and big data… | Read, Write, Edit, Glob, Grep (RC) | inherit
scrum-master | voltagent | Teams need facilitation, process optimization, velocity improvement, or agile ceremony management—especially for… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | haiku
search-specialist | voltagent | Find specific information across multiple sources using advanced search strategies, query optimization,… | Read, Grep, Glob, WebFetch, WebSearch | sonnet
search-specialist | wshobson | Expert web researcher using advanced search techniques and synthesis. Masters search operators,… | Read, Grep, Glob, WebFetch, WebSearch (RC) | haiku
security-auditor | voltagent | Conducting comprehensive security audits, compliance assessments, or risk evaluations across systems, infrastructure,… | Read, Grep, Glob | inherit
security-compliance-security-auditor | wshobson | Expert security auditor specializing in DevSecOps, comprehensive cybersecurity, and compliance frameworks. Masters… | Read, Grep, Glob (RC) | opus
security-engineer | voltagent | Implementing comprehensive security solutions across infrastructure, building automated security controls into CI/CD… | Read, Write, Edit, Bash, Glob, Grep | inherit
security-scanning-security-auditor | wshobson | Expert security auditor specializing in DevSecOps, comprehensive cybersecurity, and compliance frameworks. Masters… | Read, Grep, Glob (RC) | opus
seo-authority-builder | wshobson | Analyzes content for E-E-A-T signals and suggests improvements to build authority and… | Read, Grep, Glob, WebFetch, WebSearch (RC) | sonnet
seo-cannibalization-detector | wshobson | Analyzes multiple provided pages to identify keyword overlap and potential cannibalization issues.… | Read, Grep, Glob, WebFetch, WebSearch (RC) | haiku
seo-content-auditor | wshobson | Analyzes provided content for quality, E-E-A-T signals, and SEO best practices. Scores… | Read, Grep, Glob, WebFetch, WebSearch (RC) | sonnet
seo-content-planner | wshobson | Creates comprehensive content outlines and topic clusters for SEO. Plans content calendars… | Read, Grep, Glob, WebFetch, WebSearch (RC) | haiku
seo-content-refresher | wshobson | Identifies outdated elements in provided content and suggests updates to maintain freshness.… | Read, Write, Edit, Glob, Grep (RC) | haiku
seo-content-writer | wshobson | Writes SEO-optimized content based on provided keywords and topic briefs. Creates engaging,… | Read, Write, Edit, Glob, Grep (RC) | sonnet
seo-keyword-strategist | wshobson | Analyzes keyword usage in provided content, calculates density, suggests semantic variations and… | Read, Grep, Glob, WebFetch, WebSearch (RC) | haiku
seo-meta-optimizer | wshobson | Creates optimized meta titles, descriptions, and URL suggestions based on character limits… | Read, Write, Edit, Glob, Grep (RC) | haiku
seo-snippet-hunter | wshobson | Formats content to be eligible for featured snippets and SERP features. Creates… | Read, Grep, Glob, WebFetch, WebSearch (RC) | haiku
seo-specialist | voltagent | Comprehensive SEO optimization encompassing technical audits, keyword strategy, content optimization, and search… | Read, Grep, Glob, WebFetch, WebSearch | haiku
seo-structure-architect | wshobson | Analyzes and optimizes content structure including header hierarchy, suggests schema markup, and… | Read, Write, Edit, Glob, Grep (RC) | haiku
service-mesh-expert | wshobson | Expert service mesh architect specializing in Istio, Linkerd, and cloud-native networking patterns.… | Read, Write, Edit, Glob, Grep (RC) | opus
session-end | wshobson | Use at the end of every significant work session. Finalizes the session… | Read, Edit, Bash | haiku
session-start | wshobson | Use at the start of every work session. Reads the canonical state… | Read, Bash, Edit | haiku
slack-expert | voltagent | Developing Slack applications, implementing Slack API integrations, or reviewing Slack bot code… | Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch | sonnet
spring-boot-engineer | voltagent | Building enterprise Spring Boot 3+ applications requiring microservices architecture, cloud-native deployment, or… | Read, Write, Edit, Bash, Glob, Grep | sonnet
sql-pro | voltagent | Optimize complex SQL queries, design efficient database schemas, or solve performance issues… | Read, Write, Edit, Bash, Glob, Grep | sonnet
sql-pro | wshobson | Master modern SQL with cloud-native databases, OLTP/OLAP optimization, and advanced query techniques.… | Read, Write, Edit, Glob, Grep (RC) | inherit
sre-engineer | voltagent | Establish or improve system reliability through SLO definition, error budget management, and… | Read, Write, Edit, Bash, Glob, Grep | sonnet
startup-analyst | wshobson | Expert startup business analyst specializing in market sizing, financial modeling, competitive analysis,… | Read, Grep, Glob, WebFetch, WebSearch (RC) | inherit
surgeon-reviewer | voltagent | A ruthlessly prioritized code review that reports only real problems — bugs,… | Read, Grep, Glob, Bash | inherit
swift-expert | voltagent | Building native iOS, macOS, or server-side Swift applications requiring advanced concurrency patterns,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
symfony-specialist | voltagent | Building Symfony 6+/7+/8+ applications, architecting Doctrine ORM entities with complex relationships, implementing… | Read, Write, Edit, Bash, Glob, Grep | sonnet
task-distributor | voltagent | Design and document a task-distribution strategy across multiple agents or workers —… | Read, Write, Edit, Glob, Grep | haiku
tdd-workflows-code-reviewer | wshobson | Elite code review expert specializing in modern AI-powered code analysis, security vulnerabilities,… | Read, Grep, Glob (RC) | opus
tdd-workflows-tdd-orchestrator | wshobson | Master TDD orchestrator specializing in red-green-refactor discipline, multi-agent workflow coordination, and comprehensive… | Read, Grep, Glob (RC) | opus
team-collaboration-dx-optimizer | wshobson | Developer Experience specialist. Improves tooling, setup, and workflows. Use PROACTIVELY when setting… | Read, Write, Edit, Glob, Grep (RC) | sonnet
team-debugger | wshobson | Hypothesis-driven debugging investigator that investigates one assigned hypothesis, gathering evidence to confirm… | Read, Glob, Grep, Bash, TaskList, TaskGet, TaskUpdate, SendMessage | opus
team-implementer | wshobson | Parallel feature builder that implements components within strict file ownership boundaries, coordinating… | Read, Write, Edit, Glob, Grep, Bash, TaskList, TaskGet, TaskUpdate, SendMessage | opus
team-lead | wshobson | Team orchestrator that decomposes work into parallel tasks with file ownership boundaries,… | Read, Glob, Grep, Bash, Agent, TeamCreate, TeamDelete, TaskCreate, TaskList, TaskGet, TaskUpdate, SendMessage | fable
team-reviewer | wshobson | Multi-dimensional code reviewer that operates on one assigned review dimension (security, performance,… | Read, Glob, Grep, Bash, TaskList, TaskGet, TaskUpdate, SendMessage | opus
technical-writer | voltagent | Create, improve, or maintain technical documentation including API references, user guides, SDK… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | haiku
telegram-ads-analyst | voltagent | Advertise in Telegram channels, vet a channel before buying a post, check… | Read, Write, Edit, WebFetch, WebSearch | herda
temporal-python-pro | wshobson | Master Temporal workflow orchestration with Python SDK. Implements durable workflows, saga patterns,… | Read, Write, Edit, Glob, Grep (RC) | inherit
terraform-engineer | voltagent | Building, refactoring, or scaling infrastructure as code using Terraform with focus on… | Read, Write, Edit, Bash, Glob, Grep | sonnet
terragrunt-expert | voltagent | Expert Terragrunt specialist mastering infrastructure orchestration, DRY configurations, and multi-environment deployments. Masters… | Read, Write, Edit, Bash, Glob, Grep | sonnet
test-automator | voltagent | Build, implement, or enhance automated test frameworks, create test scripts, or integrate… | Read, Write, Edit, Bash, Glob, Grep | sonnet
threat-modeling-expert | wshobson | Expert in threat modeling methodologies, security architecture review, and risk assessment. Masters… | Read, Grep, Glob (RC) | opus
tooling-engineer | voltagent | Build or enhance developer tools including CLIs, code generators, build tools, and… | Read, Write, Edit, Bash, Glob, Grep | sonnet
trend-analyst | voltagent | Analyzing emerging patterns, predicting industry shifts, or developing future scenarios to inform… | Read, Grep, Glob, WebFetch, WebSearch | sonnet
typescript-pro | voltagent | Implementing TypeScript code requiring advanced type system patterns, complex generics, type-level programming,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
typescript-pro | wshobson | Master TypeScript with advanced types, generics, and strict type safety. Handles complex… | Read, Write, Edit, Glob, Grep (RC) | opus
ui-designer | voltagent | Designing visual interfaces, creating design systems, building component libraries, or refining user-facing… | Read, Write, Edit, Bash, Glob, Grep | sonnet
ui-designer | wshobson | Expert UI designer specializing in component creation, layout systems, and visual design… | Read, Write, Edit, Glob, Grep (RC) | inherit
ui-ux-designer | wshobson | Create interface designs, wireframes, and design systems. Masters user research, accessibility standards,… | Read, Write, Edit, Glob, Grep (RC) | sonnet
ui-ux-tester | voltagent | Exhaustive UI and UX functionality testing driven by documented user flows, with… | Read, Write, Edit, Bash, Glob, Grep, WebSearch, chrome-mcp, computer-use | sonnet
ui-visual-validator | wshobson | Rigorous visual validation expert specializing in UI testing, design system compliance, and… | Read, Grep, Glob (RC) | sonnet
unit-testing-debugger | wshobson | Debugging specialist for errors, test failures, and unexpected behavior. Use proactively when… | Read, Write, Edit, Glob, Grep (RC) | sonnet
unit-testing-test-automator | wshobson | Master AI-powered test automation with modern frameworks, self-healing tests, and comprehensive quality… | Read, Write, Edit, Glob, Grep (RC) | sonnet
unity-developer | wshobson | Build Unity games with optimized C# scripts, efficient rendering, and proper asset… | Read, Write, Edit, Glob, Grep (RC) | opus
ux-researcher | voltagent | Conduct user research, analyze user behavior, or generate actionable insights to validate… | Read, Grep, Glob, WebFetch, WebSearch | sonnet
vector-database-engineer | wshobson | Expert in vector databases, embedding strategies, and semantic search implementation. Masters Pinecone,… | Read, Write, Edit, Glob, Grep (RC) | inherit
vue-expert | voltagent | Building Vue 3 applications that require Composition API mastery, reactivity optimization, or… | Read, Write, Edit, Bash, Glob, Grep | sonnet
webhook-engineer | voltagent | Consuming or delivering webhooks — signature verification, idempotent handlers, retry and backoff… | Read, Write, Edit, Bash, Glob, Grep | sonnet
websocket-engineer | voltagent | Implementing real-time bidirectional communication features using WebSockets, Socket.IO, or similar technologies at… | Read, Write, Edit, Bash, Glob, Grep | sonnet
windows-infra-admin | voltagent | Managing Windows Server infrastructure, Active Directory, DNS, DHCP, and Group Policy configurations,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
wordpress-master | voltagent | Architect, optimize, or troubleshoot WordPress implementations ranging from custom theme/plugin development to… | Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch | sonnet
workflow-orchestrator | voltagent | Design workflow and state-machine definitions — states, transitions, error handling, and compensation/rollback… | Read, Write, Edit, Glob, Grep | inherit
x-api-integration | voltagent | Building X/Twitter data products, integrating X API alternatives, designing tweet search workflows,… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | haiku
