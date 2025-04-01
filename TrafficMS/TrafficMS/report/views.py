from django.shortcuts import render

from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options


options = Options()
options.add_argument('--safe-mode')
options.add_argument("--headless")

'''Ensure you have the geckodriver installed in your system and the path to the driver is correct'''
driver_path = r"C:/SeleniumDriver/geckodriver.exe"
service = Service(executable_path=driver_path)


driver = webdriver.Firefox(service=service, options=options)
driver.get("https://kura.go.ke/report-incident/")
driver.implicitly_wait(5)



def report_incident(f_name, l_name, mail, incident_type, location, incident_details):
    """Reports an incident on the KURA website."""
    try:
        first_name = driver.find_element(By.ID, 'wpforms-14552-field_0')
        last_name = driver.find_element(By.ID, 'wpforms-14552-field_0-last')
        email = driver.find_element(By.ID, 'wpforms-14552-field_1')
        incident = driver.find_element(By.ID, 'wpforms-14552-field_3')
        incident_location = driver.find_element(By.ID, 'wpforms-14552-field_4')
        details = driver.find_element(By.ID, 'wpforms-14552-field_2')
        submit_button = driver.find_element(By.ID, 'wpforms-submit-14552')
    except Exception as e:
        print(f"An error occurred while reporting incident: {e}")

    try:
        first_name.send_keys(f_name)
        last_name.send_keys(l_name)
        email.send_keys(mail)
        incident.send_keys(incident_type)
        incident_location.send_keys(location)
        details.send_keys(incident_details)
        submit_button.click()
        #print("Incident reported successfully...")
        return True
    except Exception as e:
        print(f"An error occurred while reporting incident: {e}")
        return False
    
def store_report():
    """Stores the reported incident in the database."""
    raise NotImplementedError

def get_report():
    """Gets the reported incident from the database."""
    raise NotImplementedError