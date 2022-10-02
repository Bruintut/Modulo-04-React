import { cavaleiros } from "mocks/cavaleiros";
import { useState } from "react"
import "./CavaleiroLista.css";



function CavaleiroLista() {
    const [cavaleiroSelecionado, setCavaleiroSelecionado] = useState({});

    const adicionarItem = (cavaleiroIndex) => {
          const cavaleiro = { [cavaleiroIndex]: Number(cavaleiroSelecionado[cavaleiroIndex] || 0) +1 }
          setCavaleiroSelecionado({ ...cavaleiroSelecionado, ...cavaleiro});
    }

    const badgeCounter = (canRender, index) =>
	Boolean(canRender) && (<span className="CavaleiroListaItem__badge"> {cavaleiroSelecionado[index]} </span>);

    const removerItem = (cavaleiroIndex) => {
        const cavaleiro = { [cavaleiroIndex]: Number(cavaleiroSelecionado[cavaleiroIndex] || 0) -1 }
        setCavaleiroSelecionado({...cavaleiroSelecionado, ...cavaleiro});
    }

    const removeButton = (canRender, index) =>
	Boolean(canRender) && (<button className="Acoes__remover" onClick={() => removerItem(index)}>remover</button>);

    return (
<div className="CavaleiroLista">
    {cavaleiros.map((cavaleiro, index) => (
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
    ))}
</div>
)};

export default CavaleiroLista;