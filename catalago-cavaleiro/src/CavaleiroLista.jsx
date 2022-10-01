import { cavaleiros } from "mocks/cavaleiros";
import { useState } from "react"
import "CavaleiroLista.css";



function CavaleiroLista() {
    const [cavaleiroSelecionado, setCavaleiroSelecionado] = useState({});

    const adicionarItem = (cavaleiroIndex) => {
          const cavaleiro = { [cavaleiroIndex]: Number(cavaleiroSelecionado[cavaleiroIndex] || 0) +1 }
          setCavaleiroSelecionado({ ...cavaleiroSelecionado, ...cavaleiro});
    }
    return (
<div className="CavaleiroLista">
    {cavaleiros.map((cavaleiro, index) => (
    <div className="CavaleiroListaItem" key={`CavaleiroListaItem-${index}`}>
        <span className="CavaleiroListaItem__badge"> {cavaleiroSelecionado[index] || 0} </span>
        <div>
        <div className="CavaleiroListaItem__name"> {cavaleiro.name} </div>
        
        <div className="CavaleiroListaItem__skill">
            {" "}
            {cavaleiro.skill}{" "}
        </div>
        <div className="CavaleiroListaItem__acoes Acoes">
            <button className="Acoes__adicionar Acoes__adicionar--preencher" 
            onClick={() => adicionarItem(index)}>adicionar
            </button>
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