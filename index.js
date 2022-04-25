
let count = 0;
let previousEntries = document.getElementById("previous-entries");
previousEntries.innerText = "Previous Entries: ";

function increment() {

    count = count + 1;
    document.getElementById("count-el").innerText = count;
}

function save() {
    console.log(count);
    previousEntries.innerText += " " + count + " - ";
    document.getElementById("count-el").textContent = 0;
    count = 0;
}
