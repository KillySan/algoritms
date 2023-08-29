const records = [
    [1, 2, 3],
    ["Michael", "Leon"],
    ["1000", "2000"],
];

const combine = (records) => {
    let result = [[]];

    for (let row of records) {
        const subresult = [];

        for (let x of result) {
            for (let y of row) {
                const item = [...x, y];
                subresult.push(item);
            }
        }

        result = subresult;
    }

    return result;
};

const combined = combine(records);
console.log({ combined, records_count: combined.length });
