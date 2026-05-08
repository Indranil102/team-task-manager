from pydantic import BaseModel

from datetime import date

class TaskCreate(BaseModel):

    title: str

    description: str

    due_date: date

    project_id: int