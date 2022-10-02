import "./CavaleiroListaItem.css"

function CavaleiroListaItem(){

    const removerItem = (i) => console.log('remover' + i);
	const adicionarItem = (i) => console.log('adicionar' + i);
	const cavaleiroSelecionado = [0];
	const index = 0;
	const cavaleiro = {		      
            "name": "Seiya",
            "skill":"Meteoro de Pegasos",
            "picture": require("assets/images/seiya.png").default
                      
	};

    const removeButton = (canRender, index) =>
	Boolean(canRender) && (<button className="Acoes__remover" onClick={() => removerItem(index)}>remover</button>);

    const badgeCounter = (canRender, index) =>
	Boolean(canRender) && (<span className="CavaleiroListaItem__badge"> {cavaleiroSelecionado[index]} </span>);

    return(
        <div className="CavaleiroListaItem" key={`CavaleiroListaItem-${index}`}>
            {badgeCounter(cavaleiroSelecionado[index], index)}
            <div>
                <div className="CavaleiroListaItem__name"> {cavaleiro.name} </div>
            
                <div className="CavaleiroListaItem__skill">
                    {" "}
                    {cavaleiro.skill}{" "}
                </div>
                <div className="CavaleiroListaItem__acoes Acoes">
                <button className={`Acoes__adicionar ${!cavaleiroSelecionado[index] && "Acoes__adicionar--preencher"}`} 
                onClick={() => adicionarItem(index)}>adicionar
                </button>
                {removeButton(cavaleiroSelecionado[index], index)}

                </div>
            </div>
            <img
            className="CavaleiroListaItem__foto"
            src={cavaleiro.picture}
            alt={`Cavaleiro com habilidade de ${cavaleiro.skill}`}
            />
        </div>
    );
}

export default CavaleiroListaItem;