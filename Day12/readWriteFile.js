const { log } = require('console');
const fs = require('fs');


fs.readFile('myFile.txt', 'utf8', (err, data)=>{
    if(err){
        console.error('Error reading file: ', err);
        return;
    }
    console.log('File Content: ', data);
    
});


fs.writeFile('myFile.txt', 'Hello Pratibha & Pratik team this side', 'utf8', function(err){
    if(err){
        return console.error(err);
    }
    console.log("Data Written Successfully");
    console.log("let's read newly written data");

    fs.readFile("myFile.txt", function(err, data){
        if(err){
            return console.error(err);
        }
        console.log("Asychrnous Read: "+data.toString());
        
    });
    
    
});

