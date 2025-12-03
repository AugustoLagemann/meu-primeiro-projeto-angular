let carrinho = [];
let total = 0;

/* ADICIONAR AO CARRINHO */
function addToCart(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;

    document.getElementById("cart-count").textContent = carrinho.length;

    alert(nome + " foi adicionada ao carrinho!");
}

/* MOSTRAR / ESCONDER DESCRIÇÃO (TOGGLE) */
function mostrarDescricao(id) {
    const textos = {
        1: "Suculenta prática, ideal para ambientes internos.",
        2: "Cacto resistente, perfeito para decorações minimalistas.",
        3: "Planta verde moderna, traz frescor ao ambiente.",
        4: "Planta simples e elegante para qualquer ambiente."
    };

    let elemento = document.getElementById("desc-" + id);

    if (elemento.textContent === "") {
        elemento.textContent = textos[id];
    } else {
        elemento.textContent = "";
    }
}

/* ABRIR CARRINHO */
document.getElementById("btn-carrinho").addEventListener("click", () => {
    let lista = document.getElementById("lista-carrinho");
    lista.innerHTML = "";

    carrinho.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${item.nome} - R$ ${item.preco.toFixed(2)}
            <button onclick="removerItem(${index})">X</button>
        `;
        lista.appendChild(li);
    });

    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("modal-carrinho").style.display = "block";
});

/* REMOVER ITEM */
function removerItem(index) {
    total -= carrinho[index].preco;
    carrinho.splice(index, 1);

    document.getElementById("cart-count").textContent = carrinho.length;

    document.getElementById("btn-carrinho").click();
}

/* BOTÃO COMPRAR */
function comprar() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    alert("Compra efetuada com sucesso!");

    // Fechar o modal do carrinho
    fecharCarrinho();

    // Resetar carrinho
    carrinho = [];
    total = 0;
    cartCount = 0;

    document.getElementById("cart-count").textContent = "0";
}


/* FECHAR CARRINHO */
function fecharCarrinho() {
    document.getElementById("modal-carrinho").style.display = "none";
}
