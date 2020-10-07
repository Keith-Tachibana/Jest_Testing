const functions = require('./functions');

test('Adding 2 + 2 should equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adding 2 + 2 should NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        });
});

test('User fetched name should NOT equal Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchAnotherUser();
    expect(data.name).not.toEqual('John Doe');
});