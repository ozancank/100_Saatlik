/* import 'package:etrade/db/dbHelper.dart';
import 'package:etrade/models/product.dart'; */
import 'package:flutter/material.dart';

import 'screens/productList.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
/*     List<Product> products = new List<Product>();
    DbHelper dbHelper = new DbHelper();
    dbHelper.initializeDb().then((result) => dbHelper.getProducts().then((result) => products = result));

    Product product = new Product("Laptop", "Hp", 3330.0);
    dbHelper.insert(product); */

    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Demo"),
      ),
      body: ProductList(),
    );
  }
}
