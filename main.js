canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=150;
rover_height=100;
rover_X=10;
rover_Y=5;
rover_image="rover.png";
background_image="mars.jpg";

function add(){
    background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=background_image;

    rover_img=new Image();
    rover_img.onload=uploadRover;
    rover_img.src=rover_image;
}

function uploadBackground (){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}

function uploadRover (){
    ctx.drawImage(rover_img,rover_X,rover_Y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown (e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="37"){
        //left();
        console.log("left");
    }

    if (keyPressed=="38"){
        //up();
        console.log("up");
    }

    if (keyPressed=="39"){
        //right();
        console.log("right");
    }

    if (keyPressed=="40"){
        //down();
        console.log("down");
    }
}


