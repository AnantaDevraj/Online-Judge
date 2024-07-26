import mongoose from 'mongoose';

const mongoURI = 'mongodb://localhost:27017/projectOJ'; // Adjust this if you're using a remote server

async function listDatabases() {
  try {
    await mongoose.connect(mongoURI, { 
      useNewUrlParser: true,
      useUnifiedTopology: true 
    });

    const admin = mongoose.connection.db.admin();
    const { databases } = await admin.listDatabases();

    console.log('Databases:');
    databases.forEach(db => console.log(db.name));

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error listing databases:', error);
  }
}

listDatabases();
