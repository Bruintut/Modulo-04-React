import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();


const transformCavaleiro = (cavaleiro) => {
    const [ skill ] = cavaleiro.skill.split(" com ");
  
    return {
      ...cavaleiro,
      id: cavaleiro._id,
      name: cavaleiro.name,
      skill
    };
  };
  
  const parseTransformLista = (response) =>
    parseResponse(response).then((cavaleiros) => cavaleiros.map(transformCavaleiro));

export const CavaleiroService = {
    getLista: () =>
        fetch(Api.cavaleiroLista(), { method: "GET" }).then(parseTransformLista),
    getById: (id) =>
        fetch(Api.cavaleiroById(id), { method: "GET" }).then(parseTransformLista),
    create: () =>
     fetch(Api.createCavaleiro(), { method: "POST" }).then(parseTransformLista),
    updateById: (id) =>
        fetch(Api.updateCavaleiroById(id), { method: "PUT" }).then(parseTransformLista),
    deleteById: (id) =>
        fetch(Api.deleteCavaleiroById(id), { method: "DELETE" }).then(parseTransformLista),
}