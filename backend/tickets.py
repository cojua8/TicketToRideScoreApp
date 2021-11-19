from flask_restful import Resource
import json

class Tickets(Resource):
    def __init__(self) -> None:
        super().__init__()
        self._json_filepath = "./data/routes/europe_routes.json"

    def get(self):
        f = open(self._json_filepath)

        data = json.load(f) 

        return data["routes"], 200

