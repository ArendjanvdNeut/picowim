
function elem(idname){
	if (document.getElementById(idname)){
		return document.getElementById(idname)
	}else{
		return document.getElementById('dummy')
	}
}

function gebselectie(){
	if (elem('radioAdminSelectie').checked){
		elem("adminselectie").style.display="block"
		elem("pcselectie").style.display="none"
	}
	if (elem('radioPostcodeSelectie').checked){
		elem("adminselectie").style.display="none"
		elem("pcselectie").style.display="block"
	}
}

function toggleDisplay(id){
	if (elem(id).style.display!='none'){
		elem(id).style.display='none'
	}else{
		elem(id).style.display='block'
	}
}
function toggleSize( id ){
	var thisElemHeight=elem( id ).offsetHeight
	var minheight = 27 //elem('Gebiedselectie_maxmin').offsetHeight
	if (thisElemHeight<50 ){
		elem( id ).style.height = 'auto'
		//icon max
		elem( id+"_maxmin" ).src='image/maximize.png'
	}else{
		elem( id ).style.height = minheight+'px'
		//icon min
		elem( id+"_maxmin" ).src='image/minimize.png'
	}
}

var dataArea=[]
function areaAdd(e,newarea){
	var seltest = elem('addByArea').value.trim()
	
	var startsearch=false
	if (e){
		switch (e.keyCode){ 
		case 27: elem('addByArea').value="" ;break // esc
		case 13: startsearch=true  ;break // enter
		//default: startsearch=true
		}
	}else{
		startsearch=true
		seltest=newarea.trim().toLowerCase()
	}
	//verwijder ":"
	seltest=seltest.replace(/:/g,"")
	
	//check if already selected and at least 4 characters
	var cursel = elem('selectresult').innerHTML
	if (seltest.length<4 || dataArea.indexOf(seltest) >-1) {
		startsearch=false
	}
	// go!
	if (startsearch){
		elem('selectresult').innerHTML+="<br><img src='image/loading.gif' width=15px> Data ophalen..."

		//maak wat extra ruimte
		elem('leftboxhelphide').style.display='none'
		
		//start de request, resultaat zit in PCdata
		elem('loadingsel').style.display='block'
		seltest = seltest.trim().toLowerCase()
		if (/^[0-9]{4} $/.test(seltest.substring(0,5))){
			seltest = seltest.replace(/ /g,"")
		} 

		//in log wegschrijven
		logLayer(seltest,'area')
		dataArea.push(seltest)
		selectieLayer( dataArea )  
	}
}

function saveDataArea(dataArea){
	var geblist="",div=""
	if (dataArea){
		for (var i = 0; i < dataArea.length; i++) {
			geblist += div+dataArea[i]
			div = "|"
		}
	}
	setCookie('picosel',geblist,300)	
}
function loaddataArea() {
	var storedgeblist=getCookie('picosel')
	if (storedgeblist){
		dataArea=storedgeblist.split("|")
		selectieLayer(dataArea)
	}
}

