import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text("Anket"),
        ),
        body: SurveyList(),
      ),
    );
  }
}

class SurveyList extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _SurveyListState();
}

class _SurveyListState extends State {
  @override
  Widget build(BuildContext context) {
    return StreamBuilder<QuerySnapshot>(
      stream: Firestore.instance.collection("dilanketi").snapshots(),
      builder: (context, snapshot) {
        if (!snapshot.hasData) {
          return LinearProgressIndicator();
        } else {
          return _buildBody(context, snapshot.data.documents);
        }
      },
    );
  }

  _buildBody(BuildContext context, List<DocumentSnapshot> snapshot) {
    return ListView(
      padding: EdgeInsets.only(top: 20.0),
      children: snapshot.map<Widget>((data) => _buildListItem(context, data)).toList(),
    );
  }

  _buildListItem(BuildContext context, DocumentSnapshot data) {
    final kayit = Anket.fromSnapshot(data);
    return Padding(
      key: ValueKey(kayit.isim),
      padding: EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      child: Container(
        decoration: BoxDecoration(border: Border.all(color: Colors.grey), borderRadius: BorderRadius.circular(5.0)),
        child: ListTile(
          title: Text(kayit.isim),
          trailing: Text(kayit.oy.toString()),
          onTap: () => Firestore.instance.runTransaction(
            (transaction) async {
              final freshSnapshot = await transaction.get(kayit.reference); //Snapshot
              final fresh = Anket.fromSnapshot(freshSnapshot); //Anket
              await transaction.update(kayit.reference, {'oy': fresh.oy + 1});
            },
          ),
        ),
      ),
    );
  }
}

final dummySnapshot = [
  {"isim": "C#", "oy": 3},
  {"isim": "Perl", "oy": 4},
  {"isim": "Python", "oy": 1},
  {"isim": "Java", "oy": 1},
  {"isim": "C++", "oy": 6},
];

class Anket {
  String isim;
  int oy;
  DocumentReference reference;

  Anket.fromMap(Map<String, dynamic> map, {this.reference})
      : assert(map["isim"] != null),
        assert(map["oy"] != null),
        isim = map["isim"],
        oy = map["oy"];

  Anket.fromSnapshot(DocumentSnapshot snapshot) : this.fromMap(snapshot.data, reference: snapshot.reference);

  @override
  String toString() => "Kayıt<$isim : $oy>";
}
