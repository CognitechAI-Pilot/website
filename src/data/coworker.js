// Content data lifted verbatim from the v2 static site (index V2).
// HTML-string fields are static, author-authored markup containing no user input.
// Components render them with dangerouslySetInnerHTML.

export const p2StageData = {
    1: {
        num: "STAGE 01 OF 05 (IMPLEMENTATION)",
        title: "Stage 01: Institutional Knowledge & Boundary Mapping",
        question: "Where does enterprise context live, and who can see it?",
        desc: "Audits and maps enterprise knowledge across code repos, wikis, business apps, databases, and transcripts. Strictly bound by Zero-Trust IAM permissions (e.g., Entra ID, Keycloak) so the agent inherits native user access rights.",
        proof: "Ingested C# AST code repositories, work management boards (e.g., Jira), and operational specs to reduce discovery from 10 days to under 5 minutes.",
        pillars: [
            { title: "Unstructured & Process", text: "BPMN process diagrams, SOPs, policy handbooks, and meeting transcripts." },
            { title: "Business Applications / SaaS", text: "Salesforce CRM, ServiceNow ITSM, Workday ERP, and Snowflake data stores." },
            { title: "Technical Logic & IAM", text: "Source code ASTs (GitHub/Azure Repos), Jira schemas, and Zero-Trust IAM bounds." }
        ]
    },
    2: {
        num: "STAGE 02 OF 05 (IMPLEMENTATION)",
        title: "Stage 02: Business Process & Workflow Mapping",
        question: "How does work actually flow through this function?",
        desc: "Deconstructs operational flows, decision trees, inputs, outputs, and handoffs within a targeted team function (e.g., Technology BA, QA, Policy, Logistics).",
        proof: "Mapped BA discovery workflow: Requirement Input -> Legacy Code Trace -> AC Generation -> Human Sign-off -> Jira Ticket Creation.",
        pillars: [
            { title: "Input & Triggers", text: "Upstream requirement triggers, multi-source inputs, and stakeholder context parsing." },
            { title: "Decision Trees & Handoffs", text: "Branching exception logic, inter-squad handoffs, and boundary condition checking." },
            { title: "Output & Schemas", text: "Structured templates (User Stories, AC) and destination API payload mapping." }
        ]
    },
    3: {
        num: "STAGE 03 OF 05 (IMPLEMENTATION)",
        title: "Stage 03: Capability Composition & Engine Wiring",
        question: "What cognitive engines and persistent memory systems are needed for this role?",
        desc: "Wires together Cognitech's IP building blocks: AST parsers, dynamic GraphRAG knowledge graphs, persistent declarative memory stores, and agentskills.io procedural engines.",
        proof: "Combined AST Code Parsers, GraphRAG properties, and Persistent Declarative Memory with Jira MCP gateways to draft stories in seconds.",
        pillars: [
            { title: "Hybrid Memory & Context Engines", text: "AST Code Parsers, Dynamic GraphRAG, Persistent Declarative Memory, and SQLite FTS5 episodic recall." },
            { title: "Routing, Compute & Dialectic State", text: "Autonomous Intent Loops, User Dialectic persona models, Onshore Sovereign LLM hosting, and Token Optimization." },
            { title: "Tooling & Procedural Skills", text: "MCP gateways, agentskills.io autonomous skill generation, and containerized Docker execution." }
        ]
    },
    4: {
        num: "STAGE 04 OF 05 (IMPLEMENTATION)",
        title: "Stage 04: Air-Gapped Guardrails & Human Alignment (HITL)",
        question: "How do we ensure the AI operates safely without unauthorized actions?",
        desc: "Establishes strict context filters and an Air-Gapped Execution Gate. Query exploration is automated, but transactional writes (e.g., Jira, DB, Code) require explicit human sign-off.",
        proof: "Configured Jira write actions as decoupled staging cards inside Microsoft Teams requiring human 'Confirm' clicks.",
        pillars: [
            { title: "Context Guardrails", text: "Prompt injection defense, PII anonymization, and system prompt security locking." },
            { title: "Interrupt Pattern Engine", text: "Ambiguity detection filters that pause and trigger clarifying questions." },
            { title: "Air-Gapped Approval Gate", text: "Mandatory Human Approval UI, decoupled staging, and immutable action logging." }
        ]
    },
    5: {
        num: "STAGE 05 OF 05 (IMPLEMENTATION)",
        title: "Stage 05: Native Channel Deployment",
        question: "Where do users interact with the Co-Worker in their daily routine?",
        desc: "Surfaces the Digital Co-Worker directly inside existing collaboration channels (e.g., Microsoft Teams, Slack) or secure web sidecars to eliminate context switching.",
        proof: "Deployed the Technology BA Co-Worker directly inside Microsoft Teams channels for daily squad adoption.",
        pillars: [
            { title: "Enterprise Chat", text: "Native channel bots (e.g., MS Teams, Slack) and contextual web sidecars." },
            { title: "In-Channel UX", text: "Interactive Adaptive Cards, inline draft editing, and source citation links." },
            { title: "Access & SSO", text: "Single Sign-On (SSO) via enterprise identity providers (e.g., Entra ID, Okta) with zero-touch onboarding." }
        ]
    }
};

