const btn = document.querySelector(".btn");
const inputtext = document.querySelector(".text");
const list_cont = document.querySelector(".list-container");


// =====================
// PAGE KHULTE HI CHALEGA
// =====================
window.addEventListener("load", function() {

    // localStorage se tasks ki list nikalo
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // agar localStorage khali hai toh [] aayga
    // agar tasks hain toh ["syzdfg", "dfghj"] aayga

    // har ek task ko screen pe dikhao
    tasks.forEach(function(t) {
        taskBanao(t);
        // agar [] hai toh yeh ek baar bhi nahi chalegaa
        // agar 3 tasks hain toh 3 baar chalegaa
    });

});


// =====================
// ADD BUTTON DABANE PE
// =====================
btn.addEventListener("click", function() {

    // input box se text lo
    let text = inputtext.value.trim();

    // agar kuch likha hi nahi toh alert do
    if (text === "") {
        alert("write something");
        return;
    }

    // localStorage se purani list nikalo
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // naya task list mein daalo
    tasks.push(text);

    // updated list wapas save karo
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // screen pe bhi dikhao
    taskBanao(text);

    // input box saaf karo
    inputtext.value = "";

});


// =====================
// EK TASK BANANA
// =====================
function taskBanao(text) {

    // ek li banao
    const li = document.createElement("li");
    li.classList.add("list_series");

    // input box banao
    const input = document.createElement("input");
    input.classList.add("inputafteradd");
    input.value = text;

    // EDIT button banao
    const editbtn = document.createElement("button");
    editbtn.innerText = "EDIT";
    editbtn.classList.add("editbtn");
    editbtn.addEventListener("click", function() {
        // task wapas upar input box mein le aao
        inputtext.value = input.value;
    });

    // DELETE button banao
    const delbtn = document.createElement("button");
    delbtn.innerText = "DELETE";
    delbtn.classList.add("delbtn");
    delbtn.addEventListener("click", function() {

        // pehle screen se hatao
        li.remove();

        // localStorage se bhi hatao
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        // sirf woh tasks rakho jo is task se alag hain
        tasks = tasks.filter(function(t) { return t !== text; });

        // updated list wapas save karo
        localStorage.setItem("tasks", JSON.stringify(tasks));

    });

    // sab ko li mein daalo
    li.appendChild(input);
    li.appendChild(editbtn);
    li.appendChild(delbtn);

    // li ko page pe dikhao
    list_cont.appendChild(li);

}
 

  
