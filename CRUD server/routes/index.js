var express = require('express');
var router = express.Router();
var cors = require('cors');
const Crudcontroller = require('../controller/crudcon');

router.use(cors());


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/saveInfo', function (req, res, next) {
  const data = { ...req.body };
  // console.log(data);
  Crudcontroller.insertData(data).then(result => {
    // console.log(result);
    if (result.rowsAffected > 0) {
      // console.log(data);
      res.json({
        data: result.rowsAffected,
        status: '200',
        msg: 'Data inserted successfully'
      });
    } else {
      res.json({
        data: null,
        status: '201',
        msg: 'Data is empty'
      });
    }
  })
});

router.get('/getData', function (req, res, next) {
  Crudcontroller.getInfoData().then(result => {
    if (result.rowsAffected) {
      res.json({
        data: result.recordsets,
        status: '200',
        msg: 'Data getted Successfully'
      });
    } else {
      res.json({
        data: null,
        status: '201',
        msg: 'Data is empty'
      });
    }
    // res.json({
    //   'statuscode': 200,
    //   'statusmessage': "Success"
    // });
  })
});

router.delete('/deleteInfo/:id', function (req, res, next) {
  // const { id } = req.params;
  const ID = parseInt(req.params.id);
  console.log(ID);
  Crudcontroller.DeleteInfobyId(ID).then(result => {
     console.log(result);
    if (result.rowsAffected) {
      res.json({
        data: result.recordsets,
        status: '200',
        msg: 'Data deleted Successfully'
      });
    } else {
      res.json({
        data: null,
        status: '201',
        msg: 'Data is empty'
      });
    }
  })
});

router.put('/updateInfo/:id', function (req, res, next) {
  // const { id } = req.params;
  const ID = parseInt(req.params.id);
  const updatedData = req.body;
  console.log(ID);
  Crudcontroller.UpdateInfo({ ID, ...updatedData }).then(result => {
     console.log(result);
    if (result.rowsAffected) {
      res.json({
        data: updatedData,  // or null, depending on your requirements
        status: '200',
        msg: 'Data updated Successfully'
      });
    } else {
      // Handle the case where no rows were affected (e.g., ID not found)
      res.json({
        data: null,
        status: '201',
        msg: 'Data is empty or ID not found'
      });
    }
    
  })
});





module.exports = router;


