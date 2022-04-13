const MongoLib = require('../lib/mongo');

class LuhnService {
  constructor() {
    this.collection = 'appweb';
    this.mongoDB = new MongLib();
  }

  async createLuhn(n) {
    const luhnCreated = await this.mongoDB.createLuhn(this.collection, n);

    return luhnCreated;
  }

  async getLuhn(n) {
    const luhn = await this.mongoDB.getLuhn(this.collection, n);

    return luhn || {};
  }
}

module.exports = LuhnService;
