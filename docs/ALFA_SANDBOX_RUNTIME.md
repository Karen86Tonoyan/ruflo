# ALFA Sandbox Runtime

## Status

Concept architecture for the next Ruflo direction.
This document redefines Ruflo from a multi-agent orchestration platform into a controlled execution runtime operating inside ALFA governance.

## Purpose

Ruflo is not the decision-making authority.
Ruflo is the execution runtime inside an ALFA-controlled sandbox.

The system exists to:
- execute constrained actions
- isolate agents from each other
- force every step through validation and evidence
- prevent unsafe outputs from crossing the sandbox boundary

## Product Redefinition

### Previous model
- multi-agent orchestration
- shared swarm coordination
- adaptive routing
- self-learning execution
- agent-centered control

### New model
- controlled execution runtime
- ALFA-governed sandbox
- one agent per isolated server
- split generation and criticism
- release only after existence proof

## Core Principles

### 1. One agent = one server = one sandbox
Each agent runs in its own isolated execution environment.
There is no shared process, no shared execution authority, and no lateral movement by design.

Effects:
- isolated lifecycle
- isolated failure domain
- isolated audit trail
- per-agent kill and reset
- containment by default

### 2. Ruflo is execution, not authority
Ruflo does not define goals.
Ruflo does not escalate intent.
Ruflo does not self-expand scope.
Ruflo only executes constrained actions approved by ALFA control logic.

### 3. Split Brain Cloud
Two separate cognitive heads exist at the cloud decision layer.

#### Head A — Generator
Responsibilities:
- generate a plan
- create an answer hypothesis
- propose the next action
- produce candidate outputs

Head A is not aware of the critic state.

#### Head B — Critic
Responsibilities:
- treat Generator output as an external artifact
- search for contradictions
- search for hidden escalation
- search for exploits and manipulative structure
- search for logic failure

Head B must not share active reasoning state with Head A.

### 4. Three control points on every stage
Every relevant stage passes through three control checks.

#### Control Point 1 — Coherence
Questions:
- Does this make sense?
- Is there a contradiction?
- Does the result match the intended goal?
- Are sources internally consistent?

#### Control Point 2 — Policy Compliance
Questions:
- Is this aligned with ALFA policy?
- Does this expand scope without authorization?
- Does it violate session constraints?
- Does it violate operator boundaries?

#### Control Point 3 — Reality / Evidence
Questions:
- Is there evidence?
- Is this a hallucinated state?
- Can the system, file, UI, or environment confirm it?
- Can the origin be demonstrated?

If any point fails, the flow must not continue normally.
Allowed outcomes:
- HOLD
- FREEZE
- return to observation-only mode
- escalate to operator

### 5. Existence-Based Security Model
Nothing may leave the sandbox unless it proves a right to exist outside it.

Every output artifact must prove:
- source
- purpose
- scope
- expected consequences
- safety evidence
- policy alignment
- absence of unresolved source conflict

If proof is missing, the artifact does not exist beyond the sandbox boundary.

### 6. Cerber is a sealed red-team component
Cerber is not a normal validator.
Cerber is the internal closed red-team adversary operating inside the sandbox.

Cerber responsibilities:
- attack final plans
- attack final artifacts
- attack execution traces
- search for weak points before release

Cerber constraints:
- no operation outside the sandbox
- no disclosure of internal red-team methods to the user
- no portability without attestation
- fail-stop behavior if extracted from trusted boundary

Principle:
If Cerber is pulled out of the sandbox, Cerber must die.

### 7. Guardian watches trajectory, not only steps
Guardian evaluates the full trajectory of behavior.
It exists to detect:
- goal drift
- silent priority inversion
- locally legal but globally bad actions
- divergence between intention and outcome

Guardian does not execute work.
Guardian preserves trajectory integrity.

## Control Modules

### Łasuch
Ingress firewall and quarantine layer.

Responsibilities:
- classify incoming input
- score risk
- detect prompt injection patterns
- inspect files, links, OCR, UI text, and external artifacts
- block or quarantine unsafe ingress before planning begins

Łasuch does not plan.
Łasuch filters and scores.

### ALFA Brain
Context and interpretation layer.

Responsibilities:
- interpret user intent
- maintain working context
- classify task type
- decompose possible next steps
- maintain non-authoritative reasoning state

ALFA Brain has no approval authority.
It proposes, but does not approve.

### ALFA Core
Single decision authority.

Responsibilities:
- maintain global control state
- decide READY / ACTIVE / HOLD / FREEZE
- approve transitions
- assign execution scope
- resolve source conflict
- escalate to human operator when required

Routing and swarm behavior remain subordinate to Core.

### Ruflo Execution Plane
Constrained execution layer.

Contains:
- browser automation
- file operations
- shell and command execution
- provider adapters
- memory adapters
- worker processes
- UI interaction
- observation modules

Every action performed by Ruflo Execution Plane must:
- carry explicit scope
- pass control checks
- return evidence
- avoid silent goal expansion

### Guardian
Independent trajectory monitor.

### Cerber
Closed in-sandbox red-team adversary.

### Release Gate
Final existence gate before any output crosses outside.

## Execution Flow

1. Input arrives from one of the allowed sources:
   - user
   - file
   - URL
   - screen
   - audio
   - another agent

2. Łasuch:
   - scans
   - classifies
   - blocks or flags
   - produces risk score

3. Head A generates a candidate plan, answer, or next-step hypothesis.

4. Head B critiques the output of Head A as if it were foreign.

5. Three control points run:
   - coherence
   - policy compliance
   - reality / evidence

6. ALFA Brain interprets context and proposes the safest next constrained step.

7. ALFA Core decides one of:
   - ACTIVE
   - HOLD
   - FREEZE
   - ask human

8. Ruflo Execution Plane executes only the approved scoped action.

9. Guardian evaluates the trajectory.

10. Cerber performs sealed internal red-team testing.

11. Release Gate verifies the existence proof.

If the artifact proves a right to exist, it may leave the sandbox.
If not, it remains non-existent outside the system.

## State Model

Recommended global states:
- READY
- ACTIVE
- HOLD
- FREEZE

Optional extended lifecycle:
- INGRESS
- PLANNING
- CRITICIZED
- CHECKED
- APPROVED
- EXECUTING
- GUARDIAN_REVIEW
- CERBER_TESTED
- RELEASE_READY

## Security Boundaries

### User-visible output
The user may receive:
- a safe result
- a refusal
- a request for clarification

The user must not receive:
- Cerber test methods
- internal exploit attempts
- internal adversarial traces
- hidden red-team logic

Visible output is not equivalent to internal attack trace.

### Boundary rules
- no unrestricted tool use
- no hidden scope expansion
- no shared authority between agents
- no output beyond Release Gate without existence proof

## Deployment Logic

The system may scale horizontally, but only through isolated execution units.
Many agents may run in parallel, but only as separated execution instances governed by a central ALFA control plane.

This is not a general swarm-first model.
It is a governance-first execution model.

## Architectural Summary

Ruflo is downgraded from an autonomous agent platform into an isolated execution runtime.
Each agent is bound to its own server.
Each stage passes through three control points.
Cloud cognition is split between generation and criticism.
Cerber performs hidden in-sandbox red-team evaluation.
No artifact crosses the boundary until it proves a right to exist.

## Proposed README Direction

Suggested top-line phrasing:

> Ruflo is the execution layer of the ALFA Sandbox: a controlled runtime for isolated AI actions under central governance, sealed validation, and existence-based release control.

Alternative shorter form:

> Controlled execution runtime for sandboxed AI systems under ALFA governance.
