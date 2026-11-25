from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel, EmailStr, constr
from typing import Literal
import os

# Placeholder Supabase client import (real implementation will use supabase-py)
# from .supabase_client import supabase

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/token")

# ---------- Pydantic schemas ----------
class StudentSignUp(BaseModel):
    student_id: constr(regex=r"^\d[A-Z]{2}\d{2}[A-Z]{2}\d{3}$")
    email: EmailStr
    password: str

class PresidentSignUp(BaseModel):
    email: EmailStr
    invite_code: str
    password: str

class FacultySignUp(BaseModel):
    email: EmailStr
    password: str

# ---------- Dependency placeholders ----------
async def get_current_user(token: str = Depends(auth2_scheme)):
    # In real code, verify JWT via Supabase auth
    if not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")
    # Mock user payload
    return {"role": "student", "email": "demo@example.edu"}

def require_role(required: Literal["student", "president", "faculty", "principal", "admin"]):
    async def role_checker(user=Depends(get_current_user)):
        if user["role"] != required:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Insufficient role")
        return user
    return role_checker

# ---------- Auth endpoints (placeholders) ----------
@app.post("/api/v1/auth/student/signup")
async def student_signup(payload: StudentSignUp):
    # TODO: call Supabase auth, validate student roster, send verification email
    return {"msg": "Student signup placeholder"}

@app.post("/api/v1/auth/president/signup")
async def president_signup(payload: PresidentSignUp):
    # TODO: validate allowlist, invite code, create account with pending activation
    return {"msg": "President signup placeholder"}

@app.post("/api/v1/auth/faculty/signup")
async def faculty_signup(payload: FacultySignUp):
    # TODO: validate allowlist, send magic link or OTP
    return {"msg": "Faculty signup placeholder"}

# Example protected route
@app.get("/api/v1/protected/student")
async def student_protected(user=Depends(require_role("student"))):
    return {"msg": f"Hello student {user['email']}"}
