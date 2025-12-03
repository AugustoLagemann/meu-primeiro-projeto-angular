import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Cart.module.css";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [success, setSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  function finalizarCompra() {
    clearCart();
    setSuccess(true);
  }

  return (
    <div className={styles.pageCenter}>
      <div className={styles.cartCard}>
        
        <h2 className={styles.title}>🛒 Meu Carrinho</h2>

        {cart.length === 0 && !success && (
          <p className={styles.empty}>Seu carrinho está vazio.</p>
        )}

        {success && <p className={styles.success}>Compra realizada com sucesso! 🎉</p>}

        {cart.map((item) => (
          <div key={item.id} className={styles.item}>
            
            {/* IMAGEM COM TAMANHO LIMITADO */}
            <img src={item.img} className={styles.cartImg} />

            <div className={styles.info}>
              <p>{item.name}</p>
              <p className={styles.price}>R$ {item.price.toFixed(2)}</p>
            </div>

            <button
              className={styles.remove}
              onClick={() => removeFromCart(item.id)}
            >
              Remover
            </button>
          </div>
        ))}

        {cart.length > 0 && (
          <>
            <p className={styles.total}>Total: R$ {total.toFixed(2)}</p>

            <button className={styles.buyBtn} onClick={finalizarCompra}>
              Finalizar compra
            </button>
          </>
        )}
      </div>
    </div>
  );
}
