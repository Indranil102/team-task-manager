from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.deps import get_db

from app.models.project import Project

from app.schemas.project import ProjectCreate

from app.middleware.auth_bearer import get_current_user

router = APIRouter(
    prefix="/projects",
    tags=["Projects"]
)

@router.post("/")
def create_project(
    project: ProjectCreate,
    db: Session = Depends(get_db),
    user = Depends(get_current_user)
):

    new_project = Project(
        name=project.name,
        description=project.description,
        owner_id=user["user_id"]
    )

    db.add(new_project)

    db.commit()

    db.refresh(new_project)

    return {
        "message": "Project created"
    }
    
@router.get("/")
def get_projects(
    db: Session = Depends(get_db),
    user = Depends(get_current_user)
):

    projects = db.query(Project).filter(
        Project.owner_id == user["user_id"]
    ).all()

    return projects