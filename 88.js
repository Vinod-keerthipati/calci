let i = document.getElementById('i');
let o = document.getElementById('o');

function v(p) {

    i.value = i.value + p;
}

function r() {

    o.textContent = eval(i.value);
}

function AC() {

    i.value = "";
    o.textContent = 0;

}



function D() {
    let k = i.value;
    i.value = k.substring(0, k.length - 1);


}