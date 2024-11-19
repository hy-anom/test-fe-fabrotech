import React from "react";
import styles from "./page.module.css";

async function Product() {
  // dummy product
  const res = await fetch(`https://dummyjson.com/products/1`);
  const data = await res.json();
  const product = data;
  console.log(product);

  return (
    <div className={styles.page}>
      <div className={styles.product}>
        <div >
        <img className={styles.images} src={product.images[0]} alt="" />

        </div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default Product;
