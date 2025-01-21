


let getdata = async(URL)=>{

    try{
        let res = await fetch(URL);
        let data = await res.json();
        showdata(data);
        console.log(data)  
    }
    catch{
        console.log("error")
    }
   
}
getdata("https://fakestoreapi.com/products")

let container = document.getElementById("container")
let input = document.getElementById("input")


function showdata(array){
     container.innerHTML = ""
    array.forEach((ele,i)=>{

        let div = document.createElement("div");
        let allproduct = document.createElement("div");
        allproduct.className = "insidediv"
        
        let img = document.createElement("img");
        img.src =  ele.image

        let title = document.createElement("p");
        title.textContent = ele.title

        let price = document.createElement("h5");
        price.textContent = ` Price ${ele.price}`;

        let button = document.createElement("button");
        button.innerText = ele.innerText = "+"
        button.className = "cartpage"

        allproduct.append(img,title,price)
        div.append(button,allproduct)

        container.append(div)
    })
}

function search(){


  let newarr = searchdata.filter(function(ele,i){
     
     return ele.title.toLowerCase() === input.value.toLowerCase();

   })
   if(ele.title.toLowerCase() !== inputvalue.toLowerCase()){
      container.innerHTML = "Data Not Found"
   }
   else{
    showdata(newarr)
   }
   
   
  
}








