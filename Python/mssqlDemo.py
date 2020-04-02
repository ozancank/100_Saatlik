import pyodbc

def selectOperasyonlari():
    conn = pyodbc.connect(
        "Driver={SQL Server Native Client 11.0};"
        "Server=.;"
        "Database=Chinook;"
        "Trusted_Connection=yes;"
    )

    cursor = conn.cursor()
    #cursor.execute("select * from Customer")
    # cursor.execute("select FirstName,LastName from Customer")
    #3 tırnak alt alta yazmayı sağlar.
    cursor.execute("""select FirstName,LastName from Customer
                    where city='Prague' or city='Berlin'
                    order by FirstName asc""")

    for row in cursor:
        print("*********************************")
        print("FirstName: " + row[0])
        print("LastName: " + row[1])

    cursor.execute("""select city,count(*) from Customer
                    group by city having count(*) > 1 
                    order by count(*) desc""")

    for row in cursor:
        print("-----------------------------------")
        print("City: " + row[0])
        print("Count: " + str(row[1]))

    cursor.execute("""select FirstName,LastName from Customer
                    where city like '%a%' """)

    for row in cursor:
        print("+++++++++++++++++++++++++++++++++++++++++")
        print("FirstName: " + row[0])
        print("LastName: " + row[1])

    conn.close()

def InsertCustomer():
    conn = pyodbc.connect(
        "Driver={SQL Server Native Client 11.0};"
        "Server=.;"
        "Database=Chinook;"
        "Trusted_Connection=yes;"
    )
    conn.execute("""insert into customer(Firstname,Lastname,Email)
                    values('ozan','can','ozancank@ozancank.com')""")
    conn.commit()
    conn.close()

def UpdateCustomer():
    conn = pyodbc.connect(
        "Driver={SQL Server Native Client 11.0};"
        "Server=.;"
        "Database=Chinook;"
        "Trusted_Connection=yes;"
    )
    conn.execute("""update customer set city='Ankara' where firstname='ozan'""")
    conn.commit()
    conn.close()

def DeleteCustomer():
    conn = pyodbc.connect(
        "Driver={SQL Server Native Client 11.0};"
        "Server=.;"
        "Database=Chinook;"
        "Trusted_Connection=yes;"
    )
    conn.execute("""delete from customer where firstname='ozan'""")
    conn.commit()
    conn.close()

def JoinOperasyonlari():
    conn = pyodbc.connect(
        "Driver={SQL Server Native Client 11.0};"
        "Server=.;"
        "Database=Chinook;"
        "Trusted_Connection=yes;"
    )

    cursor = conn.cursor()     
    cursor.execute("""select album.Title,
                    artist.Name from artist
                    inner join album on artist.ArtistId=album.ArtistId""")

    for row in cursor:
        print("Title = "+row[0]+" Name = "+row[1])

    conn.close()

selectOperasyonlari()
InsertCustomer()
UpdateCustomer()
DeleteCustomer()
JoinOperasyonlari()