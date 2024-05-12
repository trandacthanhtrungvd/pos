let drinkId = 7;
let roomId = 6;

let drinks = [
  { id: 1, name: "Americano", type: "coffee", price: 20000, description: "Mô tả đồ uống" },
  { id: 2, name: "Nước cam", type: "juice", price: 20000, description: "Mô tả đồ uống" },
  { id: 3, name: "Coca Cola", type: "softdrink", price: 20000, description: "Mô tả đồ uống" },
  { id: 4, name: "Latte", type: "coffee", price: 20000, description: "Mô tả đồ uống" },
  { id: 5, name: "Nước chanh", type: "juice", price: 20000, description: "Mô tả đồ uống" },
  { id: 6, name: "Sprite", type: "softdrink", price: 20000, description: "Mô tả đồ uống" },
];

let rooms = [
  {
    id: 1,
    name: "Phòng học 1",
    type: "1",
    price: 50000,
    description: "Mô tả phòng"
  },
  {
    id: 2,
    name: "Phòng học 2",
    type: "2",
    price: 50000,
    description: "Mô tả phòng"
  },
  {
    id: 3,
    name: "Phòng học 1",
    type: "1",
    price: 50000,
    description: "Mô tả phòng"
  },
  {
    id: 4,
    name: "Phòng học 3",
    type: "3",
    price: 50000,
    description: "Mô tả phòng"
  },
  {
    id: 5,
    name: "Phòng học 1",
    type: "1",
    price: 50000,
    description: "Mô tả phòng"
  },
];

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

export function getRooms() {
  return rooms;
}

export function getDrinks() {
  return drinks;
}

export function addDrink({name, type, price, description}) {
  drinks.push({id: drinkId, name: name, type: type, price: price, description: description});
  ++drinkId;
}

export function removeDrink(id) {
  drinks = drinks.filter(drink => drink.id !== id);
}

export function addRoom({name, type, price, description}) {
  rooms.push({id: roomId, name: name, type: type, price: price, description: description});
  ++roomId;
}

export function removeRoom(id) {
  rooms = rooms.filter(room => room.id !== id);
}