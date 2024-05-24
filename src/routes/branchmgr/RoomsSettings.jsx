import React, { useContext, useState } from "react";
import { Button, Label, Modal, Select, Table, TextInput } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { MenuContext } from "@context/MenuContext";
import axios from "axios";

const RoomsSettings = () => {
  const menuData = useContext(MenuContext);
  const { rooms } = menuData;

  const [query, setQuery] = useState("");
  const [openAddModal, setOpenAddModel] = useState(false);
  const [openDelModal, setOpenDelModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const typeText = {
    0: "Chung",
    1: "Nhỏ",
    2: "Vừa",
    3: "Lớn",
  };

  const [addData, setAddData] = useState({
    id: "",
    type: "",
  });

  const handleSearchQuery = (event) => {
    setQuery(event.target.value);
  };

  const result = rooms.filter(
    (room) => room.id.toLowerCase().indexOf(query.toLowerCase()) !== -1,
  );

  const handleAddRoom = () => {
    axios
      .post(
        "http://localhost:8080/room/createRoom",
        {
          Room_ID: addData.id,
          Status: "A",
          Room_type_ID: addData.type,
        },
        { headers: { "Content-Type": "application/json" } },
      )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        if (error.response.data.message.message.includes("Duplicate entry")) {
          alert("Số phòng đã tồn tại");
        }
      });
  };

  const handleDeleteRoom = () => {
    axios
      .delete(`http://localhost:8080/room/deleteRoom/${deleteId}`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  const handleCloseAddModel = () => {
    setAddData({ id: "", type: "" });
    setOpenAddModel(false);
  };

  const handleCloseDeleteModel = () => {
    setDeleteId(null);
    setOpenDelModal(false);
  };

  return (
    <>
      <div className="py-4">
        <div className="mb-4 flex gap-8">
          <input
            className="rounded-lg border-gray-400"
            placeholder="Tìm phòng"
            type="number"
            name="roomId"
            id="roomId"
            onChange={handleSearchQuery}
          />
          <Button
            color="blue"
            onClick={() => {
              setOpenAddModel(true);
            }}
          >
            Thêm phòng
          </Button>
        </div>
        <Table>
          <Table.Head>
            <Table.HeadCell>Tên phòng</Table.HeadCell>
            <Table.HeadCell>Loại phòng</Table.HeadCell>
            <Table.HeadCell>Giá</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only"></span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {result.map((room) => (
              <>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>Phòng {room.id}</Table.Cell>
                  <Table.Cell>{typeText[room.type]}</Table.Cell>
                  <Table.Cell>{room.price}</Table.Cell>
                  <Table.Cell>
                    <div className="flex gap-4">
                      <Button as={NavLink} to={`${room.id}`} color="blue">
                        Chỉnh sửa
                      </Button>
                      <Button
                        color="failure"
                        onClick={() => {
                          setDeleteId(room.id);
                          setOpenDelModal(true);
                        }}
                      >
                        Xoá
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              </>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Add new room modal */}
      <Modal show={openAddModal} size="md" onClose={handleCloseAddModel} popup>
        <Modal.Header className="m-2">Nhập thông tin phòng</Modal.Header>
        <Modal.Body>
          <div className="mb-2">
            <Label htmlFor="roomId" value="Số phòng" />
          </div>
          <TextInput
            id="roomId"
            type="text"
            sizing="md"
            placeholder="Nhập số phòng"
            onChange={(event) => {
              setAddData((prev) => ({
                ...prev,
                id: event.target.value,
              }));
            }}
          />
          <div className="mb-2">
            <Label htmlFor="type" value="Loại phòng" />
          </div>
          <Select
            id="type"
            onChange={(event) => {
              setAddData((prev) => ({ ...prev, type: event.target.value }));
            }}
          >
            <option value="0">Chung</option>
            <option value="1">Nhỏ</option>
            <option value="2">Vừa</option>
            <option value="3">Lớn</option>
          </Select>
          <Button className="mt-4" onClick={handleAddRoom}>
            Thêm phòng
          </Button>
        </Modal.Body>
      </Modal>

      {/* Delete room modal */}
      <Modal
        show={openDelModal}
        size="md"
        onClose={handleCloseDeleteModel}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Bạn muốn xoá phòng này?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteRoom}>
                Xác nhận
              </Button>
              <Button color="gray" onClick={handleCloseDeleteModel}>
                Huỷ bỏ
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RoomsSettings;
