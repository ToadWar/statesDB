const States = require('../model/States');
const data = {};
data.states = require('../model/statesData.json');

const getAllStates = async (req,res)=> {
    res.json(data.states);
}
const getState = async (req,res)=> {

    const state = data.states.find( st => st.code == req.params.state);
    if(!state){
        return res.status(404).json({'message': `Invalid state abbreviation parameter`});
    }
    res.json(state);
 }
 const getCapital = async (req,res)=> {
    const state = data.states.find( st => st.code == req.params.state);
    if(!state){
        return res.status(404).json({'message': `Invalid state abbreviation parameter`});
    }
    res.json({"state": state.state, "capital": state.capital_city});
 }
 const getNickname = async (req,res)=> {

    const state = data.states.find( st => st.code == req.params.state);
    if(!state){
        return res.status(404).json({'message': `Invalid state abbreviation parameter`});
    }
    res.json({"state": state.state, "nickname": state.nickname});
 }
 const getPopulation = async (req,res)=> {

    const state = data.states.find( st => st.code == req.params.state);
    if(!state){
        return res.status(404).json({'message': `Invalid state abbreviation parameter`});
    }
    res.json({"state": state.state, "population": state.population});
 }
 const getAdmission = async (req,res)=> {

    const state = data.states.find( st => st.code == req.params.state);
    if(!state){
        return res.status(404).json({'message': `Invalid state abbreviation parameter`});
    }
    res.json({"state": state.state, "admitted": state.admission_date});
 }
/*
const createNewEmployee = async (req,res)=>{
    if (!req?.body?.firstname || !req?.body?.lastname){
        return res.status(400).json({'message': 'First and Last names are required.'});
    }
    try {
         const result = await Employee.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname
         });
         res.status(201).json(result);
    } catch (err) {console.error(err);}   
}

const updateEmployee = async (req,res)=>{
    if(!req?.body?.id){
        return res.status(400).json({'message': `ID parameter is required.`});
    }
    const employee = await Employee.findOne({_id: req.body.id}).exec();
    if(!employee){
            return res.status(204).json({'message': `Employee ID'${req.body.id} not found`});
    }

    if (req.body?.firstname) employee.firstname = req.body.firstname;
    if (req.body?.lastname) employee.lastname = req.body.lastname;
   
    const result = await employee.save();
    res.json(result);
}   
const deleteEmployee = async(req,res)=>{
    if(!req?.body?.id){
        return res.status(400).json({'message': `Employee ID is required.`});
    }
    const employee = await Employee.findOne({_id: req.body.id}).exec();
    if(!employee){
            return res.status(204).json({'message': `Employee ID'${req.body.id} not found`});
    }
    const result = await employee.deleteOne({_id: req.body.id});
    res.json(result);
}

const getEmployee = async (req,res)=> {
    if(!req?.params?.id ){
        return res.status(400).json({'message': `Employee ID is required.`});
    }
    const employee = await Employee.findOne({_id: req.params.id}).exec();
    if(!employee){
            return res.status(204).json({'message': `Employee ID'${req.params.id} not found`});
    }
    res.json(employee);
 }*/

 module.exports={getAllStates, getState, getNickname, getPopulation, getCapital, getAdmission/*, createNewEmployee, updateEmployee, deleteEmployee, getEmployee*/};