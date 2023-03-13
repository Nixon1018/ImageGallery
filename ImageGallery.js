
const arr = [{"id":0,"image":"images/1.jpg"},
              {"id":1,"image":"images/2.jpg"},
              {"id":2,"image":"images/3.jpg"},
              {"id":3,"image":"images/4.jpg"},
              {"id":4,"image":"images/5.jpg"},
              {"id":5,"image":"images/6.jpg"},
              {"id":6,"image":"images/7.jpg"},
              {"id":7,"image":"images/8.jpg"},
              {"id":8,"image":"images/9.jpg"}]
let image = ""

for(let img of arr){
  image+="<img src='"+img.image+"' onclick='overlay("+img.id+")'>"
}
document.getElementById("gallery").innerHTML = image


const closebox = () =>{
  console.log("hello")
  let element = document.getElementById("overlay")
  element.style.display = "none"
}


const overlay = (id) =>{
  if(id<0){
    id = arr.length-1
  }
  else if(id == arr.length){
    id = 0
  }
  let element = document.getElementById("overlay")
  element.innerHTML = "<button class='close' onclick='closebox()'>X</button><div><button onclick='overlay("+(id-1)+")'>⟨</button><img src='"+arr[id].image+"'> <button onclick='overlay("+(id+1)+")'>⟩</button></div>"
  element.style.display = "flex"
}
