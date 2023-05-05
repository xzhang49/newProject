import React from 'react'
import TopTotal from "./TopTotal"
import SalesStatistics from './SalesStatistics'
import ProductsSatistics from "./ProductsStatistics"
import LatestOrder from "./LatestOrder"

const Main = () => {
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title"> Dashboard </h2>
        </div>
        <TopTotal />

        <div className="row">
          <SalesStatistics />
          <ProductsSatistics />
        </div>

        <div className="card mb-4 shadow-sm">
          <LatestOrder />
        </div>
      </section>
    </>
  );
};

export default Main