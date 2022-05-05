const buscarValorUsecase = (repository) => async (params) => {
    try {
      //manipular a paginacao      
      return await repository(params)
    } catch (error) {
      throw error
    }
  }
  
  export { buscarValorUsecase }