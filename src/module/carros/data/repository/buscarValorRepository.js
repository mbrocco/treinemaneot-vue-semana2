import { Valor } from "../../domain/model/valor"

const buscarValorRepository = (axios) => async (params) => {
    try {        
        const qry = '/'+ params.tipoVeiculo + '/marcas/' + params.codigoMarca + '/modelos/' + params.codigoModelo + '/anos/' + params.codigoAno
        const response = await axios.get(qry)
        
        return new Valor(response?.data) ?? {}
    } catch (error) {
        throw error
    }
}

export { buscarValorRepository }