import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const [showMore, setShowMore] = useState(false);
  const { addToCart } = useContext(CartContext);

  return (
    <div className={styles.card}>
      <img src={product.img} className={styles.img} />
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.price}>R$ {product.price.toFixed(2)}</p>

      <button className={styles.cartBtn} onClick={() => addToCart(product)}>
        Adicionar ao carrinho 🛒
      </button>

      <button className={styles.moreBtn} onClick={() => setShowMore(!showMore)}>
        {showMore ? "Mostrar menos" : "Saber mais"}
      </button>

      {showMore && (
        <div className={styles.descriptionBox}>
          <p>{product.description || "Descrição não disponível."}</p>
        </div>
      )}
    </div>
  );
}