//toon de lijst met geselecteerde gebieden
function showResultList(){
	var settest, rowcontent = "<span><img onclick='areaDel([nr],this)' class='clickable' width=15px src='image/deletebox.png' title='verwijder'> [area]</span><span onclick='goto([coords])'> <img class='radio' src='image/navigation.png'> </span><br>"
	var allcontent="",content="",X=0,Y=0,Z=10
	if (dataArea){
		for (var j = 0; j < dataArea.length; j++) {
			seltest = dataArea[j] 
			var areaType = "onbekend"
			if (/^[0-9]{4}[a-z]{2}$/.test(seltest.toLowerCase())){areaType="Postcode6"} 
			if (/^[0-9]{4}[a-z]{1}$/.test(seltest.toLowerCase())){areaType="Postcode5"} 
			if (/^[0-9]{4}$/.test(seltest.toLowerCase())){areaType="Postcode4"} 
			if (strLeftCompare("gemeente",seltest)){areaType="Gemeente"}
			if (strLeftCompare("plaats",seltest)){areaType="Plaats"}
			if (strLeftCompare("wijk",seltest)){areaType="Wijk"}
			if (strLeftCompare("buurt",seltest)){areaType="Buurt"}
			//is de buurtnaam een buurt, plaats of gemeente?
			for (var i = 0; i < PCdata.length; i++) {
				//zoeken zonder de prefix buurt/wijk/plaats/gemeente
				if (areaType == "onbekend"){
					if (strLeftCompare( seltest, PCdata[i].properties.gemnaam) ){
						areaType="Gemeente"
						seltest = PCdata[i].properties.gemnaam
						X = parseInt(PCdata[i].properties.bbox[0])
						Y = parseInt(PCdata[i].properties.bbox[1])
						Z = 7
					}
					if (strLeftCompare( seltest, PCdata[i].properties.plaatsnaam) ){
						areaType="Plaats"
						seltest = PCdata[i].properties.plaatsnaam
						X = parseInt(PCdata[i].properties.bbox[0])
						Y = parseInt(PCdata[i].properties.bbox[1])
						Z = 8
					}
					if (strLeftCompare( seltest, PCdata[i].properties.wijknaam) ){
						areaType="Wijk"
						seltest = PCdata[i].properties.wijknaam
						X = parseInt(PCdata[i].properties.bbox[0])
						Y = parseInt(PCdata[i].properties.bbox[1])
						Z = 8
					}
					if (strLeftCompare( seltest, PCdata[i].properties.buurtnaam) ){
						seltest = PCdata[i].properties.buurtnaam
						areaType="Buurt"
						X = parseInt(PCdata[i].properties.bbox[0])
						Y = parseInt(PCdata[i].properties.bbox[1])
						Z = 8
					}
				}
				//zoeken met de prefix buurt/wijk/plaats/gemeente
				if(areaType == "Postcode6"){
					if (seltest == PCdata[i].properties.postcode){
						X = parseInt(PCdata[i].properties.bbox[0])
						Y = parseInt(PCdata[i].properties.bbox[1])
						Z = 10
					}
				}
				if(areaType == "Postcode5"){
					if (seltest == PCdata[i].properties.postcode.substring(0,5)){
						X = parseInt(PCdata[i].properties.bbox[0])
						Y = parseInt(PCdata[i].properties.bbox[1])
						Z = 10
					}
				}
				if(areaType == "Postcode4"){
					if (seltest == PCdata[i].properties.postcode.substring(0,4)){
						X = parseInt(PCdata[i].properties.bbox[0])
						Y = parseInt(PCdata[i].properties.bbox[1])
						Z = 9
					}
				}
				if(areaType == "Gemeente"){
					seltest = seltest.replace('gemeente',"").trim() 
					if (seltest == PCdata[i].properties.gemnaam){
						X = parseInt(PCdata[i].properties.bbox[0])
						Y = parseInt(PCdata[i].properties.bbox[1])
						Z = 6
					}
				}
				if(areaType == "Plaats"){
					seltest = seltest.replace('plaats',"").trim() 
					if (seltest == PCdata[i].properties.plaatsnaam){
						X = parseInt(PCdata[i].properties.bbox[0])
						Y = parseInt(PCdata[i].properties.bbox[1])
						Z = 7
					}
				}
				if(areaType == "Wijk"){
					seltest = leftReplace(seltest,'wijk').trim() 
					seltest = leftReplace(seltest,'wijk').trim() 
					if (seltest == PCdata[i].properties.wijknaam){
						X = parseInt(PCdata[i].properties.bbox[0])
						Y = parseInt(PCdata[i].properties.bbox[1])
						Z = 8
					}
				}
				if(areaType == "Buurt"){
					seltest = leftReplace(seltest,'buurt').trim() 
					if (seltest == PCdata[i].properties.wijknaam){
						X = parseInt(PCdata[i].properties.bbox[0])
						Y = parseInt(PCdata[i].properties.bbox[1])
						Z = 8
					}
				}
			}
			content = rowcontent.replace('[area]',areaType+":"+seltest)
			content = content.replace('[nr]',j)
			content = content.replace('[coords]', X+","+Y+","+Z )
			allcontent+=content
		}
		//toon de geselecteerde buurten
		elem('selectresult').innerHTML =allcontent
		//en spring naar de laatste
		goto(X,Y,Z)
	}else{
		elem('selectresult').innerHTML="</i>Nog niets geselecteerd</i><br>"
	}
	elem('loadingsel').style.display='none'
}

function leftReplace( name, part ){
	var result=name
	if (strLeftCompare(part,name)){
		result=name.substring(part.length)
	}
	return result
}

function areaDel(rownr,img){
	if (img){
		img.style.opacity=0.5
	}
	dataArea.splice(rownr,1)
	selectieLayer( dataArea )
}

function strCount(totaalstr, countstr){
	var result = 0
	if (countstr && totaalstr){
		var strarray = totaalstr.split(countstr)
		if (strarray){ result= ( strarray.length -1 ) }
	}
	return result
}

function help(event,text){
    var x = event.clientX;
    var y = event.clientY;
	if (x > (window.innerWidth-300)){x=x-300}
	
	elem('help').style.top=(y+50)+'px'
	elem('help').style.left=(x+50)+'px'
	elem('help').innerHTML=text
	//elem('help').style.display='block'
}
function delhelp(){
	elem('help').style.display='none'
}


