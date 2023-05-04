import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./track.css"

const rows = [
    {
      id: 2117383933399,
      product: "Food Crusher & Blender",
      amount: 300,
      price: 40.34,
      address: "China Town",
      time: "2/10 5PM",
      status: "Pending",
    },
    {
      id: 6617772543119,
      product: "Nexus 32Inch TV",
      amount: 100,
      price: 50.56,
      address: "China Town",
      time: "2/10 5PM",
      status: "Pending",
    },
    {
      id: 200116351133,
      product: "Scanfrost 4-Burner Gas Cooker",
      amount: 200,
      price: 20.78,
      address: "China Town",
      time: "2/10 5PM",
      status: "Pending",
    },
];

const Track = () => {
  return (
    <div className="list">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">订单</TableCell>
              <TableCell className="tableCell">产品</TableCell>
              <TableCell className="tableCell">数量</TableCell>
              <TableCell className="tableCell">价格</TableCell>
              <TableCell className="tableCell">取货地址</TableCell>
              <TableCell className="tableCell">取货时间</TableCell>
              <TableCell className="tableCell">状态</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">{row.product}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.price}</TableCell>
                <TableCell className="tableCell">{row.address}</TableCell>
                <TableCell className="tableCell">{row.time}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Track