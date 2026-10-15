# Catálogo de especialistas — Real Corp

Índice dos agentes aprovados na triagem de segurança. **Não leia inteiro: procure com grep**
(ex.: `grep -i "kubernetes" docs/CATALOGO.md`). O arquivo de cada agente fica em
`real-corp/catalogo/ORIGEM/<origem>/<nome>.md`. Regras de uso: `docs/CEO.md`.

Fontes (clone raso, só os `.md` de agentes foram lidos; nada foi executado):
- **voltagent**: https://github.com/VoltAgent/awesome-claude-code-subagents @ `408d3c9eee2d0c75c12a3abb5de29e53c2ca6b9e` (MIT) — 158 aprovados de 163
- **wshobson**: https://github.com/wshobson/agents @ `044b4b21f083948e69ec878a7b07c8d0951a6ffa` (MIT) — 13 aprovados de 202

Rejeitados e motivos: `docs/DECISOES.md`. Descrição = início da descrição original (inglês), até 12 palavras.

nome | origem | descrição | tools | model
--- | --- | --- | --- | ---
ab-test-analysis | voltagent | Analyze A/B test results, interpret p-values, determine statistical significance, or make a… | Read, Grep, Glob, WebFetch, WebSearch | herda
accessibility-tester | voltagent | Comprehensive accessibility testing, WCAG compliance verification, or assessment of assistive technology support. | Read, Grep, Glob, Bash | haiku
ad-security-reviewer | voltagent | Audit Active Directory security posture, evaluate privilege escalation risks, review identity delegation… | Read, Write, Edit, Bash, Glob, Grep | inherit
agent-organizer | voltagent | Break a complex task into subtasks, match each to the capabilities of… | Read, Write, Edit, Glob, Grep | sonnet
ai-engineer | voltagent | Architecting, implementing, or optimizing end-to-end AI systems—from model selection and training pipelines… | Read, Write, Edit, Bash, Glob, Grep | inherit
ai-writing-auditor | voltagent | Audit content for AI writing patterns and rewrite text to remove them. | Read, Write, Edit, Bash, Glob, Grep | inherit
angular-architect | voltagent | Architecting enterprise Angular 15+ applications with complex state management, optimizing RxJS patterns,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
api-designer | voltagent | Designing new APIs, creating API specifications, or refactoring existing API architecture for… | Read, Write, Edit, Bash, Glob, Grep | sonnet
api-documenter | voltagent | Creating or improving API documentation, writing OpenAPI specifications, building interactive documentation portals,… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | haiku
architect-reviewer | voltagent | Evaluate system design decisions, architectural patterns, and technology choices at the macro… | Read, Write, Edit, Bash, Glob, Grep | inherit
assumption-mapping | voltagent | Identify and prioritize risky assumptions in a product idea, feature, or strategy.… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | herda
auth-integration-engineer | voltagent | Implementing authentication and authorization — OAuth 2.1/OIDC flows, SAML enterprise SSO, session… | Read, Write, Edit, Bash, Glob, Grep | sonnet
azure-infra-engineer | voltagent | Designing, deploying, or managing Azure infrastructure with focus on network architecture, Entra… | Read, Write, Edit, Bash, Glob, Grep | sonnet
backend-developer | voltagent | Building server-side APIs, microservices, and backend systems that require robust architecture, scalability… | Read, Write, Edit, Bash, Glob, Grep | sonnet
backlog-grooming | voltagent | Groom, refine, or clean up a product backlog. Triggers on: 'groom backlog',… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | herda
blockchain-developer | voltagent | Building smart contracts, DApps, and blockchain protocols that require expertise in Solidity,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
build-engineer | voltagent | Optimize build performance, reduce compilation times, or scale build systems across growing… | Read, Write, Edit, Bash, Glob, Grep | haiku
business-analyst | voltagent | Analyzing business processes, gathering requirements from stakeholders, or identifying process improvement opportunities… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | sonnet
chaos-engineer | voltagent | Design and execute controlled failure experiments, validate system resilience before incidents occur,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
cli-developer | voltagent | Building command-line tools and terminal applications that require intuitive command design, cross-platform… | Read, Write, Edit, Bash, Glob, Grep | sonnet
cloud-architect | voltagent | Design, evaluate, or optimize cloud infrastructure architecture at scale. Invoke when designing… | Read, Write, Edit, Bash, Glob, Grep | inherit
code-review-preshipment | wshobson | Comprehensive pre-ship review of all changes since the last deploy or a… | Bash, Read, Glob, Grep | sonnet
code-reviewer | voltagent | Conduct comprehensive code reviews focusing on code quality, security vulnerabilities, and best… | Read, Write, Edit, Bash, Glob, Grep | inherit
codebase-orchestrator | voltagent | Repository-wide refactor governance with explicit approval loops, weighted risk prioritization, diff previews,… | Read, Write, Edit, Bash, Glob, Grep, WebFetch, airis-mcp-gateway, context-manager, error-coordinator, pied-piper, subagent-catalog:search, subagent-catalog:fetch | inherit
cohort-analysis | voltagent | Analyze retention, cohort behavior, engagement trends, or understand how different user groups… | Read, Grep, Glob, WebFetch, WebSearch | herda
competitive-analyst | voltagent | Analyze direct and indirect competitors, benchmark against market leaders, or develop strategies… | Read, Grep, Glob, WebFetch, WebSearch | sonnet
compliance-auditor | voltagent | Achieve regulatory compliance, implement compliance controls, or prepare for audits across frameworks… | Read, Grep, Glob | inherit
conductor-validator | wshobson | Validates Conductor project artifacts for completeness, consistency, and correctness. Use after setup,… | Read, Glob, Grep, Bash | opus
content-marketer | voltagent | Develop comprehensive content strategies, create SEO-optimized marketing content, or execute multi-channel content… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | haiku
context-manager | voltagent | Use to organize the shared context and state that a multi-agent workflow… | Read, Write, Edit, Glob, Grep | sonnet
cpp-pro | voltagent | Building high-performance C++ systems requiring modern C++20/23 features, template metaprogramming, or zero-overhead… | Read, Write, Edit, Bash, Glob, Grep | sonnet
csharp-developer | voltagent | Building ASP.NET Core web APIs, cloud-native .NET solutions, or modern C# applications… | Read, Write, Edit, Bash, Glob, Grep | sonnet
customer-success-manager | voltagent | Assess customer health, develop retention strategies, identify upsell opportunities, or maximize customer… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | sonnet
data-analyst | voltagent | Extract insights from business data, create dashboards and reports, or perform statistical… | Read, Write, Edit, Bash, Glob, Grep | haiku
data-engineer | voltagent | Design, build, or optimize data pipelines, ETL/ELT processes, and data infrastructure. Invoke… | Read, Write, Edit, Bash, Glob, Grep | sonnet
data-researcher | voltagent | Discover, collect, and validate data from multiple sources to fuel analysis and… | Read, Grep, Glob, WebFetch, WebSearch | sonnet
data-scientist | voltagent | Analyze data patterns, build predictive models, or extract statistical insights from datasets.… | Read, Write, Edit, Bash, Glob, Grep | sonnet
database-administrator | voltagent | Optimizing database performance, implementing high-availability architectures, setting up disaster recovery, or managing… | Read, Write, Edit, Bash, Glob, Grep | sonnet
database-optimizer | voltagent | Analyze slow queries, optimize database performance across multiple systems, or implement indexing… | Read, Write, Edit, Bash, Glob, Grep | sonnet
debugger | voltagent | Diagnose and fix bugs, identify root causes of failures, or analyze error… | Read, Write, Edit, Bash, Glob, Grep | sonnet
dependency-manager | voltagent | Audit dependencies for vulnerabilities, resolve version conflicts, optimize bundle sizes, or implement… | Read, Write, Edit, Bash, Glob, Grep | haiku
deploy-with-verification | wshobson | Deploying to production. Runs tests, builds, deploys, verifies live, and updates the… | Bash, Read, Edit | sonnet
deployment-engineer | voltagent | Designing, building, or optimizing CI/CD pipelines and deployment automation strategies. | Read, Write, Edit, Bash, Glob, Grep | haiku
design-bridge | voltagent | Translate a DESIGN.md from the VoltAgent/awesome-design-md repository into polished Claude Code instructions… | Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch | inherit
devops-engineer | voltagent | Building or optimizing infrastructure automation, CI/CD pipelines, containerization strategies, and deployment workflows… | Read, Write, Edit, Bash, Glob, Grep | sonnet
devops-incident-responder | voltagent | Actively responding to production incidents, diagnosing critical service failures, or conducting incident… | Read, Write, Edit, Bash, Glob, Grep | sonnet
django-developer | voltagent | Building Django 4+ web applications, REST APIs, or modernizing existing Django projects… | Read, Write, Edit, Bash, Glob, Grep | sonnet
docker-expert | voltagent | Build, optimize, or secure Docker container images and orchestration for production environments. | Read, Write, Edit, Bash, Glob, Grep | sonnet
docs-drift-editor | voltagent | Update Markdown documentation pages that have drifted out of sync with a… | Read, Edit, Grep, Glob, Bash | sonnet
documentation-engineer | voltagent | Create, architect, or overhaul comprehensive documentation systems including API docs, tutorials, guides,… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | haiku
dotnet-core-expert | voltagent | Building .NET Core applications requiring cloud-native architecture, high-performance microservices, modern C# patterns,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
dotnet-framework-4.8-expert | voltagent | Working on legacy .NET Framework 4.8 enterprise applications that require maintenance, modernization,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
dx-optimizer | voltagent | Optimizing the complete developer workflow including build times, feedback loops, testing efficiency,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
electron-pro | voltagent | Building Electron desktop applications that require native OS integration, cross-platform distribution, security… | Read, Write, Edit, Bash, Glob, Grep | sonnet
elixir-expert | voltagent | Build fault-tolerant, concurrent systems leveraging OTP patterns, GenServer architectures, and Phoenix framework… | Read, Write, Edit, Bash, Glob, Grep | sonnet
email-deliverability-engineer | voltagent | Configuring email authentication, integrating transactional or marketing email providers, diagnosing deliverability problems,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
embedded-systems | voltagent | Developing firmware for resource-constrained microcontrollers, implementing RTOS-based applications, or optimizing real-time systems… | Read, Write, Edit, Bash, Glob, Grep | sonnet
error-coordinator | voltagent | Mine error logs and agent output for recurring failure and cascade patterns,… | Read, Write, Edit, Glob, Grep | sonnet
error-detective | voltagent | Diagnose why errors are occurring in your system, correlate errors across services,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
eval-judge | wshobson | LLM judge for plugin quality assessment. Scores skills on triggering accuracy, orchestration… | Read, Grep, Glob | sonnet
expo-react-native-expert | voltagent | Building mobile applications with Expo and React Native that require native module… | Read, Write, Edit, Bash, Glob, Grep | sonnet
fastapi-developer | voltagent | Building modern async Python APIs with FastAPI, implementing Pydantic v2 validation, dependency… | Read, Write, Edit, Bash, Glob, Grep | sonnet
fintech-engineer | voltagent | Building payment systems, financial integrations, or compliance-heavy financial applications that require secure… | Read, Write, Edit, Bash, Glob, Grep | inherit
first-principles-thinking | voltagent | Challenge assumptions, break down a complex problem from scratch, or approach something… | Read, Grep, Glob, WebFetch, WebSearch | herda
flutter-expert | voltagent | Building cross-platform mobile applications with Flutter 3+ that require custom UI implementation,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
frontend-developer | voltagent | Building complete frontend applications across React, Vue, and Angular frameworks requiring multi-framework… | Read, Write, Edit, Bash, Glob, Grep | sonnet
fullstack-developer | voltagent | Build complete features spanning database, API, and frontend layers together as a… | Read, Write, Edit, Bash, Glob, Grep | sonnet
gallery-researcher | wshobson | Gallery search and inspiration agent. Delegates here when user wants to find… | mcp__meigen__search_gallery, mcp__meigen__get_inspiration | haiku
game-developer | voltagent | Implementing game systems, optimizing graphics rendering, building multiplayer networking, or developing gameplay… | Read, Write, Edit, Bash, Glob, Grep | sonnet
gdpr-ccpa-compliance | voltagent | Understand GDPR or CCPA compliance, review data practices, or assess privacy requirements.… | Read, Grep, Glob, WebFetch, WebSearch | herda
git-workflow-manager | voltagent | Design, establish, or optimize Git workflows, branching strategies, and merge management for… | Read, Write, Edit, Bash, Glob, Grep | haiku
golang-pro | voltagent | Building Go applications requiring concurrent programming, high-performance systems, microservices, or cloud-native architectures… | Read, Write, Edit, Bash, Glob, Grep | sonnet
graphql-architect | voltagent | Designing or evolving GraphQL schemas across microservices, implementing federation architectures, or optimizing… | Read, Write, Edit, Bash, Glob, Grep | inherit
growth-loops | voltagent | Design a growth loop, understand PLG mechanics, or build sustainable acquisition. Triggers… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | herda
hipaa-compliance | voltagent | The user is building a healthcare product and needs to understand HIPAA… | Read, Grep, Glob, WebFetch, WebSearch | herda
image-generator | wshobson | Image generation executor agent. Delegates here for ALL generate_image calls to keep… | mcp__meigen__generate_image | inherit
incident-responder | voltagent | An active security breach, service outage, or operational incident requires immediate response,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
iot-engineer | voltagent | Designing and deploying IoT solutions requiring expertise in device management, edge computing,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
it-ops-orchestrator | voltagent | Orchestrating complex IT operations tasks that span multiple domains (PowerShell automation, .NET… | Read, Write, Edit, Bash, Glob, Grep | sonnet
java-architect | voltagent | Designing enterprise Java architectures, migrating Spring Boot applications, or establishing microservices patterns… | Read, Write, Edit, Bash, Glob, Grep | sonnet
javascript-pro | voltagent | Build, optimize, or refactor modern JavaScript code for browser, Node.js, or full-stack… | Read, Write, Edit, Bash, Glob, Grep | sonnet
knowledge-synthesizer | voltagent | Mine recurring patterns from agent logs, session transcripts, and workflow history, then… | Read, Write, Edit, Glob, Grep | sonnet
kotlin-specialist | voltagent | Building Kotlin applications requiring advanced coroutine patterns, multiplatform code sharing, or Android/server-side… | Read, Write, Edit, Bash, Glob, Grep | sonnet
kubernetes-specialist | voltagent | Design, deploy, configure, or troubleshoot Kubernetes clusters and workloads in production environments. | Read, Write, Edit, Bash, Glob, Grep | sonnet
landing-page-copywriter | voltagent | Writing or optimizing landing page copy, hero sections, CTAs, or conversion-focused funnel… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | sonnet
laravel-specialist | voltagent | Building Laravel 10+ applications, architecting Eloquent models with complex relationships, implementing queue… | Read, Write, Edit, Bash, Glob, Grep | sonnet
legacy-modernizer | voltagent | Modernizing legacy systems that need incremental migration strategies, technical debt reduction, and… | Read, Write, Edit, Bash, Glob, Grep | sonnet
legal-advisor | voltagent | Draft contracts, review compliance requirements, develop IP protection strategies, or assess legal… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | sonnet
license-engineer | voltagent | Architecting, implementing, or optimizing end-to-end legal licensing systems—from OSI standard selection and… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | inherit
llm-architect | voltagent | Designing LLM systems for production, implementing fine-tuning or RAG architectures, optimizing inference… | Read, Write, Edit, Bash, Glob, Grep | inherit
m365-admin | voltagent | Automating Microsoft 365 administrative tasks including Exchange Online mailbox provisioning, Teams collaboration… | Read, Write, Edit, Bash, Glob, Grep | sonnet
machine-learning-engineer | voltagent | Deploy, optimize, or serve machine learning models at scale in production environments. | Read, Write, Edit, Bash, Glob, Grep | sonnet
market-researcher | voltagent | Analyze markets, understand consumer behavior, assess competitive landscapes, and size opportunities to… | Read, Grep, Glob, WebFetch, WebSearch | sonnet
mcp-developer | voltagent | Build, debug, or optimize Model Context Protocol (MCP) servers and clients that… | Read, Write, Edit, Bash, Glob, Grep | sonnet
memory-curator | voltagent | Use to maintain an agent's long-term memory across sessions — deciding what… | Read, Write, Edit, Glob, Grep | sonnet
microservices-architect | voltagent | Designing distributed system architecture, decomposing monolithic applications into independent microservices, or establishing… | Read, Write, Edit, Bash, Glob, Grep | inherit
ml-engineer | voltagent | Building production ML systems requiring model training pipelines, model serving infrastructure, performance… | Read, Write, Edit, Bash, Glob, Grep | sonnet
mlops-engineer | voltagent | Design and implement ML infrastructure, set up CI/CD for machine learning models,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
mobile-app-developer | voltagent | Developing iOS and Android mobile applications with focus on native or cross-platform… | Read, Write, Edit, Bash, Glob, Grep | sonnet
mobile-developer | voltagent | Building cross-platform mobile applications requiring native performance optimization, platform-specific features, and offline-first… | Read, Write, Edit, Bash, Glob, Grep | sonnet
multi-agent-coordinator | voltagent | Plan how multiple concurrent subagents should communicate, sequence their work, share state… | Read, Write, Edit, Glob, Grep | inherit
network-engineer | voltagent | Designing, optimizing, or troubleshooting cloud and hybrid network infrastructures, or when addressing… | Read, Write, Edit, Bash, Glob, Grep | sonnet
nextjs-developer | voltagent | Building production Next.js 14+ applications that require full-stack development with App Router,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
nlp-engineer | voltagent | Building production NLP systems, implementing text processing pipelines, developing language models, or… | Read, Write, Edit, Bash, Glob, Grep | sonnet
node-specialist | voltagent | Build, optimize, or debug Node.js backend applications, APIs, CLIs, or microservices requiring… | Read, Write, Edit, Bash, Glob, Grep | sonnet
payment-integration | voltagent | Implementing payment systems, integrating payment gateways, or handling financial transactions that require… | Read, Write, Edit, Bash, Glob, Grep | inherit
penetration-tester | voltagent | Conduct authorized security penetration tests to identify real vulnerabilities through active exploitation… | Read, Grep, Glob, Bash | inherit
performance-engineer | voltagent | Identify and eliminate performance bottlenecks in applications, databases, or infrastructure systems, and… | Read, Write, Edit, Bash, Glob, Grep | sonnet
performance-monitor | voltagent | Analyze existing metric, log, and output files to spot performance patterns and… | Read, Write, Edit, Glob, Grep | haiku
php-pro | voltagent | Working with PHP 8.3+ projects that require strict typing, modern language features,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
platform-engineer | voltagent | Building or improving internal developer platforms (IDPs), designing self-service infrastructure, or optimizing… | Read, Write, Edit, Bash, Glob, Grep | inherit
postgres-pro | voltagent | Optimize PostgreSQL performance, design high-availability replication, or troubleshoot database issues at scale.… | Read, Write, Edit, Bash, Glob, Grep | sonnet
powershell-5.1-expert | voltagent | Automating Windows infrastructure tasks requiring PowerShell 5.1 scripts with RSAT modules for… | Read, Write, Edit, Bash, Glob, Grep | sonnet
powershell-7-expert | voltagent | Building cross-platform cloud automation scripts, Azure infrastructure orchestration, or CI/CD pipelines requiring… | Read, Write, Edit, Bash, Glob, Grep | sonnet
powershell-module-architect | voltagent | Architecting and refactoring PowerShell modules, designing profile systems, or creating cross-version compatible… | Read, Write, Edit, Bash, Glob, Grep | sonnet
powershell-security-hardening | voltagent | Harden PowerShell automation, secure remoting configuration, enforce least-privilege design, or align scripts… | Read, Write, Edit, Bash, Glob, Grep | inherit
powershell-ui-architect | voltagent | Designing or building desktop graphical interfaces (WinForms, WPF, Metro-style dashboards) or terminal… | Read, Write, Edit, Bash, Glob, Grep | sonnet
prod-logs-health-check | wshobson | Pulls recent production logs filtered for errors, warnings, and anomalies. Use after… | Bash, Read | haiku
product-manager | voltagent | Make product strategy decisions, prioritize features, or define roadmap plans based on… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | haiku
project-idea-validator | voltagent | An idea pressure-tested with brutal honesty, competitor teardown, market validation, and clear… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | sonnet
project-manager | voltagent | Establish project plans, track execution progress, manage risks, control budget/schedule, and coordinate… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | haiku
prompt-engineer | voltagent | Design, optimize, test, or evaluate prompts for large language models in production… | Read, Write, Edit, Bash, Glob, Grep | sonnet
python-pro | voltagent | Build type-safe, production-ready Python code for web APIs, system utilities, or complex… | Read, Write, Edit, Bash, Glob, Grep | sonnet
qa-expert | voltagent | Comprehensive quality assurance strategy, test planning across the entire development cycle, or… | Read, Grep, Glob, Bash | sonnet
quant-analyst | voltagent | Develop quantitative trading strategies, build financial models with rigorous mathematical foundations, or… | Read, Write, Edit, Bash, Glob, Grep | inherit
rails-expert | voltagent | Building or modernizing Rails applications requiring API development, Hotwire reactivity, real-time features,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
react-specialist | voltagent | Optimizing existing React applications for performance, implementing advanced React 18+ features, or… | Read, Write, Edit, Bash, Glob, Grep | sonnet
readme-generator | voltagent | A maintainer-ready README built from exact repository reality, with deep codebase scanning,… | Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch | sonnet
refactoring-specialist | voltagent | Transform poorly structured, complex, or duplicated code into clean, maintainable systems while… | Read, Write, Edit, Bash, Glob, Grep | sonnet
reinforcement-learning-engineer | voltagent | Designing RL environments, training agents with reward optimization, implementing policy gradient methods,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
research-analyst | voltagent | Comprehensive research across multiple sources with synthesis of findings into actionable insights,… | Read, Grep, Glob, WebFetch, WebSearch | sonnet
risk-manager | voltagent | Identify, quantify, and mitigate enterprise-level risks across financial, operational, regulatory, and strategic… | Read, Write, Edit, Bash, Glob, Grep | inherit
rust-engineer | voltagent | Building Rust systems where memory safety, ownership patterns, zero-cost abstractions, and performance… | Read, Write, Edit, Bash, Glob, Grep | sonnet
sales-engineer | voltagent | Conduct technical pre-sales activities including solution architecture, proof-of-concept development, and technical demonstrations… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | sonnet
scrum-master | voltagent | Teams need facilitation, process optimization, velocity improvement, or agile ceremony management—especially for… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | haiku
search-specialist | voltagent | Find specific information across multiple sources using advanced search strategies, query optimization,… | Read, Grep, Glob, WebFetch, WebSearch | sonnet
security-auditor | voltagent | Conducting comprehensive security audits, compliance assessments, or risk evaluations across systems, infrastructure,… | Read, Grep, Glob | inherit
security-engineer | voltagent | Implementing comprehensive security solutions across infrastructure, building automated security controls into CI/CD… | Read, Write, Edit, Bash, Glob, Grep | inherit
seo-specialist | voltagent | Comprehensive SEO optimization encompassing technical audits, keyword strategy, content optimization, and search… | Read, Grep, Glob, WebFetch, WebSearch | haiku
session-end | wshobson | Use at the end of every significant work session. Finalizes the session… | Read, Edit, Bash | haiku
session-start | wshobson | Use at the start of every work session. Reads the canonical state… | Read, Bash, Edit | haiku
slack-expert | voltagent | Developing Slack applications, implementing Slack API integrations, or reviewing Slack bot code… | Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch | sonnet
spring-boot-engineer | voltagent | Building enterprise Spring Boot 3+ applications requiring microservices architecture, cloud-native deployment, or… | Read, Write, Edit, Bash, Glob, Grep | sonnet
sql-pro | voltagent | Optimize complex SQL queries, design efficient database schemas, or solve performance issues… | Read, Write, Edit, Bash, Glob, Grep | sonnet
sre-engineer | voltagent | Establish or improve system reliability through SLO definition, error budget management, and… | Read, Write, Edit, Bash, Glob, Grep | sonnet
surgeon-reviewer | voltagent | A ruthlessly prioritized code review that reports only real problems — bugs,… | Read, Grep, Glob, Bash | inherit
swift-expert | voltagent | Building native iOS, macOS, or server-side Swift applications requiring advanced concurrency patterns,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
symfony-specialist | voltagent | Building Symfony 6+/7+/8+ applications, architecting Doctrine ORM entities with complex relationships, implementing… | Read, Write, Edit, Bash, Glob, Grep | sonnet
task-distributor | voltagent | Design and document a task-distribution strategy across multiple agents or workers —… | Read, Write, Edit, Glob, Grep | haiku
team-debugger | wshobson | Hypothesis-driven debugging investigator that investigates one assigned hypothesis, gathering evidence to confirm… | Read, Glob, Grep, Bash, TaskList, TaskGet, TaskUpdate, SendMessage | opus
team-implementer | wshobson | Parallel feature builder that implements components within strict file ownership boundaries, coordinating… | Read, Write, Edit, Glob, Grep, Bash, TaskList, TaskGet, TaskUpdate, SendMessage | opus
team-lead | wshobson | Team orchestrator that decomposes work into parallel tasks with file ownership boundaries,… | Read, Glob, Grep, Bash, Agent, TeamCreate, TeamDelete, TaskCreate, TaskList, TaskGet, TaskUpdate, SendMessage | fable
team-reviewer | wshobson | Multi-dimensional code reviewer that operates on one assigned review dimension (security, performance,… | Read, Glob, Grep, Bash, TaskList, TaskGet, TaskUpdate, SendMessage | opus
technical-writer | voltagent | Create, improve, or maintain technical documentation including API references, user guides, SDK… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | haiku
telegram-ads-analyst | voltagent | Advertise in Telegram channels, vet a channel before buying a post, check… | Read, Write, Edit, WebFetch, WebSearch | herda
terraform-engineer | voltagent | Building, refactoring, or scaling infrastructure as code using Terraform with focus on… | Read, Write, Edit, Bash, Glob, Grep | sonnet
terragrunt-expert | voltagent | Expert Terragrunt specialist mastering infrastructure orchestration, DRY configurations, and multi-environment deployments. Masters… | Read, Write, Edit, Bash, Glob, Grep | sonnet
test-automator | voltagent | Build, implement, or enhance automated test frameworks, create test scripts, or integrate… | Read, Write, Edit, Bash, Glob, Grep | sonnet
tooling-engineer | voltagent | Build or enhance developer tools including CLIs, code generators, build tools, and… | Read, Write, Edit, Bash, Glob, Grep | sonnet
trend-analyst | voltagent | Analyzing emerging patterns, predicting industry shifts, or developing future scenarios to inform… | Read, Grep, Glob, WebFetch, WebSearch | sonnet
typescript-pro | voltagent | Implementing TypeScript code requiring advanced type system patterns, complex generics, type-level programming,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
ui-designer | voltagent | Designing visual interfaces, creating design systems, building component libraries, or refining user-facing… | Read, Write, Edit, Bash, Glob, Grep | sonnet
ui-ux-tester | voltagent | Exhaustive UI and UX functionality testing driven by documented user flows, with… | Read, Write, Edit, Bash, Glob, Grep, WebSearch, chrome-mcp, computer-use | sonnet
ux-researcher | voltagent | Conduct user research, analyze user behavior, or generate actionable insights to validate… | Read, Grep, Glob, WebFetch, WebSearch | sonnet
vue-expert | voltagent | Building Vue 3 applications that require Composition API mastery, reactivity optimization, or… | Read, Write, Edit, Bash, Glob, Grep | sonnet
webhook-engineer | voltagent | Consuming or delivering webhooks — signature verification, idempotent handlers, retry and backoff… | Read, Write, Edit, Bash, Glob, Grep | sonnet
websocket-engineer | voltagent | Implementing real-time bidirectional communication features using WebSockets, Socket.IO, or similar technologies at… | Read, Write, Edit, Bash, Glob, Grep | sonnet
windows-infra-admin | voltagent | Managing Windows Server infrastructure, Active Directory, DNS, DHCP, and Group Policy configurations,… | Read, Write, Edit, Bash, Glob, Grep | sonnet
wordpress-master | voltagent | Architect, optimize, or troubleshoot WordPress implementations ranging from custom theme/plugin development to… | Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch | sonnet
workflow-orchestrator | voltagent | Design workflow and state-machine definitions — states, transitions, error handling, and compensation/rollback… | Read, Write, Edit, Glob, Grep | inherit
x-api-integration | voltagent | Building X/Twitter data products, integrating X API alternatives, designing tweet search workflows,… | Read, Write, Edit, Glob, Grep, WebFetch, WebSearch | haiku
