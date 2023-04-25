import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const Orders = () => {
    const columns =[
        {
            name: '订单', 
            selector: row => row.order,
            sortable: true
        },
        {
            name: "日期",
            selector: row => row.date,
            sortable: true
        },
        {
            name: "客户",
            selector: row => row.customer,
            sortable: true
        },
        {
            name: "总计",
            selector: row => row.total,
            sortable: true
        },
        {
            name: "付款状态",
            selector: row => row.payment,
            sortable: true
        },
        {
            name: "发货状态",
            selector: row => row.delivery,
            sortable: true
        },
        {
            name: "商品",
            selector: row => row.product,
            sortable: true
        },
        {
            name: "配送方式",
            selector: row => row.method,
            sortable: true
        },
        {
            name: "标签",
            selector: row => row.label,
            sortable: true
        },
    ];
    const data = [
        {
            id: 1,
            order: 'M000000000001',
            date: '2023/4/25',
            customer: '林慧珍',
            total: "$28.99",
            payment: "已付款",
            delivery: "未发货",
            product: "1件商品",
            method: "Economy",
            label: "无"
        },
        {
            id: 2,
            order: 'M000000000002',
            date: '2023/4/25',
            customer: '王雪光',
            total: "$256.89",
            payment: "未付款",
            delivery: "已发货",
            product: "5件商品",
            method: "Economy",
            label: "无"
        },
        {
            id: 3,
            order: 'M000000000003',
            date: '2023/4/25',
            customer: '张鹏',
            total: "$323.45",
            payment: "未付款",
            delivery: "已发货",
            product: "10件商品",
            method: "Economy",
            label: "无"
        },
        {
            id: 3,
            order: 'M000000000003',
            date: '2023/4/25',
            customer: '张鹏',
            total: "$323.45",
            payment: "未付款",
            delivery: "已发货",
            product: "10件商品",
            method: "Economy",
            label: "无"
        },
        {
            id: 3,
            order: 'M000000000003',
            date: '2023/4/25',
            customer: '张鹏',
            total: "$323.45",
            payment: "未付款",
            delivery: "已发货",
            product: "10件商品",
            method: "Economy",
            label: "无"
        },
        {
            id: 3,
            order: 'M000000000003',
            date: '2023/4/25',
            customer: '张鹏',
            total: "$323.45",
            payment: "未付款",
            delivery: "已发货",
            product: "10件商品",
            method: "Economy",
            label: "无"
        },
        {
            id: 3,
            order: 'M000000000003',
            date: '2023/4/25',
            customer: '张鹏',
            total: "$323.45",
            payment: "未付款",
            delivery: "已发货",
            product: "10件商品",
            method: "Economy",
            label: "无"
        },
    ]
    const [records, setRecords] = useState(data);

    const handleFilter = (event) => {
        const newData = data.filter(row => {
            return row.customer.includes(event.target.value)
        })
        setRecords(newData)
    }

  return (
    <div className='container mt-5'>
        <h3>订单</h3>
        <div className='text-end'>
            <input type="text" onChange={handleFilter}></input>
        </div>
        <DataTable
            columns={columns}
            data={records}
            selectableRows
            fixedHeader
            pagination
        ></DataTable>
    </div>
  )
}

export default Orders;