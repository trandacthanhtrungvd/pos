import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Datepicker, Select } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import { OrderContext } from "@context/OrderContext";
import { MenuContext } from "@context/MenuContext";

const RoomDetails = () => {
  const navigate = useNavigate();

  const menuData = useContext(MenuContext);
  const { rooms } = menuData;

  const { setOrderedRoom } = useContext(OrderContext);
  const { roomId } = useParams();
  const room = rooms.find((room) => room.id == roomId);

  const handleSelectRoom = () => {
    setOrderedRoom({
      id: roomId,
      type: room.type,
      price: room.price,
    });
    navigate("/customer/rooms");
  };

  return (
    <div className="flex flex-col gap-8 pt-4">
      <div className="flex gap-8">
        <img src="/img/rooms/1.jpg" alt="Room Image" className="rounded-lg" />
        <div className="flex flex-col gap-4">
          <div>
            <div className="mb-2 text-3xl font-semibold">Phòng {room.id}</div>
            <div className="text-xl font-semibold text-blue-500">
              {room.price} VND/h
            </div>
          </div>
          {/* Chọn ngày giờ đặt phòng */}
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-4">
              Chọn ngày: <Datepicker className="inline-block" />
            </div>
            <div className="flex items-baseline gap-4">
              Chọn buổi:
              <Select className="inline-block" id="time">
                <option value="morning">Buổi sáng</option>
                <option value="afternoon">Buổi chiều</option>
                <option value="allday">Cả ngày</option>
              </Select>
            </div>
          </div>
          <Button color="blue" onClick={handleSelectRoom}>
            <HiShoppingCart className="mr-2 h-5 w-5" />
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-semibold">Thiết bị</div>
        <div>
          <ul>
            <li>Thiết bị 1</li>
            <li>Thiết bị 2</li>
            <li>Thiết bị 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
