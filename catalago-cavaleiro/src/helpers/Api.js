const CavaleiroContext = {
    cavaleiroEndpoint: () => `${Api.baseUrl}`,
    cavaleiroLista: () => `${CavaleiroContext.cavaleiroEndpoint()}/`,
    cavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/GET/${id}`,
    createCavaleiro: () => `${CavaleiroContext.cavaleiroEndpoint()}/POST`,
    updatCavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/PUT/${id}`,
    deleteCavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/DELETE/${id}`,
  };
  
  export const Api = { baseUrl: "http://localhost:3000/cavaleiros", ...CavaleiroContext, };

  console.log(Api)