import express from "express";
import volleyball from "volleyball";

const app = express();

app.use(volleyball);

app.get("/", (req, res) => {
    res.send("<h1>🦄🌈✨Hello World! 🌈✨🦄</h1>");
});

function notFound(req, res, next) {
    res.status(404);
    const error = new Error("Not Found - " + req.originalUrl);
    next(error);
}

function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
        stack: err.stack,
    });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`, port);
});
