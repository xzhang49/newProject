import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const Inventory = () => {
    const columns =[
        {
            name: '产品', 
            selector: row => row.product,
            sortable: true
        },
        {
            name: "SKU",
            selector: row => row.sku,
            sortable: true
        },
        {
            name: "承诺",
            selector: row => row.promise,
            sortable: true
        },
        {
            name: "有货",
            selector: row => row.total,
            sortable: true
        },
        {
            name: "现有",
            selector: row => row.surplus,
            sortable: true
        },
    ];
    const data = [
        {
            id: 1,
            product: '维生素',
            sku: '1320304',
            promise: 0,
            total: 10,
            surplus: 10
        },
        {
            id: 2,
            product: '牙膏',
            sku: '1320304',
            promise: 0,
            total: 10,
            surplus: 10
        },
        {
            id: 3,
            product: '钙片',
            sku: '1320304',
            promise: 0,
            total: 10,
            surplus: 10
        },
    ]
    const [records, setRecords] = useState(data);

    const handleFilter = (event) => {
        const newData = data.filter(row => {
            return row.product.includes(event.target.value)
        })
        setRecords(newData)
    }

  return (
    <div className='container mt-5'>
        <h3>库存</h3>
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

export default Inventory;