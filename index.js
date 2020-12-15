const fs = require('fs');

fs.readFile('input.csv', 'utf8', function(err, data){
    let lines = data.split(/\r?\n/);
    let headers = lines[0].split(",");
    let dataArray = [];

    for(let i = 1; i < lines.length; i++){
        
        let obj = {};
        let currentLine = lines[i].split(",");

        for(let j = 0; j < headers.length; j++){
            obj[headers[j]] = currentLine[j];
        }
        dataArray.push(obj);
    }
    console.log(JSON.stringify(dataArray));
    fs.writeFile('output.json', JSON.stringify(dataArray), function(err){
        if(err){
            console.log(err);
        } else {
            console.log("\nArquivo Gerado!")
        }
    })
})