from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.deps import get_db
from app.models.user import User
from app.schemas.user import UserCreate, UserLogin

from app.utils.auth import hash_password, verify_password
from app.utils.jwt_handler import create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.post("/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    hashed_password = hash_password(user.password)

    new_user = User(
        name=user.name,
        email=user.email,
        password=hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User created successfully"
    }
    
@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if not existing_user:
        raise HTTPException(
            status_code=400,
            detail="Invalid email"
        )

    valid_password = verify_password(
        user.password,
        existing_user.password
    )

    if not valid_password:
        raise HTTPException(
            status_code=400,
            detail="Invalid password"
        )

    token = create_access_token(
        data={
            "user_id": existing_user.id,
            "role": existing_user.role
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }
    
