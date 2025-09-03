Must-Have (MVP – launch scope)

Core value delivered end-to-end. Ship these first.

Onboarding v1

Steps: Height, Age/DOB, Gender, Dream Height, Motivation, Barriers, Notification opt-in.

Account creation: Email + Google/Apple.

Acceptance: < 3 min completion; >70% step-to-step conversion in Mixpanel funnel.

Dashboard v1

Widgets: Current height (manual), Growth score placeholder, Streak counter, Daily AI tip (templated).

Quick logs: Sleep hours, Stretch session, Posture check.

Acceptance: Log any 1 habit in ≤2 taps.

Habits Tracker v1

Daily logging: Sleep, Stretching, Posture, Hydration, Nutrition (simple yes/hrs/count).

Reminders: Local push (morning/evening).

Acceptance: Create/edit reminder; view today + 7-day summary.

Exercise Library v1 (Free basics)

Categories: Height Stretches, Posture Fix, Sleep Relaxation.

Each item: Title, GIF/video, duration, difficulty, “Add to Plan”.

Acceptance: Play media inline; mark as done.

AI Chat Helper v1 (Rules-based)

FAQs, habit suggestions, “log X now”, “show stretches”.

Acceptance: Responds in <1s for canned intents.

Paywall & Subscription

SuperwallKit paywall: Monthly/Yearly, 3-day trial, clear cancellation text, blurred previews of premium.

Acceptance: Purchase/restore flows; localized pricing.

Analytics & Events

Mixpanel: Onboarding steps, paywall impressions/purchases, daily logs, feature usage.

Acceptance: Real-time dashboards for funnels and retention.

Privacy, Security, Reliability

Consent (camera for later features), ToS/Privacy, age gate (13+), crash handling.

Basic offline cache for logs; sync on reconnect.

Success metrics (MVP):
Day-1 activation (any log) ≥60%; trial start rate from paywall ≥6–10%; trial→paid ≥45–55%; 7-day retention ≥25%.

Should-Have (Post-MVP, v1.1–v1.2)

Improves outcomes & conversion; build after stability.

AI Prediction Teaser + Growth Blockers (blurred)

Locked chart of potential height; “3 issues found” upsell.

Mixpanel funnel to paywall.

Streaks & Badges v1

Posture Pro / Sleep Master achievements; share card.

Weekly Reports

In-app + email: sleep average, streaks, suggested routines.

Plans & Scheduling

4–8 week stretch/posture plan; calendar view; reschedule/miss handling.

Health Integrations

Apple Health / Google Fit: import sleep/steps/weight (read-only at first).

Community v1 (Light)

Public feed (read + like), join challenges (7-day posture, 30-day stretch), leaderboard.

AI Chat Helper v1.5

Personalization from logs (rule-based), micro-coaching scripts.

Referrals & Promo

Simple code entry; attribution event tracking.

Success metrics:
Upsell CTR from teaser ≥15%; +10% lift in 7-day retention; +20% increase in weekly active stretch sessions.

Could-Have (v2+ / experiments)

Differentiators; higher effort or risk.

AI Posture Analysis (photo)

On-device/in-cloud pose estimation; highlight kyphosis/hip tilt; give corrective routine.

Guardrails, privacy redaction.

AI Calorie & Meal Estimation (photo/voice)

Food vision + macro guess; barcode scan; habit insights.

Custom AI Plans

Generate progressive routines & reminders based on goals, adherence, sleep.

Advanced Community

Private groups, expert Q&A, challenge analytics, streak protection.

A/B Testing & Growth

Paywall variants, price testing, copy/creative experiments.

Smart Notifications

ML send-time optimization; relapse detection nudges.

Watch / Widgets

Quick log + haptics stretch reminders.

Localization & Multi-currency

Top 5 locales; localized paywall/receipts.

Won’t-Have (Now)

Intentionally out of scope for current roadmap.

Medical diagnostics or guarantees of height increase.

Under-13 users or parental COPPA flows.

1:1 user DMs at launch (moderation burden).

Complex nutrition database & macro coaching (until calorie ML is ready).

AR real-time posture correction (later).

Dependencies & Risks (for hard features)

Posture analysis: model selection (MediaPipe/MoveNet), data privacy, device variability; human review paths.

Calorie vision: dataset quality, regional foods; error tolerance messaging.

Health integrations: permission UX, data mismatch; QA across iOS/Android.

Paywall: restore edge cases, failed renewals, regional taxes.

Media library: CDN for videos/GIFs; offline fallback.
