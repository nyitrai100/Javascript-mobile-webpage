let mobiles = [];

function submit(){
    mobiles = [];
    const menu = document.querySelector("#Menu");
    // Brands
    const brands = menu.querySelectorAll("div[name='brand']");
    const brandCheckboxes = [];
    brands.forEach(function(brand){
        const checkbox = brand.querySelector("input[type='checkbox']");
        if(checkbox.checked === true)
            brandCheckboxes.push(checkbox.id);
    });
    // Memory
    const memories = menu.querySelectorAll("div[name='memory']");
    const memoryCheckboxes = [];
    memories.forEach(function(memory){
        const checkbox = memory.querySelector("input[type='checkbox']");
        if(checkbox.checked === true)
        memoryCheckboxes.push(checkbox.id);
    })
    // Color
    const colors = menu.querySelectorAll("div[name='color']");
    const colorCheckboxes = [];
    colors.forEach(function(color){
        const checkbox = color.querySelector("input[type='checkbox']");
        if(checkbox.checked === true)
        colorCheckboxes.push(checkbox.id);
        
    })
    //budget
    const max = document.querySelector('#budget');
    console.log(max.value);

    // ONLY ONCE
    phones.forEach(function(phone){
        if ((brandCheckboxes.length > 0 ? brandCheckboxes.includes(phone.Brand) : brandCheckboxes) && (memoryCheckboxes.length > 0 ? memoryCheckboxes.includes(phone.Memory) : memoryCheckboxes)
        && (colorCheckboxes.length > 0 ? colorCheckboxes.includes(phone.Color) : colorCheckboxes)
        && (phone.Cost < max.value)) {
            mobiles.push(phone);
        }
    });
   
    renderPhones();
}
 

submit();
function renderPhones(){

    const divElem = document.getElementById("Main");
    divElem.innerHTML = "";
    for(let i = 0; i < mobiles.length;i++){
        const newPhone = document.createElement("div");
        newPhone.classList.add('card');
        newPhone.innerHTML = `
       <img src="./phonepictures/${mobiles[i].Ext}" class="imagines">
           <u> <p>${mobiles[i].Brand}</p> </u>
            <p>${mobiles[i].Name}</p>
            <p>${mobiles[i].Memory}</p>
            <p>${mobiles[i].Cost}</p>
            <p>${mobiles[i].Color}</p>
            
        
        `;
        divElem.appendChild(newPhone);
    }
}


