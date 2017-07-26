$(document).ready(function() {


  $.get(baseURL)
  .then(getNames)

})

const baseURL = 'https://intense-bastion-27693.herokuapp.com/meatdecoy'

function addInfo(data){
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

  $('#tableContainer').html(table)

}

function meatInfo(event, data){
  event.preventDefault()

  let $clicked = $(event.currentTarget)
  let $nameVar = $clicked[0].innerText

  for(var i = 0; i < data.length; i++){
    name = data[i].name
    if($nameVar === name){
      const id = data[i].id

      $.get(baseURL + '/' + id)
      .then(addInfo)
    }
  }

  $.get(baseURL + data)
}

function getNames(data){
  for(var i = 0; i < data.length; i++){
     name = data[i].name

    let nameGroup = `
          <div class="${name}">
          <button id="personButton" type="button" class="btn btn-default personButton" aria-label="Left Align">
            <span class="glyphicon glyphicon-unchecked" aria-hidden="true">${name}</span>
          </button>
        </div>`

    $('#tableContainer').append(nameGroup)

  }
  $('.personButton').click((event) => {
    meatInfo(event, data)
  })
}
