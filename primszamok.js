window.addEventListener('load',init)
function init(){
    document.getElementById("listaz").addEventListener('click',kiir)
}
function kiir(){
    document.getElementById("lista").innerHTML=""
    let primszamok=[];
    //e.preventDefault();
    let kisebb=parseInt(document.getElementById("tol").value);
    let nagyobb=parseInt(document.getElementById("ig").value);
    if(kisebb>=nagyobb){
        alert("Nem jó számokat adtál meg!");
    }
    else{
        primszamok=[];
        for(let i=kisebb;i<=nagyobb;i++){
            prim=true;
            for(let j=2;j<i;j++){
                if(i%2==0){
                    prim=false;
                    break;
                }
            }
            if(prim){
                primszamok.push(i);
            }
        }
        console.log(primszamok)
        let radiotomb=document.getElementsByName("sorrend");
        sorrend=-1;
        for(elem of radiotomb){
            if(elem.checked){
                sorrend=elem.value;
            }
        }
        console.log(sorrend+" elem");
        if(sorrend==0){
            primszamok.reverse().forEach(element => {
                document.getElementById("lista").innerHTML+="<li>"+element+"</li>"
            });
        }
        else{
            primszamok.forEach(element => {
                document.getElementById("lista").innerHTML+="<li>"+element+"</li>"
            });
        }
    }
}