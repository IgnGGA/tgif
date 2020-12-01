//_________________________________SENATE____________________________________________________________________
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

    for (var miembro of congress.results[0].members) {
        if (miembro.party == "R") {
            contR += 1;
        } else if (miembro.party == "D") {
            contD += 1;
        } else if (miembro.party == "ID") {
            contID += 1;
        }
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
//Cierra el done
//_________________________________HOUSE______________________________________________________________________
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
$.ajax({
    type: "GET",
    dataType: "text",
    url: "../assets/json/house.json",
}).done(function (atenmentH) {
    var congress = JSON.parse(atenmentH);
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
    var array=[];
    var array2=[];
    var i = 0;
    for (var miembro of congress.results[0].members) {
        if (miembro.party == "R") {
            contR += 1;
        } else if (miembro.party == "D") {
            contD += 1;
        } else if (miembro.party == "ID") {
            contID += 1;
        }
        array[i]={"Nombre": miembro.first_name,
                    "votos": miembro.missed_votes,
                 "porcentaje":[miembro.missed_votes_pct]};         
        i++;
    }
    function comparar ( a, b ){ return a - b; };
    console.log(array[0].porcentaje.sort(comparar));

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
    //_________________________________HOUSE______________________________________________________________________
    .fail(function (e) {
        console.log(e);
    })

var text;
text = document.getElementById("buttonRead");
text.innerHTML = "Read More";
text.addEventListener("click", function () {
    if (text.textContent == "Read More") {
        text.innerHTML = "Read Less";
    } else {
        text.innerHTML = "Read More";
    }
})