function Studentdata(n,c,u,i,b){
   this.name = n;
   this.course = c;
   this.unit=u;
   this.image=i;
   this.batch=`ft web ${b}`;
}

function Data(e){
 event.preventDefault()

 let form = document.getElementById('form')
 let name = form.name.value
 let course = form.course.value
 let unit = form.unit.value
 
 let image = form.image.value
 let batch = form.batch.value

//console.log(name,course,unit,image,batch)

 let st = new Studentdata(name,course,unit,image,batch)
 console.log(st)

 let stdata = JSON.parse(localStorage.getItem("students")) || []
 stdata.push(st)

 localStorage.setItem("students",JSON.stringify(stdata))
 window.location.reload()
 

}

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

   // let a = obj
   // console.log(Object.values(a))
   
   let container = document.getElementById('div1')

   for(key in obj){
 
      let batch = document.createElement("div")
      batch.innerText = `${key} - ${obj[key]}`

      container.append(batch)


   }

   //document.getElementById('div1').innerText = `Batch web17 - ${(Object.values(a))} `
  // document.getElementById('div2').innerText = `Ft web 16 - ${(Object.values(a))}`
}
Calculatebatchs()
