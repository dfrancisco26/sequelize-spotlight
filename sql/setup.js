require('../lib/app');
const db = require('../lib/models');

async function sync() {
  try {
    await db.sequelize.sync({ alter: true });
    const { host, port, database } = db.sequelize.config;
    console.log(
      '🔄 Sequelize models synced to',
      `"${database}" on ${host}:${port}`
    );
  } catch (err) {
    console.error(err);
  } finally {
    db.sequelize.close();
  }
}

sync();
