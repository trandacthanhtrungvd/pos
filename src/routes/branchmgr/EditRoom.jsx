import { getRooms, updateRoom } from "@/api";
import { Button, Label, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditRoom = () => {
  const { roomId } = useParams();
  const rooms = getRooms();
  const currentRoom = rooms.find((room) => room.id == roomId);
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    id: currentRoom.id,
    name: currentRoom.name,
    type: currentRoom.type,
    price: currentRoom.price,
  });

  return (
    <div className="mx-auto w-1/2 py-8">
      <form action="#">
        <div className="mb-2 block">
          <Label htmlFor="name" value="Tên phòng" />
        </div>
        <TextInput
          id="name"
          type="text"
          sizing="md"
          defaultValue={currentRoom.name}
          onChange={(event) => {
            setInfo((prev) => ({
              ...prev,
              name: event.target.value,
            }));
          }}
        />
        <div className="mb-2 block">
          <Label htmlFor="type" value="Loại phòng" />
        </div>
        <Select
          id="type"
          defaultValue={currentRoom.type}
          onChange={(event) => {
            setInfo((prev) => ({
              ...prev,
              type: event.target.type,
            }));
          }}
          required
        >
          <option>coffee</option>
          <option>juice</option>
          <option>softroom</option>
        </Select>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Giá" />
        </div>
        <TextInput
          id="price"
          name="price"
          type="number"
          sizing="md"
          defaultValue={currentRoom.price}
          onChange={(event) => {
            setInfo((prev) => {
              return {
                ...prev,
                price: event.target.value,
              };
            });
          }}
        />
        <Button
          className="mt-2"
          onClick={(event) => {
            event.preventDefault();
            // TODO: API call for update room
            updateRoom(info.id, info.name, info.type, info.price);
            navigate("/branchmgr/rooms");
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EditRoom;
