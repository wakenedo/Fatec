db.createUser(
  {
    user: "bpalmer",
    pwd: "password",
    roles: [
      {
        role: "readWrite",
        db: "testdb"
      }
    ]
  }
);
db.createCollection('users');
db.users.insertOne(
  {
    name: 'Bill Palmer'
  }
);