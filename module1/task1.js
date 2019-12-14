const stdin = process.stdin;

const formatData = (d) => {
    return d.toString().split('').reverse().join('');
};

stdin.on('data', (d) => {
    const formatedData = formatData(d);

    console.log(formatedData);
});

