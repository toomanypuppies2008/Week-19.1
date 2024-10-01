const titleInput = document.getElementById("title_input");
const textInput = document.getElementById("text_input");
const btn = document.getElementById("btn");
const main = document.getElementsByTagName("main");
const container = document.querySelector(".container");

class Post {
  constructor(title, text, userId) {
    this.title = title;
    this.text = text;
    this.userId = userId;
  }
}
let data = [];
let i = 1;
btn.addEventListener("click", function () {
  const res1 = titleInput.value.trim();
  const res2 = textInput.value.trim();
  if (res1 !== "" && res2 !== "") {
    let obj = new Post(res1, res2, i++);
    data.push(obj);
    titleInput.value = "";
    textInput.value = "";
    container.append(`${res1}: "${res2}"`);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => alert(error));
  } else {
    alert("ERROR");
  }
});
