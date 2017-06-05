var x=0;
var status="on"

function add(){
	x+=1;
	document.getElementById("counter").innerHTML=x;

	if(status=="on"){
		document.getElementById("bell").currentTime = 0;
		document.getElementById("bell").play();
	}
}

function sub(){
	x-=1;
	document.getElementById("counter").innerHTML=x;
}

function reset(){
	var tmp=document.getElementById("val").value;
	if(isFinite(tmp)){
		x=Number(tmp);
		document.getElementById("counter").innerHTML=x;
	}
}

function change(){
	if (status=="on"){
		var img=document.getElementById("speaker").src="../img/speaker_off.png"
		status="off"
	}else{
		var img=document.getElementById("speaker").src="../img/speaker_on.png"
		status="on"
	}
}
window.document.onkeydown = keyDown;
window.document.onkeyup = keyUp;
var map = {37:false, 39:false};
var unlock = {37:true, 39:true};


function keyDown(){
 	if (event.keyCode in map){
		map[event.keyCode] = true;
		if (map[37] && unlock[37]) {
			sub();
            unlock[37] = false;
        }
        
		if (map[39] && unlock[39]) {
			add();
			unlock[39] = false;
        } 
	}
}

function keyUp(){
	if (event.keyCode in map){
		map[event.keyCode] = false;
		unlock[event.keyCode] = true; 
	}
}