import styles from "./CartItem.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className={styles.cartItem}>
      {/* Miniatura */}
      <img src={item.img} alt={item.name} className={styles.thumb} />

      {/* Informações */}
      <div className={styles.info}>
        <strong>{item.name}</strong>
        <p>Quantidade: {item.qty}</p>
      </div>

      {/* Botão remover */}
      <button
        className={styles.removeBtn}
        onClick={() => removeFromCart(item.id)}
      >
        Remover
      </button>
    </div>
  );
}
