import express, { Express, Request, Response } from 'express';
import auth from './routes/auth';

const app: Express = express();
const port = process.env.PORT || 4000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', auth);

// Basic route
app.get('/', (req: Request, res: Response) => {
    const data = [
        { handle: "asd", no: 1000, title: "A+B", tier: "b5", time: "2024-07-14 12-03-55"},
        { handle: "asd", no: 1001, title: "A-B", tier: "b5", time: "2024-07-14 12-04-25"},
        { handle: "asd", no: 1002, title: "터렛", tier: "s3", time: "2024-07-14 12-05-00"},
    ];
    res.json(data);
});

// Example API route
app.get('/api/info', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to the HYU IS algorithm page API',
    version: '1.0.0'
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;