const fetchData = () => {
  const row = document.querySelector(".hello-content");
  for (let i = 0; i < row.children.length; i++) {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
      .then((response) => response.json())
      .then((data) => {
        const index = Math.floor(Math.random() * data.data.length);
        const newObj = data.data[index];
        const cover = newObj.album.cover;
        const helloCard = document.getElementsByClassName("hello-card");
        helloCard[i].firstElementChild.src = cover;
        helloCard[i].querySelector("p").innerText = newObj.title;
        const modal = document.querySelector(".modal-body");
        const title = document.createElement("p");
        title.innerText = newObj.title;
        modal.append(title);
      })
      .catch((err) => console.log(err));
  }
};
const countUnique = () => {
  const result = [];
  let count = 0;
  const modal = document.querySelector(".modal-body");
  for (let i = 0; i < modal.children.length; i++) {
    const title = modal.children[i].innerText;
    if (result.includes(title)) {
      continue;
    } else {
      result.push(title);
      count++;
    }
  }
  console.log(`There are ${count} unique songs displaying.`);
};
fetchData();
