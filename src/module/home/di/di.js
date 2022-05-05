import { axiosInstance } from "@/core/axios";

import { HomeController } from "../controller/homeController";

import { buscarMarcasRepository } from "../../carros/data/repository/buscarMarcasRepository";
import { buscarMarcasUsecase } from "../../carros/domain/usecase/buscarMarcasUsecase";

import { buscarModelosRepository } from "@/module/carros/data/repository/buscarModelosRepository";
import { buscarModelosUsecase } from "@/module/carros/domain/usecase/buscarModelosUsecase";
import { buscarAnosRepository } from "@/module/carros/data/repository/buscarAnosRepository";
import { buscarAnosUsecase } from "@/module/carros/domain/usecase/buscarAnosUsecase";
import { buscarValorRepository } from "@/module/carros/data/repository/buscarValorRepository";
import { buscarValorUsecase } from "@/module/carros/domain/usecase/buscarValorUsecase";
import { buscarTodosAnosModelosUsecase } from "@/module/carros/domain/usecase/buscarTodosAnosModelosUsecase";

const buscarMarcasRepositoryImpl = buscarMarcasRepository(axiosInstance)
const buscarMarcasUsecaseImpl = buscarMarcasUsecase(buscarMarcasRepositoryImpl)

const buscarModelosRepositoryImpl = buscarModelosRepository(axiosInstance)
const buscarModelosUsecaseImpl = buscarModelosUsecase(buscarModelosRepositoryImpl)

const buscarAnosRepositoryImpl = buscarAnosRepository(axiosInstance)
const buscarAnosUsecaseImpl = buscarAnosUsecase(buscarAnosRepositoryImpl)

const buscarValorRepositoryImpl = buscarValorRepository(axiosInstance)
const buscarValorUsecaseImpl = buscarValorUsecase(buscarValorRepositoryImpl)

const buscarTodosAnosModelosRepositoryImpl = buscarValorRepository(axiosInstance)
const buscarTodosAnosModelosUsecaseImpl = buscarTodosAnosModelosUsecase(buscarTodosAnosModelosRepositoryImpl)

const homeController = (context) => new HomeController(context, buscarMarcasUsecaseImpl, buscarModelosUsecaseImpl, buscarAnosUsecaseImpl, buscarValorUsecaseImpl, buscarTodosAnosModelosUsecaseImpl)

export { homeController }