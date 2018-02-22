$(document).ready(function(){
  $("#mainForm").submit(function(event){
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
userFavoritePetInput = ($("#userFavoriteSeason").val());
userFavoriteCountryInput = ($("#userFavoriteHoliday").val());
userFavoriteIceCreamFlavorInput = ($("#userFavoriteFunActivity").val());
userFavoriteSportInput = ($("#userPreferredPlaceToLive").val());
