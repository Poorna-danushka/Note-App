const express = require ("express") ;
const cors = require ("cors") ;
const mongoose = require ("mongoose") ;
const dotenv = require ("dotenv") ;

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use(express.json());
app.listen(5000,()=>{
    console.log('server is running at port 5000');
});


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to Mongoose");
})
.catch((err)=>{
    console.log(err)
});