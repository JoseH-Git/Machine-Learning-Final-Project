# Brain Drain - Preventing employee retrition in companies 

![alt text]https://files2.abingcdn.com/balkaneu.com/uploads/2019/12/27075211/brain_drain.jpg

### Contributors
+ Rafael Deyta
+ José Sierra 
+ Luis Villa 
+ Manuel Borrego 
+ María Inés Oñate 

![alt text](https://plsadaptive.s3.amazonaws.com/eco/images/channel_content/images/biggest_oil_and_gas_companies.jpg)

### The issue and context 
Brain drain is a slang term indicating substantial withdraw or movement of individuals. A brain drain can result from turmoil within a nation, the existence of favorable professional opportunities in other organizations or even countries, or from a desire to seek a higher standard of living. Brain drain may occur at the organizational or industrial levels when workers perceive better pay, benefits, or upward mobility within another company or industry.

This results in an escalated cost for companies and the risk of losing employees to other competitors or jobs. In short, job insatisfaction represents one of the highest costs at company-level and prevents workplaces from nurturing and growing loyal employees. 

### Our Goal?
Use machine learning to analyze a key employee dataset in order to create a model capable of determining the risk and probability of an employee leaving the company and help establish a data-fed path to success for employees in order to prevent premature resignation. 

### Data Recopilation
We used real data from an oil company, that will remain unnamed for privacy reasons. This way we had real and reliable employee and employment records with a great 
array of variables. 

### Data Cleaning
The data was then cleaned through Python to be able to merge all the databases together and have uniformity, as well as normalization between all variables.

### Exploration 
We used Tableu to explore the data, this helps us visualize the possible factors that could impact job retention rates. 

| --- |
We had originally thought of using logistic regression as our machine learning model, but halfway in, realied that random forest gave us more accurate results. We transformed non numerical data into numerical columns,used a heatmap to visually identify the correlation between variables. Then, we trained and tested the model (X_train, X_test, y_train, y_test, Train_test_split), evaluated accuracy with a confusion matrix and finally used SMOTE which helped us detect that it was necessary to balance out data. 

### Conclusions 
+ Regular employees are  prone to leave the company  between 29 -35 years old
+ Between  7-10  years of seniority the employees look other options 
+ Women are leaving the company after 35 year old
+ Employees with more than 2 dependents  prefer to stand at the company
+ International assignations help to retain talent
+ The company needs to focus on Gate 1 and 2, 85% of the separations are in these gates.

### Final Thoughts
In conclusion, we detected areas of opportunities and red signs that employers and HR departments can pay special attention to in order to prevent unnecessary or premature retrition, resignment or desertion, and in this way avoid high costs and hiring saturation. 

### Host Application
* [Heroku] http://radiant-sands-55964.herokuapp.com/
