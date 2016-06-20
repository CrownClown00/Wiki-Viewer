$(document).ready(function(){

$("#searchButton").click(function(){
     var   searchTerm=$("#searchField").val();
    //alert(searchTerm);
     var url ="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json"
     var callback =function(response){
         var searchData=response[0][butterflies];
         alert(searchData);
     };
$.getJSON(url,callback);
})



});