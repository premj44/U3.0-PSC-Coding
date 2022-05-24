



function append(){
    let batches = JSON.parse(localStorage.getItem("students")) || []
    let container = document.getElementById("container")
    container.innerHTML = null;

    batches.map(function (ele, index) {
        //console.log(ele)
        let div = document.createElement("div")
        div.setAttribute("class","box")
    
        let img = document.createElement("img")
        img.src = ele.image
        img.setAttribute("class","img")
    
        let name = document.createElement("h4")
        name.innerText = `Student Name: ${ele.name}`
    
        let course = document.createElement("h4")
        course.innerText = `Course Name: ${ele.course}`
    
        let unit = document.createElement("h4")
        unit.innerText = `Unit : ${ele.unit}`
    
        let batch = document.createElement("h4")
        batch.innerText = `Batch : ${ele.batch}`
    
        let btn = document.createElement("button")
        btn.innerText = "Remove"
        btn.setAttribute("class","btn")
        btn.addEventListener("click", function () {
            remove(ele, index)
        })
    
        div.append(img, name, course, unit, batch, btn)
        container.append(div)
        
    })
   
}

append()


function remove(ele, index) {
    //batches.splice(index, 1)
    // window.location.reload()
    //console.log(batches)
    let batches = JSON.parse(localStorage.getItem("students")) || []
    let trashdata = batches.filter(function (ele, i) {
       
        if (i === index) {
            let trash = JSON.parse(localStorage.getItem("trash")) || []
            trash.push(ele)
            localStorage.setItem("trash", JSON.stringify(trash))
        } else {
            return i !== index
        }
    })

    localStorage.setItem("students",JSON.stringify(trashdata))
    append()
    window.location.reload()
}

//------------

function Calculatebatchs(){
    let batches = JSON.parse(localStorage.getItem("students")) || []
    //console.log(batches)

    let obj = {};
    for(let i=0;i<batches.length;i++){
       if(!obj[batches[i].batch]){
        obj[batches[i].batch] =0
       }
    }

    for(let i=0;i<batches.length;i++){ 
         obj[batches[i].batch]++         
     }
   console.log(obj)

  //    let a = obj
  //    console.log(Object.values(a))
  let container = document.getElementById('div1')

  for(key in obj){

     let batch = document.createElement("div")
     batch.innerText = `${key}-${obj[key]} `

     container.append(batch)
   
  }
  // document.getElementById('div1').innerText = `Batch web17 - ${(Object.values(a))} `
  // document.getElementById('div2').innerText = `Ft web 16 - ${(Object.values(a))}`
}
Calculatebatchs()