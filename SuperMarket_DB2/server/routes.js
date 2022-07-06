const { DBPool } = require('idb-pconnector');
const db2i = require('idb-connector');
const express = require('express');
const router = express.Router();
const dbconn = new db2i.dbconn();
dbconn.conn('*LOCAL');

//Get all products information
router.get('/products', async (req, res) => {
  try {
    let stm = new db2i.dbstmt(dbconn);
    let sql = 'SELECT * FROM RAHUL.PRODINFO';
    stm.exec(sql, function (results, err) {
      res.json(results);
      stm.close();
    });
  } catch (error) {
    console.log(error);
  }
});

//Create product
router.post('/createproducts', async (req, res) => {
  try {
    let stm = new db2i.dbstmt(dbconn);
    const pool = new DBPool();
    const prodname = req.body.PRDNAME;
    const prodcost = req.body.PRDCOST;
    const proddesc = req.body.PRDDESC;
    await pool.prepareExecute(
      'INSERT INTO RAHUL.PRODINFO (PRDNAME,PRDCOST,PRDDESC) VALUES (?,?,?) with none',
      [prodname, prodcost, proddesc]
    );
    res.redirect('/api/products');
  } catch (error) {
    console.log(error);
  }
});

//Get product information by product id
router.get('/products/:prdid', async (req, res) => {
  try {
    let stm = new db2i.dbstmt(dbconn);
    const pool = new DBPool();
    const prodid = req.params.prdid;
    const tempdata = await pool.prepareExecute(
      'SELECT * FROM RAHUL.PRODINFO WHERE PRDID = ?',
      [prodid]
    );
    res.json(tempdata.resultSet);
  } catch (error) {
    console.log(error);
  }
});

//Update product using product id
router.put('/updateproducts/:prdid', async (req, res) => {
  try {
    let stm = new db2i.dbstmt(dbconn);
    const pool = new DBPool();
    const prodid = req.params.prdid;
    const prodname = req.body.PRDNAME;
    const prodcost = req.body.PRDCOST;
    const proddesc = req.body.PRDDESC;
    await pool.prepareExecute(
      'UPDATE RAHUL.PRODINFO SET PRDNAME = ?,PRDCOST = ?, PRDDESC = ? WHERE PRDID = ? with none',
      [prodname, prodcost, proddesc, prodid]
    );
    res.redirect('/api/products');
  } catch (error) {
    console.log(error);
  }
});

//Delete product using product id
router.delete('/deleteproducts/:prdid', async (req, res) => {
  try {
    let stm = new db2i.dbstmt(dbconn);
    const pool = new DBPool();
    const prodid = req.params.prdid;
    const tempdata = await pool.prepareExecute(
      'DELETE FROM RAHUL.PRODINFO WHERE PRDID = ? with none',
      [prodid]
    );
    res.json(tempdata);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
