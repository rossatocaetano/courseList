document.querySelector("#buscar").addEventListener("click", ()=>{
    let searchLink = document.querySelector("#searchlink").value;
    window.location = `#${searchLink}`;
})