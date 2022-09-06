import { Request, Response } from "express";
import CarModel from "../database/CarModel";

const CarControler = {
    async index(req: Request, res: Response): Promise<Response> {
        const cars = await CarModel.find()
        return res.status(200).json(cars)
    },

    async findById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const car = await CarModel.findById(id)
        return res.status(200).json(car)
    },

    async create(req: Request, res: Response): Promise<Response> {
        const { 
            brand,
            model,
            series,
            year,
            mileage,
            transmission,
            price
        } = req.body

        const car = await CarModel.create
            ({   
                brand,
                model,
                series,
                year,
                mileage,
                transmission,
                price
            })
        return res.status(201).json(car)
    },

    async udpate(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const props = req.body
        const car = await CarModel.findByIdAndUpdate(id, props)
        return res.status(200).json(car)
    },

    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        await CarModel.findByIdAndDelete(id)
        return res.status(204).send()
    },
}

export default CarControler