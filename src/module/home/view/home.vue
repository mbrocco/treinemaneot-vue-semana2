<template>
  <v-app>
    <v-app-bar app dark color="primary" clipped-left>
      <v-toolbar-title>Fipe - Consultar Tabela</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container class="fill-height">
        <v-row justify="center" align="center">
          <v-col xl="3" lg="3" md="6" sm="12" cols="12">
            <v-card elevation="9">
              <v-img
                class="white--text align-end"
                height="200px"
                src="@/assets/carros.jpg"
              >
              </v-img>
              <v-card-title>Carros</v-card-title>
              <v-card-subtitle class="pb-0">
                Consultar os valores dos carros
              </v-card-subtitle>

              <v-card-actions>
                <v-btn
                  color="primary"
                  text
                  @click="controller.buscarMarcas('carros')"
                >
                  Consultar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col xl="3" lg="3" md="6" sm="12" cols="12">
            <v-card elevation="9">
              <v-img
                class="white--text align-end"
                height="200px"
                src="@/assets/motos.jpg"
              >
              </v-img>
              <v-card-title>Motos</v-card-title>
              <v-card-subtitle class="pb-0">
                Consultar os valores das motos
              </v-card-subtitle>

              <v-card-actions>
                <v-btn
                  color="primary"
                  text
                  @click="controller.buscarMarcas('motos')"
                >
                  Consultar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col xl="3" lg="3" md="6" sm="12" cols="12">
            <v-card elevation="9">
              <v-img
                class="white--text align-end"
                height="200px"
                src="@/assets/caminhoes.jpg"
              >
              </v-img>
              <v-card-title>Caminhões</v-card-title>
              <v-card-subtitle class="pb-0">
                Consultar os valores dos caminhões
              </v-card-subtitle>

              <v-card-actions>
                <v-btn
                  color="primary"
                  text
                  @click="controller.buscarMarcas('caminhoes')"
                >
                  Consultar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-dialog persistent width="800" v-model="controller.dialogConsultar">
        <v-card>
          <v-card-title class="pa-0">
            <v-toolbar flat dense class="white--text" color="primary">
              Selecione a Marca/Modelo/Ano do Veículo
            </v-toolbar>
          </v-card-title>
          <v-card-text>
            <v-select
              placeholder="Selecione a marca do veículo"
              :items="controller.linhas"
              item-text="nome"
              v-model="controller.selecionado"
              return-object
              @change="controller.selecionouMarca('carros')"
            >
              ></v-select
            >

            <v-select
              placeholder="Selecione a modelo do veículo"
              :items="controller.linhasModelo"
              item-text="nome"
              v-model="controller.selecionadoModelo"
              return-object
              @change="controller.selecionouModelo()"
            >
              ></v-select
            >
            <v-select
              placeholder="Selecione o ano do veículo"
              :items="controller.linhasAno"
              item-text="nome"
              v-model="controller.selecionadoAno"
              return-object
              @change="controller.selecionouAno()"
            >
              ></v-select
            >
          </v-card-text>
          <v-divider></v-divider>

          <v-tabs
            v-if="controller.valorVeiculo.Valor"
            show-arrows
            centered
            v-model="controller.tab"
          >            
              <v-tab>Dados</v-tab>
              <v-tab>Gráfico</v-tab>            
          </v-tabs>

          <v-tabs-items
            v-if="controller.valorVeiculo.Valor"
            v-model="controller.tab"
          >
            <v-tab-item>
              <v-card class="mx-auto">
                <v-card-text>
                  <div>
                    Código FIPE: {{ controller.valorVeiculo.CodigoFipe }}
                  </div>
                  <p class="text-h4 text--primary">
                    Valor: {{ controller.valorVeiculo.Valor }}
                  </p>
                  <p class="text-h6 text--primary">
                    Marca/Modelo: {{ controller.valorVeiculo.Marca }} -
                    {{ controller.valorVeiculo.Modelo }}
                  </p>
                  <div class="text--primary">
                    Ano: {{ controller.valorVeiculo.AnoModelo }} <br />
                    Combustível: {{ controller.valorVeiculo.Combustivel }}
                    <br />
                  </div>
                  <p class="text-h6">
                    Mês Referência: {{ controller.valorVeiculo.MesReferencia }}
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card class="mx-auto">
                <v-card-text>                  
                  <div
                  id="chart"
                  style="height: 400px; width: 100%"
                ></div>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn outlined color="red" @click="controller.limpar()"
              >Sair</v-btn
            >
            <!-- <v-spacer></v-spacer>
          <v-btn color="primary">salvar</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import { homeController } from "../di/di";

export default {
  data: (context) => ({
    controller: homeController(context),
  }),
  watch: {    
      "controller.tab"() {
      this.controller.carregarGrafico();
    },
  },
  
};
</script>
