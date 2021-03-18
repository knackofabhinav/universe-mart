import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      address: Model,
    },

    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("productlist");
    },

    seeds(server) {
      [...Array(5)].forEach((_) => {
        server.create("productlist", {
          id: faker.random.uuid(),
          product: faker.commerce.product(),
          description: faker.commerce.productDescription(),
          price: faker.commerce.price(),
          stockQty: 10
        });
      });
    }
  });
}
