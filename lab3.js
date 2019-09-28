var artistInfo;
function createArtist(){
    var show = document.getElementById("AddArtist");
  if (show.hidden == true) {
      show.hidden = false;
  } else {
    show.hidden = true;
  }
  console.log(artistInfo);
}
function addArtist(){
    var myForm = document.forms["formAdd"];
    artistInfo = myForm.elements[0].value;
    console.log(artistInfo);
    //artistInfo += myForm.elements[1].value;
    var name = document.getElementsByClassName("Name");
    // var info = document.getElementsByClassName("description");
    // var pic = document.getElementsByClassName("portrait");
    name. = artistInfo;
}
function deleteArtist(){
    console.log("check");

}