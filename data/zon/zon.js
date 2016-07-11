var zon="start"
function getImage(image){
	var file="start"
	while( zon.indexOf(file)>-1  ){
		file = "zon"+(1+parseInt(Math.random()*20))
	}
	zon+=";"+file
	image.src="zon/"+file+".jpg"
	image.onload=""
}

function showMappageFromFrame(){
	if (top){
		if ( top.elem('loginnaam').innerHTML!="Inloggen" ){
			top.elem('datapage').style.display='none'
			top.elem('mappage').style.display='block'
			top.elem('mappage').style.visibility='visible'
		}else{
			top.elem('documentation').src = "login.html"
		}
	}
}
function zonnetje(){
	var goback="<br><span class='clickable' style='padding:5px;border-radius:3px' onclick='showMappageFromFrame()'> <img style='position:relative;bottom:-5px;opacity:0.5' width=20px src='../image/goback.png'> terug naar de kaart</span><br><br>"
	
	if (location.href.indexOf('duurzame')>-1){goback=""}
	if (location.href.indexOf('login')>-1){goback=""}
	
	var content='<div id="zon">'+
				'<img id="zon1" onLoad="getImage(this)" src="zon/zon0.jpg" class="zonimg"><br>'+
				'<img id="zon2" onLoad="getImage(this)" src="zon/zon0.jpg" class="zonimg"><br>'+
				'<img id="zon3" onLoad="getImage(this)" src="zon/zon0.jpg" class="zonimg"></div>'
	document.write(goback+content)
}
