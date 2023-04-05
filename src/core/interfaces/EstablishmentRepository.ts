import { Establishment } from "../entities/Establishment";

interface EstablishmentRepository {
    registerUser(establishment: Establishment) : Promise<boolean>
    findEstablishment(id: string) : Promise<Establishment>
    findEstablishmentByEmail(id: string) : Promise<boolean>
    findAll() : Promise<any>
    delete(id: string) : Promise<boolean>
    update(establishment: Establishment) : Promise<boolean>
}

export { EstablishmentRepository }