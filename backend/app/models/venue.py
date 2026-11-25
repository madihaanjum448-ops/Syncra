from pydantic import BaseModel, Field
from typing import Literal, List

class Venue(BaseModel):
    id: str
    name: str
    type: Literal["auditorium", "lab", "seminar_hall", "classroom", "open_area"]
    capacity: int = Field(..., gt=0)
    equipment_tags: List[str] = []
    building: str
    floor: str
    bookable: bool = True
