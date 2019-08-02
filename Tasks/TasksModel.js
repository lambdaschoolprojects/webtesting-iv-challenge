const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

async function insert(task) {
    const id = await  db('tasks').insert(task);
    //console.log(id);
    return await db('tasks').where({ id }).first();
}

async function update(id, changes) {
    return null;
}

function remove(id) {
    return null;
}

function getAll() {
    return db('tasks');
}

function findById(id) {
    return null;
}
