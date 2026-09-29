const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Hardcoding your Atlas link directly to bypass path issues
    const atlasURI = "mongodb+srv://myAtlasDBUser:qqWnAVsg3Tz0amQz@myatlasclusteredu.lj2boqc.mongodb.net/?appName=myAtlasClusterEDU";
    
    const conn = await mongoose.connect(atlasURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
