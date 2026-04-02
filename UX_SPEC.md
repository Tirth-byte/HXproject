---
description: XINITY Global UX & Interaction Patterns Framework
---

# XINITY Interaction Spec

### Core Motion Principles

1.  **Staggered Reveals**: Standardize data-loading and UI build-outs using a `40px` fade-up staggered by `80ms`.
2.  **Modality**: Modal opening sequences are strictly bounded by a scale of `0.95 -> 1.0` combined with `0.2s` fade ease. This prevents motion sickness mapping natively to iOS Human Interface guidelines.
3.  **Role Divergence**: The system implements an explicit _Psychological Branching_ approach based on identity status.

### Role-Based Discrepancies

#### Participant Portal

- **Tone:** Highly encouraging. Blank states feature large, stylized graphics and positive prompting ("You haven't shipped yet! Jump into an event.").
- **Reward Sequences:** Entering specific workflows (registering for a hackathon, submitting a repository link) triggers localized visual confetti payloads or pulse sequences on primary CTA.
- **Stats Animation:** Number counters must always roll-up from `0` to real integers across `1.2s easeOut` profiles upon intersecting the viewport.

#### Administrator Control Board

- **Tone:** Authoritative, Utilitarian, Defensive.
- **Red Destructive Mapping:** Red `#EF4444` is entirely blacklisted from decorative use and is reserved solely for `User Ban`, `Delete Event`, and `Revoke Access` contexts.
- **Confirmation Locks:** Admin destructive operations require a 2-step shake. If a delete intent is made incorrectly, the box physically triggers a `translateX( -4px | 4px)` sequence. No confetti. No celebrations.

### Accessibility Protocols

- `prefers-reduced-motion: reduce` hooks directly into the Global CSS architecture. If a user dictates this setting in OS parameters, **ALL transforms (scale, rotate, translateX) are bypassed immediately via `animation: none;`**, reverting to opacity-only toggles to protect vestibular disorders.
- Input states actively map the bounding border to `#6C63FF` when focused for sharp, clear navigational context.
