const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./src/config/database');
const morgan = require("morgan");
const serverless = require("serverless-http"); // ✅ required for Vercel


const userRouter = require ('./src/routes/UserRouter');
const BussinessRouter = require("./src/routes/BussinessRouter");
const categoryRoutes = require('./src/routes/CategoryRouter');
const subcategoryRoutes = require('./src/routes/SubCategoryRouter');
const planRoutes = require('./src/routes/PlanRouter');
const jobRoutes = require('./src/routes/JobRouter');

// const advertisementRoutes = require('./src/routes/advertisementRoutes');


dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(morgan('dev'));


app.use("/api/Users",userRouter);
app.use("/api/bussiness",BussinessRouter);
app.use('/api/category', categoryRoutes);
app.use('/api/subcategory', subcategoryRoutes);
app.use('/api/jobs', jobRoutes);
app.use ('/api/plan', planRoutes);
// app.post("/api/plan/Webhook", express.raw({ type: 'application/json' }), planRoutes);
// app.use('/api/advertisements', advertisementRoutes);



app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message,
  });
});

app.get("/", async (req, res) => {
    
      res.status(200).json({
        success:"Hello from server side",
        message: "Server is running perfectly",
      });

});


const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  try {

    console.log({ message: `Server is listening on port ${PORT}` });
    await connectDB;
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = serverless(app);