/*
*** algemeen ***
  panden bigint,
  wnpnaam character varying(50),
  buurtnaam character varying(60),
  wijknaam character varying(60),
  gemnaam character varying(60),
  plaatsnaam character varying(60),
  postcode character(6),
  buurtcode character varying(8),
  adressen integer,
  bouwjaar integer,
  hfnc character varying(1),
  pandtype character varying(1),
  buurtgemnaam character varying(100),
  wijkgemnaam character varying(100),
  
*** model ***  
  pc6org character varying(6),
  geom_org geometry(MultiPolygon,28992),
  
  *** >>>> Label b <<<< ***
  inv_labelb numeric,						investering eenmalig per postcode in euro
  tvt_labelb numeric,						NIET GEBRUIKEN - terugverdientijd per postcode in jaren
  eurobesp_labelb numeric,					besparingen per jaar/postcode in euro
  m3besp_labelb numeric,					besparing Gas kuub per jaar
  co2besp_labelb numeric,					besparing CO2 per jaar
  inv_labelb_pand numeric,					NIET GEBRUIKEN - idem per pand
  eurobesp_labelb_pand numeric,				..
  m3besp_labelb_pand numeric,				..
  co2besp_labelb_pand numeric,				..

  velden: inv_labelb,eurobesp_labelb,m3besp_labelb,co2besp_labelb
  
  *** >>>> Label a <<<< ***
  inv_labela numeric,						
  tvt_labela numeric,
  eurobesp_labela numeric,
  m3besp_labela numeric,
  co2besp_labela numeric,
  inv_labela_pand numeric,
  eurobesp_labela_pand numeric,
  m3besp_labela_pand numeric,
  co2besp_labela_pand numeric,

  velden: inv_labela,eurobesp_labela,m3besp_labela,co2besp_labela

  
  *** >>>> Label 2stap <<<< ***
  inv_2labelstap numeric,
  tvt_2labelstap numeric,
  eurobesp_2labelstap numeric,
  m3besp_2labelstap numeric,
  co2besp_2labelstap numeric,
  inv_2labelstap_pand numeric,
  eurobesp_2labelstap_pand numeric,
  m3besp_2labelstap_pand numeric,
  co2besp_2labelstap_pand numeric,

  velden: inv_2labelstap,eurobesp_2labelstap,m3besp_2labelstap,co2besp_2labelstap
   
  *** >>>> huidige aansluitingen <<<< ****
  huidig_elk_netb numeric,					gemiddeld elektrictiets gebruik per postcode
  huidig_elk_netb_aansl numeric,			aantal elektriciteits aansluitingen
  huidig_gas_netb numeric,					gemiddeld gas gebruik per postcode
  huidig_gas_netb_aansl numeric,			aantal gas aansluitingen

  velden: huidig_elk_netb, huidig_elk_netb_aansl, huidig_gas_netb, huidig_gas_netb_aansl
  
  *** >>>> Zonnepotentie <<<< ***
  pv_output double precision,				opbrengst per jaar
  pv_kosten double precision,				investeringskosten in euro per postcode
  pv_kostenbesp double precision,			besparing euro per jaar/postcode
  pv_tvt double precision,
  pv_co2 double precision,					besparing CO2 per jaar/postcode
  
  pv_output_w double precision,				idem per pand
  pv_kosten_w double precision,
  pv_kostenbesp_w double precision,
  pv_tvt_w double precision,
  pv_co2_w double precision

  velden: pv_kosten,pv_kostenbesp,pv_co2

  */
  
/*

>>Zonnepotentie<<
pv_kosten: 0,
pv_kostenbesp: 0,
pv_tvt: 0,
pv_co2: 0,
pv_output: 0,

>>isolatie naar LabelB<<
inv_labelb: 122797.2,
besp_e_labelb: 2670.5659715639813,
tvt_labelb: 19.657006038247474,
co2_labelb: 2583.4823,
besp_labelb: 11611.156398104265,
*/


function allMeasure(thisMeasure){
	resultdata=[]
	//maar 1 isolatiemaatregel is mogelijk, zet de andere uit
	if (thisMeasure){
		//log het aanzetten van deze maatregel
		if (thisMeasure.checked==true){
			logLayer(thisMeasure.name,'measure')
		}
		if (thisMeasure.checked==true && strLeftCompare(thisMeasure.id,"MSR_label")){
			elem("MSR_label2stap").checked=false
			elem("MSR_labelCDEFGnaarA").checked=false
			elem("MSR_labelCDEFGnaarB").checked=false
			thisMeasure.checked=true
		}
	}
	Measure(elem("MSR_labelCDEFGnaarB"), "Van label CDEFG naar B" )
	Measure(elem("MSR_Zonnepotentie"), "Zonnepotentie" )
	Measure(elem('MSR_labelCDEFGnaarA'),"Van label CDEFG naar A+")
	Measure(elem('MSR_label2stap'),"Van label EFG 2 stappen beter")
}

