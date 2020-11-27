$.ajax({
  type:"GET",
  dataType:"text",
  url:"../assets/json/senate.json",
  }).done(function(senate){
      var senado = JSON.parse(senate);
      var tabla=document.querySelector("#tblSenate");
      for(var senador of senado.results[0].members){
          tabla.innerHTML +=`
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
  
  .fail(function(e){
      console.log(e);
  })