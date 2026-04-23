function result() {
    let m=parseFloat(document.getElementById('math').value)||0;
    let e=parseFloat(document.getElementById('english').value)||0;
    let s=parseFloat(document.getElementById('science').value)||0;
    let h=parseFloat(document.getElementById('history').value)||0;
    let a=parseFloat(document.getElementById('art').value)||0;

    let total=m+e+s+h+a;
    let avg=total/5;

    document.getElementById('Average').innerText=avg;

    if(m>100||e>100||s>100||h>100||a>100||m<0||e<0||s<0||h<0||a<0){
        alert("قيمة خطأ")
    }
    else{
        document.getElementById('Average').innerText=avg;
         let status = document.getElementById('value');
    if (avg >= 50) {
        status.innerText = "Passed ✅";
        status.style.color = "gray";
    } else {
        status.innerText = "Failed ❌";
        status.style.color = "red";
    } if (avg >= 65) {
        status.innerText = "C ✅";
        status.style.color = "gray";
    } 
    if (avg >= 75) {
        status.innerText = "B ✅";
        status.style.color = "green";
    }
    if (avg >= 85) {
        status.innerText = "A ✅";
        status.style.color = "green";
    }
    if (avg >= 95) {
        status.innerText = "A+ ✅";
        status.style.color = "green";
    }
    }

}



