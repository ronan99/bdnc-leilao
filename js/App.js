const header = document.getElementById("div_header");
const mainContent = document.getElementById("main_content");

var localStorage = window.localStorage;
var httpRequest = new XMLHttpRequest();

async function main() {
  user = localStorage.getItem("user-id");
  if (!user) {
    let login = await makeRequest("layout/login.html");
    render(login, "");
  } else if (user) {
    let leilao = await makeRequest("layout/leilao.html");
    let navbar = await makeRequest("layout/navbar.html");
    render(leilao, navbar);
  }
}

async function makeRequest(url) {
  let response = await fetch(url);
  return response.text();
}

function render(main, header) {
  let html = header + main;

  mainContent.innerHTML = html;
}

main();
