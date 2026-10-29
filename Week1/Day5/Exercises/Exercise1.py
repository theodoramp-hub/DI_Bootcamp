sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}

print(sample_dict["class"]["student"]["marks"]["history"])

print(sample_dict.values())
print(sample_dict.keys())
print(sample_dict.items())


rick_dict = {
    'first_name':'Rick',
    'last_name':'Sanchez'
}
print(rick_dict.items())

sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}

del sample_dict["name"]
del sample_dict["salary"]
print(sample_dict.items())

sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}

keys_to_remove = ["name", "salary"]

for key in keys_to_remove:
    del sample_dict[key]

print(sample_dict.items())