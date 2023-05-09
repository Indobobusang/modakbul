require("dotenv").config();
import { createApp } from "./app";
import { appDataSource } from "./models/appDataSource";

const app = createApp();

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

const startServer = async () => {
  const PORT = process.env.PORT;

  await appDataSource
    .initialize()
    .then(() => {
      console.log("Data server has been initiallized!!");
    })
    .catch((err: unknown) => {
      console.log("Failed to connect database", err);
    });

  app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
  });
};

startServer();