var resultdata=[]
//PCdata bevat het resultaat van de selectie=lijst met postcodes
function Measure( thisMeasure, txt ){
	//is er een selectie
	if (PCdata) {
		if (thisMeasure.checked){
			//write to logfile
			var maatrCount=0
			var investering_pc6=0,investering_pand=0				// investering eenmalig
			var terugverdientijd_jaren=0							// terugverdientijd = investering / besparing
			var besparing_euro_pc6=0, besparing_euro_pand=0			// besparing euro per jaar
			var besparing_CO2_pc6=0,besparing_CO2_pand=0 			// besparing CO2 per jaar
			var besparing_energie_pc6=0,besparing_energie_pand=0	// besparing energie als percentage per jaar
			var netbeheerdersE=0;netbeheerdersG=0  					// energiegebruik nu
			var panden=0,adressen=0
			var units=""
			//bereken statistieken...
			for (var i = 0; i < PCdata.length; i++) {
				panden += PCdata[i].properties.panden
				adressen += PCdata[i].properties.adressen
				netbeheerdersG += PCdata[i].properties.huidig_gas_netb
				netbeheerdersE += PCdata[i].properties.huidig_elk_netb
				switch(txt) {
					case "Van label CDEFG naar B":
						//  velden: 	inv_labelb,eurobesp_labelb,m3besp_labelb,co2besp_labelb
						// 				huidig_elk_netb, huidig_elk_netb_aansl, huidig_gas_netb, huidig_gas_netb_aansl
						investering_pc6 += PCdata[i].properties.inv_labelb
						besparing_euro_pc6 += PCdata[i].properties.eurobesp_labelb
						besparing_CO2_pc6 += PCdata[i].properties.co2besp_labelb
						besparing_energie_pc6 += PCdata[i].properties.m3besp_labelb
						units=" m3"
						break;
					case "Van label CDEFG naar A+":
						investering_pc6 += PCdata[i].properties.inv_labela
						besparing_euro_pc6 += PCdata[i].properties.eurobesp_labela
						besparing_CO2_pc6 += PCdata[i].properties.co2besp_labela
						besparing_energie_pc6 += PCdata[i].properties.m3besp_labela
						units=" m3"
						break;
					case "Van label EFG 2 stappen beter":
						investering_pc6 += PCdata[i].properties.inv_2labelstap
						besparing_euro_pc6 += PCdata[i].properties.eurobesp_2labelstap
						besparing_CO2_pc6 += PCdata[i].properties.co2besp_2labelstap
						besparing_energie_pc6 += PCdata[i].properties.m3besp_2labelstap
						units=" m3"
						break;						
					case "Zonnepotentie":
						// velden : pv_kosten,pv_kostenbesp,pv_co2
						// 
						investering_pc6 += PCdata[i].properties.pv_kosten
						besparing_euro_pc6 += PCdata[i].properties.pv_kostenbesp
						besparing_CO2_pc6 += PCdata[i].properties.pv_co2
						besparing_energie_pc6 += PCdata[i].properties.pv_output
						units=" kWh"
						break;
					default:
				}
			}
			terugverdientijd_jaren = investering_pc6/besparing_euro_pc6
			investering_pand=investering_pc6/panden
			besparing_euro_pand=besparing_euro_pc6/panden
			besparing_CO2_pand=besparing_CO2_pc6/panden
			//besparing_energie_pand=besparing_energie_pc6/panden
			
			// staat deze maatregel al in de resultaat lijst? 
			// zo ja vervang die, maak anders een nieuwe entry
			maatrCount = searchIn(resultdata,txt,"maatregel")
			if (maatrCount==-1){maatrCount=resultdata.length} 
			resultdata[maatrCount] = {"maatregel":txt,
						"adressen" : adressen,
						"panden" : panden,
						"investering_pc6" : investering_pc6 ,
						"terugverdientijd_jaren" : terugverdientijd_jaren.toFixed(0) ,
						"besparing_euro_pc6" : besparing_euro_pc6 ,
						"besparing_CO2_pc6" : besparing_CO2_pc6 ,
			   			"besparing_energie_pc6" : besparing_energie_pc6,
						"investering_pand" : investering_pand ,
						"besparing_euro_pand" : besparing_euro_pand ,
						"CO2besparing_pand" : besparing_CO2_pand,
						"huidiggebruikE": netbeheerdersE,
						"huidiggebruikG": netbeheerdersG,
						"units": units						}
			calcResult()
		}else{
			maatrCount = searchIn(resultdata,txt,"maatregel")
			if (maatrCount!=-1){
				resultdata.splice(maatrCount,1)
			} 
			calcResult()
		}
	}
}

function searchIn(myArray, searchTerm, property) {
    for(var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
    }
    return -1;
}

function calcResult(){
	var i,content="",r1="", r2="",start="<table width=100% class='tbr'>", end="</table>"
	elem('resultcontent').innerHTML=""
	if (resultdata && resultdata.length>0){
		elem('aantallen').innerHTML = " voor " + addCommas(parseInt(resultdata[0].panden))+" panden en "+addCommas(parseInt(resultdata[0].adressen))+" adressen"
		r1 =	"<tr><th class='r1'>Verbruik</th>"+
					"<th class='rww'></th>"+
					"<th class='r2'>Energie Gas</th>"+
					"<th class='r2'>Energie Electra</th>"+
					"<th class='r2'>CO2</th>"+
					"<th class='rww'></th>"+
					"<th class='r4'>Investering</th>"+
					"<th class='r4'>Besparing</th>"+
					"<th class='rww'></th>"+
					"<th class='r5'>Terugverdientijd</th>"

		r2 = 	"<tr><td class='rw1'>Huidig verbruik</td><td class='rww'></td><td class='rw2'>[m3]</td><td class='rw2'>[kwh]</td>"+
				"<td class='rw2'></td><td class='rww'></td><td class='rw4'></td><td class='rw4'></td><td class='rww'></td><td class='rw5'></td></tr>"
		
		var nu_m3 = 0, nu_kwh = 0
		var bsp_m3 = 0, bsp_kwh = 0
		var inv =0, besp=0, jaren=0, co2=0
		for (i=0;i<resultdata.length;i++){
			content += "<tr>"
			content += "<td class='rw1'>Besparing "+resultdata[i].maatregel+ "</td>"
			content += "<td class='rww'></td>"
			r2=r2.replace("[m3]",addCommas(parseInt(resultdata[i].huidiggebruikG)) + " m3")
			r2=r2.replace("[kwh]",addCommas(parseInt(resultdata[i].huidiggebruikE))+ " kWh")
			nu_m3 = parseInt(resultdata[i].huidiggebruikG)
			nu_kwh = parseInt(resultdata[i].huidiggebruikE)
			if (resultdata[i].units==' m3'){
				content += "<td class='rw2'>"+
							"("+parseInt( resultdata[i].besparing_energie_pc6/resultdata[i].huidiggebruikG*100 )+"%) -"+
							addCommas(parseInt(resultdata[i].besparing_energie_pc6)) + resultdata[i].units+ "</td><td class='rw2'></td>"
				bsp_m3 += parseInt(resultdata[i].besparing_energie_pc6)
			}else{
				content += "<td class='rw2'></td><td class='rw2'>"+
							"("+parseInt( resultdata[i].besparing_energie_pc6/resultdata[i].huidiggebruikE*100 ) +"%) -"+
							addCommas(parseInt(resultdata[i].besparing_energie_pc6)) + resultdata[i].units+ "</td>"
				bsp_kwh += parseInt(resultdata[i].besparing_energie_pc6)
			}
			co2+=parseInt(resultdata[i].besparing_CO2_pc6)
			content += "<td class='rw2'>"+addCommas(parseInt(resultdata[i].besparing_CO2_pc6)) + " Kg</td><td class='rww'></td>"
			inv+=parseInt(resultdata[i].investering_pc6)
			content += "<td class='rw4'><span class='euro'>"+addCommas(parseInt(resultdata[i].investering_pc6)) + "</span></td>"
			besp+=parseInt(resultdata[i].besparing_euro_pc6)
			content += "<td class='rw4'><span class='euro'>"+addCommas(parseInt(resultdata[i].besparing_euro_pc6)) + "</span></td><td class='rww'></td>"
			jaren+=parseInt(resultdata[i].terugverdientijd_jaren)
			content += "<td class='rw5'>"+addCommas(parseInt(resultdata[i].terugverdientijd_jaren)) + " jaar</td>"
			content += "</tr>"

		}

		r3=	"<tr><td class='r1'>Totaal</td><td class='rww'></td><td class='r2'>"+addCommas(nu_m3-bsp_m3)+" m3</td><td class='r2'>"+addCommas(nu_kwh-bsp_kwh)+
			" kWh</td><td class='r2'>"+addCommas(co2)+" Kg</td><td class='rww'></td><td class='r4'><span class='euro'>"+addCommas(inv)+
			"</span></td><td class='r4'><span class='euro'>"+addCommas(besp)+"</span></td><td class='rww'></td><td class='r5'>"+jaren+" jaar</td></tr>"			

		elem('result').style.display = 'block'
		elem('resultcontent').innerHTML = start+r1+r2+content+r3+end
	}else{
		elem('result').style.display = 'none'
	}
}

