import mysql from 'mysql2';

//buenas
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'pinomario98',
    database: process.env.MYSQL_DATABASE || 'Cyber',
});


/*
const pool = mysql.createPool({
    host: '3.83.110.245',
    user: 'nube',
    password: 'C0mpuNube!',
    database:  'tienda',
});
*/

export default pool;


