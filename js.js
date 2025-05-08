// Header => the search

//making the search bar appear
let searchIcon = document.querySelector(".search-icon");
let searchBox = document.querySelector(".search-box");

searchIcon.addEventListener("click",()=>{
    searchBox.classList.toggle("hidden");
})

//search
function searchFun(){
    let Search = document.querySelector(".search-bar").value.toLowerCase();
    let Result = document.querySelector(".searchResults");
    Result.innerHTML =''; //to clear previous results 

    let items = ['Services','Portfolio','About','Pricing','Contact']  //search items

    let results = items.filter(item => item.toLowerCase().includes(Search));

    if(results.length>0){
        results.forEach(item=>{
            let resultItem = document.createElement('p');
            resultItem.textContent=item;
            Result.appendChild(resultItem);
        })
    } else {
        Result.textContent='No results found'
    }
}

//-------------
//image slider

let landing = document.querySelector(".landing")
let images = [
    'img/landing.jpg','img/M2.jpeg','img/M.jpeg'
];
let currentI = 0;

document.querySelector(".prevBtn").addEventListener('click',()=>{
    currentI=(currentI-1+images.length) %images.length;
    landing.style.backgroundImage=`url(${images[currentI]})`;

})

document.querySelector(".nextBtn").addEventListener('click',()=>{
    currentI=(currentI+1)%images.length;
    landing.style.backgroundImage=`url(${images[currentI]})`;

})

landing.style.backgroundImage=`url(${images[currentI]})`;

//--------------
//arrow
let Top = document.querySelector(".top");

window.onscroll=function(){
    if (document.body.scrollTop>300 || document.documentElement.scrollTop>300) {  //or wndow.scrollY > 300  !!
        Top.style.display="block";
    }else{
        Top.style.display="none";
    }
}

Top.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})