document.getElementById("completed")
    .addEventListener("click", function(event) {
        this.disabled=true;
        alert("Board Updated Successfully");
        document.getElementById("completed").style.opacity=".25";
        const subNumber = parseInt(document.getElementById("minus-number").innerText);
        const addNumber = parseInt(document.getElementById("add-number").innerText);
        const subResult = subNumber - 1;
        const addResult = addNumber + 1;
        const title = document.getElementById("fix-id").innerText;
        const date = new Date();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; 
        currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
        const p = document.createElement("p");
        p.innerText = `You have completed the task ${title} at ${currentTime} time.`;
        const container = document.getElementById("history");
        if (subResult === 0) {
                alert("Congrats!!! You have completed all the current tasks");
            }
            
            document.getElementById("minus-number").innerText = subResult;
            document.getElementById("add-number").innerText = addResult;
            
            
            container.appendChild(p);
          
       
    });
