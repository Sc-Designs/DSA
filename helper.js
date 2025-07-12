// 2000, 500,200,100,50,20,10,5,2

function countnote(amount) {
    const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    for (let note of notes) {
        if (amount >= note) {
            let count = Math.floor(amount / note);
            amount = amount % note;
            console.log(`${note} Note${count > 1 ? 's' : ''}: ${count}`);
        }
    }
}
countnote(4523);
