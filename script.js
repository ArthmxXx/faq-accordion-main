let question =document.getElementsByClassName('hide');
let parants =document .getElementsByClassName("par");


function  ShowElemnts(id){

    let showDes=document.getElementById(id).getElementsByClassName('hide')[0];
    let showImg =document.getElementById(id).getElementsByClassName('img')[0];
    if(showDes.hasAttribute('id'))
        {
            showDes.removeAttribute('id');
            showImg.src="assets/images/icon-plus.svg";
        }
        else{
            showDes.setAttribute('id','show');
            showImg.src="assets/images/icon-minus.svg";
        }




  
}