var marker=document.querySelector('#marker');
    var item=document.querySelectorAll('.menu a');
    function indicator(e){
        marker.style.left=e.offsetLeft+"px";
        marker.style.width=e.offsetWidth+"px";
        e.style.color="#000";
    }
    item.forEach(link => {
        link.addEventListener('click',(e)=>{
            indicator(e.target);
        })
    });