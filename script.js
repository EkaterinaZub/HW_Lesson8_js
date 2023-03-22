"Use strict"



let lang = document.querySelector('html');
lang.setAttribute('lang', 'en');



let title = document.createElement('title');
title.innerHTML = 'New Document';
console.log(title);

let metaUtF8 = document.createElement('meta');
metaUtF8.setAttribute('charset', 'UTF-8');
console.log(metaUtF8);

let meta2 = document.createElement('meta');
meta2.setAttribute('http-equiv', 'X-UA-Compatible');
meta2.setAttribute('content', 'IE=edge');

console.log(meta2);
let meta3 = document.createElement('meta');
meta3.setAttribute('name', 'viewport');
meta3.setAttribute('content', 'width=device-width, initial-scale=1.0');
console.log(meta3);





document.head.prepend(metaUtF8);
metaUtF8.after(meta2);
meta2.after(meta3);
meta3.after(title);




let div = document.createElement('div');
div.className = "main";
document.body.prepend(div);
// console.log(document.querySelector('body'))


let style = document.createElement('style');
document.head.append(style);



let h1 = document.createElement('h1');
h1.className = "header";
h1.innerHTML = 'Choose Your Option';
div.prepend(h1);
console.log(h1);





let span = document.createElement('span');
span.className = "text";
span.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
div.append(span);



let div2 = document.createElement('div');
div2.className = "cards";
div.after(div2);

let div3 = document.createElement('div');
div3.className = "card1";
div2.prepend(div3);

let spanfree = document.createElement('span');
spanfree.className = "freelancer";
spanfree.innerHTML = 'FREELANCER'
div3.prepend(spanfree);

let h1Initially = document.createElement('h')
h1Initially.className = "header_initially";
h1Initially.innerHTML = 'Initially designed to ';
div3.append(h1Initially);

let text = document.createElement('span');
text.className = "text";
text.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
div3.append(text);

let button = document.createElement('button');
button.className = "button";
button.innerHTML = 'START HERE'
div3.append(button)




let div4 = document.createElement('div');
div4.className = "card2";
div2.append(div4);

let spanstud = document.createElement('span');
spanstud.className = "studio";
spanstud.innerHTML = 'STUDIO'
div4.prepend(spanstud);

let h1designed = document.createElement('h')
h1designed.className = "header_designed";
h1designed.innerHTML = 'Initially designed to ';
div4.append(h1designed);

let text2 = document.createElement('span');
text2.className = "text2";
text2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
div4.append(text2);

let button2 = document.createElement('button');
button2.className = "button2";
button2.innerHTML = 'START HERE'
div4.append(button2)




style.innerHTML = `
     .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
}

     .header {
         font-family: 'Arvo';
         font-size: 36px;
         font-weight: 400;
         color: #212121;
         margin-bottom: 5px;
        
        }
        
     .text {
        font-family: 'OpenSans';
        font-size: 14px;
        color: #9FA3A7;
        
}
     .cards{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 25px;
        
     }

     .card1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #E5E5E5;
        border-radius: 4px;
        width: 401px;
         height: 480px;
         
     }
     .card2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color:  #8F75BE;
        align-items: center;
        width: 401px;
         height: 480px;
         border-radius: 4px;

     }
     .freelancer{
        font-family: 'Montserrat';
        font-size: 12px;
        font-weight: 700;
        color:  #9FA3A7;
        margin-bottom: 19px;
     }
     .header_initially{
        font-family: 'Arvo';
         font-size: 36px;
         font-weight: 400;
         text-align: center;
         margin-bottom: 25px;
         width: 210px;
         height: 92px;

     }
     .header_designed{
        font-family: 'Arvo';
         font-size: 36px;
         font-weight: 400;
         color:  #FFFFFF;
         margin-bottom: 25px;
         text-align: center;
         width: 210px;
         height: 92px;

     }
     .text{
        font-family: 'OpenSans';
        font-size: 12px;
        color:  #9FA3A7;
        margin-bottom: 25px;
        text-align: center;
        
        width: 210px;
         height: 44px;
     }

     .text2{
        font-family: 'OpenSans';
        font-size: 12px;
        color:  #9FA3A7;
        margin-bottom: 25px;
        text-align: center;
        color:  #FFFFFF;
        width: 210px;
         height: 44px;

     }
     .button{
        border: 3px solid #FFC80A;
        border-color: #FFC80A;
        background-color: #FFFFFF;
        width: 147px;
        height: 46px;
        border-radius: 40px;
     }
     .button2{
        border: 3px solid #FFC80A;
        border-color: #FFC80A;
        color:  #FFFFFF;
        width: 147px;
        height: 46px;
        border-radius: 40px;
        background-color: #8F75BE;
     }
     .studio{
        font-family: 'Montserrat';
        font-size: 12px;
        font-weight: 700;
        color:  #FFC80A;
        margin-bottom: 19px;
     }
`;


