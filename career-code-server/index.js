const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();


// middleware 
app.use(cors());
app.use(express.json());

// server is coding...
app.get('/', (req, res) => {
    res.send('Career code is coding...');
})



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.61690px.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();


        const jobCollection = client.db("careerCode").collection('jobs');
        const applicationCollection = client.db('careerCode').collection("applications");


        app.get('/jobs', async (req, res) => {
            const email = req.query.email;

            const query = {}
            if (email) {
                query.hr_email = email;
            }

            const result = await jobCollection.find(query).toArray();
            res.send(result);
        })
        app.get('/jobs/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await jobCollection.findOne(query);
            res.send(result);
        })
        app.post('/jobs', async (req, res) => {
            const newJob = req.body;
            const result = await jobCollection.insertOne(newJob);
            res.send(result);
        })


        // application related api
        app.get('/applications', async (req, res) => {
            try {
                const email = req.query.email;
                let query = {};
                if (email) {
                    query = { applicant: email };
                }
                const result = await applicationCollection.find(query).toArray();
                res.send(result);
            } catch (error) {
                res.status(500).send({ error: 'Failed to fetch applications', details: error.message });
            }
        });
        

        app.post('/applications', async (req, res) => {
            const applicatin = req.body;
            const result = await applicationCollection.insertOne(applicatin);
            res.send(result);
        })

        app.get('/applications/job/:job_Id', async (req, res) => {
            const job_Id = req.params.job_Id;
            const query = { jobId: job_Id };
            const result = await applicationCollection.find(query).toArray();
            res.send(result);
        })





        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Career code is coding on port: ${port}`);
})