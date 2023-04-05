import { Establishment } from "../../../core/entities/Establishment";
import { EstablishmentRepository } from "../../../core/interfaces/EstablishmentRepository";

class EstablishmentRepositoryMongo implements EstablishmentRepository {
    registerEstablishment(establishment: Establishment): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    findEstablishment(id: string): Promise<Establishment> {
        throw new Error("Method not implemented.");
    }
    findEstablishmentByEmail(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(establishment: Establishment): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}