let drinks = [
  { id: 1, name: "Americano", price: 20000, img: "" },
  { id: 2, name: "Nước cam", price: 20000, img: "" },
  { id: 3, name: "Coca Cola", price: 20000, img: "" },
  { id: 4, name: "Latte", price: 20000, img: "" },
  { id: 5, name: "Nước chanh", price: 20000, img: "" },
  { id: 6, name: "Sprite", price: 20000, img: "" },
];

let rooms = [
  {
    id: 1,
    name: "Phòng học 1",
    type: "1",
    price: 50000,
  },
  {
    id: 2,
    name: "Phòng học 2",
    type: "2",
    price: 50000,
  },
  {
    id: 3,
    name: "Phòng học 1",
    type: "1",
    price: 50000,
  },
  {
    id: 4,
    name: "Phòng học 3",
    type: "3",
    price: 50000,
  },
  {
    id: 5,
    name: "Phòng học 1",
    type: "1",
    price: 50000,
  },
];

let drinkId = drinks.length + 1;
let roomId = rooms.length + 1;

export function fetchData() {
  try {
    // TODO: Fetch API to get drinks data
    fetch("")
      .then((response) => response.json())
      .then((json) => {
        drinks = json;
      });

    // TODO: Fetch API to get rooms data
    fetch("")
      .then((response) => response.json())
      .then((json) => {
        rooms = json;
      });
  } catch (e) {
    console.error("Error fetching data: ", e);
    throw e;
  }
}

export function getDrinks() {
  // TODO: Fetch API if haven't been fetched yet

  return drinks;
}

export function getRooms() {
  // TODO: Fetch API if haven't been fetched yet

  return rooms;
}

export function addDrink({ name, type, price }) {
  // TODO: API call for addDrink

  drinks.push({ id: drinkId, name: name, type: type, price: price });
  ++drinkId;
}

export function addRoom({ name, type, price }) {
  // TODO: API call for addRoom

  rooms.push({ id: roomId, name: name, type: type, price: price });
  ++roomId;
}

export function removeDrink(id) {
  // TODO: API call for removeDrink

  drinks = drinks.filter((drink) => drink.id !== id);
}

export function removeRoom(id) {
  // TODO: API call for removeRoom

  rooms = rooms.filter((room) => room.id !== id);
}

export function updateDrink(id, name, type, price) {
  // TODO: API call for updateDrink?

  drinks = drinks.map((drink) => {
    if (drink.id == id) {
      drink.name = name;
      drink.type = type;
      drink.price = price;
    }
    return drink;
  });
}

export function updateRoom(id, name, type, price) {
  // TODO: API call for updateRoom?

  rooms = rooms.map((room) => {
    if (room.id == id) {
      room.name = name;
      room.type = type;
      room.price = price;
    }
  });
}