function addCommas(nStr){
	var result
	nStr += '';
	if (nStr=='NaN'){nStr="0"}
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return ((x1+x2)=="0") ? "?": x1 + x2 ;
}

function insertStr(a, position,insStr){
	return [a.slice(0, position), insStr, a.slice(position)].join('')
}

function rand(min,max){
	var delta = max-min
	return parseInt(Math.random()*delta)+min;
}

function sortJson(objArray, prop, direction){
    if (arguments.length<2) throw new Error("sortJson requires 2 arguments");
    var direct = arguments.length>2 ? arguments[2] : 1; //Default to ascending

    if (objArray && objArray.constructor===Array){
        var propPath = (prop.constructor===Array) ? prop : prop.split(".");
        objArray.sort(function(a,b){
            for (var p in propPath){
                if (a[propPath[p]] && b[propPath[p]]){
                    a = a[propPath[p]];
                    b = b[propPath[p]];
                }
            }
            // convert numeric strings to integers
            a = a.match(/^\d+$/) ? +a : a;
            b = b.match(/^\d+$/) ? +b : b;
            return ( (a < b) ? -1*direct : ((a > b) ? 1*direct : 0) );
        });
    }
}
function toggleMaxMin(icon){
	if (icon.src.indexOf('minimize.png')>0){
		icon.src='image/maximize.png'
		icon.title='minimize'
	}else{
		icon.src='image/minimize.png'
		icon.title='maximize'
	}
}

//Wait a half second (500 miliseconds) before firing request
var searchtimer;
function search(e){
	var startsearch=true
	if (startsearch){
		llcoords=""
		clearTimeout(searchtimer);
		searchtimer=setTimeout(function(){searchGo()},500);
	}
}

var prevtext=""
function searchGo(text){
	//zoek de tekst uit het zoekveld
	var searchtxt = elem("mapsearchinput").value
	//of zoek de tekst die opgegeven is
	if (text){searchtxt = text}
	//maar als je dat al gezocht hebt dan hoeft het niet nog een keer
	if (searchtxt && searchtxt!=prevtext){
		prevtext=searchtxt
		var searchType = 'search'
		//zoek algemeen
		var q="http://geoserver.nl/geocoder/NLaddress.aspx?Request=geocode&format=json&search="+searchtxt+"&uid="+userid
		//of zoek een postcode
		if (/^[0-9]{4}[a-z]{2}$/.test(searchtxt.toLowerCase())){
			//postcode6
			q = "http://geoserver.nl/geocoder/NLaddress.aspx?Request=pclookup&format=json&pc0="+searchtxt+"&uid="+userid
			searchType = 'pc'
		} 
		if (/^[0-9]{4}[a-z]{1}$/.test(searchtxt.toLowerCase())){
			//postcode5
			q = "http://geoserver.nl/geocoder/NLaddress.aspx?Request=pclookup&format=json&pc1="+searchtxt+"&uid="+userid
			searchType = 'pc'
		} 
		if (/^[0-9]{4}$/.test(searchtxt.toLowerCase())){
			//postcode4
			q = "http://geoserver.nl/geocoder/NLaddress.aspx?Request=pclookup&format=json&pc2="+searchtxt+"&uid="+userid
			searchType = 'pc'
		} 
		if (searchType != 'pc'){searchtxt+="*"}
		var zoom = 9
		loadXMLDoc( q, function( respons ){
				if (respons) {
					if (respons.length>0){
						if (respons[0].postcode > ""){zoom=11}
						map.setCenter((new OpenLayers.LonLat(respons[0].x,respons[0].y)), zoom);
						elem('searchresult').innerHTML=respons[0].municipality+","
							+respons[0].postcode+","+respons[0].street+","+respons[0].streetnumber
					}
				}
			})
	}
}

