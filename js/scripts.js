$(document).ready(function(){
  $("#vacationForm").submit(function(event){
    event.preventDefault();

var userAgeInput ;
var userFavoriteSeasonInput ;
var userFavoriteHolidayInput ;
var userFavoriteFunActivity ;
var userFavoriteAnimal ;
var userPreferredPlaceToLive ;
var numberOfSelected_A_Counter = 0;
var numberOfSelected_B_Counter = 0;
var numberOfSelected_C_Counter = 0;
var userNameInput = "";

userNameInput = $("#userName").val();
$(".userNameOutput").text(userNameInput);
userAgeInput = ($("#userAge").val());
userFavoriteSeasonInput = ($("#userFavoriteSeason").val());
userFavoriteHolidayInput = ($("#userFavoriteHoliday").val());
userFavoriteFunActivityInput = ($("#userFavoriteFunActivity").val());
userFavoritePreferredPlaceToLiveInput = ($("#userPreferredPlaceToLive").val());

if (userAgeInput === "a"){
      numberOfSelected_A_Counter += 1;
    } else if (userAgeInput === "b") {
      numberOfSelected_B_Counter += 1;
    } else if (userAgeInput === "c") {
      numberOfSelected_C_Counter += 1;
    }

    if (userFavoriteSeasonInput === "a"){
      numberOfSelected_A_Counter += 1;
    } else if (userFavoriteSeasonInput === "b") {
      numberOfSelected_B_Counter += 1;
    } else if (userFavoriteSeasonInput === "c") {
      numberOfSelected_C_Counter += 1;
    }

    if (userFavoriteHolidayInput === "a"){
      numberOfSelected_A_Counter += 1;
    } else if (userFavoriteHolidayInput === "b") {
      numberOfSelected_B_Counter += 1;
    } else if (userFavoriteHolidayInput === "c") {
      numberOfSelected_C_Counter += 1;
    }

    if (userFavoriteFunActivityInput === "a"){
      numberOfSelected_A_Counter += 1;
    } else if (userFavoriteIceCreamFlavorInput === "b") {
      numberOfSelected_B_Counter += 1;
    } else if (userFavoriteIceCreamFlavorInput === "c") {
      numberOfSelected_C_Counter += 1;
    }

    if (userFavoritePreferredPlaceToLiveInput === "a"){
      numberOfSelected_A_Counter += 1;
    } else if (userFavoritePreferredPlaceToLiveInput === "b") {
      numberOfSelected_B_Counter += 1;
    } else if (userFavoritePreferredPlaceToLiveInput === "c") {
      numberOfSelected_C_Counter += 1;
    }
