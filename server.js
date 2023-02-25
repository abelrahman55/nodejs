const http=require("http");

const server=http.createServer((req,res)=>{

  if(req.url=='/home'){
    res.statusCode=200;
    res.write("welcome from home")
  }
  else if(req.url=='/contact'){
    res.statusCode=200;
    res.write("welcome from contact");
  }
  else if (req.url=="/about"){
    res.statusCode=200;
    res.write("welcome from about");
  }
  else if(req.url=="/"){
    res.write("first page")
  }
  else{
    //res.statusCode=200 //from you
    res.statusCode=404;
    res.write("not found");
  }
  res.end();
})

server.listen(5000,()=>{console.log("running")})


/* 
    res 

      status code()   =>حاله الارجاع

      setHeader()   =>نوع الارجاع

      write()  =>تكتب حاجه

      end()=> للارسال
*/


/*
    req

    req.url()=>get the url of page

*/

/* 
  res.statusCode=200

  res.setHeader("Content-type",'text/html')//kind of thing that will return
  res.write("welcome to you in my page\n");
  res.end("done");

*/