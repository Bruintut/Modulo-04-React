const CavaleiroContext = {
    cavaleiroEndpoint: () => `${Api.baseUrl}/cavaleiros`,
    cavaleiroLista: () => `${CavaleiroContext.cavaleiroEndpoint()}/get`,
    cavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/get/${id}`,
    createCavaleiro: () => `${CavaleiroContext.cavaleiroEndpoint()}/post`,
    updatCavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/put/${id}`,
    deleteCavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/delete/${id}`,
  };
  
  export const Api = {
    baseUrl: "http://localhost:3000",
    ...CavaleiroContext,
  };