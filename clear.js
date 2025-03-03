document.getElementById("clear").addEventListener("click",function(event){
    const clearBox=document.getElementById("history");
    const paragraphs = clearBox.querySelectorAll("p");  
    paragraphs.forEach(p => p.remove());
})