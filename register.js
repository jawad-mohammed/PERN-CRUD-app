const express = require('express')
const router = express.Router()
const pool = require('../database')
const bcrypt = require('bcrypt')
const jwtHelper = require('../utils/jwtHelpers')

//json web token

router.get('/employee',async(req,res)=>{
    try {
        const allEmpls = await pool.query(`select * from developer`)
      res.json(allEmpls.rows)
    } catch (error) {
        console.log(error);
    }
})

router.post('/employee',async(req,res)=>{
    try {
        const newEmp = await pool.query(`insert into developer(name,salary,experience,joiningdate)values($1,$2,$3,$4) returning *`,
        [req.body.EmployeeName,req.body.Salary,req.body.Experience,req.body.JoiningDate])
    res.json(newEmp.rows)
 console.log(newEmp);
} catch (error) {
        console.log(error);
    }
})


router.put('/employee/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const updateEmp = await pool.query(`update developer set name=$1 ,salary=$2,experience=$3,joiningdate=$4 where user_id=$5 `,
        [req.body.EmployeeName,req.body.Salary,req.body.Experience,req.body.JoiningDate,id])
        res.json(updateEmp.rows)
        console.log('updated');
    } catch (error) {
        console.log(error);
    }
})
router.delete('/employee/:id',async(req,res)=>{
const {id} = req.params
const deleteEmp = await pool.query(`delete from developer where user_id=$1`,[id])
res.json('deleted')


})
///////////ORDER BY
router.get('/employee/orderby',async(req,res)=>{
    try {
        const allEmpls = await pool.query(`select * from developer  order by user_id desc`)
      res.json(allEmpls.rows)
    } catch (error) {
        console.log(error);
    }
})

// select specific name
router.get('/employee/name',async(req,res)=>{
    try {
        const allEmpls = await pool.query(`select name,salary from developer  where name = 'c'  `)
      res.json(allEmpls.rows)
    } catch (error) {
        console.log(error);
    }
})
// limiting to certain number LIMIT 
router.get('/employee/limit',async(req,res)=>{
    const limitingTo = await pool.query(`select * from developer limit 2`)
    res.json(limitingTo.rows)
})

//select on basis of name similar to certain alphabets user LIKE operator
router.get('/employee/findbyname',async(req,res)=>{
    const findByName = await pool.query(`select name from developer where name like 'c%' `)
    res.json(findByName.rows)
})

//select on the basis of not like that particular name or alphabet use NOT LIKE operator
//you can always use try catch method but im demostrating without it
router.get('/employee/notlike',async(req,res)=>{
    const notLikeCertainName = await pool.query(`select name from developer where name not like 'c%'`)
  res.json(notLikeCertainName.rows)
})


//alias is like calling with short name

//inner join  matches between two tables and joins if it match
//lets say  table_1 have name ='john'  table_2 name ='john'

router.get('/employee/twotablematch',async(req,res)=>{
    const twoTableMatch = await pool.query(`select customer_name,name from customers inner join developer on customer_name = name`)
// table1 is customers and table2 is developer both have rows and comparing rows for certain value
res.json(twoTableMatch.rows)
})











module.exports = router