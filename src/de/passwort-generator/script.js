(function ($) {
  $(document).ready(function () {
    $("#generate_pw").unbind("click");
    $("#generate_pw").bind("click", function () {
      generate_password();
    });

    function generate_password() {
      var characters = "abcdefghijklmnopqrstuvwxyz";
      var special = "|<>#+*~-_!?§$%&/()=@";
      var numbers = "0123456789";
      var length = $("#length").val();
      var special_on = $("#special_characters").prop("checked");
      var number_on = $("#number_characters").prop("checked");
      var uppercase_on = $("#upper_characters").prop("checked");
      var lowercase_on = $("#low_characters").prop("checked");
      var result = "";

      if (special_on)
        for (var i = 0; i < Math.ceil(length / 8); i++) result += special;
      if (number_on)
        for (var i = 0; i < Math.ceil(length / 5); i++) result += numbers;
      if (uppercase_on)
        for (var i = 0; i < Math.ceil(length / 8); i++)
          result += characters.toUpperCase();
      if (lowercase_on)
        for (var i = 0; i < Math.ceil(length / 8); i++)
          result += characters.toLowerCase();
      result = result.shuffle().slice(0, length);
      $("#pw_output").val(result).select();
    }
    String.prototype.shuffle = function () {
      var chars = this.split("");
      var length = chars.length;

      for (var i = length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = chars[i];
        chars[i] = chars[j];
        chars[j] = tmp;
      }
      return chars.join("");
    };
  });
})(jQuery);
