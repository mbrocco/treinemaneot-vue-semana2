const buscarTodosAnosModelosUsecase = (repository) => async (params, linhasAno) => {
    try {
        // chamar todos os anos disponivels para o modelo

        var arrayValores = []
        var valorVeiculo = {}

        const response = await Promise.all(linhasAno.map(async (param) => {
            const qryParams = {
                "codigoMarca": params.codigoMarca,
                "codigoModelo": params.codigoModelo,
                "tipoVeiculo": params.tipoVeiculo,
                "codigoAno": param.codigo
            }

            valorVeiculo = await repository(qryParams)

            console.log(valorVeiculo)

            arrayValores.push(parseFloat(
                valorVeiculo.Valor.replace('R$ ', '')
                    .split('.')
                    .join('')
                    .replace(',', '.')
            ))

            //this.arrayAno.push(param.codigo)

        }))


        return arrayValores
    } catch (error) {
        throw error
    }
}

export { buscarTodosAnosModelosUsecase }