//send a request
function loadXMLDoc( url, afunction ){
	var xmlhttp, async=true
	var result, respons;
	if (!afunction){async=false}
	if (!afunction){async=false}
	
	if (window.XMLHttpRequest) // code for IE7+, Firefox, Chrome, Opera, Safari
	  { xmlhttp=new XMLHttpRequest() }
	else // code for IE6, IE5
	  { xmlhttp=new ActiveXObject("Microsoft.XMLHTTP") }

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4){
			HideLoading()
		}
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			if (xmlhttp.responseText) {
				if (afunction){
					afunction( JSON.parse( xmlhttp.responseText ) )
				}
			}
		} 
	}
	xmlhttp.open("GET",url,async);
	ShowLoading()
	xmlhttp.send()
	result=(xmlhttp.responseText) ? JSON.parse( xmlhttp.responseText ) : ""
	HideLoading()
	return result
}
//loadXMLDocTXT(url,'thema',info_fields,info_labels,[],buildInfobox )
function loadXMLDocTXT( url, type,infofields,infolabels,infocode, afunction ){
	var xmlhttp, async=true
	var result, respons;
	if (!afunction){async=false}
	
	if (window.XMLHttpRequest) // code for IE7+, Firefox, Chrome, Opera, Safari
	  { xmlhttp=new XMLHttpRequest() }
	else // code for IE6, IE5
	  { xmlhttp=new ActiveXObject("Microsoft.XMLHTTP") }

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4){
			HideLoading()
		}
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			if (afunction){
				afunction( xmlhttp.responseText, type,infofields,infolabels,infocode, url )
			}
		} 
	}
	ShowLoading()
	xmlhttp.open("GET",url,async);
	xmlhttp.send()
	HideLoading()
	return xmlhttp.responseText 
}

function ShowLoading(){
	elem('loading').style.display='block'
}

function HideLoading(){
	//setTimeout(function(){ elem('loading').style.display='none' }, 10);
	elem('loading').style.display='none' 
}


function hideMenu(){
	elem('gebiedselectie').style.display='none'
	elem('layerfavo').style.display='none'
	elem('datamenu').style.display='none'
	elem('startmenu').style.display='none'
}

function showDatapage( page ){
	if (page){
		if (page.indexOf("+")>-1){page=page.replace("+","_plus")}
		elem('documentation').src = "data/"+page+".html"
		if (page=='start'){
			hideMenu()
			elem('documentation').src = "data/Ontwerp_een_duurzame_buurt.html"
			elem('startmenu').style.display='block'
			buttonShow(0)
		}
		if (page=='docu'){
			hideMenu()
			elem('documentation').src = "data/Ontwerp_een_duurzame_buurt.html"
			elem('datamenu').style.display='block'
			buttonShow(3)
		}
		if (page=='contact'){
			hideMenu()
			elem('documentation').src = "data/contact.html"
			elem('startmenu').style.display='block'
			buttonShow(4)
		}
		if (page=='login'){
			hideMenu()
			elem('documentation').src = "login.html"
			elem('startmenu').style.display='block'
			buttonShow(5)
		}
	}
	elem('datapage').style.display='block'
}

function buttonShow(nr){
	if (!nr){nr=0}
	for (var i = 1; i<6; i++){
		if (nr==i)	{elem('button'+i).style.backgroundColor="#CCC"}
		else 		{elem('button'+i).style.backgroundColor=""}
	}
}

function showMappage(type){
	if ( elem('loginnaam').innerHTML!="Inloggen" ){
		//er is ingelogd
		elem('datapage').style.display='none'
		hideMenu()
		if (type){
			if (type=='bespaar'){
				elem('gebiedselectie').style.display='block'
				buttonShow(1)
			}
			if (type=='kaarten'){
				elem('layerfavo').style.display='block'
				buttonShow(2)
			}
		}
	}else{
		//er is niet ingelogd, start inlogscherm
		elem('documentation').src = "login.html"
	}
}

function showMappageFromFrame(){
	if (top){
		if ( top.elem('loginnaam').innerHTML!="Inloggen" ){
			top.elem('datapage').style.display='none'
			top.elem('gebiedselectie').style.display='block'
			top.elem('layerfavo').style.display='none'
			top.elem('datamenu').style.display='none'
			top.elem('startmenu').style.display='none'
		}else{
			top.elem('documentation').src = "login.html"
		}
	}
}

function logLayer(layer,actie){
	var email = getEmail()
	var regTXT= email +", "+getSessie()+", "+actie+", "+layer+", "+Date()
	var logfile = email2txt(email)+".lyr"
	loadXMLDoc( 'users/rwf.asp?file='+logfile+'&request=a&content='+regTXT+"|",function( respons ){
				if (respons) {
					consolelog(logfile + " : " + respons.result + " : " + regTXT)
				}
			})
}

function writePicoCookie(email,name){
	setCookie('piconaam',email+"_"+name,100)
}

function readPicoCookie(){
	var email,name,cookie = getCookie('piconaam')
	if (cookie.indexOf("_")>-1){
		email = cookie.split("_")[0]
		name = cookie.split("_")[1]
		if (email.indexOf('@')==-1 || email.indexOf('.')==-1){
			//cookie email format is not ok?? This should not happen!!!
			email = ""
			name = ""
		}
	}else{
		email = ""
		name = ""
	}
	return [email,name]	
}
function clearPicoCookie(){
	setCookie('piconaam',"")
	setCookie('picosel',"")
	setCookie('picolayers',"")
}

