# uvicorn list_server:app
# fastapi run list_server.py

from pydantic import BaseModel
from typing import List
from fastapi import FastAPI, status
from fastapi.responses import JSONResponse

class TemplateCommand(BaseModel):
    name: str
    arg: int

class ListOfCommands(BaseModel):
    commands: List[TemplateCommand]


app = FastAPI();
success = {"success": True}
invalid_response = JSONResponse()

@app.get("/")
def connectionSuccess():
    return success

@app.post("/single")
async def singleCommand(param: TemplateCommand):
    return success

@app.post("/list")
async def list_of_commands(params: ListOfCommands):
    print(params)
    return success