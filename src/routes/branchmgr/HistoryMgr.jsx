import { BillContext } from "@context/BillContext";
import React, { useContext, useState } from "react";

const HistoryMgr = () => {
  const { bills } = useContext(BillContext);

  const [query, setQuery] = useState("");

  const handleSearchQuery = (event) => {
    setQuery(event.target.value);
  };

  const filteredBills = bills.filter(
    (bill) => bill.Username.toLowerCase().indexOf(query.toLowerCase()) !== -1,
  );

  return (
    <div className="mx-auto my-4 flex gap-4">
      <div className="flex flex-col gap-4">
        <input
          className="rounded-lg border-gray-400"
          type="text"
          placeholder="Nhập tên khách hàng"
          onChange={handleSearchQuery}
        />
      </div>
      <div className="flex flex-1 flex-col gap-4">
        {filteredBills.map((bill) => {
          return (
            <div
              key={bill.Bill_ID}
              className="flex flex-col gap-2 rounded-lg border border-gray-400 p-4 shadow-md"
            >
              <div className="font-semibold">
                Tên khách hàng: {bill.Username}
              </div>
              <div className="flex justify-between font-semibold">
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
    </div>
  );
};

export default HistoryMgr;
