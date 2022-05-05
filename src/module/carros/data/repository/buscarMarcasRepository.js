import { Marcas } from "../../domain/model/marcas"

const buscarMarcasRepository = (axios) => async (params) => {
    try {        
        const qry = '/' + params + '/marcas'
        
        const response = await axios.get(qry)
        
        //const response = await axios.get('/carros/marcas')
        return response?.data?.map((marcas) => new Marcas(marcas)) ?? []
    } catch (error) {
        throw error
    }
}

export { buscarMarcasRepository }