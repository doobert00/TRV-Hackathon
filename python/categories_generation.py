import csv
import random
import string
import json
import numpy as np
import pandas as pd

# Create categories array containing dictionaries of each category
categories = [
    {
        "id":1,
        "name": "Strings",
        "products": [],

    },
    {
        "id":2,
        "name": "Guitars",
        "products": [],
    },
    {
        "id":3,
        "name": "Basses",
        "products": [],

    },
    {
        "id":4,
        "name": "Percussion",
        "products": [],

    },
    {
        "id":5,
        "name": "Tools",
        "products": [],

    },
    {
        "id":6,
        "name": "Accessories",
        "products": [],

    },
    {
        "id":7,
        "name": "Brass",
        "products": [],

    },
    {
        "id":8,
        "name": "Stickers",
        "products": [],

    },
    {
        "id":9,
        "name": "Woodwinds",
        "products": [],

    },
]

# Parse products.json and assign each product to an entry in category based on their category #

# read products json file in as an array of dictionaries
with open("products.json") as json_file:
    products = json.load(json_file)

# Assign each product to a category
for product in products:
    prod_cat = product["category"]
    for item in categories:
        if item["name"].lower() == prod_cat:
            item["products"].append(product["id"])



### WRITE TO JSON FILE ###

#Serializing json
json_object = json.dumps(categories, indent=4)

# Writing to orders.json
with open("categories.json", "w") as outfile:
    outfile.write(json_object)
