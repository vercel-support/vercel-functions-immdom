from http.server import BaseHTTPRequestHandler
from cowpy import cow
import os


class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        print(os.getcwd())
        from os import listdir
        from os.path import isfile, join
        onlyfiles = [f for f in listdir(
            os.getcwd()) if isfile(join(os.getcwd(), f))]
        print(onlyfiles)
        with open('./_files/file.txt', 'r') as fptr:
            data = fptr.read()
        message = cow.Cowacter().milk(
            'Hello, here is the file contents: {data}'.format(data=data))
        self.wfile.write(message.encode())
        return
