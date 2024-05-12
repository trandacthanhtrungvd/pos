import React from "react";
import { useParams } from "react-router-dom";
import { getRooms } from "../../../api";
import { Button, Datepicker, Select } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";

const RoomDetails = () => {
  const { roomId } = useParams();
  const rooms = getRooms();
  const room = rooms.find((room) => room.id == roomId);
  console.log(rooms);
  console.log(roomId);
  console.log(room);
  return (
    <div className="flex flex-col gap-8 pt-4">
      <div className="flex gap-8">
        <img src="/img/rooms/1.jpg" alt="Room Image" className="rounded-lg" />
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-4xl font-semibold">{room.name}</div>
            <div className="text-xl font-semibold text-blue-500">
              {room.price} VND/h
            </div>
          </div>
          {/* Chọn ngày giờ đặt phòng */}
          <div className="flex flex-col gap-4"> 
            <div className="flex gap-4 items-baseline">Chọn ngày: <Datepicker className="inline-block" /></div>
            <div className="flex gap-4 items-baseline">Chọn buổi: 
              <Select className="inline-block" id="time">
                <option value="morning">Buổi sáng</option>
                <option value="afternoon">Buổi chiều</option>
                <option value="allday">Cả ngày</option>
              </Select>
            </div>
          </div>
          <Button color="blue">
            <HiShoppingCart className="mr-2 h-5 w-5"/>
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-semibold">Mô tả</div>
        <div>Mô tả phòng các thứ</div>
      </div>
    </div>
  );
};

export default RoomDetails;
