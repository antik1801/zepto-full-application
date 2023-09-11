const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
const name = "zeptoUploader";
const password = "u5GHyCgFUaFywPXU";

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${name}:${password}@cluster0.zycuvps.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    const fontsCollection = client.db("zepto").collection("fonts");
    const fontGroupsCollection = client.db("zepto").collection("fontGroups");

    app.post("/api/uploadFonts", async (req, res) => {
      const fonts = req.body;
      const result = await fontsCollection.insertOne(fonts);
      res.send(result);
    });
    app.post("/api/fontGroup", async (req, res) => {
      const group = req.body;
      const result = await fontGroupsCollection.insertOne(group);
      res.send(result);
    });
    app.get("/api/allFontGroup", async (req, res) => {
      const result = await fontGroupsCollection.find().toArray();
      res.send(result);
    });
    app.get("/api/allSingleFonts", async (req, res) => {
      const result = await fontsCollection.find().toArray();
      res.send(result);
    });
    app.patch("/api/editFonts/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const status = req.body.status;
        const query = { _id: new ObjectId(id) };
        const updatedDoc = {
          $set: {
            fonts: status,
          },
        };
        const result = await fontGroupsCollection.updateOne(query, updatedDoc);
        res.send(result);
      } catch (error) {
        res.send(error.message);
      }
    });

    app.get("/api/singleFont/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await fontsCollection.findOne(query);
        res.send(result);
      } catch (error) {
        res.send(error.message);
      }
    });

    app.delete("/api/deleteSingleFont/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await fontsCollection.deleteOne(query);
        res.send(result);
      } catch (error) {
        res.send(error.message);
      }
    });

    app.get("/api/singleGroup/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await fontGroupsCollection.findOne(query);
        res.send(result);
      } catch (error) {
        res.send(error.message);
      }
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Zepto server is running");
});

app.listen(port, () => {
  console.log(`Zepto server is running on port ${port}`);
});

/**
 * @endpoints (post , "/api/uploadFonts") {
 *  fontName,
 *  preview
 * }
 */
/**
 * @endpoints (post, "/api/fontGroup"){
 * groupName,
 * fonts[],
 * }
 */
/**
 * @endpoint (patch, "/api/editfonts/:id"){
 *
 * }
 */
/**
 * @endpoints (get, "/api/allFontGroup")
 */
/**
 * @endpoinst (get, "/api/singleGroup/:id"){
 * }
 *
 */
/**
 * @endpoint ()
 *
 */
