import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express(), PORT = process.env.PORT || 4200;;

app.use(express.json());
app.use('/api/test', (reqest, response) => {
    response.json({ message: 'success' }).status(200);
})
app.listen(PORT, () => { console.log('Server is running on port ' + PORT); })