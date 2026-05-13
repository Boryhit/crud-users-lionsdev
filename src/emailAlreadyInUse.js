let contatos = require('./contatos.js');

function emailUsedByDifferentUser(email, id) {

    for (let i = 0; i < contatos.length; i++) {

        if (
            contatos[i].email === email &&
            contatos[i].id !== parseInt(id)
        ) {
            return true;
        }
    }
    return false;
}

module.exports = emailUsedByDifferentUser;