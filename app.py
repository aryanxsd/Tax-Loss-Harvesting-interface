from flask import Flask, jsonify, redirect, render_template, url_for

from tax_loss_data import CAPITAL_GAINS, HOLDINGS

app = Flask(__name__)


@app.route("/")
def home():
    return redirect(url_for("tax_loss_harvesting"))


@app.route("/health")
def health():
    return {"status": "ok"}


@app.route("/tax-loss-harvesting")
def tax_loss_harvesting():
    return render_template("tax_loss_harvesting.html")


@app.route("/api/tax-loss/holdings")
def tax_loss_holdings():
    return jsonify(HOLDINGS)


@app.route("/api/tax-loss/capital-gains")
def tax_loss_capital_gains():
    return jsonify(CAPITAL_GAINS)


if __name__ == "__main__":
    app.run(debug=True)
