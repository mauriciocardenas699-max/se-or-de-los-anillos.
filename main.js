let boton = document.getElementById("Enviar");
boton.addEventListener("click", () => {
    console.log("funciona");

    let conta = 0;

    let rc1 = document.getElementById("correcto1").checked;
    let rc2 = document.getElementById("correcto2").checked;
    let rc3 = document.getElementById("correcto3").checked;
    let rc4 = document.getElementById("correcto4").checked;
    let rc5 = document.getElementById("correcto5").checked;
    let rc6 = document.getElementById("correcto6").checked;
    let rc7 = document.getElementById("correcto7").checked;
    let rc8 = document.getElementById("correcto8").checked;
    let rc9 = document.getElementById("correcto9").checked;
    let rc10 = document.getElementById("correcto10").checked;

    if (rc1 == true) 
        {
            conta++;
        }
    if (rc2 == true) 
        {
            conta++;
        }
    if (rc3 == true) 
        {
            conta++;
        }
    if (rc4 == true) 
        {
            conta++;
        }
    if (rc5 == true) 
        {
            conta++;
        }
    if (rc6 == true) 
        {
            conta++;
        }
    if (rc7 == true) 
        {
            conta++;
        }
    if (rc8 == true) 
        {
            conta++;
        }
    if (rc9 == true) 
        {
            conta++;
        }
    if (rc10 == true) 
        {
            conta++;
        }

    console.log(conta);

    localStorage.setItem("correctas", conta);

    window.location.href = "index3.html";
});
