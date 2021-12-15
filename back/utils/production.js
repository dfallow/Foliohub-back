'use strict';

module.exports = (app, port) => {
    app.enable('trust proxy');
    app.use((req, res, next) => {
        if (req.secure) {
            // request was via https
            next();
        } else {
            // if express app run under proxy with sub path URL
            // then, in your .env, set PROXY_PASS=/app
            // Adapt to your proxy settings!
            const proxypath = process.env.PROXY_PASS || ''
            // request was via http, so redirect to https
            res.redirect(301, `https://${req.headers.host}${proxypath}${req.url}`);
        }
    });
    app.listen(port);
}
