# EvidenceVault

### Secure Digital Document Management System for Legal and Investigation Documents

**Smart India Hackathon 2026**  
**Problem Statement:** SIH26190  
**Theme:** Blockchain & Cybersecurity  
**Category:** Software  
**Team:** INNOVEX6  
**Team ID:** 176847

EvidenceVault is a secure, centralized digital evidence and legal-document management platform designed for investigation and prosecution workflows. It brings evidence storage, integrity verification, digital chain of custody, controlled collaboration, auditability, OCR-powered search, and AI-assisted lead discovery into a unified system.

The project is designed around one central principle:

> **Digital evidence should remain secure, traceable, verifiable, and accessible only to the people who are authorized to use it.**

---

## Table of Contents

- [1. The Problem](#1-the-problem)
- [2. Our Solution](#2-our-solution)
- [3. What Makes EvidenceVault Different](#3-what-makes-evidencevault-different)
- [4. Core Capabilities](#4-core-capabilities)
- [5. End-to-End Workflow](#5-end-to-end-workflow)
- [6. Security and Evidence Integrity](#6-security-and-evidence-integrity)
- [7. Digital Chain of Custody](#7-digital-chain-of-custody)
- [8. AI-Powered Search and Lead Discovery](#8-ai-powered-search-and-lead-discovery)
- [9. System Architecture](#9-system-architecture)
- [10. Technology Stack](#10-technology-stack)
- [11. Repository Structure](#11-repository-structure)
- [12. Access and Collaboration Model](#12-access-and-collaboration-model)
- [13. Innovation Highlights](#13-innovation-highlights)
- [14. Feasibility](#14-feasibility)
- [15. Risks and Mitigations](#15-risks-and-mitigations)
- [16. Expected Impact](#16-expected-impact)
- [17. Traditional Approach vs EvidenceVault](#17-traditional-approach-vs-evidencevault)
- [18. Research Foundation](#18-research-foundation)
- [19. Project Workflow and Validation](#19-project-workflow-and-validation)
- [20. Prototype](#20-prototype)
- [21. Team](#21-team)

---

## 1. The Problem

Legal and investigation documents are highly sensitive, but their lifecycle can become difficult to manage when information is distributed across systems, teams, and storage locations.

### Key challenges

| Challenge | Why it matters |
|---|---|
| **Scattered evidence** | Legal documents and digital evidence may exist across multiple systems and storage locations. |
| **Evidence tampering risk** | It can be difficult to prove whether a digital document has been modified after collection. |
| **Weak chain of custody** | Investigators and other stakeholders may lack complete end-to-end visibility into who accessed, transferred, verified, or approved evidence. |
| **Unauthorized access** | Sensitive case material requires strong access control at organization, case, and resource levels. |
| **Disconnected workflows** | Police, forensic teams, prosecution, and other stakeholders can work across separate systems. |
| **Slow document search** | Searching thousands of case files manually can delay investigation and legal proceedings. |

EvidenceVault addresses these challenges by treating the **document lifecycle, evidence lifecycle, and access history as one connected system**.

---

## 2. Our Solution

EvidenceVault provides a controlled environment in which authorized stakeholders can:

1. Create and manage cases.
2. Register people and other case parties.
3. Securely upload evidence and legal documents.
4. Generate and verify cryptographic fingerprints.
5. Maintain a digital chain of custody.
6. Share evidence with controlled permissions.
7. Track every important evidence-related action.
8. Search scanned and image-based documents using OCR.
9. Analyze case information for relationships, inconsistencies, and potential leads.
10. Verify whether an evidence file still matches its trusted record.

The architecture separates **large evidence files** from **critical provenance information**. Cloud object storage is used for evidence files, while the permissioned ledger is used for critical provenance rather than storing large files directly.

---

## 3. What Makes EvidenceVault Different

EvidenceVault is not only a storage system. It combines **security, provenance, collaboration, search, and intelligence** around the evidence lifecycle.

### 3.1 Security-first evidence management

Access is controlled using:

- MFA / Passkey / Biometric authentication
- JWT-based sessions
- Role-Based Access Control (RBAC)
- Organization-level scope
- Case-level scope
- Resource-level permissions
- Secure evidence sharing
- Login rate limiting

### 3.2 Verifiable evidence integrity

Each evidence file receives a cryptographic fingerprint using **SHA-256**.

The system can recompute the file hash later and compare it with the trusted value. A matching value indicates that the file contents are consistent with the recorded fingerprint; a mismatch flags the file for investigation.

The solution also combines:

- SHA-256 hashing
- HMAC-SHA-256
- Digital signatures
- Invisible watermarking
- Permissioned blockchain provenance

### 3.3 Complete digital chain of custody

Important evidence events are recorded with timestamps and user information, including:

- Upload
- Access
- Transfer
- Verification
- Approval

This creates an auditable history of the evidence lifecycle.

### 3.4 Intelligent evidence discovery

EvidenceVault goes beyond file-name search through:

- OCR-based text extraction
- Keyword search across document content
- AI-assisted insights
- Relationship discovery
- Inconsistency detection
- Potential lead discovery

### 3.5 Investigation-aware visualization

Relationships between **people, evidence, events, and locations** can be represented through graphical case and evidence views, helping investigators understand connections across large case records.

---

## 4. Core Capabilities

### 4.1 Authentication and access control

- Secure login
- MFA / Passkey / Biometric support
- JWT-based authentication
- Role-Based Access Control
- Organization and case-level access scope
- Rate limiting for repeated or suspicious login attempts

### 4.2 Case and party management

A case can include:

- Case type
- Date
- Location
- Officers
- Suspects
- Victims
- Witnesses
- Priority
- Assigned teams

### 4.3 Evidence intake

The platform can manage:

- FIRs
- Images
- Videos
- Reports
- Other digital evidence and legal documents

Evidence files are stored in secure cloud object storage.

### 4.4 Integrity verification

For every registered evidence file:

- Generate SHA-256 hash
- Apply invisible watermark
- Apply digital signature
- Record critical provenance on a permissioned blockchain ledger

During verification, the system can:

1. Recompute the current file hash.
2. Verify the digital signature.
3. Compare the result with the trusted ledger record.
4. Flag the result as **Match (Authentic)** or **Mismatch (Tampered)**.

### 4.5 Collaboration

Authorized users can collaborate across:

- Investigation teams
- Police
- Forensic teams
- Prosecutors
- Courts and government stakeholders

Sharing remains permission-controlled and traceable.

### 4.6 Audit and monitoring

Administrative monitoring provides visibility into:

- Users
- Evidence records
- Access activities
- Chain-of-custody events
- Evidence-related actions

### 4.7 AI-assisted search

OCR and AI capabilities support the discovery of:

- Relevant text inside scanned documents
- Links between case records
- Potential inconsistencies
- Relationships between evidence and parties
- Potential missing leads

---

## 5. End-to-End Workflow

EvidenceVault is designed around a clear evidence lifecycle:

```text
User Authentication
        |
        v
Case Creation & Party Management
        |
        v
Evidence Upload / Intake
        |
        v
SHA-256 Hash + Watermark + Digital Signature
        |
        v
Critical Provenance -> Permissioned Ledger
        |
        v
Secure Evidence Storage -> Cloud Object Storage
        |
        v
Controlled Sharing & Collaboration
        |
        +-------------------------+
        |                         |
        v                         v
   OCR / Search              Audit / Verification
        |                         |
        v                         v
 AI Insights / Lead        Hash & Signature Check
    Discovery                     |
        |                         v
        +----------------> Authentic / Mismatch
                                  |
                                  v
                         Auditable Evidence History
```

### Evidence lifecycle

```text
Collect -> Register -> Protect -> Store -> Share -> Verify -> Audit
```

The same lifecycle provides a common foundation for security, provenance, and accountability.

---

## 6. Security and Evidence Integrity

EvidenceVault uses multiple security layers instead of relying on a single control.

### Authentication

**MFA / Passkey / Biometric + JWT**

Authentication establishes the user's identity before access is granted.

### Authorization

**RBAC + organization scope + case scope**

Different stakeholders receive access according to their role and the case or resource they are authorized to access.

### Cryptographic integrity

**SHA-256**

A unique digital fingerprint is generated for each evidence file. A later change to the file can therefore be detected through hash comparison.

### Additional integrity protection

**HMAC-SHA-256**

The evidence hash is combined with a securely stored server-side secret key, adding another layer of integrity and authentication.

### Digital signatures

Digital signatures provide an additional mechanism for verifying the authenticity of a registered evidence record.

### Tamper-evident provenance

Critical evidence events are recorded on a permissioned blockchain ledger to maintain trustworthy provenance.

### Access-abuse protection

Repeated or suspicious login attempts can trigger rate limiting to reduce brute-force and unauthorized-access attempts.

---

## 7. Digital Chain of Custody

A chain of custody should answer a simple but critical question:

> **What happened to this evidence, when did it happen, and who performed the action?**

EvidenceVault maintains a digital history of important evidence events.

### Example

```text
Evidence Registered
        |
        v
Uploaded by Officer A
        |
        v
Accessed by Forensic Team
        |
        v
Transferred to Prosecutor
        |
        v
Verified
        |
        v
Approved
```

Each important event is associated with relevant user information and timestamps.

This creates a traceable evidence history instead of relying only on manual or paper-based tracking.

---

## 8. AI-Powered Search and Lead Discovery

Large investigation repositories can contain thousands of pages, scanned records, statements, images, and reports.

EvidenceVault introduces intelligence at the search and analysis layer.

### OCR-powered evidence search

OCR extracts text from:

- Scanned documents
- Image-based evidence
- Other non-searchable document content

This makes the extracted text available for faster keyword-based discovery across case files.

### AI-powered lead discovery

The proposed AI layer can analyze case data and evidence to identify:

- Hidden connections
- Relationships
- Inconsistencies
- Potential missing leads

### Human-in-the-loop approach

AI-generated insights are treated as assistance rather than unquestionable decisions. The feasibility and risk analysis explicitly identifies the need for **human verification** because AI outputs may be inaccurate.

---

## 9. System Architecture

The platform is organized as a modular evidence-management architecture.

```text
                    +---------------------------+
                    |       User Layer          |
                    | Police / Forensic / Legal |
                    +-------------+-------------+
                                  |
                                  v
                    +---------------------------+
                    | Authentication & Access   |
                    | MFA / Passkey / Biometric |
                    | JWT + RBAC                 |
                    +-------------+-------------+
                                  |
                                  v
                    +---------------------------+
                    | Case & Evidence Intake    |
                    | Case / Parties / Uploads  |
                    +-------------+-------------+
                                  |
                 +----------------+----------------+
                 |                                 |
                 v                                 v
      +--------------------+            +----------------------+
      | Integrity Engine   |            | AI & Search Layer    |
      | SHA-256            |            | OCR                  |
      | HMAC-SHA-256       |            | Search               |
      | Digital Signature  |            | AI Insights          |
      | Watermark          |            | Lead Discovery       |
      +---------+----------+            +----------+-----------+
                |                                  |
                v                                  v
      +---------------------+           +----------------------+
      | Permissioned Ledger |           | Audit & Monitoring   |
      | Critical Provenance |           | Activity Visibility |
      +---------------------+           +----------------------+
                |
                v
      +---------------------+
      | Secure Cloud Store  |
      | Evidence Files      |
      | AWS S3              |
      +---------------------+
```

### Architectural principle

The platform does **not** treat blockchain as a replacement for cloud storage.

Instead:

- Large evidence files are stored in cloud object storage.
- Critical provenance is recorded on the permissioned ledger.
- Integrity is verified cryptographically.
- Access and collaboration remain application-controlled.

This approach keeps the architecture more practical for large evidence files while preserving traceability.

---

## 11. Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React.js |
| Backend | Node.js |
| API / AI services | Python FastAPI |
| Database | PostgreSQL |
| Search | Elasticsearch |
| Authentication | JWT |
| Access control | RBAC |
| Encryption / security | AES-256 |
| Integrity | SHA-256, HMAC-SHA-256 |
| Storage | AWS S3 |
| Provenance | Permissioned Blockchain Ledger / Hyperledger Fabric |
| Styling | Tailwind CSS |
| Containerization | Docker |

### Why this stack

The proposed stack combines mature web technologies with security-focused infrastructure:

- **React.js** provides the user interface layer.
- **Node.js** supports backend application services.
- **PostgreSQL** provides structured case and metadata storage.
- **Python FastAPI** supports AI and processing services.
- **Elasticsearch** supports scalable search.
- **AWS S3** provides scalable object storage for large evidence files.
- **Hyperledger Fabric** provides permissioned provenance.
- **SHA-256, HMAC-SHA-256, digital signatures, and MFA** strengthen evidence integrity and access security.
- **Docker** supports modular deployment and portability.
- **Tailwind CSS** supports the application interface.

---

## 12. Access and Collaboration Model

EvidenceVault is designed for multi-department collaboration without making all evidence universally visible.

### Role-oriented access

The platform supports controlled access for stakeholders such as:

- Police / investigators
- Forensic teams
- Prosecutors
- Courts
- Administrators

Permissions can be aligned with:

```text
Organization
    |
    +---- Case
            |
            +---- Evidence
            |
            +---- Documents
            |
            +---- Activity / Audit History
```

This enables access to be controlled according to the user's role and relationship to the relevant organization, case, or resource.

---

## 13. Innovation Highlights

### 12.1 On-site evidence upload

Investigators can securely upload evidence directly from the crime scene, reducing delays and transfer risks.

### 12.2 Graphical case and evidence visualization

Relationships between people, evidence, events, and locations can be represented graphically to support investigation-oriented exploration.

### 12.3 OCR-powered evidence search

Scanned and image-based material becomes searchable through OCR-based text extraction.

### 12.4 Suspicious activity detection

The system can monitor activity patterns to identify unusual access behavior and potentially suspicious activity.

### 12.5 Fake-login detection and rate limiting

Repeated or suspicious login attempts can be detected and rate-limited to reduce brute-force risk.

### 12.6 Tamper detection and digital chain of custody

Cryptographic hashing is combined with end-to-end activity tracking to verify evidence integrity while maintaining custody history.

### 12.7 AI-powered lead discovery

AI-assisted analysis can help uncover relationships, patterns, inconsistencies, and potential missing leads in case data and evidence.

---

## 14. Feasibility

EvidenceVault is designed with technical, operational, social, and economic feasibility in mind.

### Technical feasibility

- React, Node.js, and PostgreSQL are mature technologies.
- Cloud object storage can handle large evidence files.
- Hyperledger Fabric provides permissioned provenance.
- SHA-256, digital signatures, and MFA support evidence integrity and security.
- Existing NLP, embedding, and machine-learning frameworks can support AI components.

### Operational feasibility

- Role + organization + case-based access controls structure evidence registration and use.
- An Evidence Passport concept can standardize evidence registration.
- Automated audit trails reduce manual tracking.
- Existing police, forensic, and legal workflows can be integrated rather than replaced.

### Social feasibility

- Faster evidence retrieval can reduce delays for investigators.
- Better coordination can support police, forensic, and prosecution teams.
- Multilingual support can improve accessibility across investigation environments.
- Auditable evidence history supports transparency and accountability.

### Economic feasibility

- Open-source technologies reduce licensing costs.
- Cloud storage can scale according to evidence volume.
- Large files do not need to be placed directly on the blockchain.
- Modular deployment allows phased implementation.

---

## 15. Risks and Mitigations

A practical security system must address operational risks as well as technical risks.

| Risk | Mitigation |
|---|---|
| Large evidence files | Scalable storage and asynchronous processing |
| Unauthorized access | MFA, RBAC, and secure access controls |
| Evidence integrity issues | Integrity verification and provenance tracking |
| Sensitive evidence exposure | Secure and controlled access with auditability |
| Multi-department collaboration | Controlled and auditable sharing |
| Different access requirements | Role and case/resource-based permissions |
| AI reliability | Human-in-the-loop verification |
| High storage requirements | Cloud storage and optimized storage strategy |
| Blockchain data growth | Store only critical provenance on the ledger |

The design deliberately combines automated controls with human verification where automation alone may be insufficient.

---

## 16. Expected Impact

EvidenceVault is intended to improve the complete lifecycle of legal and investigation documents.

### Investigators and police officers

- Faster access to case documents and evidence
- AI-assisted search, timelines, and case insights
- Complete activity and evidence history
- Quick retrieval of FIRs, reports, statements, and evidence

### Prosecutors and legal teams

- Verified document versions and approval history
- Easier preparation of investigation and court records
- Reliable document provenance
- Auditable evidence history

### Forensic teams

- Secure evidence transfer
- Controlled access
- Traceable chain-of-custody events
- Hash-based integrity verification

### Courts and government departments

- Better visibility into the document lifecycle
- Controlled inter-department collaboration
- Stronger provenance and auditability

### Broader benefits

**Social**

- Faster coordination between police, forensic, and legal teams
- Greater accountability and evidence traceability
- Reduced risk of unauthorized evidence access

**Economic**

- Less manual document processing
- Faster evidence retrieval
- Lower investigation effort
- Better resource utilization through shared infrastructure

**Environmental**

- Less physical movement and handling of sensitive records
- Reduced dependence on physical archival infrastructure
- More efficient use of digital storage resources

---

## 17. Traditional Approach vs EvidenceVault

| Capability | Traditional / Manual Approach | EvidenceVault |
|---|---|---|
| Evidence repository | Fragmented storage and siloed access | Unified secure repository |
| Access control | Limited or inconsistent | Fine-grained role + case/resource permissions |
| Evidence integrity | Manual verification | SHA-256 hashing with digital signatures |
| Chain of custody | Paper-based / manual tracking | End-to-end digital chain with timestamps and user logs |
| Audit trail | Not available or basic activity logs | Tamper-evident activity history |
| Evidence sharing | Manual and insecure transfer | Permission-controlled and traceable sharing |
| On-site upload | Not available | Direct secure upload from crime scene |
| Case relationships | Limited structured visibility | Interactive graph-based visualization |
| OCR search | Limited or unavailable | OCR-based text extraction and keyword search |
| Suspicious activity | Limited visibility | Activity monitoring for unusual access patterns |
| Lead discovery | Manual analysis | AI-assisted relationship and pattern discovery |

The objective is not simply to digitize existing paperwork. It is to connect **identity, evidence, integrity, custody, collaboration, search, and auditability** in one evidence lifecycle.

---

## 18. Research Foundation

The project is informed by research and existing work in blockchain-based evidence management, digital forensics, legal text processing, structured forensic analysis, and anomaly detection.

The referenced research includes:

- **B-DEMS** — A Blockchain-Based Digital Evidence Management System
- **Forensic-Chain** — Blockchain-Based Digital Forensics Chain of Custody
- **B-CoC** — Blockchain-Based Chain of Custody for Digital Forensics
- **DF-graph** — Structured and Explainable Digital Forensics
- **MILPaC** — Multilingual Indian Legal Text Translation
- **Anomaly Detection for Insider Threat Identification**

These references helped shape the project's focus on provenance, evidence integrity, structured forensic relationships, multilingual processing, and suspicious-activity detection.

---

## 19. Project Workflow and Validation

The project follows a structured research-to-deployment path:

```text
Gap & Threat Analysis
        |
        v
Literature & Existing-System Review
        |
        v
Problem & Workflow Definition
        |
        v
Requirements & Trust Model
        |
        v
Technology Evaluation
        |
        v
EvidenceVault Prototype
        |
        v
Security & AI Validation
        |
        v
Final Deployment Framework
```

This workflow connects the identified problem with the proposed system architecture, security controls, AI capabilities, and deployment strategy.

---

## 20. Prototype

A prototype of EvidenceVault is part of the project presentation.

**Prototype video:**  
https://youtu.be/RB149dUc6Nk?feature=shared

### Project references

The SIH presentation also identifies a GitHub project/demo path for the system and a research flow covering:

- Gap and threat analysis
- Literature review
- Workflow design
- Requirements and trust model
- Technology evaluation
- Prototype development
- Security and AI validation
- Deployment framework

As the implementation evolves, this repository is intended to become the central place for the source code, documentation, setup instructions, and deployment artifacts.

---

## 21. Team

### INNOVEX6

**Team ID:** 176847  
**Smart India Hackathon 2026 — Problem Statement SIH26190**

**Project:** EvidenceVault

> **Secure evidence management should not stop at storage. It should establish trust across the complete lifecycle of digital evidence.**

---

## Project Snapshot

| Item | Details |
|---|---|
| Project | EvidenceVault |
| Purpose | Secure digital document and evidence management |
| Domain | Legal and Investigation Documents |
| SIH Theme | Blockchain & Cybersecurity |
| Problem Statement | SIH26190 |
| Category | Software |
| Team | INNOVEX6 |
| Team ID | 176847 |
| Frontend | React.js |
| Backend | Node.js |
| AI/API Services | Python FastAPI |
| Database | PostgreSQL |
| Search | Elasticsearch |
| Cloud Storage | AWS S3 |
| Provenance | Permissioned Blockchain / Hyperledger Fabric |
| Security | JWT, RBAC, MFA, SHA-256, HMAC-SHA-256, AES-256 |
| Containerization | Docker |
| Styling | Tailwind CSS |

## 10. Repository Structure

The repository follows a clear separation between the React frontend and the Node.js/Express backend. This keeps the application modular and makes individual security, authorization, database, and UI responsibilities easier to maintain.

```text
├── client/                     # Vite + React Frontend Application
│   ├── public/                 # Static assets & government iconography
│   ├── src/
│   │   ├── components/         # Shared UI components (Layout, Sidebar, Navbar)
│   │   ├── context/            # AuthContext & state providers
│   │   ├── hooks/              # Custom hooks (usePermissions, etc.)
│   │   ├── pages/              # Primary views (Cases, CaseDetails, Units, Users, AuditLogs, Profile, Login)
│   │   ├── services/           # Axios API client instance
│   │   ├── App.jsx             # Route definitions & guards
│   │   └── main.jsx            # Entry point
│   ├── .env.example            # Client environment template
│   └── package.json            # Client dependencies
│
├── server/                     # Express + Prisma Backend API
│   ├── prisma/                 # Database schema & migrations
│   │   ├── schema.prisma       # PostgreSQL models & indexes
│   │   └── seed.js             # Initial database seed script
│   ├── src/
│   │   ├── authorization/      # Access & Scope evaluation engine
│   │   ├── config/             # DB & server configuration
│   │   ├── controllers/        # Route controllers
│   │   ├── middleware/         # Auth, Authorize, Zero-Trust & Validation middleware
│   │   ├── routes/             # Express API routes
│   │   ├── services/           # Business logic & database operations
│   │   ├── validators/         # Zod schemas for input validation
│   │   └── app.js              # Express app initialization
│   ├── .env.example            # Server environment template
│   └── package.json            # Server dependencies
│
├── .env.example                # Combined environment configuration guide
├── .gitignore                  # Combined Git ignore definitions
└── README.md                   # Project documentation
```

### Structure at a glance

**`client/` — Frontend application**

The frontend contains the user-facing EvidenceVault interface, authentication state, permission-aware UI, pages, API services, and application routing.

- `components/` — Shared UI components such as layout, sidebar, and navigation
- `context/` — Authentication and shared state providers
- `hooks/` — Reusable hooks for permission and application logic
- `pages/` — Major application views such as cases, case details, units, users, audit logs, profile, and login
- `services/` — Axios-based API client
- `App.jsx` — Routing and route guards
- `main.jsx` — Frontend entry point

**`server/` — Backend API**

The backend contains the API, authorization engine, database layer, validation, middleware, and business logic.

- `prisma/` — Database schema, indexes, and seed data
- `authorization/` — Access and scope evaluation engine
- `config/` — Database and server configuration
- `controllers/` — API route controllers
- `middleware/` — Authentication, authorization, Zero-Trust, and validation middleware
- `routes/` — Express API routes
- `services/` — Business logic and database operations
- `validators/` — Zod input-validation schemas
- `app.js` — Express application initialization

**Configuration**

- `.env.example` files provide environment templates for client and server configuration.
- `.gitignore` contains repository-wide Git ignore rules.
- `README.md` contains the project documentation.

---

## Closing Note

EvidenceVault is built around a practical gap in digital investigations: **evidence is valuable only when it can be securely stored, found quickly, shared responsibly, and trusted throughout its lifecycle.**

By combining centralized evidence management with cryptographic integrity, digital chain of custody, controlled collaboration, OCR-powered search, AI-assisted discovery, and permissioned provenance, the project aims to provide a unified foundation for modern legal and investigation workflows.

