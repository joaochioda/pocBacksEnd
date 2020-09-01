module.exports = {
    dialect: 'postgres',
    host: '/cloudsql/pocbackend:us-west2:poc-back-end',
    username: 'postgres',
    password: 'joao1234',
    database: 'bancodojao',
    define: {
        timestamps: true,
        underscored: true,
    }
};