function setCookie(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++)
	  {
	  var c = ca[i].trim();
	  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	  }
	return "";
}

function getRadioValue(form, name) {
    var val;
    var radios = form.elements[name];
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}

function strLeftCompare(str1,str2){
	var len = str1.length
	if (str2.length<len){len=str2.length}
	return str1.toLowerCase().substring(0,len) == str2.toLowerCase().substring(0,len)
}

// ******************************************************************************
// 									INLOGGEN
// ******************************************************************************

function initLogin(){
	var result = false
	//check voor cookie
	var name = readPicoCookie()[1]
	var email = readPicoCookie()[0]
	if (name && email){ 
		result=true
		//er is ingelogd...
		name = name.substring(0,1).toUpperCase()+name.substring(1)
		//elem('loginnaam').innerHTML=name
		statusInlog( name, email )
		//schrijf log weg...
		var regTXT=email+",cookielog,"+Date()
		var logfile = email2txt(email)+".log"
		loadXMLDoc( 'users/rwf.asp?file='+logfile+'&request=a&content='+regTXT,function( respons ){
				if (respons) {
					consolelog(logfile + " : " + respons.result + " : " + regTXT)
				}
			} )
	}
	//alleen documentatie pagina bekijken...
	if (window.location.href.indexOf("=")>0){
		elem('documentation').src = "data/"+window.location.href.split("=")[1]+".html"
		showDatapage()
	}else{
		showDatapage()
	}
	return result
}

var loginSessie=""
function getSessie(){
   if (!loginSessie){
	   loginSessie=rand(1000000,9999999).toString()
   }
   return loginSessie
}

function email2txt( email ){
	//piet.snot@puk.nl wordt pietpuntsnotpuntpukpuntnl
	var txt = email.replace("@",'at').replace(/\./g,"punt")
	return txt
}
function txt2email( email ){
	//pietpuntsnotpuntpukpuntnl wordt piet.snot@puk.nl
	var email = email.replace("at",'@').replace(/punt/g,".")
	return email
}

function statusInlog( naam, email ){
	if (naam && email){
		naam = naam.substr(0,1).toUpperCase()+naam.substr(1)
		top.elem('loginnaam').innerHTML = naam
		top.elem('loginnaam').title = email
	}else{
		top.elem('loginnaam').innerHTML="Inloggen"
		top.elem('loginnaam').title = 'onbekend'
	}
}
function getName(){
	return elem('loginnaam').innerHTML
}

function getEmail(){
	return elem('loginnaam').title
}
//onload bij login pagina
var errorcolor ="#FFA994"
var okcolor = "#DAFFCC"
function login_start(){
	var cookie = readPicoCookie()
	var email = cookie[0]
	var name = cookie[1]
	if (email){
		elem('start_lgNaam').value=name
		elem('start_lgEmail').value=email
		//top.elem('loginnaam').innerHTML=name
		statusInlog( name, email )
		show_startKaart()
	}else{
		var name= top.elem('loginnaam').innerHTML
		if (name!="Inloggen"){
			elem('start_lgNaam').value=getName()
			elem('start_lgEmail').value=getEmail()
			show_startKaart()
		}else{
			show_inloggen()
		}
	}
}
function login_uitloggen(){
	clearPicoCookie()
	statusInlog()
	elem('inlog_lgEmail').value=""
	elem('inlog_lgPassword').value=""
	show_inloggen()
	
}
function login_inlogsave( e ){
	var startsave = true
	if (e){
		startsave=false
		switch (e.keyCode){ 
		case 13: startsave=true  ;break // enter
		}
	}
	if (startsave){
		var allOK=true
		var inlog_lgEmail = elem('inlog_lgEmail').value.trim().toLowerCase()
		var inlog_lgPassword = elem('inlog_lgPassword').value.trim()
		var inlog_lgSave = elem('inlog_lgSave').checked
		//check emailadres (min met @ en .)
		var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		if (inlog_lgEmail && inlog_lgEmail.match(pattern)){
			allOK=true
			elem('inlog_lgEmail').style.backgroundColor=okcolor
		}else{
			allOK=false
			elem('inlog_lgEmail').style.backgroundColor=errorcolor
		}
		//check password (min 4 char lang)
		if (inlog_lgPassword && inlog_lgPassword.length>3){
			allOK=true
			elem('inlog_lgPassword').style.backgroundColor=okcolor
		}else{
			allOK=false
			elem('inlog_lgPassword').style.backgroundColor=errorcolor
		}
		//check nu of login al bestaat
		var loginstatus = false
		var user=["",""] 
		if (allOK){
			//check
			var regfile = email2txt(inlog_lgEmail)+".reg"
			loadXMLDoc( 'users/rwf.asp?file='+regfile+'&request=r',function( respons ){
				if (respons){ user=respons.result.split("|")}
				if (!respons || respons.result=='no file'){
					elem('errortext').innerHTML="Login niet gevonden..<br>"
				}else if (user.length < 6){
					elem('errortext').innerHTML="Fout bij lezen login gegevens..<br>"
				}else if (inlog_lgPassword!=user[1] ){
					elem('errortext').innerHTML="Wachtwoord fout..<br>"
				}else {
					if (inlog_lgSave){
						//setCookie("piconaam",inlog_lgEmail+"_"+user[2],300)
						writePicoCookie(inlog_lgEmail,user[2])
					}
					statusInlog(user[2],inlog_lgEmail)
					elem('start_lgNaam').value=user[2]
					elem('start_lgEmail').value=inlog_lgEmail
					//logging..
					var regTXT=inlog_lgEmail+",inloggen,"+Date()
					var logfile = email2txt(inlog_lgEmail)+".log"
					loadXMLDoc( 'users/rwf.asp?file='+logfile+'&request=a&content='+regTXT,function( respons ){
						if (respons) {
							consolelog(logfile + " : " + respons.result + " : " + regTXT)
						}
					})
					show_startKaart()
				}
			})
		}
	}
}

