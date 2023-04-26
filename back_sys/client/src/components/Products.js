import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const Products = () => {
    const columns =[
        {
            name: '产品', 
            selector: row => row.product,
            sortable: true
        },
        {
            name: "状态",
            selector: row => row.status,
            sortable: true
        },
        {
            name: "库存",
            selector: row => row.inventory,
            sortable: true
        },
        {
            name: "类型",
            selector: row => row.type,
            sortable: true
        },
        {
            name: "厂商",
            selector: row => row.company,
            sortable: true
        },
    ];
    const data = [
        {
            id: 1,
            product: '抹茶',
            status: '活跃',
            inventory: '没有更新库存',
            type: '食品',
            company: 'COSTCO'
        },
        {
            id: 2,
            product: '布洛芬',
            status: '活跃',
            inventory: '没有更新库存',
            type: '维生素',
            company: 'AMAZON'
        },
        {
            id: 3,
            product: '牙膏',
            status: '活跃',
            inventory: '没有更新库存',
            type: '日用品',
            company: 'WALMART'
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
        <h3>产品</h3>
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

export default Products;