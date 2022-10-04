import { useState } from "react";
import Modal from "components/Modal/Modal";
import "./AdicionaCavaleiroModal.css"

function AdicionaCavaleiroModal({ closeModal }) {
    const form = {
        name: "",
        skill: "",
        picture: "",
    };

    const [state, setState] = useState(form);

    const handleChange = (e, name) => {
        setState({ ...state, [name]: e.target.value, });
    };

    return (
        <Modal closeModal={closeModal}>
            <div className="AdicionaPaletaModal">
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

                    <input
                        className="AdicionaCavaleiroModal__enviar"
                        type="submit"
                        value="Enviar" />
                </form>
            </div>
        </Modal>
    );
}

export default AdicionaCavaleiroModal;