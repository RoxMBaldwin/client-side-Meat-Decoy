$(document).ready(function() {

  $.get(baseURL)
  .then(getNames)

})
// http://localhost:4000/meatdecoy/
const baseURL = 'https://intense-bastion-27693.herokuapp.com/meatdecoy/'
const $updateButton = $('.updateButton')
const $form = $('form')

function deleteMeat(event){
  event.preventDefault()
  let id = event.target.id

  $.ajax({
    url: `${baseURL}${id}`,
    type: 'DELETE'
  })
  .then(data => {
    $('.columns').empty()
    $('.columns').append(`<h3>ANOTHER ONE BITES THE DUST</h3>`)
  })

}

function freshMeat(event) {

  let table = `
          <div id="tableUpdate"class="row">
            <div class="col-xs-6 col-lg-4">
              <h2>fresh meat <span class="glyphicon glyphicon-heart" aria-hidden="true"></span></h2>
              <label for="name"></label>
              <input class="name" type="text" name="" value="">
            </div>
            <div class="col-xs-6 col-lg-4">
              <h2>shelter <span class="glyphicon glyphicon-tent" aria-hidden="true"></span></h2>
              <label for="shelter"></label>
              <input class="shelter" type="text" name="" value="">
            </div>
            <div class="col-xs-6 col-lg-4">
              <h2>protection <span class="glyphicon glyphicon-scissors" aria-hidden="true"></span></h2>
              <label for="protection"></label>
              <input class="protection" type="text" name="" value="">
            </div>
            <div class="col-xs-6 col-lg-4">
              <h2>transportation <span class="glyphicon glyphicon-road" aria-hidden="true"></span></h2>
              <label for="transportation"></label>
              <input class="transportation" type="text" name="" value="">
            </div>
            <div class="col-xs-6 col-lg-4">
              <h2># people in group <span class="glyphicon glyphicon-user" aria-hidden="true"></span></h2>
              <label for="numOfPeople"></label>
              <input class="numOfPeople" type="text" name="" value="">
            </div>
            <div class="col-xs-6 col-lg-4">
              <h2>infected? <span class="glyphicon glyphicon-tint" aria-hidden="true"></span></h2>
              <label for="infected"></label>
              <input class="infected" type="text" name="" value="">
            </div>
          </div>
          <div id="addFreshMeat">
            <h2 class="saveSkin">save my skin</h2>
            <button type="button" class="btn btn-default saveButton" aria-label="Left Align">
            <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
          </button>
          </div>`

  $('#tableContainer').html(table)

    $('.saveButton').click(function(){
      var postBody = {
        name: $('.name').val(),
        shelter: $('.shelter').val(),
        protection: $('.protection').val(),
        transportation: $('.transportation').val(),
        how_many_people_in_group: $('.numOfPeople').val(),
        infected: $('.infected').val()
      }
      $.post(baseURL, postBody).then(data => {
        window.location.reload()
      })

  })
}

function addInfo(data){
  let $name = data[0].name
  let $protection = data[0].protection
  let $shelter = data[0].shelter
  let $groupNum = data[0].how_many_people_in_group
  let $transportation = data[0].transportation
  let $infected = data[0].infected
  let $id = data[0].id

  let table = `
            <div class="columns">
              <div class="meatName">
                <h3>${$name}</h3>
              </div>
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
              </div>
          </div>
          <div id="tableUpdate"class="row">
            <div class="col-xs-6 col-lg-4">
              <h2>shelter</h2>
            <form>
              <label for="shelter"></label>
              <input class="shelter" type="text">
              <button class="updateButton" type="button" class="btn btn-default" aria-label="Left Align">
                <span class="glyphicon glyphicon-tent" aria-hidden="true"></span>
              </button>
            </div>
            <div class="col-xs-6 col-lg-4">
              <h2>protection</h2>
              <label for="protection"></label>
              <input class="protection" type="text" name="" value="">
              <button class="updateButton" type="button" class="btn btn-default" aria-label="Left Align">
                <span class="glyphicon glyphicon-scissors" aria-hidden="true"></span>
              </button>
            </div>
            <div class="col-xs-6 col-lg-4">
              <h2>transportation</h2>
              <label for="transportation"></label>
              <input class="transportation" type="text" name="" value="">
              <button class="updateButton" type="button" class="btn btn-default" aria-label="Left Align">
                <span class="glyphicon glyphicon-road" aria-hidden="true"></span>
              </button>
            </div>
            <div class="col-xs-6 col-lg-4">
              <h2># people in group</h2>
              <label for="numOfPeople"></label>
              <input class="numOfPeople" type="text" name="" value="">
              <button class="updateButton" type="button" class="btn btn-default" aria-label="Left Align">
                <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
              </button>
            </div>
            <div class="col-xs-6 col-lg-4">
              <h2>infected?</h2>
              <label for="infected"></label>
              <input class="infected" type="text" name="" value="">
              <button class="updateButton" type="button" class="btn btn-default" aria-label="Left Align">
                <span class="glyphicon glyphicon-tint" aria-hidden="true"></span>
              </button>
            </div>
            <div class="col-xs-6 col-lg-4">
              <h2>dead meat</h2>
              <button id="${$id}" type="button" class="btn btn-default removeButton" aria-label="Left Align">
                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </button>
            </div>
            </form>
          </div>`

  $('#tableContainer').html(table)

  $('.removeButton').click(deleteMeat)
}

function meatInfo(event, data){
  event.preventDefault()

  let $clicked = $(event.currentTarget)
  let $nameVar = $clicked[0].innerText

  for(var i = 0; i < data.length; i++){
    name = data[i].name
    if($nameVar === name){
      const id = data[i].id

      $.get(baseURL + id)
      .then(addInfo)
    }
  }
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
  $('#personButton').click(freshMeat)
}
