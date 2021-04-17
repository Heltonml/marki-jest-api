const app = require('./server');
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.info(`🚀🚀🚀 The Server is running on port 🚀🚀🚀 ${PORT} 🚀🚀🚀`);
});

module.exports = app;
