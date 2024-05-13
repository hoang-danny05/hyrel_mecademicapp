import socket 

listener = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 

PORT = 10001
IP = "192.168.0.100"
with listener.connect((IP, PORT)) as client:
    print("connected!!")
    for _ in range(10):
        data = client.recv(1024).decode()
        print(data)