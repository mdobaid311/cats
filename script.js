const container = document.getElementById("container");
const btn = document.querySelector("button");
console.log("hello");

async function getCats() {
  const req = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await req.json();
  const image = data[0].url;
  console.log(image);
  container.innerHTML = `<img src="${image}"/>`;
}

btn.addEventListener("click", () => {
  getCats();
});
getCats();
