import requests
import json

payload = {
    "name": "MoveJoints",
    "arguments": [90, 0, 0, 0, 0, 0]
}

PORT = 8000
IP_ADDR = "127.0.0.1"

response : requests.Response = requests.post(f"http://localhost:8000/robot/SixArgCommand", None, json=payload)

print(response.text)
