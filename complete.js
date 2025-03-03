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
        p.style.backgroundColor = "#F4F7FF";
        p.style.borderRadius = "8px";
        p.style.margin = "16px";
        p.style.padding="10px";
        p.style.fontSize="18px";
        p.innerText = `You have completed the task ${title} at ${currentTime} time.`;
        const container = document.getElementById("history");
        if (subResult === 0) {
                alert("Congrats!!! You have completed all the current tasks");
            }
            
            document.getElementById("minus-number").innerText = subResult;
            document.getElementById("add-number").innerText = addResult;
            
            
            container.appendChild(p);
          
       
    });

    document.getElementById("completeDark")
    .addEventListener("click", function(event) {
        this.disabled=true;
        alert("Board Updated Successfully");
        document.getElementById("completeDark").style.opacity=".25";
        const subNumber = parseInt(document.getElementById("minus-number").innerText);
        const addNumber = parseInt(document.getElementById("add-number").innerText);
        const subResult = subNumber - 1;
        const addResult = addNumber + 1;
        const title = document.getElementById("dark-id").innerText;
        const date = new Date();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; 
        currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
        const p = document.createElement("p");
        p.style.backgroundColor = "#F4F7FF";
        p.style.borderRadius = "8px";
        p.style.margin = "16px";
        p.style.padding="10px";
        p.style.fontSize="18px";
        p.innerText = `You have completed the task ${title} at ${currentTime} time.`;
        const container = document.getElementById("history");
        if (subResult === 0) {
                alert("Congrats!!! You have completed all the current tasks");
            }
            
            document.getElementById("minus-number").innerText = subResult;
            document.getElementById("add-number").innerText = addResult;
            
            
            container.appendChild(p);
          
       
    });

    document.getElementById("completeHome")
    .addEventListener("click", function(event) {
        this.disabled=true;
        alert("Board Updated Successfully");
        document.getElementById("completeHome").style.opacity=".25";
        const subNumber = parseInt(document.getElementById("minus-number").innerText);
        const addNumber = parseInt(document.getElementById("add-number").innerText);
        const subResult = subNumber - 1;
        const addResult = addNumber + 1;
        const title = document.getElementById("home-id").innerText;
        const date = new Date();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; 
        currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
        const p = document.createElement("p");
        p.style.backgroundColor = "#F4F7FF";
        p.style.borderRadius = "8px";
        p.style.margin = "16px";
        p.style.padding="10px";
        p.style.fontSize="18px";
        p.innerText = `You have completed the task ${title} at ${currentTime} time.`;
        const container = document.getElementById("history");
        if (subResult === 0) {
                alert("Congrats!!! You have completed all the current tasks");
            }
            
            document.getElementById("minus-number").innerText = subResult;
            document.getElementById("add-number").innerText = addResult;
            
            
            container.appendChild(p);
          
       
    });

    document.getElementById("completeEmoji")
    .addEventListener("click", function(event) {
        this.disabled=true;
        alert("Board Updated Successfully");
        document.getElementById("completeEmoji").style.opacity=".25";
        const subNumber = parseInt(document.getElementById("minus-number").innerText);
        const addNumber = parseInt(document.getElementById("add-number").innerText);
        const subResult = subNumber - 1;
        const addResult = addNumber + 1;
        const title = document.getElementById("emoji-id").innerText;
        const date = new Date();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; 
        currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
        const p = document.createElement("p");
        p.style.backgroundColor = "#F4F7FF";
        p.style.borderRadius = "8px";
        p.style.margin = "16px";
        p.style.padding="10px";
        p.style.fontSize="18px";
        p.innerText = `You have completed the task ${title} at ${currentTime} time.`;
        const container = document.getElementById("history");
        if (subResult === 0) {
                alert("Congrats!!! You have completed all the current tasks");
            }
            
            document.getElementById("minus-number").innerText = subResult;
            document.getElementById("add-number").innerText = addResult;
            
            
            container.appendChild(p);
          
       
    });

    document.getElementById("completeApi")
    .addEventListener("click", function(event) {
        this.disabled=true;
        alert("Board Updated Successfully");
        document.getElementById("completeApi").style.opacity=".25";
        const subNumber = parseInt(document.getElementById("minus-number").innerText);
        const addNumber = parseInt(document.getElementById("add-number").innerText);
        const subResult = subNumber - 1;
        const addResult = addNumber + 1;
        const title = document.getElementById("api-id").innerText;
        const date = new Date();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; 
        currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
        const p = document.createElement("p");
        p.style.backgroundColor = "#F4F7FF";
        p.style.borderRadius = "8px";
        p.style.margin = "16px";
        p.style.padding="10px";
        p.style.fontSize="18px";
        p.innerText = `You have completed the task ${title} at ${currentTime} time.`;
        const container = document.getElementById("history");
        if (subResult === 0) {
                alert("Congrats!!! You have completed all the current tasks");
            }
            
            document.getElementById("minus-number").innerText = subResult;
            document.getElementById("add-number").innerText = addResult;
            
            
            container.appendChild(p);
          
       
    });

    document.getElementById("completeJob")
    .addEventListener("click", function(event) {
        this.disabled=true;
        alert("Board Updated Successfully");
        document.getElementById("completeJob").style.opacity=".25";
        const subNumber = parseInt(document.getElementById("minus-number").innerText);
        const addNumber = parseInt(document.getElementById("add-number").innerText);
        const subResult = subNumber - 1;
        const addResult = addNumber + 1;
        const title = document.getElementById("job-id").innerText;
        const date = new Date();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; 
        currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
        const p = document.createElement("p");
        p.style.backgroundColor = "#F4F7FF";
        p.style.borderRadius = "8px";
        p.style.margin = "16px";
        p.style.padding="10px";
        p.style.fontSize="18px";
        p.innerText = `You have completed the task ${title} at ${currentTime} time.`;
        const container = document.getElementById("history");
        if (subResult === 0) {
                alert("Congrats!!! You have completed all the current tasks");
            }
            
            document.getElementById("minus-number").innerText = subResult;
            document.getElementById("add-number").innerText = addResult;
            
            
            container.appendChild(p);
          
       
    });