const http =require('http');
const server=http.createServer((req,res)=>{
const url=req.url;

if(url==="/"){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});   
    res.write("<h2>Index sayfasına hoşgeldiniz</h2>","utf-8")

}
else if(url==="/about"){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
    res.write("<h2>Hakkimda sayfasına hoşgeldiniz</h2>");

}
else if(url==="/contact"){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});    
    res.write("<h2>Iletisim sayfasına hoşgeldiniz</h2>","utf-8");

}
else{
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});   
    res.write("<h2>ERROR</h2>");
}
    res.end();
})
const port=5000;
server.listen(port,()=>{
    console.log(`Opened Pages ${port}`);
})