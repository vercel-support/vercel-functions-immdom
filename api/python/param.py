from http.server import BaseHTTPRequestHandler
from urllib.parse import parse_qs
from cowpy import cow


class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        print(parse_qs(self.path[2:]))
        parsed_params = parse_qs(self.path[2:])
        message = cow.Cowacter().milk(
            'Hello from Python Vercel - {parsed_params}!'.format(parsed_params=parsed_params))
        self.wfile.write(message.encode())
        return
