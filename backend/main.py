from flask import Flask
from flask_restful import Resource, Api, reqparse
from tickets import Tickets


app = Flask(__name__)
api = Api(app)


api.add_resource(Tickets, '/tickets')


if __name__ == '__main__':
    app.run()