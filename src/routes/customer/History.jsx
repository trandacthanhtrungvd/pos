import { OrderContext } from "@context/OrderContext";
import React, { useContext } from "react";

const History = () => {
  const { bills } = useContext(OrderContext);

  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col gap-4">
      {bills.map((bill) => {
        return (
          <div
            key={bill.Bill_ID}
            className="flex flex-col gap-2 rounded-lg border border-gray-400 p-4 shadow-md"
          >
            <div className="flex justify-between text-lg font-semibold">
              <div>Mã hoá đơn: {bill.Bill_ID}</div>
              <div>Phòng {bill.Room_ID}</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold">Món đã đặt</div>
              {bill.Item.map((item, index) => (
                <div key={index}>
                  {item.amount} x {item.Item}
                </div>
              ))}
            </div>
            <div className="flex justify-between font-semibold">
              <div>Tổng thanh toán</div>
              <div>{bill.Total} VND</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default History;
