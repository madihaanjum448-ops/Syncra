# SECURITY.md

## Row‑Level Security (RLS) policies

All tables are created with **RLS enabled**. Below is the policy matrix that must be applied (via Supabase SQL migrations) for each table involved in the product.

| Table | Role | SELECT policy | INSERT policy | UPDATE policy | DELETE policy |
|-------|------|---------------|---------------|---------------|---------------|
| `profiles` | **Student** | `role = 'student' AND auth.uid() = id` | `role = 'student' AND auth.uid() = id` | `role = 'student' AND auth.uid() = id` | `false` |
|  | **President** | `role = 'president' AND auth.uid() = id` | same as SELECT | same as SELECT | `false` |
|  | **Faculty** | `role = 'faculty' AND auth.uid() = id` | same | same | `false` |
|  | **Principal** | `role = 'principal' AND auth.uid() = id` | same | same | `false` |
|  | **Admin** (hidden) | `true` | `true` | `true` | `true` |
| `student_roster` | **Student** | `auth.uid() = email` (verified college email) | `false` | `false` | `false` |
| `president_allowlist` | **President** | `email = auth.email()` | `false` | `false` | `false` |
| `faculty_allowlist` | **Faculty** | `email = auth.email()` | `false` | `false` | `false` |
| `clubs` | **All** | `true` (public read) | `role = 'admin'` | `role = 'admin'` | `role = 'admin'` |
| `club_members` | **President** | `club_id = ANY(select club_id from clubs where president_id = auth.uid())` | `role = 'president'` | `role = 'president'` | `false` |
|  | **Faculty** | `club_id = ANY(select club_id from clubs where faculty_coordinator_id = auth.uid())` | `false` | `false` | `false` |
| `events` | **Student** | `public = true OR club_id IN (select club_id from club_members where member_id = auth.uid())` | `role = 'president'` | `role = 'president'` | `false` |
| `registrations` | **Student** | `user_id = auth.uid()` | `user_id = auth.uid()` | `false` | `false` |
| `budgets` | **President** | `author_id = auth.uid()` | `author_id = auth.uid()` | `author_id = auth.uid()` | `false` |
|  | **Faculty** | `approver_id = auth.uid()` | `false` | `false` | `false` |
|  | **Principal** | `approver_id = auth.uid()` | `false` | `false` | `false` |
| `notifications` | **All** | `recipient_id = auth.uid()` | `false` | `false` | `false` |

### Enforcement in FastAPI
Each protected endpoint uses the `require_role` dependency (see `backend/app/main.py`) which checks the JWT `role` claim against the required role. The JWT is issued by Supabase Auth and contains the standard `sub` (user id) and custom `role` claim set during signup.

### Auditing
All auth events (login, logout, password reset, account creation) as well as privileged actions (budget decisions, clash resolutions) are written to an `audit_log` table with columns:
- `id`
- `user_id`
- `action`
- `timestamp`
- `metadata` (JSONB for extra context)

Policies for `audit_log` simply allow the user to insert their own events and admins to read all.
