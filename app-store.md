# fast App Store submission draft

Assumed public site path after deployment:

- Marketing URL: `https://eriad.com/fast/`
- Support URL: `https://eriad.com/fast/support.html`
- Privacy Policy URL: `https://eriad.com/fast/privacy.html`
- User Privacy Choices URL: `https://eriad.com/fast/privacy-choices.html`

## Name

fast

## Subtitle

Quiet fasting tracker

## Promotional text

A quiet intermittent fasting timer for simple windows, gentle reminders, local history, widgets, and optional Apple Health integration.

## Description

fast is a quiet intermittent fasting tracker for iPhone.

Choose a simple fasting window, start when ready, and keep the active timer visible through Live Activity and lock-screen widgets. fast is built for general wellness and habit tracking, with a calm interface that avoids streak pressure.

Features:

- Simple fasting plans: 12:12, 14:10, 16:8, and 18:6
- Active fasting timer with elapsed time, remaining time, eating window, and planned end time
- Optional reminders for fast start, fast completion, eating window close, and post-fast check-in
- History and insights for completed, skipped, and ended-early fasts
- Optional check-ins for hunger, energy, mood, symptoms, and notes
- Live Activity and lock-screen widgets for active fasts
- Optional Apple Health support to log completed fasts and read body weight trends
- Local-first design with no accounts, no analytics, no ads, no subscriptions, and no server-side data collection

fast is for general wellness only. It is not medical advice, diagnosis, or treatment. End a fast if you feel weak, dizzy, or unwell, and consult a qualified healthcare professional before fasting if you have a medical condition or are unsure whether fasting is appropriate for you.

## Keywords

fasting,timer,intermittent,health,wellness,habit,reminders,tracker,window,16:8

## Category

Health & Fitness

## Support URL

`https://eriad.com/fast/support.html`

## Privacy Policy URL

`https://eriad.com/fast/privacy.html`

## Review notes

fast does not require an account, login, subscription, or server connection.

HealthKit is optional. In Settings, the user can enable writing completed fasts to Apple Health as mindful sessions and reading body weight for an in-app local trend card. If HealthKit permission is denied, the app continues to work without those Health features.

The app uses local notifications for reminders, ActivityKit for Live Activity, WidgetKit for lock-screen widgets, SwiftData for local storage, and App Group storage so widgets can read the active fast state.

To test:

1. Complete onboarding.
2. Choose a fasting plan.
3. Start a fast and confirm the timer, Live Activity, and widgets update.
4. End the fast and complete or skip the optional check-in.
5. Review history, insights, settings, export, delete all data, notification preferences, and optional Apple Health toggles.

## App privacy notes

Suggested App Store Connect privacy posture based on the current implementation:

- Tracking: No
- Data linked to user: No
- Data used to track user: No
- Data collected by developer: No

Local fasting history, check-ins, settings, notifications, and optional HealthKit data stay on device unless the user chooses to export or share them through iOS.
