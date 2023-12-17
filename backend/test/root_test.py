import requests
import unittest

class TestServerAPIRoot(unittest.TestCase):
    @classmethod
    def setUpClass(self):
        self.url = "http://localhost:8000/"

    def test_get(self):
        resp = requests.get(url=self.url)
        # print(resp.json())
        self.assertEqual(resp.json(), {'status': 'Working'})

    def test_post1(self):
        resp = requests.post(url=self.url, json={"name": "danny"})
        self.assertEqual(resp.json(), {"test": "success", "your_name": "danny"})

    def test_post2(self):
        resp = requests.post(url=self.url, json={"name": "AsDf"})
        self.assertEqual(resp.json(), {"test": "success", "your_name": "AsDf"})

    def test_invalid_post(self):
        resp = requests.post(url=self.url, json={"request": "invalid"})
        self.assertEqual(resp.json(), {'detail': [{'loc': ['body', 'name'], 'msg': 'field required', 'type': 'value_error.missing'}]})
    

if __name__ == "__main__":
    unittest.main()