function submit(){
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
        colorCheckboxes.push(checkbox.id)
        
    })
    // ONLY ONCE
    const mobiles = [];
    phones.forEach(function(phone){
        if ((brandCheckboxes.length > 0 ? brandCheckboxes.includes(phone.Brand) : brandCheckboxes) && (memoryCheckboxes.length > 0 ? memoryCheckboxes.includes(phone.Memory) : memoryCheckboxes)
        && (colorCheckboxes.length > 0 ? colorCheckboxes.includes(phone.Color) : colorCheckboxes)) {
            mobiles.push(phone);
        }
        
       
    });
   


    console.log(mobiles);
}

//budget 

// const budgets = menu.querySelectorAll("div[name='budget2']");
// const budgetScale = [];
// budgets.forEach(function(budget){
//     const rangevalue = budget.querySelector("#rangeValue");
//     if(option1 === 0){
//         budgetScale.push();
//     if(option2 )
//     }
// });

    // colorCheckboxes.push(checkbox.id)