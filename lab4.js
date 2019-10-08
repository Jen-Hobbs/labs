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
var myStorage = window.localStorage;


function addArtist(){
    

    var myForm = document.forms["formAdd"];
    
    console.log("Added " + myStorage.length + " to list");
    if (myStorage.length == 0){
      myStorage.setItem("counter", 1);
    }
    else{    
      var counter = parseInt(myStorage.getItem('counter')) + 1;
      console.log("current counter" + counter);
      myStorage.setItem("counter", counter);
    }
    myStorage.setItem(counter + '0', myForm.elements[0].value);
    myStorage.setItem(counter + '1', myForm.elements[1].value);
    myStorage.setItem(counter + '2', myForm.elements[2].value);
    showEverything();
    

}
function showEverything(){
  clearEverything();
  
  for(var i = 1; i <= parseInt(myStorage.getItem('counter')); i++){
    if( myStorage.getItem(i + '0') != null){
      showItem(i);
    }
  }
    
}

function showItem(i){
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
      var nameText = document.createTextNode(myStorage.getItem(i + '0'));
      var nameInfo = document.createTextNode(myStorage.getItem(i + '1'));
      var nameButton = document.createTextNode("Delete");
      portrait.src = myStorage.getItem(i+ '2');
    
      myBtn.setAttribute("onclick", "deleteItem("+ i + ")");

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

function deleteItem(location){
    myStorage.removeItem(location + '0');
    myStorage.removeItem(location + '1');
    myStorage.removeItem(location + '2');
    showEverything();
}
function search(){
  clearEverything();
  var myForm = document.forms["searchArtist"];
  myForm = myForm.elements[0].value;
  console.log("value inputed" + myForm);
  for(let i = 1; i <= myStorage.getItem('counter'); i++){
    if(myStorage.getItem(i + '0')!= null){
      if(myStorage.getItem(i + '0').includes(myForm)){
        showItem(i);
      }
    }
  }
}
function clearEverything(){
  var child = document.getElementById("showArtists").children;
  for(let i = 0; i < child.length;){
    child[i].remove();
  }
}
// https://randomuser.me/api/portraits/med/men/1.jpg