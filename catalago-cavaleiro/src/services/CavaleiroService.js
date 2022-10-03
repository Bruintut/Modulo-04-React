import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();


const transformCavaleiro = (cavaleiro) => {
    const [ skill ] = cavaleiro.name.split(" com ");
  
    return {
      ...cavaleiro,
      id: cavaleiro._id,
      name: cavaleiro.name,
      skill: cavaleiro.skill,
    };
  };
  
  const parseTransformLista = (response) =>
    parseResponse(response).then((cavaleiros) => cavaleiros.map(transformCavaleiro));
    console.log(parseResponse)
export const CavaleiroService = {
    getLista: () =>
        fetch(Api.cavaleiroLista(), { method: "GET" }).then(parseTransformLista),
    getById: (id) =>
        fetch(Api.cavaleiroById(id), { method: "GET" }).then(parseResponse),
    create: () =>
     fetch(Api.createCavaleiro(), { method: "POST" }).then(parseResponse),
    updateById: (id) =>
        fetch(Api.updateCavaleiroById(id), { method: "PUT" }).then(parseResponse),
    deleteById: (id) =>
        fetch(Api.deleteCavaleiroById(id), { method: "DELETE" }).then(parseResponse),
}