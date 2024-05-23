import { OrderContext } from "@context/OrderContext";
import { Table } from "flowbite-react";
import React, { useContext } from "react";

const Cart = () => {
  const { orderedItems } = useContext(OrderContext);
  console.log(orderedItems);
  return (
    <div className="mx-auto flex w-1/2 flex-col py-4">
      <div className="flex flex-col">
        <div className="text-xl font-semibold">Đồ uống</div>
        <Table>
          <Table.Head>
            <Table.HeadCell>Tên món</Table.HeadCell>
            <Table.HeadCell>Số lượng</Table.HeadCell>
            <Table.HeadCell>Đơn giá</Table.HeadCell>
            <Table.HeadCell>Tổng</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Americano</Table.Cell>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>20000</Table.Cell>
              <Table.Cell>20000</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <div>
        <div className="text-xl font-semibold">Phòng đã đặt</div>
        <div></div>
      </div>
    </div>
  );
};

export default Cart;
