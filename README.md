# Working Examples with Vercel Functions

Check the examples out at:
[functions.immdom.com]

Get started on your own by doing the following:

to run the dainty webapp:
`yarn dev`

_REMEMBER: These functions ain't gonna work unless you push 'em up to Vercel!_

## Basics

### /api is special

Generally, adding an approved script to the /api folder will create a Function as a Service
endpoint at the file name's path. Nesting is allowed, as you can see with these examples.

```
/api/hello.js -> https://<APP_URL>/api/hello
/api/js/basic -> https://<APP_URL>/api/js/basic
```

See INSERT ME for more details.

### Using Files

### Using Params

## Working with Python

### BaseHTTPRequestHandler

### Flask

## Getting Beyond This

### Caveats

These examples represent my (@paulkarayan) limited exploration of Vercel functions.
Please let me know what I might be missing or doing wrong.

The documentation provided by Vercel is generally good, but lacks working examples.
In particular, there is a lot of information that appears to be out of date from the Zeit or now.sh
while the grand vision seems to have been reigned in considerably.

Overall - these are still really useful and amazing tools that are well worth the effort to understand.

_IMPORTANT_
You should probably treat these functions as middleware, not as full-fledged services themselves.
For example, if you want to use Flask to do some simple post/preprocessing - that's perfect.
However, if you want to build anything more fully featured, you should do it in a proper API server
setup with Flask or other tech. Bonus: you'll not have to worry about lack of observability!

Also - Node.js is clearly the preferred choice here. I don't mind it but take a look at the
inability to use files with the Python example.

### What Doesn't Make Sense / Work

- I can't seem to get files to work with Python. see [link to my file]

link to any follow up discussions.

best info i found:
https://github.com/vercel/vercel/discussions/4904

- can flask apps have multiple routes or entry points?

link to any follow up discussions.

i thought dns.py (show example) would go to /dns

From:
https://vercel.com/docs/runtimes#advanced-usage/advanced-python-usage
from flask import Flask, Response
app = Flask(**name**)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
return Response("<h1>Flask</h1><p>You visited: /%s</p>" % (path), mimetype="text/html")

also see: https://github.com/vercel/now-examples/issues/163
doesnt work like:
https://camillovisini.com/barebone-serverless-flask-rest-api-on-zeit-now/
