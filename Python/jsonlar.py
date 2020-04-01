import json

data = '{"FN":"ABC","LN":"DEF"}'

y = json.loads(data)

print(y)
print(type(y))
print(y["FN"])

yJson=json.dumps(y)
print(y)
print(yJson)
