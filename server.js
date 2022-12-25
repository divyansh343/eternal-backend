require('dotenv').config(); 
const express = require('express')
const mongoConnect = require('./mongo-config')
const userRouter = require('./routers/auth/user')
const app = express()
const PORT = process.env.PORT || 5000


const cors = require('cors');

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','PUT']
}));

app.use(express.json())
mongoConnect();
app.get('/', (req, res) => {
    res.json('welcome to eternal app')
}
);
app.use('/auth/', userRouter)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})