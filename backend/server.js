const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`App is listening on PORT ${port}`);
});
