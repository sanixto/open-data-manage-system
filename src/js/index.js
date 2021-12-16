const sequelize = require('./db');
const { Action,
  ActionType,
  AvailableAction,
  AvailableFor,
  Category,
  DataFile,
  DataSet,
  Grant,
  MetaDataKey,
  MetaDataValue,
  Role,
  State,
  Type,
  User } = require('./models/models');
 
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  // Tests
  (async () => {
    let users;
    // УВАГА: `force: true` спочатку дропне таблицю, а потім створить її знову.
    try {
      await User.sync({ force: true });
      // Тепер таблиця `users` у бд відповідає моделі User
     
      await User.create({
          id: 1,
          password: '12412',
          name: 'oleg'
        });

        users = await User.findAll();
    } catch {
      console.log(ERROR, err);
    }
    console.log(users);
  })();

// (async() => {
//     // Отримати всіх користувачів
//     let user;
//     try {
//       user = await User.findAll();
//     } catch(err) {
//       console.log("ERROR 2", err); 
//       return;
//     }
//     console.log("All:", JSON.stringify(users, null, 4));
// })();
