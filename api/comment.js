const db = require('./db')

function comment(req, resp) {
    db.any(`insert into comment(name, email, phone, comment) values('${req.body.name}', '${(req.body.email !== "") ? req.body.email : null}', ${(req.body.phone !== "") ? req.body.phone : null}, '${req.body.comment}')`)
        .then((r) => resp.send('Success!'))
         .catch((r) => resp.send('Error! Please re-check your form!'))
}

module.exports = comment