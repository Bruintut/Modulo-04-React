const CavaleiroContext = {
  cavaleiroEndpoint: () => `${Api.baseUrl}`,
  cavaleiroLista: () => `${CavaleiroContext.cavaleiroEndpoint()}/`,
  cavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/${id}`,
  createCavaleiro: () => `${CavaleiroContext.cavaleiroEndpoint()}/`,
  updatCavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/${id}`,
  deleteCavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/${id}`,
};

export const Api = {
  baseUrl: "http://localhost:3000/cavaleiros",
  ...CavaleiroContext,
};

console.log(Api);
