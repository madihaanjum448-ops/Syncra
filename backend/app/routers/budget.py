from fastapi import APIRouter, Depends, HTTPException, status
from typing import List
from ..models.budget import BudgetRequest
from ..services.budget import recommend_actions

router = APIRouter(prefix="/budget", tags=["budget"])

# In‑memory store for demo (replace with Supabase table)
_budget_store = {}

@router.post("/request", status_code=201)
async def submit_budget(request: BudgetRequest, user=Depends(...)):
    # Only presidents can submit – placeholder check
    # In real code, verify user.role == "president"
    _budget_store[request.event_id] = {
        "data": request,
        "status": "draft",
        "recommendations": []
    }
    # Run rule‑based recommendation (placeholder)
    recs = recommend_actions(request)
    _budget_store[request.event_id]["recommendations"] = recs
    return {"msg": "Budget submitted", "recommendations": recs}

@router.get("/request/{event_id}")
async def get_budget(event_id: str, user=Depends(...)):
    budget = _budget_store.get(event_id)
    if not budget:
        raise HTTPException(status_code=404, detail="Budget not found")
    return budget

@router.post("/decision/{event_id}")
async def decision(event_id: str, decision: str = "approve", user=Depends(...)):
    # decision can be approve, reduce, revision, reject
    budget = _budget_store.get(event_id)
    if not budget:
        raise HTTPException(status_code=404, detail="Budget not found")
    budget["status"] = decision
    return {"msg": f"Budget {decision}"}
