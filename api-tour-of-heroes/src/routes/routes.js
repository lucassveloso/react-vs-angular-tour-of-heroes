const {
  listHeroes,
  getHero,
  createHero,
  updateHero,
  deleteHero
} = require('../mock-db');

const appRouter = (app) => {

  app.get("/heroes", async (req, res) => {
    const heroes = await listHeroes();
    res.status(200).send(heroes);
  });
  
  app.get("/hero/:id", async (req, res) => {
    const hero = await getHero(+req.params.id);
    res.status(200).send(hero);
  });

  app.post("/hero", async (req, res) => {
    const hero = await createHero(req.body);
    res.status(200).send(hero);
  });

  app.put("/hero", async (req, res) => {
    const hero = await updateHero(req.body);
    res.status(200).send(hero);
  });

  app.delete("/hero", async (req, res) => {
    const hero = await deleteHero(req.body);
    res.status(200).send(hero);
  });
}

module.exports = appRouter;