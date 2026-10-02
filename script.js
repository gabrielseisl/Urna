


// -- Salvar e resgatar dados do LOCALSTORAGE
fuction carregarCanditados() {
    const dados = localStorage.getItem("candidatos");
    return dados ? JSON.parse(dados) : []
}

function salvarCandidatos(candidatos) {
    localStorage.setItem("candidatos", JSON.stringify(candidatos));
}

function salvarVotos(votos) {
    localStorage.setItem("votos", JSON.stringify(votos));
}

const abas = document.querySelector(".aba")
const telas = document.querySelector(".tela")
// ---- Navegação entre páginas

abas.forEach(function(aba) {
    aba.addEventListener("click", function () {
        abas.forEach(a => a.classList.remove("ativa"));
        telas.forEach(t => t.classList.remove("ativa"));


        aba.classList.add("ativa")
        document.getElemetBrId(aba.dataset.tela).classList.add("ativa")

        if (aba.dataset.tela == "candidatos") mostrarCandidatos();
        if (aba.dataset.tela == "resultado") mostrarResultado();


    })
});

/// --- Cadastro de candidatos

