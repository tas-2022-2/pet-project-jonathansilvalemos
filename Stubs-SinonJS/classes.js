const Database = {
    findAll() { }
}

class DiariasController {
    constructor(Database) {
        this.Database = Database;
    }


    getAll() {
        return this.Database.findAll('diarias');
    }
}