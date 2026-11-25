from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from typing import List

router = APIRouter(prefix="/notifications", tags=["notifications"])

# Placeholder in‑memory store (replace with Supabase table in real code)
_notifications = {}

class Notification(BaseModel):
    id: str
    recipient_id: str
    title: str
    message: str
    read: bool = False
    created_at: str

@router.get("/", response_model=List[Notification])
async def list_notifications(user=Depends(...)):
    # TODO: replace with Supabase query filtered by user id
    return [n for n in _notifications.values() if n.recipient_id == user["id"]]

@router.post("/mark-read/{notification_id}")
async def mark_read(notification_id: str, user=Depends(...)):
    notif = _notifications.get(notification_id)
    if not notif or notif.recipient_id != user["id"]:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
    notif.read = True
    return {"msg": "marked as read"}
