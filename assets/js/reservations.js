
i=0;
aller = "";
price = 0;

function send(){
    window.alert("Message envoyé");
}

function hideRetour(){
    document.getElementById("goback_date").disabled = true;
    document.getElementById("aretour").style.backgroundColor = "rgb(184, 184, 184)";
    document.getElementById("asimple").style.backgroundColor = "#98c593";
    document.getElementById("goback_date").value = "";
    aller ="simple";
}

function showRetour(){
    document.getElementById("goback_date").disabled = false;
    document.getElementById("asimple").style.backgroundColor = "rgb(184, 184, 184)";
    document.getElementById("aretour").style.backgroundColor = "#98c593";
    aller ="retour";
}

function changeMin(){
    newmin = document.getElementById("go_date").value;
    document.getElementById("goback_date").min = newmin;
}

function resetRetour(){
    document.getElementById("goback_date").value = "";
}

function orderDate(dat){
    day = dat.charAt(8).concat(dat.charAt(9));
    month =dat.charAt(5).concat(dat.charAt(6));
    year =dat.charAt(0).concat(dat.charAt(1)).concat(dat.charAt(2)).concat(dat.charAt(3));
    fdat =day.concat("/").concat(month).concat("/").concat(year);
    return fdat;
}

function getRand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function Reserver(){
    var np =0;

    prenom = document.getElementById("fname").value;
    nom = document.getElementById("name").value;
    p1 = document.getElementById("start").value;
    d1 = document.getElementById("go_date").value;
    p2 = document.getElementById("end").value;
    d2 = document.getElementById("goback_date").value;
    shipp = document.getElementById("ships");
    sh = shipp.value;
    sss = ships.options[ships.selectedIndex].id;
    if(prenom !=""){
        if(nom !=""){
            if(p1 !=""){
                if(d1 !=""){
                    if(p2 !=""){
                        if(sh !=""){
                                    
                            newr = document.createElement("div");
                            newr.className = "one_res";

                            txt1 = document.createElement("h1")
                            rn = getRand(100000,999999);
                                    
                            f1 = "Réservation n°".concat(rn).concat(" au nom de ").concat(prenom).concat(" ").concat(nom);
                            txt1.textContent = f1;
                            newr.appendChild(txt1);

                            txt2 = document.createElement("h1");
                                    
                            f2 = "Départ de ".concat(p1).concat(" le ").concat(orderDate(d1));

                            if(d2!=""){
                                f2 = f2.concat(", ").concat("Retour de ").concat(p2).concat(" le ").concat(orderDate(d2));
                            }
                            
                            txt2.textContent = f2;
                            newr.appendChild(txt2);

                            txt3 = document.createElement("h1");
                                    
                            f3 = "À bord du ".concat(sh); 
                            txt3.textContent = f3;
                            newr.appendChild(txt3);

                            maindiv = document.getElementById("the_res");

                            if(d2 == ""){
                                if(aller == "simple"){
                                    maindiv.appendChild(newr);
                                    i=i+1;
                                    newr.id = "op";

                                    if(sss == "a"){
                                        np = np + 15;
                                    }else if(sss == "b"){
                                        np = np + 8;
                                    }else if(sss == "c"){
                                        np = np + 1;
                                    }
                                    
                                }
                                else if(aller == "retour"){
                                    window.alert("Il manque des informations !");
                                }
                            }
                            else if(d2 != ""){
                                if(aller == "retour"){
                                    maindiv.appendChild(newr);											
                                    i=i+1;
                                    newr.id = "op";

                                    if(sss == "a"){
                                        np = np + 15;
                                    }else if(sss == "b"){
                                        np = np + 8;
                                    }else if(sss == "c"){
                                        np = np + 1;
                                    }
                                    np = np*2;
                                }
                            }
                            price =price + np;

                            var strp = price.toString();
                            var newpay = "Payer le total :".concat(strp).concat(" millions");
                            var payb = document.getElementById("pay");
                            payb.textContent = newpay; 

                        }else{
                            window.alert("Il manque des informations !");
                        }				
                    }else{
                        window.alert("Il manque des informations !");
                    }						
                }else{
                    window.alert("Il manque des informations !");
                }						
            }else{
                window.alert("Il manque des informations !");
            }						
        }else{
            window.alert("Il manque des informations !");
        }						
    }else{
        window.alert("Il manque des informations !");
    }
}

function deleteRes(){
    var parent = document.getElementById("the_res");
    for(let j = 0; j<i; j++){
        var child = document.getElementById("op");
        var throwaway = parent.removeChild(child);
    }
    var payb = document.getElementById("pay");
    payb.textContent = "Payer le total";
    console.log(payb.textContent);
    i = 0;
    price = 0;
}

function payer(){
    if(i !=0){
        window.alert("Votre compte à bien été débité. Bon voyage !");
    }
}
