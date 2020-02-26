console.log($);

let drinkName;

// =================
// a variable that is updated with
// the event.target id
// =================

$('#close').on('click', () => {

  $('.drinkInfo').css('display', 'none');
  $('.imagesDiv').css('display', 'flex')
})

//====================
// function for closing the pop up tab
//====================


// ========================
//  user inputs drink names
// ========================

$('form').on('submit', () =>  {


$('.imagesDiv').empty()

// clear out existing images on
// resubmit

event.preventDefault();

let userInput = $('#enterText').val();
console.log(userInput);


// the content of the text field on input

      $.ajax({
          url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userInput,
          type: "GET",
          data: {
            "$limit" : 1000,
          }
      }).then(
          (drinks) => {
            console.log(drinks);

// ================================
// functions to create drink images
// =================================

      for (let i = 0; i < drinks.drinks.length; i++) {

// looping through the information and
// creates the corresponding image divs

      let $imgDiv = $('<div>').addClass('drinkImgDiv').attr('id', i).on('click', (event) => {

      $('.drinkInfo').css('display', 'block');

// show drink nformation on click

      $('.imagesDiv').css('display', 'none');

// remove the drink images when submit is clicked


    drinkName = $(event.currentTarget).attr('id')

// increment drinkName by clicked ID

    $('#drinkName').text(drinks.drinks[drinkName].strDrink);

// set variable to clicked drink name data

    $('#glassWare').text(drinks.drinks[drinkName].strGlass);

// set variable to clicked drink glass data

    $('#ingredients1').text(drinks.drinks[drinkName].strIngredient1);



    $('#ingredients2').text(drinks.drinks[drinkName].strIngredient2);


    $('#ingredients3').text(drinks.drinks[drinkName].strIngredient3);


    $('#ingredients4').text(drinks.drinks[drinkName].strIngredient4);

// set variable to clicked drink ingredients data

    $('#instructions').text(drinks.drinks[drinkName].strInstructions);

// set variable with instructions data
            });
              let $newImg = $('<img>').addClass('drinkImg').attr('src', drinks.drinks[i].strDrinkThumb);
              $imgDiv.append($newImg)
              $('.imagesDiv').append($imgDiv);

// make the appropriate images and store
// them in the divs

            }

          })

      });
