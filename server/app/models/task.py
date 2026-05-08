from sqlalchemy import (
    Column,
    Integer,
    String,
    ForeignKey,
    Date
)

from sqlalchemy.orm import relationship

from app.database.db import Base

class Task(Base):

    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String, nullable=False)

    description = Column(String)

    status = Column(
        String,
        default="Pending"
    )

    due_date = Column(Date)

    project_id = Column(
        Integer,
        ForeignKey("projects.id")
    )

    project = relationship("Project")
    owner_id = Column(Integer, ForeignKey("users.id"))