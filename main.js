const buttons = document.querySelectorAll(".btn");
let str = "";
let hasDecimal = false;

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    switch (button.innerText) {
      case "C":
        str = "";
        break;

      case "X":
        str += "*";
        break;

      case "÷":
        str += "÷";
        break;

      case "1":
        str += "1";
        break;

      case "1":
        str += "1";
        break;

      case "1":
        str += "1";
        break;
      case "2":
        str += "2";
        break;
      case "3":
        str += "3";
        break;
      case "4":
        str += "4";
        break;
      case "5":
        str += "5";
        break;
      case "6":
        str += "6";
        break;
      case "7":
        str += "7";
        break;
      case "8":
        str += "8";
        break;
      case "9":
        str += "9";
        break;
    }
  });
}
