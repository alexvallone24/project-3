# project-3
 Overview & Purpose:
  In this project, we focused on observing data centered around electric vehicles (EVs) in the United States. The purpose of this topic is to highlight trends when it comes to EV data and spark a discussion regarding the future of these vehicles as they become more popular.

 Electric Vehicle Population Data Analysis


  we have two sets of Data one csv is for Electrical Vehicle Population and another csv is Alternative Fuel Station
Electrical Vehicle Population data is from data.gov and alt fuel station we got from NREL(National Renewal Energy Laboratory)
First, we make one database on Mongo db.
create one database EVP_db
and in that database two collection one is related to electrical vehicle and another is alt_fuel_stations.
import the data successfully. The electrical vehicle has 232230 and alt_fuel_stations has 77787 data.
Electrical Vehicle has data in Washington state but alt_fuel_stations has the fuel stations over all India.

with the help of pymongo we extract the data  and try to make some visualisation
our project-3  based on Javascript so to attach our database with the Java I need to create the flask API
In flakt API I need to create two route one for Electrical vehicle and another one for alt_fuel_stations
and run it sucessfully and it creates the server http://127.0.0.1:5000
I gave the route for electrical vehicle collection to script.html and alt_fuel_station to fuel_script.html

Three visualisations 
1) Electric Vehicle by Make in Cities
2) Electric Vehicle by make in counties
3) Make the dropdown for every make like Tayota,Tesla,Jeep,Audi,Nissanetc

Two visualisation for alt_fuel_station
1) Top 10 states with most alternative fuel stations
2) Top 10 cities in california with most alternative fuel stations



Overview

This project focuses on analyzing and visualizing the population of electric vehicles (EVs). The goal is to provide insights into the adoption trends, geographical distribution, and growth of EVs using interactive data visualizations.

Features

Interactive web interface for filtering and exploring EV data.

Data visualization using D3.js.

Buttons to navigate between different data views (vehicle and fuel-related information).

Responsive design for better user experience.

Technologies Used

HTML, CSS, JavaScript for frontend development.

D3.js for interactive data visualization.

Python, Pandas

 MongoDB for database management.

Data Sources

Alternative fuel station data.

Publicly available electric vehicle registration datasets.

Other relevant datasets related to EV adoption.

File Structure

index.html - Main webpage containing navigation buttons.

script.js - Handles vehicle data visualization.

fuel_script.js - Handles fuel-related data visualization.

styles.css - Stylesheet for webpage design.

data_processing.py - Backend script for processing EV data.

database_setup.sql - SQL script for database schema setup.

How to Use

Open index.html in a web browser.

Click the Vehicle button to view EV population data visualizations.

Click the Fuel button to explore alternative fuel station information.

Use interactive filters to refine data insights.

Future Improvements

Enhance data filtering options.

Integrate real-time EV data updates.

Expand geographic coverage of datasets.

Implement machine learning for predictive analysis.


EV Population Data in Washington State:
    When looking at Washington State, we created a heatmap to analyze which areas were most dense with EVs. We discovered that the Seattle area appeared to be a hot spot as it had the highest number of recorded EVs in the state.

EV Registration Data Nationwide:
  *insert findings here*

EV Fuel Stations in the United States:
  *insert info here*
  

Ethical Considerations:
  When looking at EV data in the United States, we made sure to extract datasets from credible sources, such as government catalogs, to ensure we have accurate information. Confidentiality is also important to consider as the datasets include personal information, such as VIN numbers, that could be linked back to specific individuals. Furthermore, representation is crucial in order to prevent biased conclusions from forming. Since we mainly emphasized information centered in Washington, it is important to consider that these trends do not reflect the full picture of EV registration across every other state in the country.


References:
  https://developer.nrel.gov/
  https://catalog.data.gov/dataset/
