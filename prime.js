$(document).ready(function() {
  const baseURL = 'https://intense-bastion-27693.herokuapp.com/'

  $.get(baseURL)
  .then(appendTable)
})

function appendTable(data){
  let $protection = data[0].protection
  let $shelter = data[0].shelter
  let $groupNum = data[0].how_many_people_in_group
  let $transportation = data[0].transportation
  let $infected = data[0].infected

  let table = `
           <div class="column1">
            <h3><span class="glyphicon glyphicon-tent" aria-hidden="true"></span></h3>
              <p>${$shelter}</p>
              <br>
            <h3><span class="glyphicon glyphicon-scissors" aria-hidden="true"></span></h3>
              <p>${$protection}</p>
              <br>
            <h3><span class="glyphicon glyphicon-road" aria-hidden="true"></span></h3>
              <p>${$transportation}</p>
              <br>
          </div>
          <div class="column2">
            <h3><span class="glyphicon glyphicon-user" aria-hidden="true"></span></h3>
              <p>${$groupNum}</p>
              <br>
            <h3><span class="glyphicon glyphicon-tint" aria-hidden="true"></span></h3>
              <p>${$infected}</p>
              <br>
          </div>`

  $('#tableContainer').append(table)

}