export const roleData = {
    delivery: {
        isRoadmap: false,
        hasVideo: true,
        label: "Blueprint Scope: Universal Horizontal Deployment (Deploys across tech squads in ALL enterprise sectors)",
        subHeader: "UNIVERSAL HORIZONTAL PROOF OF CONCEPT • NATIONAL LOGISTICS & POSTAL CASE STUDY",
        title: "Enterprise Proof of Concept: Business Analyst Digital Co-Worker",
        badge: "Proof of Concept",
        badgeClass: "bg-blue-500/10 border-blue-500/30 text-blue-300",
        challenge: "Navigating dense, multi-layered legacy operational documents and mapping complex requirements created significant administrative bottlenecks for Business Analysts at a leading national postal and logistics enterprise. Manual data discovery delayed project kickoff times and increased the risk of missed dependencies.",
        solution: "Cognitech deployed a specialized Business Analyst Digital Co-Worker to ingest, structure, and query expansive knowledge repositories in real-time—accelerating user story creation while keeping human analysts in complete control.",
        img: "",
        tag: "Universal Technology & Delivery Blueprint",
        badgeBar: `
            <span class="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-300 font-semibold flex items-center gap-1.5 shadow-sm">
                <i class="fa-solid fa-truck-fast text-[10px]"></i> Logistics &amp; Supply Chain (Enterprise PoC)
            </span>
            <span class="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-1.5">
                <i class="fa-solid fa-landmark text-[10px]"></i> Public Sector &amp; Govt
            </span>
            <span class="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-1.5">
                <i class="fa-solid fa-piggy-bank text-[10px]"></i> Banking &amp; Financial Services
            </span>
            <span class="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-1.5">
                <i class="fa-solid fa-store text-[10px]"></i> Retail &amp; E-Commerce
            </span>
        `,
        metricsTitle: "<i class=\"fa-solid fa-chart-line mr-1.5\"></i> Performance Benchmark &amp; Security Metrics",
        metrics: [
            { 
                stat: "< 5 Mins", 
                title: "Current-State Discovery", 
                text: "Reduced from 10–15 manual days down to seconds using AST code vector search.", 
                gradient: "from-blue-400 to-cyan-300",
                glow: "bg-blue-500/10 group-hover:bg-blue-500/20",
                border: "hover:border-blue-500/40"
            },
            { 
                stat: "100%", 
                title: "Air-Gapped Write Security", 
                text: "Jira user story creations require explicit human BA confirmation inside Teams.", 
                gradient: "from-emerald-400 to-teal-300",
                glow: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
                border: "hover:border-emerald-500/40"
            },
            { 
                stat: "0%", 
                title: "Raw Repo Write Access", 
                text: "Source code is vectorized externally; agents never hold direct code edit rights.", 
                gradient: "from-purple-400 to-pink-300",
                glow: "bg-purple-500/10 group-hover:bg-purple-500/20",
                border: "hover:border-purple-500/40"
            }
        ]
    },
    policy: {
        isRoadmap: true,
        hasVideo: false,
        label: "Blueprint Scope: Primary Vertical Focus (Public Sector, Central Govt & Regulated Compliance)",
        subHeader: "PRODUCT ROADMAP • PUBLIC SECTOR & REGULATED COMPLIANCE BLUEPRINT",
        title: "Public Sector: Policy, Governance & Regulatory Co-Worker",
        badge: "Engineering Roadmap",
        badgeClass: "bg-amber-500/10 border-amber-500/30 text-amber-300",
        challenge: "Public sector agencies face complex legislative frameworks, dense policy handbooks, and strict audit requirements that cause significant compliance review backlogs.",
        solution: "Architecting a sovereign LLM blueprint designed to ingest legislative repositories, perform automated risk evaluations, and cross-reference policy texts. Currently open for partner co-design.",
        img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80",
        tag: "Policy & Governance Roadmap Blueprint",
        badgeBar: `
            <span class="px-3 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 font-semibold flex items-center gap-1.5 shadow-sm">
                <i class="fa-solid fa-landmark text-[10px]"></i> Public Sector &amp; Central Govt (Target Vertical)
            </span>
            <span class="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-1.5">
                <i class="fa-solid fa-piggy-bank text-[10px]"></i> Banking &amp; Insurance Compliance
            </span>
            <span class="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-1.5">
                <i class="fa-solid fa-shield-halved text-[10px]"></i> Sovereign Defense Infrastructure
            </span>
        `,
        metricsTitle: "<i class=\"fa-solid fa-compass mr-1.5\"></i> Roadmap Target Outcomes",
        metrics: []
    },
    operations: {
        isRoadmap: true,
        hasVideo: false,
        label: "Blueprint Scope: Primary Vertical Focus (Retail, Supply Chain, Logistics & Shared Services)",
        subHeader: "PRODUCT ROADMAP • RETAIL & SUPPLY CHAIN SHARED SERVICES BLUEPRINT",
        title: "Retail & Supply Chain: Operations & Shared Services Co-Worker",
        badge: "Engineering Roadmap",
        badgeClass: "bg-amber-500/10 border-amber-500/30 text-amber-300",
        challenge: "High-volume operational inquiries, manual vendor procurement matching, and repetitive back-office workflows drain productivity across enterprise shared services.",
        solution: "Architecting agentic workflows grounded in corporate ERP, ITSM, and procurement knowledge bases to automate inquiry routing, invoice audits, and vendor management. Currently open for partner co-design.",
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
        tag: "Operations & Back-Office Roadmap Blueprint",
        badgeBar: `
            <span class="px-3 py-1 rounded-full bg-purple-600/20 border border-purple-500/40 text-purple-300 font-semibold flex items-center gap-1.5 shadow-sm">
                <i class="fa-solid fa-store text-[10px]"></i> Retail &amp; E-Commerce (Target Vertical)
            </span>
            <span class="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-1.5">
                <i class="fa-solid fa-boxes-packing text-[10px]"></i> Supply Chain &amp; Logistics
            </span>
            <span class="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-1.5">
                <i class="fa-solid fa-briefcase text-[10px]"></i> Corporate Shared Services
            </span>
        `,
        metricsTitle: "<i class=\"fa-solid fa-compass mr-1.5\"></i> Roadmap Target Outcomes",
        metrics: []
    },
    executive: {
        isRoadmap: true,
        hasVideo: false,
        label: "Blueprint Scope: Single-User & Executive Multiplier (Executives, Founders, Directors & SME Owners)",
        subHeader: "PRODUCT ROADMAP • EXECUTIVE & FOUNDER PERSONAL ASSISTANT BLUEPRINT",
        title: "Executive & Founder: Personal Assistant Digital Co-Worker",
        badge: "Engineering Roadmap",
        badgeClass: "bg-amber-500/10 border-amber-500/30 text-amber-300",
        challenge: "Business owners and corporate executives lose 10+ hours a week context-switching between fragmented communication channels, meeting transcript synthesis, board pack drafting, and cross-system decision approvals.",
        solution: "Engineering a sovereign, tenant-isolated executive agent capable of synthesizing cross-squad telemetry, auto-drafting board briefs from live Jira/ERP metrics, and executing authenticated workflow approvals under strict zero-leakage privacy. Open for partner co-design.",
        img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80",
        tag: "Executive Personal Assistant Roadmap Blueprint",
        badgeBar: `
            <span class="px-3 py-1 rounded-full bg-cyan-600/20 border border-cyan-500/40 text-cyan-300 font-semibold flex items-center gap-1.5 shadow-sm">
                <i class="fa-solid fa-user-tie text-[10px]"></i> C-Suite &amp; Executives (Target User)
            </span>
            <span class="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-1.5">
                <i class="fa-solid fa-building text-[10px]"></i> Founders &amp; Small Business Owners
            </span>
            <span class="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-1.5">
                <i class="fa-solid fa-shield-halved text-[10px]"></i> 100% Tenant Isolated Privacy
            </span>
        `,
        metricsTitle: "<i class=\"fa-solid fa-compass mr-1.5\"></i> Roadmap Target Outcomes",
        metrics: []
    }
};

