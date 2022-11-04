const CavaleiroContext = {
  cavaleiroEndpoint: () => `${Api.baseUrl}`,
  cavaleiroLista: () => `${CavaleiroContext.cavaleiroEndpoint()}/`,
  cavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/${id}`,
  createCavaleiro: () => `${CavaleiroContext.cavaleiroEndpoint()}/`,
  updatCavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/${id}`,
  deleteCavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/${id}`,
};

export const Api = {
  baseUrl: "https://api-cavaleiros-react.herokuapp.com/",
  ...CavaleiroContext,
};

console.log(Api);
