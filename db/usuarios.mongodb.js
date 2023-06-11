use('app-artigos');

db.usuarios.drop();

// Insert a few documents into the sales collection.
db.usuarios.insertMany([
    {
        '_id': 1,
        'login': 'admin',
        'senha': 'admin',
        'nome': 'Administrador do Sistema',
        'administrador': true
    },
    {
        '_id': 2,
        'login': 'rui',
        'senha': 'professor',
        'nome': 'Rui PImentel Leite',
        'administrador': false
    }
]);
