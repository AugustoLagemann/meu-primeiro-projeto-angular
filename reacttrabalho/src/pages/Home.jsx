import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeGrid}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
