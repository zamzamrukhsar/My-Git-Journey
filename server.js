const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "My Git Journey API is working!"
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;