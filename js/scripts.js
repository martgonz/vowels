var str = function(count) {
//   var vowelsCount = 0;
//   var string = count.split("");
//   var vowels = ["a", "e", "i", "o", "u"];
//   if (string === vowels) {
//     // vowels.toUpperCase();
//     vowelsCount += 1;
//   }
//   console.log(vowelsCount);
//   return vowelsCount;
// }

var vowelsCount = 0;
var string = count.toString();
string = string.toLowerCase();
for (var i = 0; i < string.length; i++) {
  if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u") {
    vowelsCount += 1;
  }

}
console.log(vowelsCount);
return vowelsCount;
}


$(document).ready(function() {
  $("form#count").submit(function(event) {
    event.preventDefault();
    var count = $("input#phrase").val();
    var result = str(count);

      $("#output").text(result);

  });
});
