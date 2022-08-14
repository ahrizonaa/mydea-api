import { server } from "./server/server.js";

const port = process.env.port || 8080;
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});


export default server;