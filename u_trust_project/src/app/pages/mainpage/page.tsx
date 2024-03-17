'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-grids';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-grids/styles/material.css';

function HomePage() {
  const [orderId, setOrderId] = useState<number>(0);
  const [customerId, setCustomerId] = useState<string>('');
  const [Price, setPrice] = useState<number>(0);
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      var response = await axios.get(
        'https://u-trust-backend-vercel.vercel.app/users'
      );
      setData(response.data);
    } catch (error) {}
  };

  const addData = () => {
    const newData = {
      OrderID: orderId,
      CustomerID: customerId,
      Price: Price,
    };
    setData([...data, newData]);
    setOrderId(0);
    setCustomerId('');
    setPrice(0);
  };

  return (
    <div className="w-full mt-28">
      <div className="w-full flex justify-center items-center my-5 ">
        <h1 className="text-4xl">Home Page Grid </h1>
      </div>
      <GridComponent dataSource={data}>
        <ColumnsDirective>
          <ColumnDirective
            field="OrderID"
            headerText="Order ID"
            width="100"
            textAlign="Left"
          />
          <ColumnDirective
            field="CustomerID"
            headerText="Customer ID"
            width="100"
          />
          <ColumnDirective
            field="Price"
            headerText="Price"
            width="100"
            format="C2"
            textAlign="Right"
          />
        </ColumnsDirective>
      </GridComponent>

      <div className="border-2 w-full h-auto p-10 flex justify-center items-center flex-col">
        {' '}
        {/*  Important to check given informations  */}
        <div className="my-4">
          <h1 className="my-2">OrderId</h1>
          <input
            onChange={(e) => setOrderId(parseInt(e.target.value))}
            className="border-2 p-2"
            placeholder="NUMBER"
            value={orderId}
          />
        </div>
        <div className="my-4">
          <h1>CustomerID</h1>
          <input
            onChange={(e) => setCustomerId(e.target.value)}
            className="border-2 p-2"
            placeholder="STRING"
            value={customerId}
          />
        </div>
        <div className="my-4">
          <h1>Price</h1>
          <input
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className="border-2 p-2"
            placeholder="NUMBER"
            value={Price}
          />
        </div>
        <button onClick={addData} className="  border-2 p-4 rounded-md w-40">
          {' '}
          {/**  One more api needs to add data. After that we should call datas to update again */}
          Add new data
        </button>
      </div>
    </div>
  );
}

export default HomePage;