function login_register( e ){
	var startsave = true
	if (e){
		startsave=false
		switch (e.keyCode){ 
		case 13: startsave=true  ;break // enter
		}
	}
	if (startsave){
		var reg_lgNaam = elem('reg_lgNaam').value
		var reg_lgParticulier = elem('reg_lgParticulier').value
		var reg_lgOverheid = elem('reg_lgOverheid').checked
		var reg_lgBedrijf = elem('reg_lgBedrijf').checked
		var reg_lgOrgnaam = elem('reg_lgOrgnaam').value
		var reg_lgOpm = elem('reg_lgOpm').value
		var reg_lgEmail = elem('reg_lgEmail').value
		var reg_lgPassword = elem('reg_lgPassword').value
		var reg_lgSave = elem('reg_lgSave').checked
		//check emailadres (min met @ en .)
		var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		if (inlog_lgEmail && reg_lgEmail.match(pattern)){
			allOK=true
			elem('reg_lgEmail').style.backgroundColor=okcolor
		}else{
			allOK=false
			elem('reg_lgEmail').style.backgroundColor=errorcolor
		}
		//check password (min 4 char lang)
		if (reg_lgPassword && reg_lgPassword.length>3){
			allOK=true
			elem('reg_lgPassword').style.backgroundColor=okcolor
		}else{
			allOK=false
			elem('reg_lgPassword').style.backgroundColor=errorcolor
		}
		//check de naam
		if (reg_lgNaam && reg_lgNaam.length>3){
			allOK=true
			elem('reg_lgNaam').style.backgroundColor=okcolor
		}else{
			allOK=false
			elem('reg_lgNaam').style.backgroundColor=errorcolor
		}
		if (allOK){
			if (reg_lgSave){
				//setCookie("piconaam",reg_lgEmail+"_"+reg_lgNaam,300)
				writePicoCookie(reg_lgEmail,reg_lgNaam)
			}
			var regfile = email2txt(reg_lgEmail)+".reg"
			var lgType="onbekend"
			lgType = (reg_lgParticulier) ? "particulier" : lgType
			lgType = (reg_lgOverheid) ? "overheid" : lgType
			lgType = (reg_lgBedrijf) ? "bedrijf" : lgType
			reg_lgOpm = reg_lgOpm.replace(/\n/g," ")
			reg_lgOpm = reg_lgOpm.replace(/\r/g," ")
			var content = reg_lgEmail +"|"+reg_lgPassword+"|"+reg_lgNaam+"|"+lgType+"|"+reg_lgOrgnaam+"|"+reg_lgOpm
			loadXMLDoc( 'users/rwf.asp?file='+regfile+'&request=w&content='+content,function( respons ){
				if (!respons || respons.result=='not found'){
					elem('regerrortext').innerHTML="Fout bij opslaan registratie..<br>"
				}else{
					statusInlog( reg_lgNaam, reg_lgEmail )
					//loggin
					var regTXT=reg_lgEmail+",registratie,"+Date()
					var logfile = email2txt(reg_lgEmail)+".log"
					loadXMLDoc( 'users/rwf.asp?file='+logfile+'&request=a&content='+regTXT,function( respons ){
						if (respons) {
							consolelog(logfile + " : " + respons.result + " : " + regTXT)
						}
					})
					startKaart()
				}
			})
		}
	}
}

function startKaart(){
	//alert("start de kaart")
	showMappageFromFrame()
}

function chkGebrtype(){
	var reg_lgOverheid = elem('reg_lgOverheid').checked
	var reg_lgBedrijf = elem('reg_lgBedrijf').checked
	//check gebruikerstype
	if (reg_lgOverheid || reg_lgBedrijf){
		elem('trOrgnaam').style.display="table-row"
	}else{
		elem('trOrgnaam').style.display="none"
	}
}

function show_startKaart(){
	elem('startkaart').style.display="block"
	elem('inloggen').style.display="none"
	elem('registreren').style.display="none"
}
function show_inloggen(){
	elem('startkaart').style.display="none"
	elem('inloggen').style.display="block"
	elem('registreren').style.display="none"
}
function show_registreren(){
	elem('reg_lgEmail').value= elem('inlog_lgEmail').value
	elem('reg_lgPassword').value= elem('inlog_lgPassword').value

	elem('startkaart').style.display="none"
	elem('inloggen').style.display="none"
	elem('registreren').style.display="block"
}

function consolelog(txt){
	//debug
	//console.log(txt)
}

var bgcount=0
function togglebg(){
	var bg=['top-grey','top-green','top-orange','top-blue','top-purple','top-red']
	if (bgcount>bg.length-1){bgcount=0}
	elem('top').style.backgroundImage = "url('image/"+bg[bgcount]+".jpg')";
	bgcount++
}