const express=require("express")
const app=express()
const port=2000
const cors=require("cors")
const employee={id:24,name:"react",position:"frontend"}
const students=require("./data.js")
app.use(cors())
app.get("/",(req,res)=>{
	res.send("route for this application")
})
app.get("/demo",(req,res)=>{
	res.send("this is demo route")
})
app.get("/emp",(req,res)=>{
	res.json(employee)
})
app.get("/students-list",(req,res)=>{
	res.json(students)
})
app.listen(port,()=>console.log("server is collapsing"))