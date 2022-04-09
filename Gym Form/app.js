    const   express= require("express");
    const fs=require("fs");
    const app = express();
    const port =80;
    const path = require("path");
const { runInNewContext } = require("vm");

//  Express Specific Stuff
     app.use('/static',express.static('static'));
    app.use(express.urlencoded())
    // PUG SPecific Stuff
    app.set('view engine','pug');                        //setting template engine as pug.
    app.set('views', path.join(__dirname, 'views'))      // Set the views directory
 
    // End points
    app.get('/',(req,res)=>{
    const con="This is the best content on the internet so far";
    const params={'title':'GYM Form','content':con}
    res.status(200).render('index.pug',params)
    })
    app.get('/about',(req,res)=>{
        const params={'title':'About us'}
        res.send("This is about page");
    })
    app.post('/',(req,res)=>{
        name = req.body.name
        age = req.body.age
        gender = req.body.gender
        address = req.body.address
        more = req.body.more
    
        let outputToWrite = `The Name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
        fs.writeFileSync('output.txt', outputToWrite)
        const params={'message':'Your Form has been submitted successfully'}
        res.status(200).render('index.pug',params);
    })
   

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
    }); 

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    //  pug demo endpoint
    // app.get("/demo", (req, res)=>{ 
    //     res.status(200).render('demo', { title: 'Hey Sharyan', message: 'Hello there and thanks for telling me how to use pug' })
    // });
    
        // app.get("/", (req, res)=>{ 
        //     res.send("This is main page of my website ");
        // });
        // app.get("/home", (req, res)=>{ 
        //     res.send("This is home page of my website");
        // });
        // app.get("/about", (req, res)=>{ 
        //     res.status(404).send("page not found");
        // });