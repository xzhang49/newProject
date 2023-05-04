import React from 'react'
import Widget from "../../components/widget/Widget"
import History from "../../components/history/History"
import "./user.css"

const User = () => {
  return (
    <div className="home">
      <>
        <div className="homeContainer">
          <div className="widgets">
            <Widget type="订单数量" />
            <Widget type="总计消费" />
            <Widget type="总计存款" />
            <Widget type="账户余额" />
          </div>
          <div className="listContainer">
            <div className="listTitle">历史记录</div>
            <History />
          </div>
        </div>
      </>
    </div>
    
  )
}

export default User