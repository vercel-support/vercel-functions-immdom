from flask import Flask, request
import dns.resolver
from flask import Flask, Response, jsonify
app = Flask(__name__)


ids = [
    "A",
    "NS",
    "CNAME",
    "SOA",
    "MX",
    "TXT",
    "AAAA",
]


@app.route('/api')
def api():
    domain = request.args.get('domain')
    result = resolve(domain)
    return jsonify(dict(data=result))


def resolve(domain: str):
    result = []
    for record in ids:
        try:
            answers = dns.resolver.query(domain, record)
            data = [{"record": record, "value": rdata.to_text()}
                    for rdata in answers]
            for item in data:
                result.append(item)
        except Exception as e:
            print(e)

    return result
