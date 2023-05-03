import React from 'react'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import "./widget.css"

const Widget = ({ type }) => {
    let data;
  
    const amount = 500;
    const diff = 30;

    switch (type) {
        case "订单数量":
        data = {
            title: "订单数量",
            isMoney: false,
            link: "See details",
            icon: (
                <PersonOutlineOutlinedIcon
                    className="icon"
                    style={{ color: "crimson", backgroundColor: "#ff000033" }}
                />
            ),
        };
        break;
        case "总计消费":
            data = {
                title: "总计消费",
                isMoney: true,
                link: "View all orders",
                icon: (
                    <ShoppingCartOutlinedIcon
                        className="icon"
                        style={{ color: "goldenrod", backgroundColor: "#daa52033" }}
                    />
                ),
            };
        break;
        case "最近存款":
            data = {
                title: "最近存款",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <MonetizationOnOutlinedIcon
                        className="icon"
                        style={{ color: "green", backgroundColor: "#00800033" }}
                    />
                ),
            };
        break;
        case "账户余额":
            data = {
                title: "账户余额",
                isMoney: true,
                link: "Withdraw money",
                icon: (
                    <AccountBalanceWalletOutlinedIcon
                        className="icon"
                        style={{ color: "purple", backgroundColor: "#80008033" }}
                    />
                ),
            };
        break;

        default:
        break;
  }

  return (
    <div className="widget">
      <div className="left2">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
      </div>
      <div className="right2">
        {data.icon}
      </div>
    </div>
  )
}

export default Widget