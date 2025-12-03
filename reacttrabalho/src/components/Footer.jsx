import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.section}>
          <h3>🛍️ Sobre a ReactShop</h3>
          <p>
            A ReactShop é uma loja especializada em equipamentos gamer, acessórios e tecnologia.
            Nosso objetivo é fornecer produtos de alta qualidade com os melhores preços do mercado.
          </p>
        </div>

        <div className={styles.section}>
          <h3>📞 Contato</h3>
          <p>Email: atendimento@reactshop.com.br</p>
          <p>Telefone: (51) 99999-1234</p>
          <p>Whatsapp: (51) 98888-6543</p>
        </div>

        <div className={styles.section}>
          <h3>📍 Localização</h3>
          <p>Avenida Tech, 404</p>
          <p>Bairro Silicon Valley</p>
          <p>Porto Alegre - RS</p>
        </div>

      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} ReactShop — Todos os direitos reservados.
      </div>
    </footer>
  );
}
