
# A very simple Flask Hello World app for you to get started with...

from flask import Flask, redirect, request, render_template

import example

app = Flask(__name__)

@app.route('/apts/', defaults={'search': ''}) # I am trying to add default url if user doesn't put any input
@app.route('/apts/<search>')
def example_apt(search):
    search = search or ''
    return example.apts(search)



