import Filter from "@/components/Filter";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import styles from "./page.module.css";
import { Suspense } from "react";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products = data.products;
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Products</h1>
        <Filter />
        <Suspense fallback={
          <div>
            Loading...
          </div>
        }>
          <div className={styles.products}>
            {products.map((product: Product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
        </Suspense>
      </main>
    </div>
  );
}
