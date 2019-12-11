
const csv = require('csvtojson');
const fs = require('fs');

const readableStreamToTask2File = fs.createReadStream("./txt/task2.txt", "utf8");
const csvFilePath = './csv/node_mentoring_t1_2_input_example.csv';

const init = () => {
    csv()
        .fromFile(csvFilePath)
        .then((jsonData) => {
            writeJsonToTxt(jsonData);
        })
}

const writeJsonToTxt = (jsonData) => {
    readableStreamToTask2File.pipe(process.stdout);
    readableStreamToTask2File.on('end', function() {
        console.log('finished');
    });
}


init();
