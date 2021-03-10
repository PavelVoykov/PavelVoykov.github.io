// Creating variables
var myX = 370, myY = 200,hilkaX=330,hilkaY=587,posokaUgul,posokaX=0,posokaY=3,score=0,level=1,backX=-1;
var Top4e = new Image(300,168)
Top4e.src='https://i.pinimg.com/originals/97/7b/cd/977bcdeaa028f7350095fa3d5d032584.png'
var Oblak = new Image()
Oblak.src = 'https://piskel-imgstore-b.appspot.com/img/1c05c800-2043-11eb-a2fa-99fb3dfd2b86.gif'
function update() {
	if(backX<1){
		backX++;
	}
	if(backX>-1){
		backX=-1;
	}
    if(level==11){
posokaY=NaN
 }
    
    if(score+1>10*level){
    level=level+1;
        myX=370
        myY=150
        posokaY = -(3+level/20)
        posokaX = 0
        }

    
hilkaX=mouseX-200
    if(hilkaX+100>800){
        hilkaX=700;
    }
        if(hilkaX<0){
        hilkaX=0;
    }
    
    myY=myY+posokaY;
    myX=myX+posokaX;
    if(myY+20>=hilkaY && myX+30>=hilkaX && myX<=hilkaX+100){
    posokaY=posokaY*(-1)
    posokaX=(Math.random()*10)-5;
      score=score+1;
        
    }else{  
        if(myY+12>600){
        myY=150;
        myX=370;
        score=score-1;
            posokaX=0;
            posokaY=3+level/20;
           
    }
        
         }
   
           if(myY<480){
    posokaY=posokaY+level/10;
    }
  if(myX<=0){
        posokaX=posokaX*(-1);
    }
    if(myX+30>=800){
        posokaX=posokaX*(-1);
    }
 
    }

function draw() {
       context.font='80px serif';
    context.fillStyle='#ff004c';
    context.fillText('I Love You',230,320);
    context.fill();
	context.beginPath();
    context.drawImage(Top4e,myX,myY,30,30);
    context.fillStyle='red';
    context.fillRect(hilkaX, hilkaY, 100, 10);
     context.font='48px serif';
    context.fillStyle='#FF00A2';
    context.fillText('Kisses From ',450,40)
    context.fillText('The Creator:',450,80)
    context.fillText(score,720,80);
       context.font='48px serif';
    context.fillStyle='#00FF93';
    context.fillText(level,175,50);
    context.fillText('Level:',50,50);
    context.fillStyle='red'
    context.fillRect(0,0,3,800);
    context.fillRect(797,0,3,600)
    context.fillStyle='blue'
    context.fillRect(0,597,800,3)
       if(level==11){
    context.fillRect(0,0,800,600)
    context.fillStyle='red'
    context.font='460px serif';
    context.fillText('Win',3,400);
         context.font='48px serif';
    context.fillStyle='#FF00A2';
     context.fillText('Kisses From ',255,540)
    context.fillText('The Creator:',250,580)
    context.fillText(score,500,580);
       context.font='48px serif';
    context.fillStyle='#00FF93';
    context.fillText(level-1,430,500);
    context.fillText('Level:',300,500);

   }
	
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);

};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

	