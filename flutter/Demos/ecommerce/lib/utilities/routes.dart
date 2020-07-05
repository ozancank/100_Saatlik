import 'package:ecommerce/screens/productDetail.dart';
import 'package:flutter/cupertino.dart';
import 'package:ecommerce/utilities/constants.dart';

class Routes {
  static final routes = <String, WidgetBuilder>{
    Constants.ROUTE_PRODUCT_DETAIL: (BuildContext context) => ProductDetail(),
  };
}
