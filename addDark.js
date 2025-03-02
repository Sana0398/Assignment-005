document.getElementById("completeDark")
    .addEventListener("click", function(event) {
        this.disabled=true;
        alert("Board Updated Successfully");
        document.getElementById("completed").style.opacity=".25";
        const subNumber1 = parseInt(document.getElementById("minus-number").innerText);
        const addNumber1 = parseInt(document.getElementById("add-number").innerText);
        const subResult1 = subNumber1 - 1;
        const addResult1 = addNumber1 + 1;
        const title1 = document.getElementById("add-id").innerText;
        const date1 = new Date();
        let hours1 = date1.getHours();
        const minutes1 = String(date1.getMinutes()).padStart(2, '0');
        const seconds1 = String(date1.getSeconds()).padStart(2, '0');
        const ampm1 = hours1 >= 12 ? 'PM' : 'AM';
        hours1 = hours1 % 12 || 12; 
        currentTime1 = `${hours1}:${minutes1}:${seconds1} ${ampm1}`;
        const p1 = document.createElement("p");
        p1.innerText = `You have completed the task ${title1} at ${currentTime1} time.`;
        const container1 = document.getElementById("history");
        if (subResult1 === 0) {
                alert("Congrats!!! You have completed all the current tasks");
            }
            
            document.getElementById("minus-number").innerText = subResult1;
            document.getElementById("add-number").innerText = addResult1;
            
            
            container1.appendChild(p1);
          
       
    });