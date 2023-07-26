fetch("http://localhost:8080/api/v1/player")
  .then((response) => {
    return response.json();
  })
  .then((parsedJson) => {
    let olObj = document.getElementById("lop");
    parsedJson.forEach((element) => {
      let newLi = document.createElement("li");
      newLi.textContent = element.name;
      olObj.appendChild(newLi);
    });
  });

let playerRegForm = document.getElementById("playerRegForm");
playerRegForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let playerID = document.getElementById("playerID").value;
  let playerName = document.getElementById("playerName").value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id": playerID,
    "name": playerName,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/v1/player", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
});

let playerDelForm = document.getElementById("playerDelForm");
playerDelForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let deleteId = document.getElementById("deleteId").value;

  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
};

fetch("http://localhost:8080/api/v1/player/" + deleteId, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

});

let playerUpdateForm = document.getElementById("playerUpdateForm");
playerUpdateForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let playerID = document.getElementById("playerID").value;
  let updatedPlayer = document.getElementById("updatedPlayer").value;

  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": playerID,
  "name": updatedPlayer
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/api/v1/player/" + playerID, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
});
