import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./OfferCard.module.css";

export default function OfferCard({ product }) {
  const [showMore, setShowMore] = useState(false);
  const { addToCart } = useContext(CartContext);

  return (
    <div className={styles.card}>

      {/* Badge 50% OFF */}
      <span className={styles.badge}>🔥 50% OFF</span>

      <img src={product.img} className={styles.img} />

      <h3 className={styles.title}>{product.name}</h3>

      <p className={styles.oldPrice}>De: R$ {product.price.toFixed(2)}</p>
      <p className={styles.newPrice}>R$ {product.offPrice.toFixed(2)}</p>

      {/* ✅ ADICIONAR AO CARRINHO COM PREÇO PROMOCIONAL */}
      <button
        className={styles.cartBtn}
        onClick={() =>
          addToCart({
            id: product.id,
            name: product.name,
            price: product.offPrice,  // 👈 PREÇO DA PROMOÇÃO
            img: product.img
          })
        }
      >
        Adicionar ao carrinho 🛒
      </button>

      {/* Botão Saber mais / Mostrar menos */}
      <button
        className={styles.moreBtn}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Mostrar menos" : "Saber mais"}
      </button>

      {/* Caixa de descrição */}
      {showMore && (
        <div className={styles.descriptionBox}>
          <p className={styles.description}>{product.description}</p>
        </div>
      )}
    </div>
  );
}
