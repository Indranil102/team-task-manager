from fastapi import APIRouter, Depends
from datetime import date
from sqlalchemy.orm import Session

from app.database.deps import get_db

from app.models.task import Task

from app.schemas.task import TaskCreate

from app.middleware.auth_bearer import get_current_user

router = APIRouter(
    prefix="/tasks",
    tags=["Tasks"]
)
@router.post("/")
def create_task(
    task: TaskCreate,
    db: Session = Depends(get_db),
    user = Depends(get_current_user)
):

    new_task = Task(
        title=task.title,
        description=task.description,
        due_date=task.due_date,
        project_id=task.project_id,
        owner_id=user["user_id"]
    )
    db.add(new_task)

    db.commit()

    db.refresh(new_task)

    return {
        "message": "Task created"
    }
@router.get("/")
def get_tasks(
    db: Session = Depends(get_db),
    user = Depends(get_current_user)
):

    tasks = db.query(Task).filter(
    Task.owner_id == user["user_id"]
).all()

    return tasks

@router.put("/{task_id}")
def update_task_status(
    task_id: int,
    status: str,
    db: Session = Depends(get_db),
    user = Depends(get_current_user)
):

    task = db.query(Task).filter(
        Task.id == task_id
    ).first()

    if not task:
        return {
            "message": "Task not found"
        }

    task.status = status

    db.commit()

    return {
        "message": "Task updated"
    }
@router.get("/stats/dashboard")
def dashboard_stats(
    db: Session = Depends(get_db),
    user = Depends(get_current_user)
):

    total_tasks = db.query(Task).count()

    completed_tasks = db.query(Task).filter(
        Task.status == "Completed"
    ).count()

    pending_tasks = db.query(Task).filter(
        Task.status == "Pending"
    ).count()

    overdue_tasks = db.query(Task).filter(
        Task.due_date < date.today(),
        Task.status != "Completed"
    ).count()

    return {
        "total_tasks": total_tasks,
        "completed_tasks": completed_tasks,
        "pending_tasks": pending_tasks,
        "overdue_tasks": overdue_tasks
    }