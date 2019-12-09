
const csv = require('csvtojson');
const fs = require('fs');

const csvFilePath='./csv/node_mentoring_t1_2_input_example.csv';

const init = () => {
    csv()
    .fromFile(csvFilePath)
    .then((jsonData)=>{
        console.log(jsonData);
        writeJsonToTxt(jsonData);
    })
}

const writeJsonToTxt = (jsonData, fileName = "./txt/task2.txt", ) => {
    fs.writeFile(fileName, JSON.stringify(jsonData), (err) => {
        if (err) {
            console.log(err);
        }
        console.log('yes, we did it');
    });
}


init();
