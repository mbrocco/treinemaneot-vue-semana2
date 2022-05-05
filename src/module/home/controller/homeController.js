import * as echarts from "echarts";

class HomeController {
    tipoVeiculo = ''
    dialogConsultar = false
    selecionado = null
    selecionadoModelo = null
    selecionadoAno = null

    valorVeiculo = {}

    linhas = []
    linhasModelo = []
    linhasAno = []

    tab = 0
    arrayAno = []
    arrayValores = []

    constructor(context, buscarMarcasUsecase, buscarModelosUsecase, buscarAnosUsecase, buscarValorUsecase, buscarTodosAnosModelosUsecase) {
        this.context = context
        this.buscarMarcasUsecase = buscarMarcasUsecase
        this.buscarModelosUsecase = buscarModelosUsecase
        this.buscarAnosUsecase = buscarAnosUsecase
        this.buscarValorUsecase = buscarValorUsecase
        this.buscarTodosAnosModelosUsecase = buscarTodosAnosModelosUsecase
    }

    async buscarMarcas(tipo) {
        this.dialogConsultar = true
        this.tipoVeiculo = tipo
        this.linhas = await this.buscarMarcasUsecase(this.tipoVeiculo)
    }

    async selecionouMarca() {
        // Buscar modelos da marca
        const qryParams = {
            "codigoMarca": this.selecionado.codigo,
            "tipoVeiculo": this.tipoVeiculo
        }

        this.selecionadoModelo = null
        this.selecionadoAno = null
        this.valorVeiculo = {}
        this.tab = 0

        this.linhasModelo = await this.buscarModelosUsecase(qryParams)
    }

    async selecionouModelo() {
        // Buscar anos do modelo selecionado
        const qryParams = {
            "codigoMarca": this.selecionado.codigo,
            "codigoModelo": this.selecionadoModelo.codigo,
            "tipoVeiculo": this.tipoVeiculo
        }

        this.selecionadoAno = null
        this.valorVeiculo = {}
        this.tab = 0

        this.linhasAno = await this.buscarAnosUsecase(qryParams)

        this.arrayAno = []
        this.linhasAno.map(async (param) => {
            this.arrayAno.push(param.codigo)
        })

        this.arrayValores = await this.buscarTodosAnosModelosUsecase(qryParams, this.linhasAno)

    }

    async selecionouAno() {
        // Buscar anos do modelo selecionado
        const qryParams = {
            "codigoMarca": this.selecionado.codigo,
            "codigoModelo": this.selecionadoModelo.codigo,
            "codigoAno": this.selecionadoAno.codigo,
            "tipoVeiculo": this.tipoVeiculo
        }

        this.valorVeiculo = await this.buscarValorUsecase(qryParams)

        //this.criaGrafico()
    }

    criaGrafico() {
        const chartDiv = document.getElementById("chart");

        if (chartDiv) {
            const myChart = echarts.init(chartDiv);

            myChart.setOption({
                xAxis: {
                    type: 'category',
                    data: this.arrayAno
                    //data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: this.arrayValores,
                        type: 'bar'
                    }
                ]
            });
        }
    }

    carregarGrafico() {
        if (this.tab === 1) {
            setTimeout(() => {
                this.criaGrafico();
            }, 200);
        }
    }

    limpar() {
        this.dialogConsultar = false
        this.selecionado = null
        this.selecionadoModelo = null
        this.selecionadoAno = null
        this.valorVeiculo = {}
        this.tab = 0
    }



}

export { HomeController }