import { Router } from "express";
import CarControler from "./controllers/CarController";

const router = Router();

router.get("/cars", CarControler.index)

router.get("/car/:id", CarControler.findById)

router.post("/car", CarControler.create)

router.put("/car/:id", CarControler.udpate)

router.delete("/car/:id", CarControler.delete)

export default router;