console.log($);

let drinkName;

let glassWare;

let ingredients;

$('#close').on('click', () => {
  $('.drinkInfo').css('display', 'none');
  $('.imagesDiv').css('display', 'flex')

})

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
              let $imgDiv = $('<div>').addClass('drinkImgDiv').attr('id', i).on('click', (event) => {
                $('.drinkInfo').css('display', 'block');
                $('.imagesDiv').css('display', 'none')
                drinkName = $(event.currentTarget).attr('id')
                $('#drinkName').text(drinks.drinks[drinkName].strDrink);
                $('#glassWare').text(drinks.drinks[drinkName].strGlass);
                $('#ingredients1').text(drinks.drinks[drinkName].strIngredient1);
                $('#ingredients2').text(drinks.drinks[drinkName].strIngredient2);
                $('#ingredients3').text(drinks.drinks[drinkName].strIngredient3);
                $('#ingredients4').text(drinks.drinks[drinkName].strIngredient4);
                $('#instructions').text(drinks.drinks[drinkName].strInstructions);
              });
                let $newImg = $('<img>').addClass('drinkImg').attr('src', drinks.drinks[i].strDrinkThumb);
                $imgDiv.append($newImg)
                $('.imagesDiv').append($imgDiv);
              }

          })

      });

// })


// strDrink
//
// strCategory
//
// strGlass
//
// strInstructions
//
// strIngredient1
//
// strMeasure1
//
// strIngredient2
//
// strMeasure2
//
// strIngredient3
//
// strMeasure3
//
// strIngredient4
//
// strMeasure4
//
