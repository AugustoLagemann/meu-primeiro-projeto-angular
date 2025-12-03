import OfferCard from "../components/OfferCard";
import styles from "./Ofertas.module.css";

export default function Ofertas() {
  const lista = [
    {
      id: 1,
      name: "Headset RGB Premium",
      price: 249.90,
      offPrice: 124.95,
      img: "https://www.gigantec.com.br/media/catalog/product/cache/66c3fa0fb26d248d0ca40a64a387c3da/h/e/headset-gamer-redragon-cadmus-h370w-rgb-7-1-branco-001.jpg",
      description: "Produto de alta qualidade."
    },
    {
      id: 2,
      name: "Teclado Mecânico Pro",
      price: 199.90,
      offPrice: 99.95,
      img: "https://img.terabyteshop.com.br/produto/g/teclado-mecanico-gamer-montech-mkey-pro-75-fb-rgb-wireless-bluetooth-switch-gateron-brown-ansi-65-azul-e-branco_226655.jpg",
      description: "Teclado rápido e durável."
    },
    {
      id: 3,
      name: "Mouse Ultralight Gamer",
      price: 149.90,
      offPrice: 74.95,
      img: "https://images.tcdn.com.br/img/img_prod/614618/mouse_gamer_cooler_master_mm710_ultra_leve_pixart_16000dpi_16185_1_2c7ece08049985da6bf9a19b0a0196b7_20250804160951.jpg",
      description: "Extremamente leve e preciso."
    },
    {
      id: 4,
      name: "Mouse sem fio",
      price: 50.90,
      offPrice: 24.95,
      img: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/392141/Mouse-Sem-Fio-Fy-Recarreg-vel-Wireless-Led-RGB-2-4GHZ-1600-DDPI-10-M-Pc-Notebook-Mac-Win_1668629923_gg.jpg",
      description: "Confortável e moderno."
    }
  ];

  return (
    <div className={styles.grid}>
      {lista.map((p) => (
        <OfferCard key={p.id} product={p} />
      ))}
    </div>
  );
}
