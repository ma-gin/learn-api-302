const mainDiv = document.createElement('div')
document.body.appendChild(mainDiv)

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {

//     data.map((element) => {
//       const listItem = document.createElement("li")
//         listItem.innerText = element.email
//         mainDiv.appendChild(listItem)
//     });
//   });

const createEmails = (data) => {
    console.log("working")
    data.map((element) => {
    const listItem = document.createElement("li")
    listItem.innerText = element.email
    mainDiv.appendChild(listItem)
    });
}

const getEmails = async () => {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const test2 = await response.json()
        console.log(typeof test2)
        createEmails(test2)
        return test2;
    } catch (e) {
        console.log(e)
    } 
}

getEmails()