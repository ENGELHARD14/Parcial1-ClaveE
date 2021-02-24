var subtotal = 0;
var presupuesto = 0;

    function addRow(){
        producto = document.getElementById("producto").value;
        precio = document.getElementById("precio").value;
        cantidad = document.getElementById("cantidad").value;

        casilla1 = document.createElement("td");
        casilla1.innerHTML = [producto] ; 

        casilla2 = document.createElement("td");
        casilla2.innerHTML = [precio] ; 

        casilla3 = document.createElement("td");
        casilla3.innerHTML = [cantidad] ;

        casilla4 = document.createElement("td");
        subsubtotal = precio * cantidad;
        subtotal += subsubtotal;
        casilla4.innerHTML = [subsubtotal] ;
        casilla4.className = "subtotal"; 

        if(subsubtotal>presupuesto){
            casilla5 = document.createElement("td");
            casilla5.innerHTML = ["sobre"] ;
        }
        else{
            casilla5 = document.createElement("td");
            casilla5.innerHTML = ["dentro"] ;
        }

        tabla = document.getElementById("tabla");
        next = document.getElementById("next");

        body = document.createElement("thead");
        row = document.createElement("tr");

        row.appendChild(casilla1);
        row.appendChild(casilla2);
        row.appendChild(casilla3);
        row.appendChild(casilla4);
        row.appendChild(casilla5);

        body.appendChild(row);
        tabla.appendChild(body);
        }
    