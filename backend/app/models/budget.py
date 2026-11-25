from pydantic import BaseModel, Field
from typing import List, Literal

class BudgetItem(BaseModel):
    category: Literal["venue", "food", "prizes", "marketing", "equipment", "honorarium", "misc"]
    amount: float = Field(..., gt=0)
    justification: str

class BudgetRequest(BaseModel):
    event_id: str
    total_amount: float = Field(..., gt=0)
    items: List[BudgetItem]
    remarks: str | None = None
