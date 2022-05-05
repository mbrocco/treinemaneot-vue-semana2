import { Modelos } from "../../domain/model/modelos"

const buscarModelosRepository = (axios) => async (params) => {
    try {                        
        const qry = '/'+ params.tipoVeiculo + '/marcas/' + params.codigoMarca +  '/modelos'
        
        const response = await axios.get(qry)
        return response?.data?.modelos?.map((modelos) => new Modelos(modelos)) ?? []
    } catch (error) {
        throw error
    }
}

export { buscarModelosRepository }