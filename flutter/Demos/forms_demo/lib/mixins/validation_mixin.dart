class ValidationMixin {
  String validateFirstName(String value) {
    if (value.length < 2) {
      return "İsim en az 2 karakter olmalıdır";
    }
    return null;
  }

  String validateLastName(String value) {
    if (value.length < 2) {
      return "Soyisim en az 2 karakter olmalıdır";
    }
    return null;
  }

  String validateEmail(String value) {
    if (!value.contains("@")) {
      return "Email geçerli değil";
    }
    return null;
  }
}
