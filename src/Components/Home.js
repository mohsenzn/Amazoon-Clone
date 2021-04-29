import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg"
        alt=""
        className="home__image"
      />
      <div className="home__row">
        {/* Product id title, price,rating image */}
        <Product
          id={1}
          title="es-amazon.com/images/G/01/AmazonMusic/202"
          image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SX466_.jpg"
          price={11.5}
          rating={4}
          className="mb-4"
        />
         <Product
          id={1}
          title="es-amazon.com/images/G/01/AmazonMusic/202"
          image="https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SX679_.jpg"
          price={11.5}
          rating={4}
        />
      </div>
      <div className="home__row">
        {/* Product id title, price,rating image */}
        <Product
          id={1214124}
          title="es-amazon.com/images/G/01/AmazonMusic/202"
          image="https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL._AC_SX466_.jpg"
          price={222}
          rating={4}
        />
          <Product
          id={121125}
          title="es-amazon.com/images/G/01/AmazonMusic/202"
          image="https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL._AC_SX466_.jpg"
          price={555}
          rating={4}
        />
          <Product
          id={1123}
          title="es-amazon.com/images/G/01/AmazonMusic/202"
          image="https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL._AC_SX466_.jpg"
          price={125214}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
