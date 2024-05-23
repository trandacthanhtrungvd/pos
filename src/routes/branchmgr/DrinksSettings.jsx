import React, { useContext, useState } from "react";
import { Button, Label, Modal, Table, TextInput } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { MenuContext } from "@context/MenuContext";
import axios from "axios";

const DrinksSettings = () => {
  const menuData = useContext(MenuContext);
  const { drinks } = menuData;
  const [query, setQuery] = useState("");
  const [openAddModal, setOpenAddModel] = useState(false);
  const [openDelModal, setOpenDelModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [addData, setAddData] = useState({
    name: "",
    price: "",
    img: "",
  });

  const handleSearchQuery = (event) => {
    setQuery(event.target.value);
  };

  const result = drinks.filter(
    (drink) => drink.name.toLowerCase().indexOf(query.toLowerCase()) !== -1,
  );

  const handleAddDrink = () => {
    console.log(addData);
    let data = JSON.stringify({
      Item: addData.name,
      Cost: addData.price,
      Item_photo: addData.img,
    });

    axios
      .post("http://localhost:8080/menu/create", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteDrink = () => {
    axios
      .delete(`http://localhost:8080/menu/delete/${deleteId}`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  const handleCloseAddModel = () => {
    setAddData({ name: "", price: "", img: "" });
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
            placeholder="Tìm món"
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
            Thêm món
          </Button>
        </div>
        <Table>
          <Table.Head>
            <Table.HeadCell>Tên món</Table.HeadCell>
            <Table.HeadCell>Giá</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only"></span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {result.map((drink) => (
              <Table.Row
                key={drink.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{drink.name}</Table.Cell>
                <Table.Cell>{drink.price}</Table.Cell>
                <Table.Cell>
                  <div className="flex gap-4">
                    <Button as={NavLink} to={`${drink.id}`} color="blue">
                      Chỉnh sửa
                    </Button>
                    <Button
                      color="failure"
                      onClick={() => {
                        setDeleteId(drink.id);
                        setOpenDelModal(true);
                      }}
                    >
                      Xoá
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Add new drink modal */}
      <Modal show={openAddModal} size="md" onClose={handleCloseAddModel} popup>
        <Modal.Header className="m-2">Nhập thông tin món</Modal.Header>
        <Modal.Body>
          <div className="mb-2">
            <Label htmlFor="name" value="Tên món" />
          </div>
          <TextInput
            id="name"
            type="text"
            sizing="md"
            placeholder="Nhập tên món"
            onChange={(event) => {
              setAddData((prev) => ({
                ...prev,
                name: event.target.value,
              }));
            }}
          />
          <div className="mb-2">
            <Label htmlFor="price" value="Giá" />
          </div>
          <TextInput
            id="price"
            type="number"
            sizing="md"
            placeholder="Nhập giá món"
            onChange={(event) => {
              setAddData((prev) => ({
                ...prev,
                price: event.target.value,
              }));
            }}
          />
          <div className="mb-2">
            <Label htmlFor="img" value="Hình ảnh" />
          </div>
          <TextInput
            id="img"
            type="number"
            sizing="md"
            placeholder="Đường dẫn hình ảnh"
            onChange={(event) => {
              setAddData((prev) => ({
                ...prev,
                img: event.target.value,
              }));
            }}
          />
          <Button className="mt-4" onClick={handleAddDrink}>
            Thêm món
          </Button>
        </Modal.Body>
      </Modal>

      {/* Delete drink modal */}
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
              Bạn muốn xoá món này?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteDrink}>
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

export default DrinksSettings;
