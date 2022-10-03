import "./CavaleiroListaItem.css"

function CavaleiroListaItem({ cavaleiro, quantidadeSelecionada, index, onRemove, onAdd }){ 

    const removeButton = (canRender, index) =>
	Boolean(canRender) && (<button className="Acoes__remover" onClick={() => onRemove(index)}>remover</button>);

    const badgeCounter = (canRender, index) =>
	Boolean(canRender) && (<span className="CavaleiroListaItem__badge"> {quantidadeSelecionada} </span>);

    return(
        <div className="CavaleiroListaItem" key={`CavaleiroListaItem-${index}`}>
            {badgeCounter(quantidadeSelecionada, index)}
            <div>
                <div className="CavaleiroListaItem__name"> {cavaleiro.name} </div>
            
                <div className="CavaleiroListaItem__skill">
                    {" "}
                    {cavaleiro.skill}{" "}
                </div>
                <div className="CavaleiroListaItem__acoes Acoes">
                <button className={`Acoes__adicionar ${!quantidadeSelecionada && "Acoes__adicionar--preencher"}`} 
                onClick={() => onAdd(index)}>adicionar
                </button>
                {removeButton(quantidadeSelecionada, index)}

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