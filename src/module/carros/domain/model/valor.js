class Valor {
    constructor({
        Valor = null,
        Marca = null,
        Modelo = null,
        AnoModelo = null,
        Combustivel = null,
        CodigoFipe = null,
        MesReferencia = null,
        TipoVeiculo = null,
        SiglaCombustivel = null
    }) {
        this.Valor = Valor
        this.Marca = Marca
        this.Modelo = Modelo
        this.AnoModelo = AnoModelo
        this.Combustivel = Combustivel
        this.CodigoFipe = CodigoFipe
        this.MesReferencia = MesReferencia
        this.TipoVeiculo = TipoVeiculo
        this.SiglaCombustivel = SiglaCombustivel        
    }
}

export { Valor }
