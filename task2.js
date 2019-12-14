
const csv = require('csvtojson');
const ReadStream = require('./readStream.js');
const fs = require('fs');

const txtFilePath = "./txt/task2.txt";
const csvFilePath = './csv/node_mentoring_t1_2_input_example.csv';

const init = () => {
    csv()
        .fromFile(csvFilePath)
        .then((jsonData) => {
            writeJsonToTxt(jsonData);
        })
        .catch((err) => {
            console.log('error: ', err)
        })
}

const writeJsonToTxt = (jsonData) => {
    const rs = new ReadStream(jsonData);
    const file = fs.createWriteStream(txtFilePath);
    rs.pipe(file);
}


init();
