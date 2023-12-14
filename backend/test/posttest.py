import requests

url = "http://localhost:8000"
payload = {"name": "danny"}
response = requests.post(url=url, json=payload)
print(response.json())