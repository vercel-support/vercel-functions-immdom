## this doesnt work ##

from http.server import BaseHTTPRequestHandler
from cowpy import cow
import os


class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        print(os.getcwd())
        from os import path
        d = path.dirname(path.abspath(__file__))
        with open(path.join(d, '_files', 'file.txt'), 'r') as fptr:
            data = fptr.read()
        message = cow.Cowacter().milk(
            'Hello, here is the file contents: {data}'.format(data=data))
        self.wfile.write(message.encode())
        return
