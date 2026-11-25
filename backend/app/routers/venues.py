from fastapi import APIRouter, Depends, HTTPException, status
from typing import List
from ..models.venue import Venue

router = APIRouter(prefix="/venues", tags=["venues"])

# In‑memory demo store (replace with Supabase table)
_venue_store = {}

@router.get("/", response_model=List[Venue])
async def list_venues(user=Depends(...)):
    # Only faculty/coordinator/principal/admin can list – placeholder auth
    return list(_venue_store.values())

@router.post("/", response_model=Venue, status_code=201)
async def create_venue(venue: Venue, user=Depends(...)):
    if venue.id in _venue_store:
        raise HTTPException(status_code=400, detail="Venue ID already exists")
    _venue_store[venue.id] = venue
    return venue

@router.put("/{venue_id}", response_model=Venue)
async def update_venue(venue_id: str, venue: Venue, user=Depends(...)):
    if venue_id not in _venue_store:
        raise HTTPException(status_code=404, detail="Venue not found")
    _venue_store[venue_id] = venue
    return venue

@router.delete("/{venue_id}", status_code=204)
async def delete_venue(venue_id: str, user=Depends(...)):
    if venue_id not in _venue_store:
        raise HTTPException(status_code=404, detail="Venue not found")
    del _venue_store[venue_id]
    return
