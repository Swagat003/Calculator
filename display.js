function transData(){
    var b = document.getElementById("display").value;
    localStorage.setItem("passValue",b );
    
    var b2 = document.getElementById("d2").value;
    localStorage.setItem("p2",b2 );
    var b3 = document.getElementById("d3").value;
    localStorage.setItem("p3",b3 );
    var b4 = document.getElementById("d4").value;
    localStorage.setItem("p4",b4 );
    var b5 = document.getElementById("d5").value;
    localStorage.setItem("p5",b5 );
}
