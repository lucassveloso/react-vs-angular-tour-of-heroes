const {
  listHeroes,
  getHeroesByName,
  getHero,
  createHero,
  updateHero,
  deleteHero
} = require('../mock-db');

const appRouter = (app) => {

  app.get("/heroes", async (req, res) => {
    let heroes = [];
    if (req.query.name) {
      heroes = await getHeroesByName(req.query.name);
    } else {
      heroes = await listHeroes();
    }
    res.status(200).send(heroes);
  });
  
  app.get("/hero/:id", async (req, res) => {
    const hero = await getHero(+req.params.id);
    if (hero) {
      return res.status(200).send(hero);
    }
    res.status(404).send();
  });

  app.post("/hero", async (req, res) => {
    const hero = await createHero(req.body);
    res.status(200).send(hero);
  });

  app.put("/hero", async (req, res) => {
    const hero = await updateHero(req.body);
    res.status(200).send(hero);
  });

  app.delete("/hero/:id", async (req, res) => {
    const hero = await deleteHero(+req.params.id);
    res.status(200).send(hero);
  });
}

module.exports = appRouter;