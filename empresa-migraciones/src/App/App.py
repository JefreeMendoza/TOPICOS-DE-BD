from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import os
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)

class Persona(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nPerCode = db.Column(db.Integer, nullable=False)
    cPerLastname = db.Column(db.String(255), nullable=False)
    cPerName = db.Column(db.String(255), nullable=False)
    cPerAddress = db.Column(db.String(255), nullable=True)
    cPerDateBorn = db.Column(db.DateTime, nullable=True)
    nPerYears = db.Column(db.Integer, nullable=True)
    nPerSalary = db.Column(db.Numeric, nullable=True)
    cPerRnd = db.Column(db.String(255), nullable=True)
    cPerState = db.Column(db.String(255), nullable=True)
    remember_token = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    cPerSexo = db.Column(db.String(15), nullable=True, default='Masculino')
    cPerEmail = db.Column(db.String(255), nullable=True)  # Campo adicional

@app.route('/api/personas', methods=['GET'])
def get_personas():
    personas = Persona.query.all()
    return jsonify([{
        'id': p.id,
        'nPerCode': p.nPerCode,
        'cPerLastname': p.cPerLastname,
        'cPerName': p.cPerName,
        'cPerAddress': p.cPerAddress,
        'cPerDateBorn': p.cPerDateBorn,
        'nPerYears': p.nPerYears,
        'nPerSalary': p.nPerSalary,
        'cPerRnd': p.cPerRnd,
        'cPerState': p.cPerState,
        'remember_token': p.remember_token,
        'created_at': p.created_at,
        'updated_at': p.updated_at,
        'cPerSexo': p.cPerSexo,
        'cPerEmail': p.cPerEmail
    } for p in personas])

@app.route('/api/personas', methods=['POST'])
def add_persona():
    data = request.get_json()
    nueva_persona = Persona(
        nPerCode=data['nPerCode'],
        cPerLastname=data['cPerLastname'],
        cPerName=data['cPerName'],
        cPerAddress=data.get('cPerAddress'),
        cPerDateBorn=data.get('cPerDateBorn'),
        nPerYears=data.get('nPerYears'),
        nPerSalary=data.get('nPerSalary'),
        cPerRnd=data.get('cPerRnd'),
        cPerState=data.get('cPerState'),
        remember_token=data.get('remember_token'),
        cPerSexo=data.get('cPerSexo', 'Masculino'),
        cPerEmail=data.get('cPerEmail')
    )
    db.session.add(nueva_persona)
    db.session.commit()
    return jsonify({'message': 'Persona added successfully!'}), 201

if __name__ == '__main__':
    app.run(debug=True)
