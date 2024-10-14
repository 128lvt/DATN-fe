"use client";
import Link from "next/link";
import useSWR from "swr";

// Định nghĩa interface Product
interface Product {
  id: string;
  name?: string; // Make name optional
  price?: number;
  thumbnail?: string;
}

// Hàm fetcher để lấy dữ liệu từ Firebase
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductComponent = () => {
  const { data, error, isLoading } = useSWR<{ [key: string]: Product }>(
    "https://product-7ffbf-default-rtdb.firebaseio.com/product.json",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  // Chuyển đổi dữ liệu từ object sang array để dễ xử lý
  const products: Product[] = Object.keys(data || {}).map((key) => ({
    id: key,
    ...data?.[key],
  }));

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
              className="col-lg-3 col-md-6 col-sm-6 mix new-arrivals"
              key={product.id}
            >
              <Link href={`/products/${product.id}`}>
                <div className="product__item">
                  <div className="product__item__pic">
                    <img
                      src={`img/product/${product.thumbnail}`}
                      alt={product.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="product__item__text">
                    <h6>{product.name}</h6>
                    <h5>${product.price?.toFixed(2)}</h5>
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

export default ProductComponent;
