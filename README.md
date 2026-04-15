# Tax Loss Harvesting Interface

Responsive React-based tax loss harvesting interface for the KoinX frontend assignment. The project is packaged as a small standalone Flask app with two mocked APIs and a React UI rendered in-browser.

## Features

- Pre-harvesting and after-harvesting capital gains cards
- Real-time recalculation when holdings are selected or deselected
- Row-level selection plus header select-all
- Responsive holdings table with amount-to-sell updates
- Mock holdings API and mock capital gains API
- Loader, error state, visual row selection, and "View all" support

## Route

- UI: `http://127.0.0.1:5000/tax-loss-harvesting`
- Holdings API: `GET /api/tax-loss/holdings`
- Capital Gains API: `GET /api/tax-loss/capital-gains`

## Tech stack

- React 18
- Flask
- Plain CSS
- Mock API responses served from backend routes

## Project structure

- [app.py](/mnt/c/Users/aryan/OneDrive/Documents/koinx-tax-loss-harvesting/app.py): standalone Flask app and routes
- [tax_loss_data.py](/mnt/c/Users/aryan/OneDrive/Documents/koinx-tax-loss-harvesting/tax_loss_data.py): holdings and capital gains mock data
- [templates/tax_loss_harvesting.html](/mnt/c/Users/aryan/OneDrive/Documents/koinx-tax-loss-harvesting/templates/tax_loss_harvesting.html): React UI and harvesting logic
- [static/tax-loss-harvesting.css](/mnt/c/Users/aryan/OneDrive/Documents/koinx-tax-loss-harvesting/static/tax-loss-harvesting.css): responsive styling
- [scripts/capture_screenshots.mjs](/mnt/c/Users/aryan/OneDrive/Documents/koinx-tax-loss-harvesting/scripts/capture_screenshots.mjs): Playwright screenshot helper
- [package.json](/mnt/c/Users/aryan/OneDrive/Documents/koinx-tax-loss-harvesting/package.json): screenshot tooling config
- [vercel.json](/mnt/c/Users/aryan/OneDrive/Documents/koinx-tax-loss-harvesting/vercel.json): Vercel deployment config
- [wsgi.py](/mnt/c/Users/aryan/OneDrive/Documents/koinx-tax-loss-harvesting/wsgi.py): Vercel entrypoint

## Setup

1. Create a virtual environment:

```bash
python3 -m venv .venv
```

2. Activate it:

Windows:

```bash
.venv\Scripts\activate
```

macOS/Linux:

```bash
source .venv/bin/activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Run the app:

```bash
python app.py
```

5. Open:

```text
http://127.0.0.1:5000/tax-loss-harvesting
```

Optional screenshot tooling:

```bash
npm install
npm run screenshots
```

## Harvesting logic

- The pre-harvesting card uses the capital gains API response directly.
- The after-harvesting card initially mirrors the pre-harvesting values.
- For every selected holding:
- If `stcg.gain` is positive, it is added to short-term profits.
- If `stcg.gain` is negative, its absolute value is added to short-term losses.
- If `ltcg.gain` is positive, it is added to long-term profits.
- If `ltcg.gain` is negative, its absolute value is added to long-term losses.
- Net capital gains are calculated as `profits - losses`.
- Effective / realised capital gains are calculated as `short-term net + long-term net`.
- The savings message appears only when post-harvesting realised gains are lower than pre-harvesting realised gains.

## Assumptions

- The assignment is implemented as a standalone Flask project to keep setup simple and deployment lightweight.
- React is loaded from CDN and mounted in-browser instead of using a Vite or CRA build pipeline.
- Holdings are sorted logically to surface more relevant harvesting candidates first.
- Header select-all applies to all loaded holdings.

## Screenshots

Add screenshots in the [screenshots](/mnt/c/Users/aryan/OneDrive/Documents/koinx-tax-loss-harvesting/screenshots) folder after running the app locally, then reference them here.

Example:

```md
![Desktop](./screenshots/desktop.png)
![Mobile](./screenshots/mobile.png)
```

## Deployment

The project is ready to deploy on Vercel using the included Python configuration.

Suggested deployed URL:

- `https://<your-domain>/tax-loss-harvesting`

## Verification

- Python files were syntax-checked successfully.
- The local Flask server was started successfully on `http://127.0.0.1:5000`.
- The UI route returned `200 OK`.
- The capital gains API returned the expected JSON shape.
- The holdings API returned 25 records successfully.
