import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import "./AdicionaCavaleiroModal.css";
import { CavaleiroService } from "services/CavaleiroService"

function AdicionaCavaleiroModal({ closeModal }) {
    const createCavaleiro = async () => {
        const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split('\\').pop();
    
        const { name, skill, picture } = state;
        
        const cavaleiro = {
            name,
            skill,
            picture: `assets/images/${renomeiaCaminhoFoto(picture)}`
        }
    
        const response = await CavaleiroService.create(cavaleiro);
        closeModal();
    }
    const [canDisable, setCanDisable] = useState(true);

    const canDisableSendButton = () => {
    const response = !Boolean(
        state.name.length
        && state.picture.length
        && state.skill.length

    );

    setCanDisable(response);
    };

    useEffect(() => {
        canDisableSendButton();
    })
    const form = {
        name: "",
        skill: "",
        picture: "",
    };

    const [state, setState] = useState(form);

    const handleChange = (e, nome) => {
        setState({ ...state, [nome]: e.target.value, });
    };

    return (
        <Modal closeModal={closeModal}>
            <div className="AdicionaCavaleiroModal">
                <form autocomplete="off">
                    <h2> Adicionar ao Catálago </h2>
                    <div>
                        <label className="AdicionaCavaleiroModal__text" htmlFor="name"> Name: </label>
                        <input
                            id="name"
                            placeholder="name"
                            type="text"
                            value={state.name}
                            onChange={(e) => handleChange(e, "name")} />
                    </div>
                    
                    
                    <div>
                        <label className="AdicionaCavaleiroModal__text" htmlFor="skill"> Skill: </label>
                        <input
                            id="skill"
                            placeholder="Habilidade do Cavaleiro"
                            type="text"
                            value={state.skill}
                            onChange={(e) => handleChange(e, "skill")} />
                    </div>
                    <div>
                        <label className="AdicionaCavaleiroModal__text  AdicionaCavaleiroModal__picture-label" htmlFor="picture" >
                            {!state.picture.length ? "Selecionar Imagem" : state.picture}
                        </label>
                        <input
                            className=" AdicionaCavaleiroModal__picture"
                            id="picture"
                            type="file"
                            accept="image/png, image/gif, image/jpeg"
                            value={state.picture}
                            onChange={(e) => handleChange(e, "picture")} />
                    </div>

                    <button
                        className="AdicionaCavaleiroModal__enviar"
                        type="button"
                        disabled="{canDisable}"
                        onClick={createCavaleiro} >
                        Enviar
                    </button>
                </form>
            </div>
        </Modal>
    );
}

export default AdicionaCavaleiroModal;