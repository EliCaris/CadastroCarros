
function getAllCars() {
  console.log("=== GET ALL CARS ===");

  const endpoint = `http://localhost:8080/cars`;

  const config = {
    method: "GET",
  };

  fetch(endpoint, config)
    .then((res) => res.json())
    .then((cars) => {
      document.querySelector("tbody").innerHTML = cars
        .map(function (cars, index) {
          return `<tr>
                    <th scope="row">${cars.id}</th>
                    <td>${cars.brand}</td>
                    <td>${cars.model}</td>
                    <td>${cars.year}</td>
                    <td>${cars.price}</td>
                    <td>${cars.caracteristic}</td>
                </tr>`;
        })
        .join("");
    })
    .catch(() => console.error("Falha na comunicação"))
    .catch(() => console.error("Falha na comunicação"));
}

getAllCars();
