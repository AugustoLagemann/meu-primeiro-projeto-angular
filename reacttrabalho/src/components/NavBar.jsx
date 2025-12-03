import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>

          <Link to="/" className={styles.logoText}>🛍 ReactShop</Link>

          <nav className={styles.nav}>
            <Link to="/" className={styles.navLink}>Home</Link>
            <Link to="/ofertas" className={styles.navLink}>Ofertas</Link>
            <Link to="/categorias" className={styles.navLink}>Categorias</Link>
          </nav>

          <div className={styles.cartBox}>
            <Link to="/cart" className={styles.cartLink}>
              🛒 <span className={styles.count}>{cart.length}</span>
            </Link>
          </div>

        </div>
      </header>

      {/* Espaço para não ficar atrás da navbar */}
      <div className={styles.navbarSpacer}></div>
    </>
  );
}
