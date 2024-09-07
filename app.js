function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p class='erro-mensagem'>Serviço não foi encontrado. Você precisa digitar o nome correto!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2> <img src=${dado.img} class="imagem-logo1" width="60" height="60"> <a href=${dado.link} target="_blank">${dado.titulo}</a></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="valor-meta">${dado.valor}</p></a>
                </div>
            `;
        }
    }
    
    if (!resultados) {
        resultados = "<p class='erro-mensagem'>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados
}

