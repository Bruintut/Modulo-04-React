import { cavaleiros } from "mocks/cavaleiros.js";
import "./CavaleiroLista.css"
import { useState } from "react"
import CavaleiroListaItem from "components/CavaleiroListaItem/CavaleiroListaItem";

function CavaleiroLista() {
    const [cavaleiroSelecionado, setCavaleiroSelecionado] = useState({});

    const adicionarItem = (cavaleiroIndex) => {
          const cavaleiro = { [cavaleiroIndex]: Number(cavaleiroSelecionado[cavaleiroIndex] || 0) +1 }
          setCavaleiroSelecionado({ ...cavaleiroSelecionado, ...cavaleiro});
    }

    const removerItem = (cavaleiroIndex) => {
        const cavaleiro = { [cavaleiroIndex]: Number(cavaleiroSelecionado[cavaleiroIndex] || 0) -1 }
        setCavaleiroSelecionado({...cavaleiroSelecionado, ...cavaleiro});
    }

    return (
        <div className="CavaleiroLista">
            {cavaleiros.map((cavaleiro, index) => (
                <CavaleiroListaItem key={`CavaleiroListaItem-${index}`}
                cavaleiro={cavaleiro}
                quantidadeSelecionada={cavaleiroSelecionado[index]}
                index={index}
                onAdd={index => adicionarItem(index)}
			    onRemove={index => removerItem(index)}/>
            
            ))}
        </div>
    );
}

export default CavaleiroLista;