



document.addEventListener("DOMContentLoaded", function() {
    const cropForm = document.getElementById("crop-form");
    const cropList = document.getElementById("crop-list");

    
    cropForm.addEventListener("submit", function(event) {
        event.preventDefault();

        
        const cropName = document.getElementById("crop-name").value;
        const plantingDate = document.getElementById("planting-date").value;
        const growthStage = document.getElementById("growth-stage").value;

        
        const li = document.createElement("li");
        li.innerHTML = `<strong>${cropName}</strong> - Planted on: ${plantingDate}, Current Stage: ${growthStage}`;

        
        cropList.appendChild(li);

        let delbtn=document.createElement("button");
        delbtn.innerText="delete";
        delbtn.classList.add("delete");
        li.appendChild(delbtn);

        delbtn.addEventListener("click", function(event) {
            let lesr=event.target.parentElement;
            lesr.remove(); 

        });


       

    
        cropForm.reset();

    });

    const butt=document.getElementById("id1");
    butt.addEventListener("click",function(){
        alert("thank you for sending a message");
    });

    

    
    function notifyTasks() {
        const today = new Date().toISOString().split("T")[0];
        const tasks = [];
        document.querySelectorAll("#crop-list li").forEach(crop => {
            const cropData = crop.innerText.split(" - ");
            const stage = cropData[1].split(",")[1].trim().split(": ")[1];
            if (stage === "Planting") {
                tasks.push(`Reminder: Water the newly planted ${cropData[0]}.`);
            }
            
        });
        if (tasks.length > 0) {
            alert(tasks.join("\n"));
        }
    }

    
    notifyTasks();
});






