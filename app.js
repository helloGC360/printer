const fs =require('fs');
const path=require('path');
const express=require('express');
const app=express();




app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"public")));




app.get('/',(req,res)=>{
res.render("index");
});



app.post('/score',(req,res)=>{
console.log(req.body.score);
fs.writeFile('sc.json',`${req.body.score}`,(err)=>{
if(err){
console.log(err);
}else{
console.log('suscess');
res.redirect('/');
}
});
});


app.get('/public',(req,res)=>{
//   setInterval(()=>{
fs.readFile("sc.json","utf-8",(err,data)=>{
console.log(data);
var x=data;
console.log(x);
res.render("score",{x:x});
});
console.log("working");
//},1000);
});



/*
app.get('/',(req,res)=>{
fs.readdir('./udata',(err,udata)=>{

res.send(udata);
});
});

*/

app.listen(3000);



/*
fs.writeFile('hii.txt',"hello",(err)=>{
if(err){
console.log(err);
}else{
console.log('suscess');
}
});

fs.appendFile('hii.txt',"GC",(err)=>{
if(err){
console.log(err);
}else{
console.log('suscess');
}
});
/*
fs.unlink('hii.txt',(err)=>{
if(err){console.log(err)}
else{console.log('suscess')}
});;

fs.readFile('hii.txt','utf-8',(err,data)=>{
if(err){
console.log(err);
}else{
console.log(data);
}
});
*/
