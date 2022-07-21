import mysql from 'mysql';

/*
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'nube',
    password: process.emv.MYSQL_PASSWORD || 'C0mpuNube!',
    database: process.env.MYSQL_DATABASE || 'tienda',
});
*/

const pool = mysql.createPool({
    host: '3.83.110.245',
    user: 'nube',
    password: 'C0mpuNube!',
    database:  'tienda',
});

export default pool;