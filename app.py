from os import path
from pathlib import Path
from flask import Flask, render_template
from flask_frozen import Freezer

template_folder = path.abspath('./wiki')

app = Flask(__name__, template_folder=template_folder)
app.config['FREEZER_DESTINATION'] = 'public'
app.config['FREEZER_RELATIVE_URLS'] = True
app.config['FREEZER_IGNORE_MIMETYPE_WARNINGS'] = True
freezer = Freezer(app)

@app.cli.command()
def freeze():
    freezer.freeze()

@app.route('/')
def home():
    return render_template('pages/home.html')  # 从 wiki/pages 目录加载首页

@app.route('/<page>')
def pages(page):
    return render_template(f'pages/{page}.html')  # 访问 wiki/pages 下的其他页面

if __name__ == "__main__":
    app.run(port=8080)
