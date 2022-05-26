// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'workspace'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', 'postgres'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password
      },
      debug: false,
    },
  };
};