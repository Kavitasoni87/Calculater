function appendvalue(value){
    document.getElementById("displaay").value+=value;
}

function addd(){
    let dam = eval(document.getElementById("displaay").value);
    document.getElementById("displaay").value=dam;
}

function clearDisplay(){
    document.getElementById("displaay").value = '';
}

function fact(){
    let fact = document.getElementById("displaay").value;
    let fct = 1;
    for (let i = 1; i <= fact; i++) {
        fct = fct * i;
    }
    document.getElementById("displaay").value=fct;
    // console.log(fct);

}

function squ(){
    let n = document.getElementById("displaay").value;
    let i = n*n;
    // console.log(i);
    document.getElementById("displaay").value=i;
}

function cube(){
    let c = document.getElementById("displaay").value;
    let cube = c**c;
    // console.log(i);
    document.getElementById("displaay").value=cube;
}