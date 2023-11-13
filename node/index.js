const express = require('express')
const app = express()
const port = 3001
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)
    const sql = `INSERT INTO people(name) VALUES('Pedro')`
    connection.query(sql)
    connection.end()

    const con = mysql.createConnection(config)
    result = con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM people", function (err, result, fields) {
            if (err) 
                throw err;
        
            console.log(result);
            res.render('pages/index')
        });
        con.end()
    })
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
