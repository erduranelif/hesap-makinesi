const ekran = document.getElementById("ekran");
const butonlar = document.querySelectorAll(".btn");
//burda keyboard events kullandım klavyeye basınca tetiklensin
document.addEventListener("keydown",function(klvye){
  if(/[0-9+\-*/.]/.test(klvye.key)){
    ekran.value+=klvye.key;
  }
  else if(klvye.key==="Enter"){
    try{
      hesapla();
    }
    catch{
      ekran.value="Hata";
    }
    
  }
})

function hesapla(){
    const ekran=document.getElementById("ekran");

    //undefined hatası vermemek içiin yazdım
    if(!ekran.value){
        return null ;
    }
    //SON HESAPLAMAYI YAPMAK İÇİN
    function sonhesap(a){
        return ekran.value=eval(a);
    }
    //TRİGONOMOTRİK KISIMDAKİ İŞLEMLER İÇİN (SAĞINDA VE SOLUNDA SAYI YA DA KARAKTER OLUNCA HESPALAMA YAPMIYORDU)
    function trigohesap(eslesme,fonksiyon){
    if (!eslesme) {
      ekran.value = "Hata:fonksiyon sonrası sayı bulunamadı";
      return null;
    }
    const dereceStr = eslesme[1];  // Parantez içindeki sayı kısmı
    const derece = parseFloat(dereceStr);
    if (isNaN(derece)) {
      ekran.value = "Hata: geçersiz sayı";
      return null;
    }
    const radyan = derece * (Math.PI / 180);
    let sonuc = fonksiyon(radyan);
    return a =ekran.value.replace(eslesme[0],sonuc);
    }

    //REGEX KULLANMAK ZORUNDAYDIM
    //Regex ile trigonometrik kısmı alıp yanındaki sayıyı aldık 
    //regexin çalışma mantığı dizi şeklinde çalışır 
    //[0]. indeksi görünen metin sin30 mesela
    //[1]. indeksi parantez içi kısmı yani derecesi olmuş oluyor
    //[2]. indeksi ise parantez içi kısmı yine ama bu sefer küsüratı da alıyor ya da undefined döndürüyor
     if (ekran.value.includes("sin")) {//includes=>sinin olup olmadığını kontrol etmek için 
    // "sin" ile başlayan ve sayı takip eden ilk ifadeyi yakala
    const eslesme = ekran.value.match(/sin(\d+(\.\d+)?)/);
    ekran.value=trigohesap(eslesme,Math.sin);
    sonhesap(ekrann.value);}


    else if (ekran.value.includes("cos")) {
    const eslesme = ekran.value.match(/cos(\d+(\.\d+)?)/);
    ekran.value=trigohesap(eslesme,Math.cos);
    sonhesap(ekran.value);
}
    else if (ekran.value.includes("tan")) {
    
    const eslesme = ekran.value.match(/tan(\d+(\.\d+)?)/);
    ekran.value=trigohesap(eslesme,Math.tan);
    sonhesap(ekran.value);}
    else if(ekran.value.includes("e")){
    let e =ekran.value.replace("e",Math.E)
    sonhesap(e);
  }
    else if(ekran.value.includes("π")){
    let pi =ekran.value.replace("π",Math.PI)
    sonhesap(pi);
    }
    else if (ekran.value.includes("log")) {
    
    const eslesme = ekran.value.match(/log(\d+(\.\d+)?)/);
    let sayi = parseFloat(eslesme[1]);
    if (isNaN(sayi)) {
        ekran.value = "Hatalı ifade";
        return;
    }
    let log=Math.log10(sayi);
    let logson=ekran.value.replace(eslesme[0],log);
    sonhesap(logson);}
    else{
        sonhesap(ekran.value);
    }
  } 

function silme(){
  const ekran=document.getElementById("ekran");
  ekran.value="";
}
const topla = function(){
  const ekran = document.getElementById("ekran");
  ekran.value = ekran.value + "+";
};
function cıkarma(){
  const ekran=document.getElementById("ekran");
  ekran.value=ekran.value+"-";
};
function carpma(){
  const ekran=document.getElementById("ekran");
  ekran.value=ekran.value+"*";
};
function bolme(){
  const ekran=document.getElementById("ekran");
  ekran.value=ekran.value+"/";
};
function sinhesap() {
  const ekran = document.getElementById("ekran");
  //ekran.value="Math.sin("+ekran.value+")";
  ekran.value += "sin";
  //ekran.value=ekran.value+"Math.sin";
  
}
function coshesap() {
  const ekran = document.getElementById("ekran");
  //ekran.value="cos"+ekran.value;
  // ekran.value="cos"+ekran.value;
  ekran.value += "cos";
}
function tanhesap() {
  const ekran = document.getElementById("ekran");
  ekran.value += "tan";
}
function esayısı(){
  const ekran = document.getElementById("ekran");
  ekran.value += "e";
}
function loghesap(){
  const ekran = document.getElementById("ekran");
  ekran.value += "log";
}
function pisayısı(){
  const ekran = document.getElementById("ekran");
  ekran.value += "π";}
function nokta(){
  const ekran = document.getElementById("ekran");
  ekran.value += ".";}



function setup(){
  const ekran = document.getElementById("ekran");
  const num0 = document.querySelector("#num0");
  const num1 = document.querySelector("#num1");
  const num2 = document.querySelector("#num2");
  const num3 = document.querySelector("#num3");
  const num4= document.querySelector("#num4");
  const num5 = document.querySelector("#num5");
  const num6 = document.querySelector("#num6");
  const num7 = document.querySelector("#num7");
  const num8 = document.querySelector("#num8");
  const num9 = document.querySelector("#num9");


  function sayiEkle(text){
    const oldValue = ekran.value;
    ekran.value = oldValue + text;
  };
    num0.addEventListener("click", function(){
    sayiEkle("0");
  });

  num1.addEventListener("click", function(){
    sayiEkle("1");
  });

  num2.addEventListener("click", function(){
    sayiEkle("2");
  });
  num3.addEventListener("click",function(){
    sayiEkle("3");
  })
  num4.addEventListener("click",function(){
    sayiEkle("4")
  })
  num5.addEventListener("click",function(){
    sayiEkle("5")
  })
  num6.addEventListener("click",function(){
    sayiEkle("6")
  })
    num7.addEventListener("click",function(){
    sayiEkle("7")
  })
    num8.addEventListener("click",function(){
    sayiEkle("8")
  })
    num9.addEventListener("click",function(){
    sayiEkle("9")
  }) 
  sembparantez1.addEventListener("click",function(){
    sayiEkle("(")
  });
  sembparantez2.addEventListener("click",function(){
    sayiEkle(")")
  });
};

setup();
hesapla();