// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with
function createArtist(){
    var show = document.getElementById("AddArtist");
  if (show.hidden == true) {
      show.hidden = false;
  } else {
    show.hidden = true;
    var formName = document.getElementById("formName");
    formName.value="Artist Name";
    var formInfo = document.getElementById("formAbout");
    formInfo.value="About Artist";
    var formPic = document.getElementById("formImg");
    formPic.value="image url";
  }
}

function addArtist(){
    var border = document.createElement("div");
    var portrait = document.createElement("img");
    var content = document.createElement("div");   
    var Name = document.createElement("h2");
    var description = document.createElement("p");
    var myBtn = document.createElement("button");
    
    border.className = "border";
    portrait.className = "portrait";
    content.className = "content";
    Name.className = "Name";
    description.className = "description";
    myBtn.className = "myBtn";

    var myForm = document.forms["formAdd"];
    var artistName = myForm.elements[0].value;
    var artistInfo = myForm.elements[1].value;
    var imgInfo = myForm.elements[2].value;
    
    var nameText = document.createTextNode(artistName);
    var nameInfo = document.createTextNode(artistInfo);
    var nameButton = document.createTextNode("Delete");
    portrait.src = imgInfo;
    myBtn.onclick = function(){
      console.log(this.parentNode.);
      var list = document.getElementById("showArtists");
      console.log(list.childNodes);
      if (list.hasChildNodes()) {
        list.removeChild(list.childNodes[this.parentNode]);
      }
    };
    myBtn.append(nameButton);
    Name.append(nameText);
    description.append(nameInfo);

    
    content.append(Name);
    content.append(description);
    
    border.append(portrait);
    border.append(myBtn);
    border.append(content);
    
    

    document.getElementById("showArtists").appendChild(border);

}

function deleteArtist(){
  console.log("hello world");
  var list = document.getElementById("showArtists");
  console.log(list.childNodes);
  if (list.hasChildNodes()) {
    list.removeChild(list.childNodes[0]);
  }
  // https://randomuser.me/api/portraits/med/men/1.jpg
}