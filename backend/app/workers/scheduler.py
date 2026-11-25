from apscheduler.schedulers.background import BackgroundScheduler
from datetime import datetime, timedelta
import os

# Placeholder functions for jobs – real implementations will query Supabase

def send_deadline_reminders():
    # In production fetch events with upcoming deadlines and create notifications
    print(f"[Scheduler] Deadline reminders run at {datetime.utcnow().isoformat()}")

def update_live_seat_counts():
    # Pull check‑in counts and broadcast via Supabase Realtime
    print(f"[Scheduler] Live seat counter update at {datetime.utcnow().isoformat()}")

def nightly_clash_check():
    print(f"[Scheduler] Nightly clash check at {datetime.utcnow().isoformat()}")

def schedule_jobs():
    scheduler = BackgroundScheduler()
    # Every hour – deadline reminders
    scheduler.add_job(send_deadline_reminders, "interval", hours=1, id="deadline_reminders")
    # Every minute – live seat counter update (demo mode)
    scheduler.add_job(update_live_seat_counts, "interval", minutes=1, id="seat_counter")
    # Daily at 02:00 UTC – clash check
    scheduler.add_job(nightly_clash_check, "cron", hour=2, minute=0, id="clash_check")
    scheduler.start()
    print("[Scheduler] Jobs scheduled")
    return scheduler
