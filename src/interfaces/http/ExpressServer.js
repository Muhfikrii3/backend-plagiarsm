const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require("../../config/config");
const errorHandler = require("../../app/middlewares/errorHandler");
const authRoutes = require("../../app/routes/authRoutes");
const wordRoutes = require("../../app/routes/wordRoutes");
const fileRoutes = require("../../app/routes/fileRoutes");
const userRoutes = require("../../app/routes/userRoutes");
const connectDB = require("../../infrastructure/database/db");

const app = express();

const allowedOrigins = ["http://localhost:5173"];
const corsOptions = {
	origin: (origin, callback) => {
		if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("combined"));
app.use("/api/auth", authRoutes);
app.use("/api/kata", wordRoutes);
app.use("/api/file", fileRoutes);
app.use("/api/user", userRoutes);
app.use(errorHandler);

const startServer = () => {
	connectDB();
	app.listen(config.port, () => {
		console.log(`Server is running on port ${config.port}`);
	});
};

module.exports = { app, startServer };
