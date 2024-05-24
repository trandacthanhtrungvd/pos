import { OrderContext } from "@context/OrderContext";
import { Button, Table } from "flowbite-react";
import React, { useContext } from "react";

const Cart = () => {
  const orderData = useContext(OrderContext);
  const { orderedDrinks, setOrderedDrinks, orderedRoom, setOrderedRoom } =
    orderData;

  const OrderedRoomCard =
    orderedRoom === null ? (
      <></>
    ) : (
      <div className="mt-4 flex items-baseline justify-between p-4 shadow-md">
        <div className="font-semibold">Phòng {orderedRoom.id}</div>
        <div>{orderedRoom.price}</div>
        <div>
          <Button
            color="failure"
            onClick={() => {
              setOrderedRoom(null);
            }}
          >
            Xoá
          </Button>
        </div>
      </div>
    );

  const handleCheckout = () => {

  }

  return (
    <div className="mx-auto flex w-1/2 flex-col py-4">
      <div className="flex flex-col">
        <div className="mb-4 text-xl font-semibold">Đồ uống</div>
        <Table>
          <Table.Head>
            <Table.HeadCell>Tên món</Table.HeadCell>
            <Table.HeadCell>Số lượng</Table.HeadCell>
            <Table.HeadCell>Đơn giá</Table.HeadCell>
            <Table.HeadCell>Tổng</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {orderedDrinks.map((drink) => (
              <Table.Row key={drink.id}>
                <Table.Cell>{drink.name}</Table.Cell>
                <Table.Cell>
                  <input
                    className="rounded-lg border-gray-400"
                    type="number"
                    name="amount"
                    id="amount"
                    value={drink.amount}
                    onChange={(event) => {
                      setOrderedDrinks((prev) =>
                        prev.map((item) => {
                          if (item.id == drink.id) {
                            item.amount = event.target.value;
                          }
                          return item;
                        }),
                      );
                    }}
                  />
                </Table.Cell>
                <Table.Cell>{drink.price}</Table.Cell>
                <Table.Cell>{drink.amount * drink.price}</Table.Cell>
                <Table.Cell>
                  <Button
                    color="failure"
                    onClick={() => {
                      setOrderedDrinks((prev) =>
                        prev.filter((item) => item.id != drink.id),
                      );
                    }}
                  >
                    Xoá
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div>
        <div className="mt-4 text-xl font-semibold">Phòng đã đặt</div>
        {OrderedRoomCard}
      </div>
      <div className="mt-4">
        <Button onClick={handleCheckout} disabled={orderedDrinks.length === 0 || orderedRoom === null}>Thanh toán</Button>
      </div>
    </div>
  );
};

export default Cart;
