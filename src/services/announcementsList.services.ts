import AppDataSource from "../data-source";
import { Vehicle } from "../entities/vehicle.entity";


const announcementesList = async(): Promise<Vehicle[]> =>{
    const vehicleRepository = AppDataSource.getRepository(Vehicle)
    
    const vehicles = await vehicleRepository.find()
    
    return vehicles
}

export default announcementesList