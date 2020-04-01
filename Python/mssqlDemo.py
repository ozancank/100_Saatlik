import pyodbc

conn = pyodbc.connect(
    "Driver={SQL Server Native Client 11.0};"
    "Server=.;"
    "Database=Chinook;"
    "Trusted_Connection=yes;"
)

cursor = conn.cursor()
#cursor.execute("select * from Customer")
# cursor.execute("select FirstName,LastName from Customer")
cursor.execute("select FirstName,LastName from Customer where city='Prague' or city='Berlin'")

for row in cursor:
    print("FirstName: " + row[0])
    print("LastName: " + row[1])
    print("*********************************")

conn.close()
