import csv
import random
import string
import json
from faker import Faker
import numpy as np
import pandas as pd

# TO DO: hardcode in objects (or figure out a better way to do it) 
# bring json file in mockaroo
with open("products.json") as json_file:
    products = json.load(json_file)

# import Faker and use that for person generation
faker = Faker()

# Generate data for 1000 orders
NUM_ROWS = 1000

# Generate orders
orders= []
for i in range(1, NUM_ROWS + 1):
    order_id = i
    date = faker.date()
    first_name = faker.first_name()
    last_name = faker.last_name()
    email = faker.email()
    address = faker.street_address()
    #generate random string of 16 numbers for credit card number
    n = 16
    credit_card = ''.join(random.choices(string.digits, k=n))

    # randomize the cart they have
    total = 0.
    cart = []
    num_items = random.randint(1, 10)
    for number in range(1, num_items+1):
        # now we pick a random product for them to add to cart
        prod_number = random.randint(0, 69)
        # make sure no duplicates
        if prod_number not in cart:
            cart.append(prod_number+1)
            cost = float(products[prod_number]["price"][1:])
            total += cost
 

    # total will have to convert dollar string amount into a number
    total = round(total, 2)
    price = "$"+str(total)


    # Create the order
    order = {
        "id": order_id,
        "date": date,
        "first_name": first_name,
        "last_name":last_name,
        "email":email,
        "address":address,
        "credit_card":credit_card,
        "cart":cart,
        "price": price,
    }

    # Add the data row to the list
    orders.append(order)

#Serializing json
json_object = json.dumps(orders, indent=4)

# Writing to orders.json
with open("orders.json", "w") as outfile:
    outfile.write(json_object)