import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:forms_demo/mixins/validation_mixin.dart';
import 'package:forms_demo/models/customer.dart';

class CustomerAdd extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => CustomerAddState();
}

class CustomerAddState extends State with ValidationMixin {
  final formKey = GlobalKey<FormState>();
  final customer = Customer();
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(25.0),
      child: Form(
        key: formKey,
        child: Column(
          children: <Widget>[
            firstNameField(),
            lastNameField(),
            emailField(),
            passwordField(),
            submitButton(),
          ],
        ),
      ),
    );
  }

  Widget firstNameField() {
    return TextFormField(
      decoration: InputDecoration(
        labelText: "Adınız",
        hintText: "Ozan",
      ),
      validator: validateFirstName,
      onSaved: (String value) {
        customer.firstName = value;
      },
    );
  }

  Widget lastNameField() {
    return TextFormField(
      decoration: InputDecoration(
        labelText: "Soyadınız",
        hintText: "Kösemez",
      ),
      validator: validateLastName,
      onSaved: (String value) {
        customer.lastName = value;
      },
    );
  }

  Widget emailField() {
    return TextFormField(
      keyboardType: TextInputType.emailAddress,
      decoration: InputDecoration(
        labelText: "Email",
        hintText: "mail@mail.com",
      ),
      validator: validateEmail,
      onSaved: (String value) {
        customer.email = value;
      },
    );
  }

  Widget passwordField() {
    return TextFormField(
      obscureText: true,
      decoration: InputDecoration(
        labelText: "Şifreniz",
        hintText: "şifre",
      ),
    );
  }

  Widget submitButton() {
    return RaisedButton(
      child: Text("Kaydet"),
      onPressed: () {
        if (formKey.currentState.validate()) {
          formKey.currentState.save();
          saveCustomer(customer);
        }
      },
    );
  }

  void saveCustomer(Customer customer) {
    print(customer.firstName);
  }
}
