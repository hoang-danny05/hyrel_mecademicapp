# python -m unittest list_client
import requests
import unittest
from list_server import success as successful_response
unknown_path_response = {'detail': 'Not Found'}
invalid_param_status_code = 422
wrong_method_response = {'detail': 'Method Not Allowed'}
wrong_method_status_code = 405

URL = "http://localhost:8000"

class TestListServer(unittest.TestCase):
    
    #runs once before every test
    @classmethod
    def setUpClass(self) -> None:
        print("Commencing the test!")
        
    def test_connection(self):
        # test default response
        res = requests.get(URL)
        self.assertEqual(res.json(), successful_response)
        # test invalid url
        res = requests.get(f"{URL}/invalid")
        self.assertEqual(res.json(), unknown_path_response)
    
    def test_single(self):
        #test successful post
        payload = {"name": "Danny", "arg": "031805"}
        res = requests.post(f"{URL}/single", json=payload)
        self.assertEqual(res.json(), successful_response)

        # wrong payload test
        payload = {"name": "Danny", "arg": "evalThis()"}
        res = requests.post(f"{URL}/single", json=payload)
        self.assertEqual(res.status_code, invalid_param_status_code)

        # wrong method test
        payload = {"name": "Danny"}
        res = requests.get(f"{URL}/single", json=payload)
        self.assertEqual(res.status_code, wrong_method_status_code)
        self.assertEqual(res.json(), wrong_method_response)

        #test unsuccessful get
        res = requests.get(f"{URL}/single", json=payload)
        self.assertEqual(res.json(), wrong_method_response)

    @classmethod
    def tearDownClass(cls) -> None:
        return super().tearDownClass()

def main():
    res = requests.get("http://localhost:8000")
    # print(res.json() == successful_response) # equality by value, not identity.