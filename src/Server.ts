import { createServer, Model } from "miragejs";

createServer({
  models: {
    users: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/users", (schema, request) => {
      return schema.users.all();
    });

    this.get("/users/:id", (schema, request) => {
        const id = request.params.id
        return schema.users.find(id)
    })
  },

  seeds(server) {
    server.create("user", {
      firstName: "Abiodun",
      lastName: "Abdul-Jeleel",
      description: "male",
      category: "Champion"
    });
    server.create("user", {
      firstName: "Toyeeb",
      lastName: "Adekunle",
      description: "male",
      category: "Winner"
    });
    server.create("user", {
      firstName: "Maryam",
      lastName: "Abdul-Jeleel",
      description: "female",
      category: "Winner"
    });
  },
});
