const db = require('pg').Pool
module.exports = new db({
    user: "nilgxolznqcrhh",
    host: "ec2-54-158-247-97.compute-1.amazonaws.com",
    database: "d42t0t9nrhpv61",
    password: "80ba106ba0ebccf773a87899edc54cae5c8c699c082b329a69dff7627f1f2d29  ",
    port: "5432",
    ssl: {
        rejectUnauthorized: false,
    }
})
