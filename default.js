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
        if (brandCheckboxes.includes(phone.Brand) && memoryCheckboxes.includes(phone.Memory) && colorCheckboxes.includes(phone.Color)) {
            mobiles.push(phone);
        }
       i
        
       
    });
   


    console.log(mobiles,mobile2);
}

//budget search bar

//