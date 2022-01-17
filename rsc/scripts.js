var falling = true;

TweenLite.set("#container",{perspective:300});
TweenLite.set("img",{xPercent:"-50%", yPercent:"-50%"});

var total=30;
var container = document.getElementById("container"), w = window.innerWidth, h = window.innerHeight;

let cursos = ['../img/logos/css3.png','../img/logos/html5.png','../img/logos/ionic.png','../img/logos/react.png',
'../img/logos/ai.png','../img/logos/angular.png','../img/logos/azure.png','../img/logos/blueprism.png',
'../img/logos/c.png','../img/logos/cosmosdb.png','../img/logos/docker.png','../img/logos/golang.png',
'../img/logos/gsap.png','../img/logos/nodejs.png','../img/logos/oracle.png',
'../img/logos/python.png','../img/logos/sass.png','../img/logos/xd.png',
'../img/logos/knime.png']

for (i=0; i<total;i++){
    var Div = document.createElement('div');
    let imagen = cursos[Math.round(Math.random()*20)];
    Div.style.backgroundImage= `url(${imagen})`;
    Div.style.backgroundSize = "100% 100%";
    TweenLite.set(Div,{attr:{class:'dot'}, x:R(0,w), y:R(-200,-150),z:R(-200, -200)});
    container.appendChild(Div);
    animm(Div);
}

function animm(elm){
    
    TweenMax.to(elm, R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
    TweenMax.to(elm, R(6,8),{x:'+=100', rotationZ:R(0,360), repeat:-1, yoyo:true,ease: Sine.easeInOut});
}

function R(min,max){
    return min+Math.random()*(max-min);
}

