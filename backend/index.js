import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDb } from './config/dbConn.js';
import job from './config/cronJob.js';


// impporting routes
import authRouter from './routers/auth.router.js';
import bookingRouter from './routers/booking.router.js';
import queryRouter from './routers/query.router.js';
import alternateBookingRouter from './routers/alternateBooking.router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(express.json()); // parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // parse URL-encoded request bodies
job.start(); // Start the cron job
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Explore India!'); // Send a welcome message for the root route
});

app.use('/api/v1/auth', authRouter); // Use the auth router for authentication routes
app.use('/api/v1/booking', bookingRouter); // Use the booking router for booking routes)
app.use('/api/v1/query', queryRouter); // Use the booking router for booking routes)
app.use("/api/v1/alternate-booking", alternateBookingRouter);

// error handling route
app.use((err, req, res, next) => {
    res.status(500).json({ message: process.env.NODE_ENV === 'production' ? "Internal Server Error" + err.message : "Internal Server Error : " + err.message })
})


app.listen(PORT, () => {
    connectToDb(); // Connect to the database
    console.log(`Server is running on port ${PORT}`);
});
