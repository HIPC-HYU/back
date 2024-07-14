"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
// Middleware for parsing JSON and urlencoded form data
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/auth', auth_1.default);
// Basic route
app.get('/', (req, res) => {
    const data = [
        { handle: "asd", no: 1000, title: "A+B", tier: "b5", time: "2024-07-14 12-03-55" },
        { handle: "asd", no: 1001, title: "A-B", tier: "b5", time: "2024-07-14 12-04-25" },
        { handle: "asd", no: 1002, title: "터렛", tier: "s3", time: "2024-07-14 12-05-00" },
    ];
    res.json(data);
});
// Example API route
app.get('/api/info', (req, res) => {
    res.json({
        message: 'Welcome to the HYU IS algorithm page API',
        version: '1.0.0'
    });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = app;
