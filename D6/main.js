// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {

//     data.map((element) => {
//       const listItem = document.createElement("li")
//         listItem.innerText = element.email
//         mainDiv.appendChild(listItem)
//     });
//   });

const generateCard = (data) => {
    data.map((element) => {
        const cardItem = document.createElement("div")
        const cardName = document.createElement("h4")
        const cardEmail = document.createElement("p")
        cardName.innerText = element.name
        cardEmail.innerText = element.email
        cardItem.append(cardName, cardEmail)
        cardItem.className = "card"
        mainDiv.appendChild(cardItem)
    });
}

const getEmails = async () => {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        console.log(data[0])
        generateCard(data)
        return data;
    } catch (e) {
        console.log(e)
    } 
}

getEmails()
const mainDiv = document.createElement("div")
mainDiv.className = "displayDiv"
document.body.appendChild(mainDiv)