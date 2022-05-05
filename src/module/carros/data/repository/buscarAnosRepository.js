import { Anos } from "../../domain/model/anos"

const buscarAnosRepository = (axios) => async (params) => {
    try {        
        const qry = '/' + params.tipoVeiculo + '/marcas/' + params.codigoMarca + '/modelos/' + params.codigoModelo + '/anos'        
        const response = await axios.get(qry)
        
        return response?.data?.map((anos) => new Anos(anos)) ?? []
    } catch (error) {
        throw error
    }
}

export { buscarAnosRepository }