import { Establishment } from "../../entities/Establishment";
import { EstablishmentRepository } from "../../interfaces/EstablishmentRepository";

class RegisterNewEstablishment {
    establishmentRepo: EstablishmentRepository

    constructor(establishmentRepo: EstablishmentRepository) {
        this.establishmentRepo = establishmentRepo;
    }

    async exec(establishment: Establishment) {
        const verifyEstablishmentExist = this.establishmentRepo.findEstablishmentByEmail(establishment.getEmail);
        if(verifyEstablishmentExist) {
            return {msg: 'Email has exist!!'}
        }
        const register = this.establishmentRepo.registerEstablishment(establishment);
        if(register) {
            return {msg: 'Estabelecimento cadastrado!!'}
        }else{
            return {msg: 'Erro ao cadastrar estabelecimento!!'}
        }
    }
}