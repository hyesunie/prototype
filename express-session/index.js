function main() {
  document.querySelector("#click").addEventListener("click", (e) => {
    postData("http://localhost:7070/login", {
      id: "hyesunie",
      password: "hello",
    }).then((data) => {
      console.log(data);
    });
  });
}

async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log(response);
  return response;
}

window.addEventListener("DOMContentLoaded", (e) => {
  main();
});
