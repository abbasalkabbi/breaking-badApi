const api ="https://www.breakingbadapi.com/api/characters"


//DATE 

async function get(){
    const response= await fetch(api);
    const date= await response.json();
    


    printdate(date);
    
   
    
    

}
const select=document.querySelector(".content select");
const name1=document.querySelector(".content h1");
const birthday=document.querySelector(".content h2");
const nickname=document.querySelector(".content h3");
const img=document.querySelector(".content img");
function printdate(date){
    
    select.innerHTML=`
    <option >please choice acter</option>
    ${date.map(char=>` <option >${char.name}</option>`)}
    
`

}

get();
async function getch(name) {
    
    const response= await fetch(`${api}?name=${name}`);
    const date= await response.json();
    name1.innerHTML=date[0].name;
    img.src=date[0].img;
    birthday.innerHTML=`birthday :${date[0].birthday}`;
    nickname.innerHTML=`nickname:${date[0].nickname}`;

}