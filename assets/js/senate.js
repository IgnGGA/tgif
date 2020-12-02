$.ajax({
    type: "GET",
    dataType: "text",
    url: "../assets/json/senate.json",
}).done(function (senate) {
    var senado = JSON.parse(senate);
    var tabla = document.querySelector("#tblSenate");
    for (var senador of senado.results[0].members) {
        tabla.innerHTML += `
          <tr>
          <td><a href="${senador.url}">${senador.first_name} ${senador.middle_name} ${senador.last_name}</a></td>
          <td>${senador.party}</td>
          <td>${senador.state}</td>
          <td>${senador.seniority}</td>
          <td>${senador.votes_with_party_pct}</td>
          </tr>
          `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "../assets/json/senate.json",
}).done(function (atenmentS) {
    var congress = JSON.parse(atenmentS);
    var t1f11 = document.getElementById("rast1n");
    var t1f12 = document.getElementById("rast1v");
    var t1f21 = document.getElementById("dast1n");
    var t1f22 = document.getElementById("dast1v");
    var t1f31 = document.getElementById("iast1n");
    var t1f32 = document.getElementById("iast1v");
    var t1f41 = document.getElementById("tast1n");
    var t1f42 = document.getElementById("tast1v");

    var contR = 0;
    var contD = 0;
    var contID = 0;
    var arrayA1 = [];
    var i=0;

    for (var miembro of congress.results[0].members) {
        if (miembro.party == "R") {
            contR += 1;
        } else if (miembro.party == "D") {
            contD += 1;
        } else if (miembro.party == "ID") {
            contID += 1;
        }

        arrayA1[i] = {
            porcentaje: miembro.missed_votes_pct,
            nombre: miembro.first_name,
            url: miembro.url,
            votos: miembro.missed_votes
        };
        i++;

    }

    function ordenarAsc(arrayA1, n) {
        arrayA1.sort(function (a, b) {
            return a.porcentaje - b.porcentaje;
        });
    }

    ordenarAsc(arrayA1, "porcentaje");
    //console.table(array);

    var tablaLast = document.getElementById("ast1");
    for (var t = (arrayA1.length - 1); t >= (arrayA1.length-4);t--) {
        //              449                  449-4=446      restadeauno
    
    tablaLast.innerHTML += `
            <tr>
            <td><a href="${arrayA1[t].url}">${arrayA1[t].nombre} </a></td>
            <td>${arrayA1[t].votos}</td>
            <td>${arrayA1[t].porcentaje} %</td>
            </tr>
            `
        }
        var tablaMost = document.getElementById("ast2");
        for (var t = 0; t < 4;t++) {
            //              449                  449-4=446      restadeauno
        
        tablaMost.innerHTML += `
                <tr>
                <td><a href="${arrayA1[t].url}">${arrayA1[t].nombre} </a></td>
                <td>${arrayA1[t].votos}</td>
                <td>${arrayA1[t].porcentaje} %</td>
                </tr>
                `
            }   
    total = contR + contD + contID;
    t1f11.innerHTML = contR;
    t1f21.innerHTML = contD;
    t1f31.innerHTML = contID;
    t1f41.innerHTML = total;
    t1f12.innerHTML = (contR * 100 / total).toFixed(2) + "%";
    t1f22.innerHTML = (contD * 100 / total).toFixed(2) + "%";
    t1f32.innerHTML = (contID * 100 / total).toFixed(2) + "%";
    t1f42.innerHTML = (total * 100 / total).toFixed(2) + "%";

})
.fail(function (e) {
    console.log(e);
})