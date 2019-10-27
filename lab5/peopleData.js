let p = [];
let search = null;

function addPeople(e) {
    p.push(e);
}

function getAllPeople() {
    if(p.length > 0){
        if(search != null && search != ''){
            let temp = [];
            for(var x = 0; x < p.length; x++){
                console.log("within loop for search" + p[x].name + " " + search);                
                if(p[x].name.includes(search)){
                    temp.push(p[x]);
                }
            }
            return temp;
        }
        console.log("p length > 0 " + p[0].name);
        console.log(search);
        
    }
    return p;
}

function getPeople(id) {
    return p[id];
}
function searchPeople(name){
    search = name;
}
function getSearch(){
    search;
}
module.exports = {
    add : addPeople,
    getall : getAllPeople,
    getpeople: getPeople,
    searchPeople: searchPeople,
    getSearch: getSearch 
}