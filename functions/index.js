const {onRequest} = require("firebase-functions/v2/https");

exports.appVersion = onRequest((req, res) => {
    res.json(
        {
            versionCode: 1,
            versionName: "1.0"
        }
    )
});