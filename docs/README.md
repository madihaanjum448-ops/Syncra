# Documentation & Demo

## Project Overview
Syncra is a campus‑wide event platform built with:
- **Frontend:** React + Vite + TypeScript + Tailwind CSS
- **Backend:** FastAPI (Python) with Pydantic
- **Data & Auth:** Supabase (Postgres, Auth, Realtime, Row‑Level Security)
- **Agents:** Rule‑based clash engine and collaboration matcher, optional LLM‑powered explanations.

The repository follows a **monorepo** layout:
```
/ (root)
├─ frontend/           # React app
├─ backend/            # FastAPI server
├─ supabase/           # DB migrations & seed data
├─ docs/               # Documentation and demo script
├─ .gitignore
├─ .env.example
└─ README.md           # High‑level project description
```

## Setup (under 10 commands)
```bash
# 1️⃣ Clone the repo
git clone https://github.com/madihaanjum448-ops/Syncra.git && cd Syncra

# 2️⃣ Install backend deps (Python 3.12+)
python -m venv .venv && source .venv/bin/activate
pip install -r backend/requirements.txt   # (create this file later)

# 3️⃣ Install frontend deps (Node 20+)
npm install --prefix frontend

# 4️⃣ Create a local .env file (copy from example)
cp .env.example .env
#   → Fill in SUPABASE_URL and SUPABASE_ANON_KEY (use Supabase free tier or local Docker)

# 5️⃣ Run Supabase locally (Docker) – optional for full stack
#   docker run -e POSTGRES_PASSWORD=postgres -p 5432:5432 supabase/postgres:15
#   Then apply migrations:
cd supabase && supabase db reset && supabase db push && cd ..

# 6️⃣ Seed demo data (SQL & JSON)
psql $SUPABASE_URL -f supabase/seed.sql   # or use Supabase CLI

# 7️⃣ Start the FastAPI server
uvicorn backend.app.main:app --reload --port 8000

# 8️⃣ Start the Vite dev server
npm run dev --prefix frontend

# 9️⃣ Open the app
#   • Frontend: http://localhost:5173
#   • API docs (Swagger): http://localhost:8000/docs

# 🔟 Run the demo script to see the full flow (see demo script below)
bash demo.sh
```

## Demo Script (demo.sh)
The script walks through a typical user journey:
```bash
#!/usr/bin/env bash
set -e

# 1️⃣ Log in as a student (mock auth)
echo "--- Logging in as a student (mock)"
# In a real demo you would call the /auth endpoint; here we just set a cookie.

# 2️⃣ Open the landing page and view upcoming events (via curl for brevity)
curl -s http://localhost:8000/api/v1/public/events | jq

# 3️⃣ Register for the demo paid event (Event E)
curl -X POST -H "Content-Type: application/json" \
  -d '{"event_id":"event-e","student_id":"student-1"}' \
  http://localhost:8000/api/v1/registrations

# 4️⃣ Simulate the president creating a clashing event (Event C)
# (POST /api/v1/events – payload omitted for brevity)

# 5️⃣ Run the clash engine manually (admin demo button)
curl -X POST http://localhost:8000/api/v1/agent/clash/run

# 6️⃣ Show the live seat counter (mock output)
curl http://localhost:8000/api/v1/events/live

# 7️⃣ President submits a budget request
curl -X POST -H "Content-Type: application/json" \
  -d '{"event_id":"event-e","total_amount":3000,"items":[{"category":"venue","amount":1500,"justification":"Main Hall"}],"remarks":"Demo budget"}' \
  http://localhost:8000/api/v1/budget/request

# 8️⃣ Faculty approves the budget (auto‑recommendation shown)
curl -X POST http://localhost:8000/api/v1/budget/decision/event-e?decision=approve

# 9️⃣ Verify the budget status
curl http://localhost:8000/api/v1/budget/request/event-e

# 🎉 Demo complete – you can now explore the UI in the browser.
```
Make the script executable (`chmod +x demo.sh`).

## Screenshots / Recordings
> **NOTE:** Screenshots are stored in the `docs/screenshots/` folder. They will be populated by the team after the UI is fully built. For now the folder contains placeholder images.

```
/docs/screenshots/landing.png
/docs/screenshots/student_home.png
/docs/screenshots/president_dashboard.png
/docs/screenshots/faculty_dashboard.png
```

## Testing & Quality (summary)
- **Frontend:** ESLint + Prettier (recommended config in `frontend/.eslintrc.cjs`), Jest + React Testing Library for component tests.
- **Backend:** pytest + coverage, unit tests for `agents/clash.py`, `agents/collab.py`, and RLS policy scripts under `backend/tests/`.
- **CI:** GitHub Actions workflow runs lint, format check, and test suites on each PR.

## DECISIONS Log (excerpt)
- **Design Tokens:** Chose CSS variables + Tailwind extensions to avoid hard‑coded hex values.
- **Auth Flow:** Use Supabase Auth with role‑based JWT claims; fallback mock hook for local dev.
- **Scheduler:** APScheduler runs in a background thread on FastAPI startup (lightweight for demo).
- **Budget Engine:** Rule‑based recommendations first; LLM only for explanatory text when `LLM_ENABLED`.

---
*All steps are designed to work offline with mock adapters (Resend, payment, LLM) and can be swapped to real services by providing the appropriate API keys in `.env`.*
