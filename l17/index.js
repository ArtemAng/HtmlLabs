function handler(event) {
  const value = event.target.innerText
  const display = document.getElementById("display")

  switch (value) {
    case "🆑":
      display.innerText = ""
      break

    case "⬅️":
      display.innerText = display.innerText.slice(0, -1)
      break

    case "=":
      const expr = display.innerText.split('|');
      console.log(expr);
      if (expr[1] == '*') {
        display.innerText = Number(expr[0]) * Number(expr[2]);
      }
      if (expr[1] == '-') {
        display.innerText = Number(expr[0]) - Number(expr[2]);
      }
      if (expr[1] == '/') {
        display.innerText = Number(expr[0]) / Number(expr[2]);
      }
      if (expr[1] == '+') {
        display.innerText = Number(expr[0]) + Number(expr[2]);
      }
      // display.innerText = eval(display.innerText)
      break;
    case '*':
      display.innerText += '|' + value + '|';
      break;
    case '+':
      display.innerText += '|' + value + '|';
      break;
    case '-':
      display.innerText += '|' + value + '|';
      break;
    case '/':
      display.innerText += '|' + value + '|';
      break;
    case 'sin':
      display.innerText = Math.sin(Number(display.innerText));
      break;
    case 'log':
      display.innerText = Math.log(Number(display.innerText));
      break;
    case 'cos':
      display.innerText = Math.cos(Number(display.innerText));
      break;
    case 'sqrt':
      display.innerText = Math.sqrt(Number(display.innerText));
      break;
    case '1/x':
      display.innerText = 1 / Number(display.innerText);
      break;
    case 'x^2':
      display.innerText = Math.pow(Number(display.innerText), 2);
      break;
    case 'e^x':
      display.innerText = Math.pow(Math.E, Number(display.innerText));
      break;

    default:
      console.log(display.innerText);
      display.innerText += value
      break;
  }
}

Array
  .from(
    document.getElementsByTagName("td")
  )
  .forEach(
    (td) => {
      td.addEventListener("click", handler)
    }
  )

