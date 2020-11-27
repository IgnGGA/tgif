$.ajax({
  type:"GET",
  dataType:"text",
  url:"../assets/json/house.json",
  }).done(function(house){
      var congress = JSON.parse(house);
      var tabla=document.querySelector("#tblHouse");
      for(var congressmen of congress.results[0].members){
          tabla.innerHTML +=`
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
  
  .fail(function(e){
      console.log(e);
  })