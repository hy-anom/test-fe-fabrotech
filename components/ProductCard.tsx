import { Product } from "@/types/product";
import React from "react";
import styles from "./ProductCard.module.css";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`product/${product.id}`} className={styles.card}>
      <div>
        <img className={styles.images} src={product.images[0]} alt="" />
      </div>
      <h4 className={styles.title}>{product.title}</h4>
      <p>{product.description}</p>
      <div className={styles.info}>
        <p className={styles.price}>{product.price}</p>
        <p
          className={
            product.availabilityStatus === "In Stock"
              ? styles.stock
              : styles.low
          }
        >
          {product.availabilityStatus}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
