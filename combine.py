records = [
    [1, 2, 3],
    ["Michael", "Leon"],
    ["1000", "2000"],
]


def combine(records):
    result = [[]]

    for row in records:
        result = [x + [item] for x in result for item in row]

    result = [tuple(record) for record in result]
    return result


res = combine(records)
print(res)
print("Records count: ", len(res))
