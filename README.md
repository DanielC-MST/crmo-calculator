# CNO/CRMO Calculator

Responsive browser-only CNO/CRMO classification calculator based on the publicly visible [original Jotform](https://www.jotform.com/form/251126462878059).

## Run

Requires Node.js 20+. Use `npm install`, `npm run dev`, `npm test`, and `npm run build`.

## GitHub Pages

In **Settings → Pages**, select **GitHub Actions** as the source. A workflow tests, builds, and deploys on push to main. For a private repository, GitHub Pages availability depends on the GitHub plan.

## Privacy and clinical limitations

Answers remain in browser memory only, with no server or persistent storage. Feedback opens an email client, rather than submitting to a server. Do not enter patient identifiers.

The original Jotform's terms about de-identified data collection are reproduced for wording fidelity but do not describe this app's actual data processing. The Jotform-only submission cap and submission confirmation are not reproduced because they would be misleading. The original score breakdown field placeholders appear misaligned; this app calculates each item directly.

**Clinical validation required before real use.** Public Jotform HTML does not expose all hidden conditional rules. Verify content, branching and scoring with the form owner and official EULAR/ACR criteria. No medical diagnosis is provided.

## Files

- `src/criteria.js` — wording and score options
- `src/scoring.js` — eligibility and score
- `src/main.js` — form UI, navigation, feedback and result export
- `src/style.css` — responsive styles
- `tests/scoring.test.js` — scoring tests
