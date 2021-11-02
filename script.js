function compute()
{
    let p = document.getElementById("principal").value;
    if(p == "" || p <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    
    let i = document.getElementById("sliderRate").value;
    
    let t = parseInt(document.getElementById("years").value);
    const d = new Date();
    let year = d.getFullYear();
    let maturityYear = year + t;

    let r = ((p * i) / 100) * t;
    
    let retVal = "If you deposit " + '<mark>'+p+'</mark>' + " at an interest rate of " + '<mark>'+i+'%'+'</mark>' + ", you will receive an amount of " + '<mark>'+r+'</mark>' + " in the year " + '<mark>'+maturityYear+'</mark>'+'.';
    document.getElementById("computedInterest").innerHTML = retVal;
}

function updateSlider()
{
    var display = document.getElementById("rate").value;
    document.getElementById("sliderRate").value = display+'%';
}
        