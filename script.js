const filters = {
    brightness: {
        value:100,
        min:0,
        max:200,
        unit:'%',
    }, 
    contrast: {    
        value:100,
        min:0,
        max:200,
        unit:'%',
    },
    exposure: {
        value:100,
        min:0,
        max:200,
        unit:'%',
    },
    saturation: {
        value:100,
        min:0,
        max:200,
        unit:'%',
    },
    hueRotation:{
        value:0,
        min:0,
        max:360,
        unit:'deg',
    },
    blur:{
        value:0,   
        min:0,
        max:20,
        unit:'px',
    },
    grayScale:{
        value:0,   
        min:0,
        max:100,
        unit:'%',
    },   
    sepia:{
        value:0,   
        min:0,
        max:100,
        unit:'%',
    },
    opacity:{
        value:100,   
        min:0,
        max:100,
        unit:'%',
    },
    invert:{
        value:0,   
        min:0,
        max:100,
        unit:'%',
    },
}

function createFilterElement(name,unit = '%',value,min,max){
    const div  = document.createElement('div');
    div.classList.add('filter');

    const input = document.createElement('input');
    input.type = 'range';
    input.min = min;
    input.max = max;
    input.value = value;
    input.id.name = name;

    const p = document.createElement('p');
    p.innerText = name;

    div.appendChild(p);
    div.appendChild(input);

    return div;
}

// Object.keys(filters).forEach(filter => {
//     // console.log(filter);
//     // console.log(filters[filter]);
// })

// Object.keys(filters).forEach((keys,values,h) => {
//     //console.log(keys,values,h);
//     console.log(keys,filters[keys]);

// });
const filtersContainer = document.querySelector('main section .right .filters');
Object.keys(filters).forEach(key => {
    const filterElement = createFilterElement(key,filters[key].unit,filters[key].value,filters[key].min,filters[key].max);
    // console.log(filterElement);
    filtersContainer.appendChild(filterElement);
})

const  imageCanvas = document.querySelector('#image-canvas')
const imageInput= document.querySelector('#image-input')
const canvasctx = imageCanvas.getContext("2d")
let file = null
let imgage = null
imageInput.addEventListener("change",(event)=>{
   // console.log("change event")
   file = event.target.files[0]
   const imagePlaceHolder = document.querySelector(".placeholder")
   imagePlaceHolder.style.display = "none";
   //console.log(file);
   const img = new Image()
   img.src = URL.createObjectURL(file)
   img.onload = ()=>{
    image = img;
    imageCanvas.width = img.width;
    imageCanvas.height = img.height;
    canvasctx.drawImage(img,0,0)
   }

})