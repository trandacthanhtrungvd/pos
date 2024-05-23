import React, { useState } from "react";
import { Button, Label, Modal, Select, Table, TextInput } from "flowbite-react";
import { addRoom, getRooms, removeRoom } from "@/api";
import { NavLink } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const RoomsSettings = () => {
  const [rooms, setRooms] = useState(getRooms());
  const [query, setQuery] = useState("");
  const [openAddModal, setOpenAddModel] = useState(false);
  const [openDelModal, setOpenDelModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [addData, setAddData] = useState({
    name: "",
    type: "",
    price: "",
  });

  const handleSearchQuery = (event) => {
    setQuery(event.target.value);
  };

  const result = rooms.filter(
    (room) => room.name.toLowerCase().indexOf(query.toLowerCase()) !== -1,
  );

  const handleAddRoom = () => {
    // TODO: API call to add a room

    addRoom(addData.name, addData.type, addData.price);
    setRooms(getRooms());
    console.log(addData);
    setOpenAddModel(false);
  };

  const handleDeleteRoom = () => {
    // TODO: API call to delete a room

    removeRoom(deleteId);
    setRooms(getRooms());
    console.log(deleteId);
    setOpenDelModal(false);
  };

  const handleCloseAddModel = () => {
    setAddData({ name: "", type: "", price: "" });
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
            type="text"
            name="name"
            id="name"
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
                  <Table.Cell>{room.name}</Table.Cell>
                  <Table.Cell>{room.type}</Table.Cell>
                  <Table.Cell>{room.price}</Table.Cell>
                  <Table.Cell>
                    <div className="flex gap-4">
                      <Button as={NavLink} to={`${room.id}`} color="blue">
                        Chỉnh sửa
                      </Button>
                      {/* TODO: Handle delete button */}
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
            <Label htmlFor="name" value="Tên phòng" />
          </div>
          <TextInput
            id="name"
            type="text"
            sizing="md"
            placeholder="Nhập tên phòng"
            onChange={(event) => {
              setAddData((prev) => ({
                name: event.target.value,
                ...prev,
              }));
            }}
          />
          <div className="mb-2">
            <Label htmlFor="type" value="Loại phòng" />
          </div>
          <Select
            id="type"
            onChange={(event) => {
              setAddData((prev) => ({ type: event.target.value, ...prev }));
            }}
          >
            <option>coffee</option>
            <option>juice</option>
            <option>softroom</option>
          </Select>
          <div className="mb-2">
            <Label htmlFor="price" value="Giá" />
          </div>
          <TextInput
            id="price"
            type="number"
            sizing="md"
            placeholder="Nhập giá phòng"
          />
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
