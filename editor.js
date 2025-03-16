//photo-editor
const fileInput = document.querySelector(".file-input");    
const chooseImg= document.querySelector(".choose-img");    
const saveImg = document.querySelector(".save-img");    
const previewImg = document.querySelector(".photoPlaceholder img");

const filterOptions = document.querySelectorAll(".filter button");
const filterName = document.querySelector(".filter-info .name");
const filterValue = document.querySelector(".filter-info .value");
const filterSlider = document.querySelector(".slider input");

const rotateOption = document.querySelectorAll(".rotateButtons button");
const resetFilter = document.querySelector(".reset-filter");

let brightness = "100";
let saturation = "100";
let inversion= "0";
let grayscale = "0";

let rotate = 0;
let flipHorizontal = 1;
let flipVertical = 1;
const applyFilter = () => {
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
}

const loadImg = () => {
    let file = fileInput.files[0]
    if (!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", () => {
    })
}
rotateOption.forEach(option => {
    option.addEventListener("click", () => {
        if(option.id === "left") {
            rotate -= 90
        } else if (option.id === "right"){
            rotate +=90 
        } else if (option.id === "horizontal"){
            flipHorizontal = flipHorizontal === 1 ? -1 : 1
        } else {
            flipVertical = flipVertical === 1 ? -1 : 1
        }
        
        applyFilter()
    })
});

filterOptions.forEach((option) => { 
    option.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active")
        option.classList.add("active")
        filterName.innerText = option.innerText
        console.log(option.id)
        if(option.id === "brightness"){
            filterSlider.max = "200"
            filterSlider.value = brightness
            filterValue.innerText = `${brightness}%`
        }else if(option.id === "saturation"){
            filterSlider.max = "200"
            filterSlider.value = saturation
            filterValue.innerText = `${saturation}%`
        }else if(option.id === "inversion"){
            filterSlider.max = "100"
            filterSlider.value = inversion
            filterValue.innerText = `${inversion}%`
        }else{
            filterSlider.max = "100"
            filterSlider.value = grayscale
            filterValue.innerText = `${grayscale}%`
        }
    })

})

const filterUpdate = () => {
    filterValue.innerText = `${filterSlider.value}%`
    const selectedFilter = document.querySelector(".filter .active")
    if(selectedFilter.id === "brightness"){
        brightness = filterSlider.value
    } else if(selectedFilter.id === "saturation"){
        saturation = filterSlider.value
    } else if(selectedFilter.id === "inversion"){
        inversion = filterSlider.value
    } else{
        grayscale = filterSlider.value
    }
    applyFilter()
}

const resetFilterbtn = () => {
    brightness = "100";
    saturation = "100";
    inversion= "0";
    grayscale = "0";
    rotate = 0;
    flipHorizontal = 1;
    flipVertical = 1;

    filterOptions[0].click()
    applyFilter()

}

resetFilter.addEventListener("click", resetFilterbtn)

filterSlider.addEventListener("input", filterUpdate)

chooseImg.addEventListener("click", () => {
    fileInput.click()
})

fileInput.addEventListener("change", loadImg);