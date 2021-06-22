function fa(){
    document.querySelector(".title").classList.toggle("title");
}
document.querySelector("button").addEventListener("click",function() {
    let tagh1 = document.querySelector("h1");
    tagh1.classList.toggle("title");
    if(tagh1.className == "title")
        {tagh1.innerHTML="<em>Bye</em>";}
        //<em>tag是斜体
    else
    {
        tagh1.innerHTML="Hello";
    }
});