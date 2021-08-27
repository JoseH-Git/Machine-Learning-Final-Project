from flask import Flask, request, render_template
import pickle
import trims 
import pandas as pd


app = Flask(__name__)
# temp value - to be filled in
numColumns = 3


@app.route('/',methods=["GET","POST"])
def home():
    message = "Welcome to my flask based web application ... !!!"
    return render_template("home.html", message = message)



@app.route('/getResponseLinearReg',methods=["GET","POST"])
def getResponseLinearReg():
    Emp_type = request.form["Emp_type"]
    Gate = request.form["Gate"]
    Gender = request.form["Gender"]
    Department = request.form["Department"]
    Country = request.form["Country"]
    Function = request.form["Function"]
    control_point = request.form["control_point"]
    Scale = request.form["Scale"]
    Promotions = request.form["Promotions"]
    Intern_Asig = request.form["Intern_Asig"]
    Age = request.form["Age"]
    Seniority = request.form["Seniority"]
    Dependents = request.form["Dependents"]
    Job_Code = request.form["Job_Code"]
    Comparatio = request.form["Comparatio"]
    inputList = [Emp_type,Gate,Gender,Department,Country,Function,control_point,
        Scale, Intern_Asig, Promotions, Age, Seniority,Dependents,Job_Code,Comparatio] #Survived,DIS,RAD,TAX,PT,B,LSTAT]
    with open("finalized_model2.sav", 'rb') as file:
            pickle_model = pickle.load(file)
    cols = ['Emp_type', 'Gate', 'Gender', 'Department', 'Country(LTV)', 'Function', 'Debt-To-Income(DTI)', 'Scale', 'Intern_Asig', 'Promotions', 'Age', 'Seniority','Dependents','Job_Code','Comparatio']
    y_pred_from_pkl = pickle_model.predict(pd.DataFrame([inputList], columns=cols))
    print(y_pred_from_pkl)
    return str(y_pred_from_pkl[0])
    
if __name__ == '__main__':
    app.run(debug=True)