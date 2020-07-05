class Chat {
  String name;
  String message;
  String time;
  String avatarUrl;

  Chat({this.name, this.message, this.time, this.avatarUrl});
}

List<Chat> fakeData = [
  Chat(
    name: "Engin",
    message: "Merhaba nasılsın?",
    time: "13:30",
    avatarUrl: "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-12.jpg",
  ),
  Chat(
    name: "Derin",
    message: "Bugün Napıyorsun?",
    time: "14:30",
    avatarUrl: "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-12.jpg",
  ),
  Chat(
    name: "Salih",
    message: "Eğitim Bitti mi?",
    time: "15:30",
    avatarUrl: "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-12.jpg",
  ),
];
