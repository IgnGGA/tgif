//TABLA_CONGRESS_113
$.ajax({
    type: "GET",
    dataType: "text",
    url: "../assets/json/house.json",
}).done(function (house) {
    var congress = JSON.parse(house);
    var tabla = document.querySelector("#tblHouse");
    for (var congressmen of congress.results[0].members) {
        tabla.innerHTML += `
            <tr>
            <td><a href="${congressmen.url}">${congressmen.first_name} ${congressmen.middle_name} ${congressmen.last_name}</a></td>
            <td>${congressmen.party}</td>
            <td>${congressmen.state}</td>
            <td>${congressmen.seniority}</td>
            <td>${congressmen.votes_with_party_pct}</td>
            </tr>
            `
    }
})
//TABLA_HOUSE_AT_A_GLANCE;_ATTENDANCE_Y_PARTY_LOYALTY.
$.ajax({
    type: "GET",
    dataType: "text",
    url: "../assets/json/house.json",
}).done(function (tabla1) {
    var congress = JSON.parse(tabla1);
    var t1f11 = document.getElementById("raht1n");
    var t1f12 = document.getElementById("raht1v");
    var t1f21 = document.getElementById("daht1n");
    var t1f22 = document.getElementById("daht1v");
    var t1f31 = document.getElementById("iaht1n");
    var t1f32 = document.getElementById("iaht1v");
    var t1f41 = document.getElementById("taht1n");
    var t1f42 = document.getElementById("taht1v");

    var contR = 0;
    var contD = 0;
    var contID = 0;
    var promR=0;
    var promD=0;
    var promID=0;

    for (var miembro of congress.results[0].members) {
        if (miembro.party == "R") {
            contR += 1;
            promR += miembro.votes_with_party_pct;
        } else if (miembro.party == "D") {
            contD += 1;
            promD += miembro.votes_with_party_pct;
        } else if (miembro.party == "ID") {
            contID += 1;
            promID += miembro.votes_with_party_pct;
        }1
    }
    promT=promR+promD+promID;
    total = contR + contD + contID;
    t1f11.innerHTML = contR;
    t1f21.innerHTML = contD;
    t1f31.innerHTML = contID;
    t1f41.innerHTML = total;
    t1f12.innerHTML = (promR/contR).toFixed(2)+"%";
    t1f22.innerHTML = (promD/contD).toFixed(2) + "%";
    t1f32.innerHTML = (promID/contID).toFixed(2) + "%";
    t1f42.innerHTML = (promT/total).toFixed(2) + "%";

})
//TABLAS_LAST_Y_MOST_ENGAGED
$.ajax({
    type: "GET",
    dataType: "text",
    url: "../assets/json/house.json",
}).done(function (tabla2) {
    var congress = JSON.parse(tabla2);
    var arrayS1 = [];
    var i = 0;
    for (var miembro of congress.results[0].members) {//una lista de objetos
        arrayS1[i] = {//A=[{1,2,3},{a,b,c},{,4,5,6},{,d,e,f}]
            porcentaje: miembro.missed_votes_pct,
            nombre: miembro.first_name,
            url: miembro.url,
            votos: miembro.missed_votes,
        };
        i++;
    }
    function ordenarAsc(arrayS1, n) {
        arrayS1.sort(function (a, b) {
            return a.porcentaje - b.porcentaje;
        });
    }

    ordenarAsc(arrayS1, "porcentaje");
    console.log(arrayS1);
    var min=(arrayS1.length-(arrayS1.length*0.1)-1).toFixed(0);//es un string
    min1=parseInt(min);//en un entero
        console.log(min1);
    var max=(arrayS1.length-1).toFixed();
        console.log(max);
    var tablaLast = document.getElementById("ast1");
    var tablaLast = document.getElementById("aht1");

    for (var t =min1; t <=max;t++) {
        //              449                  449-4=446      restadeauno
    
    tablaLast.innerHTML += `
            <tr>
            <td><a href="${arrayS1[t].url}">${arrayS1[t].nombre} </a></td>
            <td>${arrayS1[t].votos}</td>
            <td>${arrayS1[t].porcentaje} %</td>
            </tr>
            `
        }
    console.table(arrayS1.length-(arrayS1.length*0.1))
        var tablaMost = document.getElementById("aht2");
        for (var t = 0; t < arrayS1.length*0.1;t++) {
            //              449                  449-4=446      restadeauno
        
        tablaMost.innerHTML += `
                <tr>
                <td><a href="${arrayS1[t].url}">${arrayS1[t].nombre} </a></td>
                <td>${arrayS1[t].votos}</td>
                <td>${arrayS1[t].porcentaje} %</td>
                </tr>
                `
            }    
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "../assets/json/house.json",
}).done(function (tabla3) {
    var congress = JSON.parse(tabla3);
    var arrayA1 = [];
    var i=0;
    for (var miembro of congress.results[0].members) {
        arrayA1[i] = {
            porcentaje: miembro.votes_with_party_pct,
            nombre: miembro.first_name,
            url: miembro.url,
            votos: miembro.total_votes,
            votosM: miembro.missed_votes
        };
        i++;
    }
    function ordenarAsc(arrayA1, n) {
        arrayA1.sort(function (a, b) {
            return a.porcentaje - b.porcentaje;
        });
    }

    ordenarAsc(arrayA1, "porcentaje");
    console.table(arrayA1);

    var tablaLast = document.getElementById("plht2");
    for (var t = (arrayA1.length - 1); t >= (arrayA1.length-(arrayA1.length*0.1));t--) {
        //              449                  449-4=446      restadeauno
    var variable=(arrayA1[t].votos-arrayA1[t].votosM)*(arrayA1[t].porcentaje)/100;
    tablaLast.innerHTML +=
    `
            <tr>
            <td><a href="${arrayA1[t].url}">${arrayA1[t].nombre} </a></td>
            <td>${variable.toFixed()}</td>
            <td>${arrayA1[t].porcentaje} %</td>
            </tr>
            `
        }
        var tablaMost = document.getElementById("plht1");
        for (var t = 0; t < arrayA1.length*0.1;t++) {
            //              449                  449-4=446      restadeauno
        var variable=(arrayA1[t].votos-arrayA1[t].votosM)*(arrayA1[t].porcentaje)/100;
        tablaMost.innerHTML += `
                <tr>
                <td><a href="${arrayA1[t].url}">${arrayA1[t].nombre} </a></td>
                <td>${variable.toFixed()}</td>
                <td>${arrayA1[t].porcentaje} %</td>
                </tr>
                `
            }   
})
.fail(function (e) {
    console.log(e);
})
