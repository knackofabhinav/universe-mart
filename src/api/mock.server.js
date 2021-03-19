import { createServer} from "miragejs";
import faker from "faker";

export function setupMockServer() {
  createServer({
    routes(){
        this.namespace = 'api';

        this.get("/productlist", () => {
            let productlist = [...Array(20)].map(() => {
                return({
                    id: faker.random.uuid(),
                    name: faker.commerce.product(),
                    price: faker.commerce.price(),
                    description: faker.commerce.productDescription()
                })
            })
            return {
                productlist
            }
        })
    }
  });
}
