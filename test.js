
const imagebox= document.querySelector(".imagebox");
const whitebox= document.getElementsByClassName("whitebox");

imagebox.addEventListener('dragstart', (e)=>{
  console.log("DragStart has initiated");
  e.target.className += ' plane';
  setTimeout(() => {
    e.target.className = 'nothing';
  }, 0);
 
})

imagebox.addEventListener('dragend', (e)=>{
    console.log("DragEnd has initiated");
    e.target.className = 'imagebox';
    
})

for (whiteboxes of whitebox){
    whiteboxes.addEventListener('dragover', (e)=>{
        e.preventDefault();
        //e.target.className += ' dotted';
    });

    whiteboxes.addEventListener('dragenter', (e)=>{
        console.log("DragENTER");
        e.target.className += ' dotted';
        setTimeout(() => {
            e.target.className = 'whitebox';
        }, 1000);
    });

    whiteboxes.addEventListener('dragleave', (e)=>{
        console.log("DragLEAVE");
        
    });

    whiteboxes.addEventListener('drop', (e)=>{
        console.log("DROP");
        e.target.append(imagebox);
    });
}