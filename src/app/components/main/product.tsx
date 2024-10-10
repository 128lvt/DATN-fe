import React from "react";
import Link from "next/link";

interface IProps {
  products: IProducts[];
}
const Product = (props: IProps) => {
  const { products } = props;
  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="filter__controls">
              <li className="active">Best Sellers</li>
            </ul>
          </div>
        </div>

        <div className="row product__filter">
          {products.map((product) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals"
              key={product.id}
            >
              <Link href={"/"}>
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg={`img/product/${product.thumbnail}`}
                  ></div>
                  <div className="product__item__text">
                    <h6>{product.name}</h6>

                    <h5>{product.price}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
