import React from 'react'
import Track from "../../components/track/Track"
import "./order.css"

const Order= () => {
  

  return (
    <div className="home">
      <>
        <div className="homeContainer">
          <div className="listContainer">
            <div className="listTitle">订单状态查询</div>
            <Track />
          </div>
        </div>
       
      </>
    </div>
  )
}

export default Order