//TABLA_CONGRESS_113


//TABLA_CONGRESS_113
var tablaHouse = new Vue({
    el: '#general',
    data: {
        dataCongress: [],
        dataSenate: [],
        contR: 0,promR: 0,contD: 0,contID: 0,promD: 0,promID: 0,total: 0,promT: 0,
        R: 0,D: 0,ID: 0,T: 0,array2: [],array3: [],contR2: 0,promR2: 0,contD2: 0,contID2: 0,promD2: 0,promID2: 0,total2: 0,promT2: 0,
        R2: 0,D2: 0,ID2: 0,T2: 0,array22: [],array32: [],
        
    },
    mounted() {
        fetch('https://api.propublica.org/congress/v1/113/house/members.json',
            {
                method: "GET",
                headers: { "X-API-Key": "qxlSNNZZINKD5TepU2H40f10aW4aHBPGJ9TMWNYe" }
            }).then(response => response.json())
            .then(json => this.dataCongress = json.results[0].members)
            .catch(err => console.log(err)),
            fetch('https://api.propublica.org/congress/v1/113/senate/members.json',
                {
                    method: "GET",
                    headers: { "X-API-Key": "qxlSNNZZINKD5TepU2H40f10aW4aHBPGJ9TMWNYe" }
                }).then(response => response.json())
                .then(json => this.dataSenate = json.results[0].members)
                .catch(err => console.log(err))
    },
    computed: {
        funcion1() {
            arreglo = this.dataSenate
           
            for (miembro of arreglo) {                
                miembro['celda2'] = ((miembro.total_votes - miembro.missed_votes) * (miembro.votes_with_party_pct / 100)).toFixed(0)
                if (miembro.party == "R") {

                    this.contR += 1;
                    this.promR += miembro.votes_with_party_pct;
                } else if (miembro.party == "D") {
                    this.contD += 1;
                    this.promD += miembro.votes_with_party_pct;
                } else if (miembro.party == "ID") {
                    this.contID += 1;
                    this.promID += miembro.votes_with_party_pct;
                }
                this.porcentaje = (miembro.total_votes - miembro.missed_votes) * miembro.votes_with_party_pct/100
            }
           
            this.total = this.contR + this.contD + this.contID;
            this.promT = this.promR + this.promID + this.promD;
            //------------------------------------------------------

           
            //---------------------------------------------------
            this.array2 = this.dataSenate
            this.array2.sort(function (a, b) {
                return a.votes_with_party_pct - b.votes_with_party_pct;
            })
            this.array2 = this.array2.reverse().slice(0, (this.array2.length * 0.10).toFixed(0))
            //----------------------------------------------------
            this.array3 = this.dataSenate
            this.array3.sort(function (a, b) {
                return a.votes_with_party_pct - b.votes_with_party_pct;
            })
            this.array3 = this.array3.slice(0, (this.array3.length * 0.10).toFixed(0))
        },
       
        
        funcion2() {
            arregloCongress = this.dataCongress;
            
            for (miem of arregloCongress) {
                miem['celda2'] = ((miem.total_votes - miem.missed_votes) * (miem.votes_with_party_pct / 100)).toFixed(0)

                if (miem.party == "R") {
                    this.contR2 += 1;
                    this.promR2 += miem.votes_with_party_pct;
                } else if (miem.party == "D") {
                    this.contD2 += 1;
                    this.promD2 += miem.votes_with_party_pct;
                } else if (miem.party == "ID") {
                    this.contID2 += 1;
                    this.promID2 += miem.votes_with_party_pct;
                }
            }
            this.total2 = this.contR2 + this.contD2 + this.contID2;
            this.promT2= this.promR2 + this.promID2 + this.promD2;
             //---------------------------------------------------
             this.array22 = this.dataCongress
             this.array22.sort(function (a, b) {
                 return a.votes_with_party_pct - b.votes_with_party_pct;
             })
             this.array22 = this.array22.reverse().slice(0, (this.array22.length * 0.10).toFixed(0))
             //----------------------------------------------------
             this.array32 = this.dataCongress
             this.array32.sort(function (a, b) {
                 return a.votes_with_party_pct - b.votes_with_party_pct;
             })
             this.array32 = this.array32.slice(0, (this.array32.length * 0.10).toFixed(0))
            
        },
        verificarR() {
            if (isNaN(this.promR / this.contR) == true) {
                return this.R = 0;
            }
            else {
                return this.R = (this.promR / this.contR).toFixed(2);
            }
        },
        verificarD() {
            if (isNaN(this.promD / this.contD) == true) {
                return this.D = 0;
            }
            else {
                return this.D = (this.promD / this.contD).toFixed(2);
            }
        }, verificarID() {
            if (isNaN(this.promID / this.contID) == true) {
                return this.ID = 0;
            }
            else {
                return this.ID = (this.promID / this.contID).toFixed(2);
            }
        }, verificarTotal() {
            if (isNaN(this.promT / this.total) == true) {
                return this.T = 0;
            }
            else {
                return this.T = (this.promT / this.total).toFixed(2);
            }
        }
        ,
        verificarR2() {
            if (isNaN(this.promR2 / this.contR2) == true) {
                return this.R2 = 0;
            }
            else {
                return this.R2 = (this.promR2 / this.contR2).toFixed(2);
            }
        },
        verificarD2() {
            if (isNaN(this.promD2 / this.contD2) == true) {
                return this.D2 = 0;
            }
            else {
                return this.D2 = (this.promD2 / this.contD2).toFixed(2);
            }
        }, verificarID2() {
            if (isNaN(this.promID2 / this.contID2) == true) {
                return this.ID2 = 0;
            }
            else {
                return this.ID2 = (this.promID2 / this.contID2).toFixed(2);
            }
        }, verificarTotal2() {
            if (isNaN(this.promT2 / this.total2) == true) {
                return this.T2 = 0;
            }
            else {
                return this.T2 = (this.promT2 / this.total2).toFixed(2);
            }
        }
    }
    
})

/*
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

    var tablaLast = document.getElementById("plst2");
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
        var tablaMost = document.getElementById("plst1");
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
*/ 