export const stackBlueprints = {
    sovereign: `
        <div class="flex flex-col gap-6">
            <div class="border-l-2 border-blue-500 pl-4 py-1">
                <h4 class="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest">KNOWLEDGE &amp; MEMORY PLANE</h4>
                <p class="text-[11px] text-slate-500">Decoupled data ingest, AST indexing &amp; persistent memory</p>
            </div>

            <div class="glow-card p-5 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <i class="fa-solid fa-code text-base"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-sm">Codebase AST &amp; Technical Schemas</h5>
                        <p class="text-[10px] text-slate-500">GitHub, Azure Repos, Bitbucket</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                    AST parsers extract class hierarchies and function dependencies into an isolated index.
                </p>
                <div class="space-y-2 text-xs font-mono">
                    <div class="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span class="text-slate-500">Vector Index:</span>
                        <span class="font-bold text-blue-400">Local Qdrant / PGVector</span>
                    </div>
                    <div class="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span class="text-slate-500">Knowledge Graph:</span>
                        <span class="font-bold text-purple-400">Embedded FalkorDB / Neo4j</span>
                    </div>
                </div>
            </div>

            <div class="glow-card p-5 rounded-2xl border border-blue-500/30 bg-slate-950/90">
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                        <i class="fa-solid fa-brain text-base"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-sm">Persistent Declarative &amp; Dialectic Memory</h5>
                        <p class="text-[10px] text-cyan-400 font-mono">MEMORY.md &amp; Dialectic Profiles</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed mb-3">
                    Persists facts across sessions via self-nudges, combining flat markdown state (MEMORY.md) with FTS5 SQLite logs and user dialectic models.
                </p>
                <div class="space-y-2 text-xs font-mono">
                    <div class="flex items-center justify-between bg-slate-900 p-2 rounded-lg border border-slate-800">
                        <span class="text-slate-500">Tenant Boundary:</span>
                        <span class="text-cyan-300 font-bold">Isolated PROJECT.md</span>
                    </div>
                    <div class="flex items-center justify-between bg-slate-900 p-2 rounded-lg border border-slate-800">
                        <span class="text-slate-500">Episodic Recall:</span>
                        <span class="text-cyan-300 font-bold">SQLite FTS5 Search</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-center gap-6">
            <div class="glow-card-active rounded-2xl p-6 relative active-pulse">
                <span class="absolute -top-3 right-6 bg-blue-500/20 border border-blue-500 text-blue-400 text-[9px] font-mono font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    100% NZ Onshore Active
                </span>

                <div class="text-center mb-6 mt-2">
                    <div class="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-3 border border-purple-500/20">
                        <i class="fa-solid fa-diagram-project text-2xl"></i>
                    </div>
                    <h4 class="font-bold text-white text-lg">Autonomous Intent &amp; Execution Loop</h4>
                    <p class="text-xs text-slate-400 mt-1">Multi-Agent Planning, Self-Nudges &amp; Trajectory Capture</p>
                </div>

                <div class="space-y-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <span class="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">Active Model Engine</span>
                        <div class="flex items-center justify-between">
                            <h5 class="text-sm font-black text-white">Onshore DeepSeek-R1 / Qwen 2.5</h5>
                            <span class="text-[10px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-purple-300 font-mono">Local Cloud / OnPrem</span>
                        </div>
                    </div>

                    <div class="bg-purple-950/20 border border-purple-900/30 p-4 rounded-xl">
                        <span class="text-[9px] font-mono font-black text-purple-400 uppercase tracking-widest block mb-1">Active Co-Worker Role Focus</span>
                        <h5 id="arch-persona-title" class="text-base font-bold text-white">Technology BA Co-Worker</h5>
                        
                        <ul id="arch-persona-bullets" class="space-y-2 mt-3 text-xs text-slate-300">
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-arrow-right text-purple-400 mt-0.5"></i>
                                <span>Traces logic across code and specs to find hidden business rules.</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-arrow-right text-purple-400 mt-0.5"></i>
                                <span>Converts transcripts into structured Jira User Stories &amp; AC.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="glow-card p-4 rounded-2xl border border-purple-500/30 bg-purple-950/10">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-xs">
                        <i class="fa-solid fa-gears"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-xs">Procedural Skill Engine</h5>
                        <p class="text-[9px] text-purple-300 font-mono">agentskills.io Open Standard</p>
                    </div>
                </div>
                <p class="text-[11px] text-slate-400 leading-relaxed">
                    Autonomously synthesizes successful multi-step executions into executable Python skills (SKILL.md) for instant reuse.
                </p>
            </div>
        </div>

        <div class="flex flex-col justify-between gap-6">
            <div class="border-l-2 border-emerald-500 pl-4 py-1">
                <h4 class="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest">GOVERNANCE, ACTION &amp; LEARNING</h4>
                <p class="text-[11px] text-slate-500">Sandboxed writes, real-time telemetry &amp; continuous post-training</p>
            </div>

            <div class="glow-card p-5 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <i class="fa-solid fa-user-shield text-base"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-sm">Human-in-the-Loop Gateway</h5>
                        <p class="text-[10px] text-slate-500">Secure Web App / Teams / Slack</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">
                    Enforces mandatory human validation gates for all write commands. Uses interrupt loops when requirements conflict with code logic.
                </p>
            </div>

            <div class="glow-card p-5 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <i class="fa-solid fa-shield-halved text-base"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-sm">Model Context Protocol (MCP)</h5>
                        <p class="text-[10px] text-slate-500">Sandboxed Action Gateway</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed mb-3">
                    Executes approved REST payloads inside Docker/RPC compute sandboxed environments targeting Jira, GitHub, or SQL databases.
                </p>
            </div>

            <div class="glow-card p-4 rounded-2xl border border-cyan-500/30 bg-cyan-950/10">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-xs">
                        <i class="fa-solid fa-chart-line"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-xs">Continuous Telemetry &amp; Audit Gate</h5>
                        <p class="text-[9px] text-cyan-300 font-mono">LLM-as-a-Judge &amp; Trace Logging</p>
                    </div>
                </div>
                <p class="text-[11px] text-slate-400 leading-relaxed">
                    Monitors live reasoning spans, token expenditures, and supervisory watchdogs before passing validated traces into learning datasets.
                </p>
            </div>

            <!-- SOVEREIGN CONSULTATION CTA LINK -->
            <div class="glow-card p-4 rounded-2xl border border-blue-500/40 bg-blue-950/30 flex items-center justify-between gap-3">
                <div class="space-y-0.5">
                    <span class="text-white text-xs font-bold block">Strict Sovereign Onshore Mandate?</span>
                    <span class="text-[10px] text-slate-400 block">Deploy 100% locally with Zero Data Leakage.</span>
                </div>
                <a href="#contact" onclick="setEnquiryPurpose('Sovereign Onshore Architecture')" class="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs whitespace-nowrap transition-all shadow-md">
                    Consult Team &rarr;
                </a>
            </div>
        </div>
    `,
    ms: `
        <div class="flex flex-col gap-6">
            <div class="border-l-2 border-blue-500 pl-4 py-1">
                <h4 class="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest">KNOWLEDGE PLANE</h4>
                <p class="text-[11px] text-slate-500">Decoupled data ingest &amp; indexing layer</p>
            </div>

            <div class="glow-card p-5 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <i class="fa-solid fa-code text-base"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-sm">Codebase AST &amp; Technical Schemas</h5>
                        <p class="text-[10px] text-slate-500">GitHub, Azure Repos, Bitbucket</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                    AST parsers extract class hierarchies and function dependencies into an isolated index.
                </p>
                <div class="space-y-2 text-xs font-mono">
                    <div class="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span class="text-slate-500">Vector Index:</span>
                        <span class="font-bold text-blue-400">Azure AI Search</span>
                    </div>
                    <div class="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span class="text-slate-500">Knowledge Graph:</span>
                        <span class="font-bold text-purple-400">Neo4j on Azure / Cosmos DB</span>
                    </div>
                </div>
            </div>

            <div class="glow-card p-5 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <i class="fa-solid fa-folder-tree text-base"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-sm">Enterprise Data &amp; Identity</h5>
                        <p class="text-[10px] text-slate-500">SharePoint, Confluence, ERPs</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                    Ingests wikis and operational docs while enforcing Zero-Trust identity access bounds.
                </p>
                <div class="space-y-2 text-xs font-mono">
                    <div class="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span class="text-slate-500">Identity Guardrail:</span>
                        <span class="font-bold text-emerald-400">Microsoft Entra ID</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-center">
            <div class="glow-card-active rounded-2xl p-6 relative active-pulse">
                <span class="absolute -top-3 right-6 bg-blue-500/20 border border-blue-500 text-blue-400 text-[9px] font-mono font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    Microsoft Cloud Active
                </span>

                <div class="text-center mb-6 mt-2">
                    <div class="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-3 border border-purple-500/20">
                        <i class="fa-solid fa-brain text-2xl"></i>
                    </div>
                    <h4 class="font-bold text-white text-lg">Intent Router &amp; Orchestrator</h4>
                    <p class="text-xs text-slate-400 mt-1">Multi-Agent Planning &amp; Fallback Loops</p>
                </div>

                <div class="space-y-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <span class="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">Active Model Engine</span>
                        <div class="flex items-center justify-between">
                            <h5 class="text-sm font-black text-white">Azure OpenAI (GPT-4o)</h5>
                            <span class="text-[10px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-purple-300 font-mono">Australia East</span>
                        </div>
                    </div>

                    <div class="bg-purple-950/20 border border-purple-900/30 p-4 rounded-xl">
                        <span class="text-[9px] font-mono font-black text-purple-400 uppercase tracking-widest block mb-1">Active Co-Worker Role Focus</span>
                        <h5 id="arch-persona-title" class="text-base font-bold text-white">Technology BA Co-Worker</h5>
                        
                        <ul id="arch-persona-bullets" class="space-y-2 mt-3 text-xs text-slate-300">
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-arrow-right text-purple-400 mt-0.5"></i>
                                <span>Traces logic across code and specs to find hidden business rules.</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-arrow-right text-purple-400 mt-0.5"></i>
                                <span>Converts transcripts into structured Jira User Stories &amp; AC.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-between gap-6">
            <div class="border-l-2 border-emerald-500 pl-4 py-1">
                <h4 class="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest">GOVERNANCE &amp; ACTION PLANE</h4>
                <p class="text-[11px] text-slate-500">Security gates &amp; transactional writes</p>
            </div>

            <div class="glow-card p-5 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <i class="fa-solid fa-user-shield text-base"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-sm">Human-in-the-Loop Gateway</h5>
                        <p class="text-[10px] text-slate-500">Microsoft Teams / Web App</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">
                    Enforces mandatory human validation gates for all write commands. Uses interrupt loops when requirements conflict with code logic.
                </p>
            </div>

            <div class="glow-card p-5 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <i class="fa-solid fa-gears text-base"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-sm">Model Context Protocol (MCP)</h5>
                        <p class="text-[10px] text-slate-500">Standardized Action Gateway</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed mb-3">
                    Translates approved agent goals into safe REST payloads targeting Jira, Confluence, GitHub, or SQL databases.
                </p>
                <div class="flex items-center justify-between text-[10px] font-mono bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <span class="text-slate-500">Write Guardrail:</span>
                    <span class="text-emerald-400 font-bold">Mandatory Human Sign-off</span>
                </div>
            </div>
        </div>
    `,
    aws: `
        <div class="flex flex-col gap-6">
            <div class="border-l-2 border-blue-500 pl-4 py-1">
                <h4 class="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest">KNOWLEDGE PLANE</h4>
                <p class="text-[11px] text-slate-500">Decoupled data ingest &amp; indexing layer</p>
            </div>

            <div class="glow-card p-5 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <i class="fa-solid fa-code text-base"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-sm">Codebase AST &amp; Technical Schemas</h5>
                        <p class="text-[10px] text-slate-500">GitHub, Azure Repos, Bitbucket</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                    AST parsers extract class hierarchies and function dependencies into an isolated index.
                </p>
                <div class="space-y-2 text-xs font-mono">
                    <div class="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span class="text-slate-500">Vector Index:</span>
                        <span class="font-bold text-blue-400">Amazon OpenSearch / Qdrant</span>
                    </div>
                    <div class="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span class="text-slate-500">Knowledge Graph:</span>
                        <span class="font-bold text-purple-400">Amazon Neptune</span>
                    </div>
                </div>
            </div>

            <div class="glow-card p-5 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <i class="fa-solid fa-folder-tree text-base"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-sm">Enterprise Data &amp; Identity</h5>
                        <p class="text-[10px] text-slate-500">SharePoint, Confluence, ERPs</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                    Ingests wikis and operational docs while enforcing Zero-Trust identity access bounds.
                </p>
                <div class="space-y-2 text-xs font-mono">
                    <div class="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span class="text-slate-500">Identity Guardrail:</span>
                        <span class="font-bold text-emerald-400">AWS IAM / Cognito / Okta</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-center">
            <div class="glow-card-active rounded-2xl p-6 relative active-pulse">
                <span class="absolute -top-3 right-6 bg-blue-500/20 border border-blue-500 text-blue-400 text-[9px] font-mono font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    AWS Ecosystem Active
                </span>

                <div class="text-center mb-6 mt-2">
                    <div class="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-3 border border-purple-500/20">
                        <i class="fa-solid fa-brain text-2xl"></i>
                    </div>
                    <h4 class="font-bold text-white text-lg">Intent Router &amp; Orchestrator</h4>
                    <p class="text-xs text-slate-400 mt-1">Multi-Agent Planning &amp; Fallback Loops</p>
                </div>

                <div class="space-y-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <span class="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">Active Model Engine</span>
                        <div class="flex items-center justify-between">
                            <h5 class="text-sm font-black text-white">AWS Bedrock (Claude 3.5 Sonnet)</h5>
                            <span class="text-[10px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-purple-300 font-mono">ap-southeast-2 (Sydney)</span>
                        </div>
                    </div>

                    <div class="bg-purple-950/20 border border-purple-900/30 p-4 rounded-xl">
                        <span class="text-[9px] font-mono font-black text-purple-400 uppercase tracking-widest block mb-1">Active Co-Worker Role Focus</span>
                        <h5 id="arch-persona-title" class="text-base font-bold text-white">Technology BA Co-Worker</h5>
                        
                        <ul id="arch-persona-bullets" class="space-y-2 mt-3 text-xs text-slate-300">
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-arrow-right text-purple-400 mt-0.5"></i>
                                <span>Traces logic across code and specs to find hidden business rules.</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-arrow-right text-purple-400 mt-0.5"></i>
                                <span>Converts transcripts into structured Jira User Stories &amp; AC.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-between gap-6">
            <div class="border-l-2 border-emerald-500 pl-4 py-1">
                <h4 class="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest">GOVERNANCE &amp; ACTION PLANE</h4>
                <p class="text-[11px] text-slate-500">Security gates &amp; transactional writes</p>
            </div>

            <div class="glow-card p-5 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <i class="fa-solid fa-user-shield text-base"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-sm">Human-in-the-Loop Gateway</h5>
                        <p class="text-[10px] text-slate-500">Slack / Teams / Custom Web App</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">
                    Enforces mandatory human validation gates for all write commands. Uses interrupt loops when requirements conflict with code logic.
                </p>
            </div>

            <div class="glow-card p-5 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <i class="fa-solid fa-gears text-base"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-sm">Model Context Protocol (MCP)</h5>
                        <p class="text-[10px] text-slate-500">Standardized Action Gateway</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed mb-3">
                    Translates approved agent goals into safe REST payloads targeting Jira, Confluence, GitHub, or SQL databases.
                </p>
                <div class="flex items-center justify-between text-[10px] font-mono bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <span class="text-slate-500">Write Guardrail:</span>
                    <span class="text-emerald-400 font-bold">Mandatory Human Sign-off</span>
                </div>
            </div>
        </div>
    `,
    gcp: `
        <div class="flex flex-col gap-6">
            <div class="border-l-2 border-blue-500 pl-4 py-1">
                <h4 class="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest">KNOWLEDGE PLANE</h4>
                <p class="text-[11px] text-slate-500">Decoupled data ingest &amp; indexing layer</p>
            </div>

            <div class="glow-card p-5 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <i class="fa-solid fa-code text-base"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-sm">Codebase AST &amp; Technical Schemas</h5>
                        <p class="text-[10px] text-slate-500">GitHub, Azure Repos, Bitbucket</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                    AST parsers extract class hierarchies and function dependencies into an isolated index.
                </p>
                <div class="space-y-2 text-xs font-mono">
                    <div class="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span class="text-slate-500">Vector Index:</span>
                        <span class="font-bold text-blue-400">Vertex AI Vector Search</span>
                    </div>
                    <div class="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span class="text-slate-500">Knowledge Graph:</span>
                        <span class="font-bold text-purple-400">Neo4j Aura GCP</span>
                    </div>
                </div>
            </div>

            <div class="glow-card p-5 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <i class="fa-solid fa-folder-tree text-base"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-sm">Enterprise Data &amp; Identity</h5>
                        <p class="text-[10px] text-slate-500">SharePoint, Confluence, ERPs</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                    Ingests wikis and operational docs while enforcing Zero-Trust identity access bounds.
                </p>
                <div class="space-y-2 text-xs font-mono">
                    <div class="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span class="text-slate-500">Identity Guardrail:</span>
                        <span class="font-bold text-emerald-400">Google Workspace / Cloud IAM</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-center">
            <div class="glow-card-active rounded-2xl p-6 relative active-pulse">
                <span class="absolute -top-3 right-6 bg-blue-500/20 border border-blue-500 text-blue-400 text-[9px] font-mono font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    Google Cloud Active
                </span>

                <div class="text-center mb-6 mt-2">
                    <div class="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-3 border border-purple-500/20">
                        <i class="fa-solid fa-brain text-2xl"></i>
                    </div>
                    <h4 class="font-bold text-white text-lg">Intent Router &amp; Orchestrator</h4>
                    <p class="text-xs text-slate-400 mt-1">Multi-Agent Planning &amp; Fallback Loops</p>
                </div>

                <div class="space-y-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <span class="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">Active Model Engine</span>
                        <div class="flex items-center justify-between">
                            <h5 class="text-sm font-black text-white">Google Vertex AI (Gemini 1.5 Pro)</h5>
                            <span class="text-[10px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-purple-300 font-mono">australia-southeast1</span>
                        </div>
                    </div>

                    <div class="bg-purple-950/20 border border-purple-900/30 p-4 rounded-xl">
                        <span class="text-[9px] font-mono font-black text-purple-400 uppercase tracking-widest block mb-1">Active Co-Worker Role Focus</span>
                        <h5 id="arch-persona-title" class="text-base font-bold text-white">Technology BA Co-Worker</h5>
                        
                        <ul id="arch-persona-bullets" class="space-y-2 mt-3 text-xs text-slate-300">
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-arrow-right text-purple-400 mt-0.5"></i>
                                <span>Traces logic across code and specs to find hidden business rules.</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-arrow-right text-purple-400 mt-0.5"></i>
                                <span>Converts transcripts into structured Jira User Stories &amp; AC.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-between gap-6">
            <div class="border-l-2 border-emerald-500 pl-4 py-1">
                <h4 class="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest">GOVERNANCE &amp; ACTION PLANE</h4>
                <p class="text-[11px] text-slate-500">Security gates &amp; transactional writes</p>
            </div>

            <div class="glow-card p-5 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <i class="fa-solid fa-user-shield text-base"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-sm">Human-in-the-Loop Gateway</h5>
                        <p class="text-[10px] text-slate-500">Google Chat / Slack / Web Portal</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">
                    Enforces mandatory human validation gates for all write commands. Uses interrupt loops when requirements conflict with code logic.
                </p>
            </div>

            <div class="glow-card p-5 rounded-2xl border border-slate-800">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <i class="fa-solid fa-gears text-base"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-white text-sm">Model Context Protocol (MCP)</h5>
                        <p class="text-[10px] text-slate-500">Standardized Action Gateway</p>
                    </div>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed mb-3">
                    Translates approved agent goals into safe REST payloads targeting Jira, Confluence, GitHub, or SQL databases.
                </p>
                <div class="flex items-center justify-between text-[10px] font-mono bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <span class="text-slate-500">Write Guardrail:</span>
                    <span class="text-emerald-400 font-bold">Mandatory Human Sign-off</span>
                </div>
            </div>
        </div>
    `
};

export const personaData = {
    ba: {
        title: "Technology BA Co-Worker",
        bullets: [
            "Traces logic across code and specs to find hidden business rules.",
            "Converts transcripts into structured Jira User Stories & AC."
        ]
    },
    qa: {
        title: "Quality Engineering Co-Worker",
        bullets: [
            "Extracts boundary conditions directly from AST code.",
            "Generates automated test suites in Cypress/Playwright."
        ]
    },
    sme: {
        title: "Developer & SME Co-Worker",
        bullets: [
            "Verifies requirement feasibility against AST code schemas before coding.",
            "Traces legacy dependencies and system impact across repositories."
        ]
    }
};

