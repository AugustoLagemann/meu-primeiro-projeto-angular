import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Product.module.css";

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id == id);

  return (
    <div className={styles.productPage}>
      <img src={product.img} className={styles.productImg} />
      <h1>{product.name}</h1>
      <p className={styles.price}>R$ {product.price.toFixed(2)}</p>

      <button className={styles.btn} onClick={() => addToCart(product)}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}
