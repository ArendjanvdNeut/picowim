// ################ ################ MAP functions ################ ################

var map, eurostreets, lufo2012,nachtkaart,postcode_gebouwen,basis_gebouwen,topokaart
userid = "d7cd2afb"
function initmap(){
	var resolutions = [430.08, 215.04, 107.52, 53.76, 26.88, 13.44, 6.72, 3.36, 1.68, 0.84, 0.42, 0.21, 0.105, 0.0525]
	var serverresolutions = [3440.64, 1720.32, 860.16, 430.08, 215.04, 107.52, 53.76, 26.88, 13.44, 6.72, 3.36, 1.68, 0.84, 0.42]

    //algemene instellingen map object
    options = {'projection': 'EPSG:28992',
			'displayProjection': new OpenLayers.Projection("EPSG:28992"),
			'resolutions': resolutions,
			'units': 'm',
			'restrictedExtent' : new OpenLayers.Bounds(-50000,200000,400000,700000),
			'maxExtent': new OpenLayers.Bounds(-285401.92, 22598.08, 595401.92, 903401.92),
			'controls':[new OpenLayers.Control.Navigation()]
                }
    map = new OpenLayers.Map('map', options);
    OpenLayers.IMAGE_RELOAD_ATTEMPTS = 3;

    //definieren kaartlagen
    var maplayers, maplayername, mapbaselayer, maplayerimage
    lufo2012 = new OpenLayers.Layer.WMS( 'Luchtfoto2012',"http://geoserver.nl/tiles/tilecache.aspx?",
	        {  'layers': 'lufo2012_xl','format': 'image/jpg','userid': userid},
        	{  'isBaseLayer': true,'buffer':1,'transitionEffect': 'resize' }
    	);
    eurostreets = new OpenLayers.Layer.WMS( 'Eurostreets',"http://geoserver.nl/tiles/tilecache.aspx?",
	        {  'layers': 'eurostreets_nl_xl','format': 'image/png','userid': userid},
        	{  'isBaseLayer': true,'buffer':1,'transitionEffect': 'resize'}
    	);
    nachtkaart = new OpenLayers.Layer.TMS('nachtkaart', 'http://services.geodan.nl/tms/', {
        resolutions: resolutions,
		serverResolutions : serverresolutions,
        layername: 'nachtkaart_EPSG28992',
        type: 'png?uid=' + userid,'transitionEffect': 'resize'
    });
    topokaart = new OpenLayers.Layer.TMS('topokaart', 'http://geoserver.nl/tiles/tilecache.aspx/', {
        layername: 'top10nl_xl',
        resolutions: resolutions,
		serverResolutions : serverresolutions,
        type: 'png?layer=top10nl_xl&uid=' + userid,
		'transitionEffect': 'resize'
    });	
    var postcode = new OpenLayers.Layer.WMS( 'Postcode',"http://geoserver.nl/tiles/tilecache.aspx?",
		{  'layers': 'nlpostcode_xl','format': 'image/gif', 'userid': userid},
        {  'isBaseLayer': false,'buffer':1,'visibility':false}
    );
	postcode_gebouwen = new OpenLayers.Layer.WMS( 'PostcodeGebouwen',
        	"http://pico.geodan.nl/geoserver/pico/ows?",
		{  'layers': 'postcode_gebouwen_data','format': 'image/png','transparent': 'true'},
        {  'isBaseLayer': false,'singletile':true,'visibility':false,'singleTile': 'true','ratio': 1.5,}
    );
	postcode_gebouwen.events.register("loadstart", map, function () {elem('loading').style.display='block'	});
	postcode_gebouwen.events.register("loadend", map, function () {elem('loading').style.display='none'});	
	/*basis_gebouwen = new OpenLayers.Layer.WMS( 'BasisGebouwen',
        	"http://pico.geodan.nl/geoserver/pico/ows?",
		{  'layers': 'postcode_gebouwen_basis','format': 'image/png','transparent': 'true'},
        {  'isBaseLayer': false,'singletile':true,'visibility':true,'singleTile': 'true','ratio': 1.5,}
    );*/
	basis_gebouwen = new OpenLayers.Layer.WMS( 'bag_topo', 'http://geoserver.nl/tiles/tilecache.aspx?',
	        {	'layers': 'nlbagtopo_xl', 'format': 'image/png', 'userid': userid },
        	{	'isBaseLayer': false, 'buffer':1, 'transitionEffect':'resize', 'opacity':0.80, 'visibility':true }
	);

    
    //toevoegen kaartlagen aan kaart
    map.addLayers([topokaart,eurostreets, nachtkaart,lufo2012,basis_gebouwen, postcode_gebouwen]);
    //startpositie en zoomlevel
    map.setCenter((new OpenLayers.LonLat(160000,450000)), 3);
    //coordinaat positie muis weergeven
    map.addControl(new OpenLayers.Control.MousePosition());
    //Layercontrole toevoegen
	initLayerlist()
	//info na klik opvragen
	registerInfoEvent()
	//initlogin
	initLogin()
	//if auto-login (via cookie)
	if (getEmail){
		//load stored layers
		loadlayers()
		//load stored gebied selection
		loaddataArea()
		//init buurtselectie
		selectieLayer()
	}
	//show a specific page
	if (window.location.href.indexOf('page=') > 0){
		showDatapage(window.location.href.split('page=')[1])
	}else{
		showDatapage( 'start' )
	}
	//save layers,X,Y and Z after every zoom and pan
	map.events.register("moveend", map,function(){savelayers()});
    map.events.register("zoomend", map,function(){savelayers()});
}


// ################ ################ layer functies ################ ################

function addLayer( layername ){
	//if layer is already added, remove it
	if (map.getLayersByName(layername).length!=0){
		delLayer( layername )
	}else{
		var list = picoConfig.map.layers
		var thisLayer,i,j
		var unit
		for (i = 0; i < list.length; i++) { 
			if (list[i].title === layername){
				thisLayer = list[i]
				var newlayer = new OpenLayers.Layer.WMS( thisLayer.title,thisLayer.source.url,
						{  	'layers': thisLayer.source.featureName,
							'format': 'image/png',
							'transparent': 'true'  },
						{  'isBaseLayer': false,
							'singleTile': 'true',
						    'ratio': 1.5,							
							'opacity':'0.8'}
					);	
				//write to logfile
				logLayer(thisLayer.title,'layer')
					
				//specify infofeatures...
				info_wmsurl = thisLayer.source.url
				info_layer = thisLayer.source.featureName
				info_fields = new Array()
				info_labels = new Array()
				if (thisLayer.tooldata && thisLayer.tooldata.TOOL_INFO){
					if (thisLayer.tooldata.TOOL_INFO.queryable){
						var infofields = thisLayer.tooldata.TOOL_INFO.fields
						for (j = 0; j < infofields.length; j++) { 
							info_fields[j] = infofields[j].field 
							if (infofields[j].unit) { 
								info_labels[j] = infofields[j].title + "<br>("+infofields[j].unit+")" 
							}else{
								info_labels[j] = infofields[j].title  
							}
						}
					}
				}
				newlayer.info=[info_wmsurl,info_layer,info_fields,info_labels]

				//loading image
				newlayer.events.register("loadstart", map, function () {
						elem('loading').style.display='block'
					});
				newlayer.events.register("loadend", map, function () {
						elem('loading').style.display='none'
					});					
				map.addLayers( [newlayer] )
				
				//is het info per pand?
				if (thisLayer.geotype){
					if (thisLayer.geotype=='panden'){
						//set dan de grijze pandenlaag uit
						layervisibility('bag_topo','off')
						newlayer.geotype='panden'
					}
				}
				
				//zet de gebouwen bovenop
				var layercount = map.getNumLayers()
				map.setLayerIndex(basis_gebouwen, layercount-1)
				map.setLayerIndex(postcode_gebouwen, layercount)

				//maak legenda
				elem('legendcontent').innerHTML =
							"<div class='legendrow' id='legend_"+thisLayer.title+"' >"+
							"<img class='boxicon' src='image/delete.png' align=right title='verwijder laag' onclick='delLayer(\""+thisLayer.title+"\")'>"+
							"<img class='boxicon' src='image/opacity.png' align=right title='maak laag transparant' onclick='layeropacity(\""+thisLayer.title+"\")'>"+
							"<img class='boxicon' src='image/eye.png' align=right title='maak laag onzichtbaar' onclick='layervisibility(\""+thisLayer.title+"\")'>"+
							"<img class='boxicon' src='image/addlayer.png'  title='maak laag onzichtbaar' onclick='layervisibility(\""+thisLayer.title+"\")'>" +
							"<span class='clickable' onclick='layervisibility(\""+thisLayer.title+"\")'>"+thisLayer.title+"</span>"+
							"<br><span class='legendimage' id='legendimage_"+thisLayer.title+"'><img src='"+thisLayer.legendUrl+"'></span></div>"+
							elem('legendcontent').innerHTML
							
				//bewaar de lagen in een koekje
				savelayers()
			}
		}
	}
}

//remove layer
function delLayer( layername ){
	var layers = map.getLayersByName(layername);
	//remove legend
	var legend = document.getElementById("legend_"+layername);
	if (legend){ legend.parentNode.removeChild(legend); }
	//remove maplayer
	//for (var layerIndex = 0; layerIndex < layers.length; layerIndex++) {
	//	map.removeLayer(layers[layerIndex]);
	//}
	map.removeLayer(layers[0])
	if (layers[0].geotype){
		if (layers[0].geotype=='panden'){
			layervisibility('bag_topo','on')
		}
	}
	savelayers()
}
//reduce opacity for this layer
var layeropacityvalue = 1;
function layeropacity(layername) {
    var thislayer = map.getLayersByName(layername);
    if (thislayer) {
        layeropacityvalue += -0.2;
        if (layeropacityvalue < 0.1) layeropacityvalue = 1;
        thislayer[0].setOpacity(layeropacityvalue);
    }
}
//toggle for this layer the visibility
function layervisibility(layername,onoff) {
    var thislayer = map.getLayersByName(layername);
	if (!onoff && thislayer){
		//toggle
		if (thislayer[0].getVisibility()==true) {
			thislayer[0].setVisibility( false )
			elem("legendimage_"+layername).style.display='none'
		}else{
			thislayer[0].setVisibility( true )
			elem("legendimage_"+layername).style.display='block'
		}
	}
	if (onoff && thislayer){
		//force of or off
		if (onoff == 'off') {
			thislayer[0].setVisibility( false )
			elem("legendimage_"+layername).style.display='none'
		}else{
			thislayer[0].setVisibility( true )
			elem("legendimage_"+layername).style.display='block'
		}
	}
}

/*
0 - eurostreets (baselayer)
1 - luchtfoto (baselayer)
2 - nachtkaart (baselayer)
3 - topokaart (baselayer) 
4 - extra kaart 1 
5 - extra kaart 2 
6 - extra kaart n
7 - bag_topo  (gebouwen op themakaarten)
8 - PostcodeGebouwen  (gebouwselectie)
*/
//save current layers in a cookie
function savelayers() {
	var layerlist=""
	for (var i = 4; i < map.layers.length-2; i++) {
		layerlist += map.layers[i].name+"|"
	}
	var X = parseInt(map.getCenter().lon)
	var Y = parseInt(map.getCenter().lat)
	var Z = map.getZoom()
	var coords=X+"|"+Y+"|"+Z+"|"
	if (X!=160000){
		//negeer laden van de standaard lagen
		setCookie('picolayers',coords+layerlist,300)	
	}
}
//load current layers from a cookie
function loadlayers() {
	var storedlayerlist=getCookie('picolayers')
	if (storedlayerlist){
		var layerlist=storedlayerlist.split("|")
		var X=layerlist[0]
		var Y=layerlist[1]
		var Z=layerlist[2]
		for (var i = 3; i < layerlist.length; i++) {
			if (layerlist[i]){
				addLayer(layerlist[i])
				//layervisibility(layerlist[i])
			}
		}
		map.setCenter((new OpenLayers.LonLat(X,Y)), Z);
	}
}
//show this baselayer
var baselayeropacityvalue = 1;
function setBaselayer(layername) {
    var oldlayer = map.baseLayer.name;
    if (layername==oldlayer) {
		var thislayer = map.getLayersByName(layername);
        baselayeropacityvalue += -0.1;
        if (baselayeropacityvalue < 0.1) baselayeropacityvalue = 1;
        thislayer[0].setOpacity(baselayeropacityvalue);
    }else{
		var thislayer = map.getLayersByName(layername);
		map.setBaseLayer(thislayer[0])
		baselayeropacityvalue = 1
        thislayer[0].setOpacity(baselayeropacityvalue);
	}
}


// ################ ################ buurt selectie functies ################ ################


//searchtimer is elders al globaal gedefinieerd
//add a new postcode selection 
function selectieLayer( newdataArea ){
	dataArea = (newdataArea) ? newdataArea : dataArea
	saveDataArea(dataArea)
	clearTimeout(searchtimer);
	searchtimer=setTimeout(function(){ 
		var CQLfilter=cqlFilter( dataArea )
		if (CQLfilter){
			postcode_gebouwen.params.CQL_FILTER=CQLfilter
			//WMS met blauwe gebouwtjes tekenen
			postcode_gebouwen.setVisibility(false);
			postcode_gebouwen.setVisibility(true);
			postcode_gebouwen.redraw();
			//vraag de WFS op
			getPostcodeData(CQLfilter)
			//maak gebouwselectie zichtbaar
			elem('gebouwselectie').style.display='block'
			elem('statistiekselectie').style.display='block'
		}else{
			postcode_gebouwen.setVisibility(false);
			postcode_gebouwen.redraw();
			//maak gebouwselectie onzichtbaar
			elem('result').style.display = 'none'
			elem('gebouwselectie').style.display='none'
			elem('statistiekselectie').style.display='none'
			elem('selectresult').innerHTML="</i>Nog niets geselecteerd</i>"
		}
	},500);
}

//		   'CQL_FILTER':"pc4='3956'"
//		   'CQL_FILTER':"pc6='3956KJ'"
//		   'CQL_FILTER':"pc6='3956KJ' or wnpnaam='Leersum'"
//		   'CQL_FILTER':"wnpnaam='Leersum'"
//		   'CQL_FILTER':"pc6 between '3956A' and '3956Z'"
//		   'CQL_FILTER':"postcode BETWEEN '1054pa' AND '1054pz'"
// 	
//create a cql filter based on list of filters	   
function cqlFilter( dataArea ){
	var filters = dataArea
	var i, filterRow="", or="", result="",areaType,areavalue,cqlfilter=""
	if (filters.length>0){
		for (var i=0; i<filters.length; i++) {
			filterRow = filters[i]
			areaType = "onbekend"
			areavalue=filterRow
			if (/^[0-9]{4}[a-z]{2}$/.test(areavalue.toLowerCase())){areaType="postcode6"} 
			if (/^[0-9]{4}[a-z]{1}$/.test(areavalue.toLowerCase())){areaType="postcode5"} 
			if (/^[0-9]{4}$/.test(areavalue.toLowerCase())){areaType="postcode4"} 
			if (strLeftCompare("gemeente",filterRow)){areaType="gemeente"}
			if (strLeftCompare("plaats",filterRow)){areaType="plaats"}
			if (strLeftCompare("wijk",filterRow)){areaType="wijk"}
			if (strLeftCompare("buurt",filterRow)){areaType="buurt"}
			if (areaType=='postcode6'){
				cqlfilter += or + "postcode='"+areavalue+"'"
			}
			if (areaType=='postcode5'){
				//De LIKE operator werkt wel voor de WMS maar niet voor de WFS???
				cqlfilter += or + "postcode BETWEEN '"+areavalue+"a' and '"+areavalue+"z'"
				//cqlfilter += or + "postcode LIKE '"+areavalue+"%'"
			}
			if (areaType=='postcode4'){
				cqlfilter += or + "postcode BETWEEN '"+areavalue+"a' and '"+areavalue+"z'"
				//cqlfilter += or + "postcode LIKE '"+areavalue+"%'"
			}
			if (areaType=='gemeente'){
				areavalue = areavalue.replace('gemeente',"").trim()
				cqlfilter += or + "gemnaam BETWEEN '"+areavalue+"a' and '"+areavalue+"z' or gemnaam='"+areavalue+"'"
				//cqlfilter += or + "postcode LIKE '"+areavalue+"%'"
			}
			if (areaType=='plaats'){
				areavalue = areavalue.replace('plaats',"").trim()
				cqlfilter += or + "plaatsnaam BETWEEN '"+areavalue+"a' and '"+areavalue+"z' or plaatsnaam='"+areavalue+"'"
				//cqlfilter += or + "postcode LIKE '"+areavalue+"%'"
			}
			if (areaType=='wijk'){
				areavalue = areavalue.replace('wijk',"").trim()
				cqlfilter += or + "wijknaam BETWEEN '"+areavalue+"a' and '"+areavalue+"z' or wijknaam='"+areavalue+"'"
				//cqlfilter += or + "postcode LIKE '"+areavalue+"%'"
			}
			if (areaType=='buurt'){
				areavalue = areavalue.replace('buurt',"").trim()
				cqlfilter += or + "buurtnaam BETWEEN '"+areavalue+"a' and '"+areavalue+"z' or buurtnaam='"+areavalue+"'"
				//cqlfilter += or + "postcode LIKE '"+areavalue+"%'"
			}			
			if (areaType=='onbekend'){
				cqlfilter += or + "( buurtnaam='"+areavalue+"' or buurtnaam BETWEEN '"+areavalue+"a' and '"+areavalue+"z'"
								+ " or wijknaam='"+areavalue+"' or wijknaam BETWEEN '"+areavalue+"a' and '"+areavalue+"z'"
								+ " or plaatsnaam='"+areavalue+"' or plaatsnaam BETWEEN '"+areavalue+"a' and '"+areavalue+"z')"
				//cqlfilter += or + "buurtnaam LIKE '"+areavalue+"%' or wijknaam LIKE '"+areavalue+"%' or plaatsnaam LIKE '"+areavalue+"%'"
			}
			or=" or "
		}
		//check de gebouwfilters
		var gebfilter=""
		if (elem('gebsel_woning').checked){
			gebfilter= " and (hfnc='W' or hfnc='O')"
		}
		if (elem('gebsel_grondg').checked){
			//gebfilter= " and (hfnc='W' or hfnc='O') and (pandtype='R' or pandtype='V')"
			gebfilter= " and (pandtype='R' or pandtype='V')"
		}
		if (elem('gebsel_nieuwb').checked){
			gebfilter+= " and (bouwjaar>="+elem('jaarvan').value+" and bouwjaar<="+elem('jaartot').value+")"
		}
		result=cqlfilter+gebfilter
	}
	elem('cqlfilter').innerHTML=cqlfilter+gebfilter   //debug
	return result
}

//elders al gedefinieerd: var info_proxy = "proxy/olproxy.asp?url="
//get the data with a cql filtered WFS request.
var WFSurl = "http://pico.geodan.nl/geoserver/pico/ows?&service=WFS&version=1.0.0&request=getfeature&OUTPUTFORMAT=JSON&MAXFEATURES=10000&"+
			 "SRSNAME=epsg:28992&TYPENAME=postcode_gebouwen_data_view&CQL_FILTER=[CQLfilter]"
var PCdata=""
function getPostcodeData(CQLfilter){
	
	var url_debug = WFSurl.replace("[CQLfilter]",CQLfilter)
	elem('debug').innerHTML="<a href='"+url_debug+"'>test</a>"
	
	var thisWFSurl = info_proxy + escape( WFSurl.replace("[CQLfilter]",CQLfilter) )
	elem('wfsurl').innerHTML= WFSurl.replace("[CQLfilter]",CQLfilter)
	loadXMLDoc( thisWFSurl, function( respons ){
			if (respons) {
				PCdata = respons.features
				var pandcount=0,i,adrescount=0
				for (var i = 0; i < PCdata.length; i++) {
					pandcount+=PCdata[i].properties.panden
					adrescount+=PCdata[i].properties.adressen
				}
				elem('postcodeaantal').innerHTML =  respons.totalFeatures
				elem('pandenaantal').innerHTML =  pandcount
				elem('adressenaantal').innerHTML =  adrescount
				allMeasure()
				showResultList()
			}
		})	
}


// ################ ################ uitlezen CONFIG  ################ ################
function showLayerlist(){
	if (elem('layerbox').style.display=='none' || elem('layerbox').style.display==''){
		elem('layerbox').style.display='block'
	}else{
		elem('layerbox').style.display='none'
	}
}

function initLayerlist(){
	var content="",i,j
	elem("layerlist").innerHTML="Toon layers"
	list = picoConfig.map.layers;
	
	//sort it >> niet meer nodig, JSON is pre-sorted
	/*
	list.sort(function(a, b) {
		//fix missing properties
		var Agroup="",Asubgroup="",Bgroup="",Bsubgroup=""
		if (a.groupName){ Agroup = a.groupName.toLowerCase() }
		if (b.groupName){ Bgroup = b.groupName.toLowerCase() }
		if (a.subgroupName){ Asubgroup = a.subgroupName.toLowerCase() }
		if (b.subgroupName){ Bsubgroup = b.subgroupName.toLowerCase() }
		if (Agroup+Asubgroup > Bgroup+Bsubgroup){
			return -1;
		}else if (Agroup+Asubgroup < Bgroup+Bsubgroup){
			return  1;
		}else{
			return  0;
		}
	});
	*/
	
	var indent="",thisgroup="", thissubgroup="",thislayer=""
	var grpdiv="", grpdivtemplate="<div class='groupmenu' id='hm[i]'><span class='groupmenutitel' onclick='togglemenu(\"hm[i]\")'><img id='ahm[i]' class='arrow' width=10px src='image/arrowdown.png'>"
	var subgrpdiv="", subgrpdivtemplate="<div class='subgroupmenu' id='sm[i]' ><span class='subgroupmenutitel' onclick='togglemenu(\"sm[i]\")'><img id='asm[i]' class='arrow' width=10px src='image/arrowdown.png'>"
	var enddiv = "",subenddiv = ""
	for (i = 0; i < list.length; i++) { 
		if (list[i].groupName){
			//hoofdgroup
			if (list[i].groupName && thisgroup!=list[i].groupName){
				//nieuwe group
				grpdiv=grpdivtemplate.replace(/\[i\]/g,i)
				content+=subenddiv+enddiv+grpdiv
				content+=""+list[i].groupName+"</span><div class='menubox'>"
				if (!enddiv){enddiv="</div></div>"}
				subenddiv=""	//start nieuwe submenureeks
				thisgroup=list[i].groupName
			}else{
				//bestaande group
			}
			//subgroup
			if (list[i].subgroupName && thissubgroup!=list[i].subgroupName){
				//nieuwe subgroup
				subgrpdiv=subgrpdivtemplate.replace(/\[i\]/g,i)
				subgrpdiv=subgrpdiv.replace(/\[i\]/g,i)
				content+=subenddiv+subgrpdiv
				content+=indent+list[i].subgroupName+"</span><div class='menubox'>"
				if (!subenddiv){subenddiv="</div></div>"}
				thissubgroup=list[i].subgroupName
			}else{

			}
			//layer
			if (list[i].title && thislayer!=list[i].title){
				docupage=list[i].groupName
				if (list[i].subgroupName){docupage=list[i].subgroupName}
				docupage=docupage.replace(/ /g,"_")
				content+="<span class='layermenu' title='"+indent+indent+list[i].title+
							"'><span class='layermenutext' onclick='addLayer(\""+
							list[i].title+"\")'><img class='boxicon' src='image/addlayer.png' title='voeg laag toe'> "+
							indent+indent+list[i].title+
							"</span><img onclick='showDatapage(\""+docupage+"\")' align=right class='boxicon' src='image/help.png' title='bekijk documentatie'>"+
							"</span>"
				thislayer=list[i].title
			}
		}
	}	
	content+=enddiv+enddiv

	//show it
	elem("layerlist").innerHTML=content
}
function togglemenu( id ){
	var menuheight='25px'
	if (elem(id).style.height==menuheight || elem(id).style.height=="" ){
		elem(id).style.height='auto'
		elem("a"+id).src='image/arrowright.png'
	}else{
		elem(id).style.height=menuheight
		elem("a"+id).src='image/arrowdown.png'
	}
}


// ################ ################ Info tool afhandeling ################ ################

//Set infotool for upper themelayer
function infoLayer(){
	var layername=""
	for (var layerIndex = map.layers.length-1; layerIndex > 0; layerIndex--) {
		layername= map.layers[layerIndex].name;
		if (layername!="PostcodeGebouwen" && layername!="bag_topo" ){
			if (map.layers[layerIndex].visibility && map.layers[layerIndex].info){
				info_wmsurl = map.layers[layerIndex].info[0]
				info_layer =  map.layers[layerIndex].info[1]
				info_fields =  map.layers[layerIndex].info[2]
				info_labels =  map.layers[layerIndex].info[3]
				break;
			}
		}
	}
}

/*
//aan te passen voor een andere WMS
var info_wmsurl = "" // "http://geoserver.nl/postcode/mapserv.cgi?map=postcode/nl_postcodeplaats.map"
var info_layer = ""  // "postcode4"
var info_fields = [] //["all"]
var info_labels = [""]
var info_fields = [] //["Layer","PC4CODE","PC4NAAM","WNPNAAM","GEMNAAM","PROVC_NM","NETNUMMER"]
var info_labels = [] //["Informatie","PC4code","PC4naam","Woonplaats","Gemeente","Provincie","Netnummer"]

//liggen vast
var url_debug
var info_param = "&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&STYLES=,&SRS=EPSG:28992&INFO_FORMAT=text/plain&FEATURE_COUNT=20&buffer=5&EXCEPTIONS=application/vnd.ogc.se_xml&LAYERS="+info_layer+"&QUERY_LAYERS="+info_layer+"&uid="+userid
var info_code = []
//var buurtinfo_url = "http://geoserver.nl/buurtinfo/mapserv.cgi?map=Buurtinfo/buurtinfo_hrs.map"
var buurtinfo_url = "http://pico.geodan.nl/geoserver/pico/wms?"
*/

var info_proxy = "proxy/olproxy.asp?url="
var reqCount=0				//aantal requests
var responsCount=0			//aantal responses
var responsHTMLbuurt=""		//content buurtinfotab
var responsHTMLthema=""		//content themainfotab
var lonlat=""				//locatie
function registerInfoEvent() {
	//info_param = "&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&STYLES=,&SRS=EPSG:28992&INFO_FORMAT=text/plain&FEATURE_COUNT=20&EXCEPTIONS=application/vnd.ogc.se_xml&LAYERS="+info_layer+"&QUERY_LAYERS="+info_layer
	var info_fields,info_labels,info_code
	var buurtinfo_url = "http://pico.geodan.nl/geoserver/pico/wms?"
	map.events.register('click', map, function (e) {
		//Maak de WMSinforequest URL
		var info_param
		var buurtparam = "&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&STYLES=,&SRS=EPSG:28992&INFO_FORMAT=text/plain&FEATURE_COUNT=20&EXCEPTIONS=application/vnd.ogc.se_xml&LAYERS=pico:postcode_buurtinfo&QUERY_LAYERS=pico:postcode_buurtinfo&uid="+userid
		var bbox = "&BBOX=" + map.getExtent().toBBOX() + "&Y=" + parseInt(e.xy.y) + "&X=" + parseInt(e.xy.x) + "&WIDTH=" + map.size.w + "&HEIGHT=" + map.size.h
		var url ="", buurttxt=""
		var txt =""
		lonlat = map.getLonLatFromViewPortPx(e.xy)
		reqCount=0
		responsCount=0
		responsHTMLthema=""
		
		//inforequest for all available and visible layers
		for (var layerIndex = map.layers.length-1; layerIndex > 0; layerIndex--) {
			layername= map.layers[layerIndex].name;
			if (layername!="PostcodeGebouwen" && layername!="bag_topo" ){
				if (map.layers[layerIndex].visibility && map.layers[layerIndex].info){

					info_wmsurl = map.layers[layerIndex].info[0]
					if (info_wmsurl.indexOf("?")==-1){info_wmsurl+="?"}
					info_layer =  map.layers[layerIndex].info[1]
					info_param = "&SERVICE=WMS&buffer=5&VERSION=1.1.1&REQUEST=GetFeatureInfo&STYLES=,&SRS=EPSG:28992&INFO_FORMAT=text/plain&FEATURE_COUNT=20"+
								 "&EXCEPTIONS=application/vnd.ogc.se_xml&LAYERS="+info_layer+"&QUERY_LAYERS="+info_layer

					info_fields =  map.layers[layerIndex].info[2]
					info_labels =  map.layers[layerIndex].info[3]
					url = info_proxy+escape( info_wmsurl+info_param + bbox)
					
					//url_debug = info_wmsurl+info_param + bbox;
					//txt +=  "<a target='info' href='"+url_debug+"'>"+txt2html( loadXMLDocTXT(url) ) +"</a>"

					//Run de WMSinforequest 
					reqCount++
					loadXMLDocTXT(url,'thema',info_fields,info_labels,[],buildInfobox )
					
				}
			}
		}


		//Run de buurtinfo request 
		var AddSelTemplate="<b><span title='voeg toe aan buurtselectie' class='clickable' onclick='areaAdd(0,\"[label][value]\")'><img width=15px src='image/marker_grey.png'>[value]</span></b>"
		var buurt_fields = ["pc6","gemnaam","buurtnaam","wijknaam","hrs_hhnaam","hrs_dichth","hrs_woning","hrs_voorzi","hrs_energi","hrs_inkome"]
		var buurt_code = [AddSelTemplate.replace('[label]',''),AddSelTemplate.replace('[label]','gemeente'),AddSelTemplate.replace('[label]','buurt'),AddSelTemplate.replace('[label]','wijk ')]
		var buurt_labels = ["Postcode","Gemeente","Buurt","Wijk","Levensfase","Gebied","Woning","Voorzieningen","Energie","Inkomen"]
		var buurturl = info_proxy+escape( buurtinfo_url+buurtparam + bbox)
		reqCount++
		loadXMLDocTXT(buurturl,'buurt',buurt_fields,buurt_labels,buurt_code, buildInfobox)
		OpenLayers.Event.stop(e);
    })
}

//Multiple requests are needed to populate the infobox
var debug
function buildInfobox( respons,type,thisfields,thislabels,thiscode,url ){
	responsCount++
	consolelog("req="+reqCount +" rsp="+responsCount)
	if (respons){
		if (type=='buurt'){
			debug = respons
			responsHTMLbuurt = txt2html( respons, thisfields,thislabels,thiscode )
		}else{
			responsHTMLthema += "<span onclick='window.open(\""+url+"\",\"_blank\")'>" + txt2html( respons,thisfields,thislabels,thiscode ) +"</span>"
		}
	}
	if (responsCount == reqCount){
		var html = ""
		html += "<div id='infolayer' style='display:none'>"+ responsHTMLthema +"</div>"
		html += "<div id='infobuurt' style='display:block'>"+ responsHTMLbuurt + "</div>"
		var header= "<div id='infocontent' style='width:300px'><img id='buttonlayerInfo' class='infotab' src='image/addlayer.png' title='Kaartinformatie' onclick='showLayerInfo()'>"+
					"<img id='buttonbuurtInfo' style='opacity:0.5' class='infotab' src='image/demografie.png' title='Buurtinformatie' onclick='showBuurtInfo()'>"+
					"<hr class='infohr'>"
		var footer = "<br><span style='font-size:75%;color:grey;padding-left:5px'>Locatie: "+ parseInt( lonlat.lon ) +";"+parseInt( lonlat.lat )+"</span></div>"
		
        if (popup1) { map.removePopup(popup1) }
        popup1 = new OpenLayers.Popup.FramedCloud("chicken1", lonlat, null, header+html+footer, null, true, onPopupClose);
        if (popup2) { map.removePopup(popup2) };
        map.addPopup(popup1);
		showBuurtInfo()
		elem(chicken1_contentDiv).style.height='auto'
        HideLoading();	}
}


//tab in infotool
function showLayerInfo(){ 
	elem('infolayer').style.display='block'
	elem('buttonlayerInfo').style.opacity=1
	elem('buttonlayerInfo').style.backgroundColor ="#FFF"
	elem('buttonlayerInfo').style.borderBottomColor = "white";
	elem('infobuurt').style.display='none'
	elem('buttonbuurtInfo').style.opacity=0.5
	elem('buttonbuurtInfo').style.backgroundColor ="#EEE"
	elem('buttonbuurtInfo').style.borderBottomColor = "black";
}
//tab in infotool
function showBuurtInfo(){
	elem('infolayer').style.display='none'
	elem('buttonlayerInfo').style.opacity=0.5
	elem('buttonlayerInfo').style.backgroundColor ="#EEE"
	elem('buttonlayerInfo').style.borderBottomColor = "black";
	elem('infobuurt').style.display='block'
	elem('buttonbuurtInfo').style.opacity=1
	elem('buttonbuurtInfo').style.backgroundColor ="#FFF"
	elem('buttonbuurtInfo').style.borderBottomColor = "white";
}

//plain text info omzetten in html
function txt2html( txt,info_fields,info_labels,info_code ){
	var data 
	var rows = new Array()
	//split op return (of carriage return)
	//data = txt.replace(/\r\n/g,"|").split("|")
	data = txt.replace(/\n/g,"|").split("|")
	for (i = 0; i < data.length; i++) {
		//trim spaties aan begin en eind
		data[i] = data[i].trim()
		//skip regel met getfeature
		if ( data[i].toLowerCase().search("getfeature") != -1  ) {
			data[i] = ""
			}
		//skip regel met geom
		if ( data[i].toLowerCase().search("geom") != -1  ) {
			data[i] = ""
			}
		//verwijder alle 'en "
		if (data[i]) {
			data[i] = data[i].replace(/'/g,"")
			data[i] = data[i].replace(/"/g,'')
			data[i] = data[i].replace(/=/,"|");
		}
		//remove rows with '---'
		if ( data[i].substr(0,3)=="---"  ) {
			data[i] = ""
			}		
		
		//format regel die start met 'layer'
		if ( data[i].toLowerCase().search("layer") != -1  ) {
			data[i] = data[i].replace(/ /,"|");
			}		
		//format regel die start met 'feature'
		if ( data[i].toLowerCase().search("feature") != -1  ) {
			data[i] = data[i].replace(/:/,"");
			data[i] = data[i].replace(/ /,"|");
			}		
		//format regel die bevat 'FeatureType'
		if ( data[i].toLowerCase().search("featuretype") != -1  ) {
			data[i] = "kaartlaag|"+data[i].toLowerCase().split("featuretype")[1]
			data[i] = data[i].replace(/:/,"");
			data[i] = data[i].replace("pico","");
			}		
		//maak een array van de string	
		if (data[i]){
			rows.push( data[i].split("|") )
		}
		
	}		
	//verwerk het resultaat tot een html table
	var result = 	"<table class='tbi' >"
	var tds
	var fieldindex
	var rowindex = 0
	for (i = 0; i < rows.length; i++) {
		if (rows[i]) {
			if ( (fieldindex = info_fields.indexOf( rows[i][0].trim() )) > -1 || info_fields[0] == "all") {		
				if ((rowindex++)%2==0) {tds="'tde'"} else {tds="'tdo'"} 
				if (info_labels[fieldindex]) {rows[i][0] = info_labels[fieldindex]}
				if (info_code[fieldindex]){
					result += "<tr class="+tds+"><td class='tdd'>"+rows[i][0]+"</td><td align=right class='tdd'>"+info_code[fieldindex].replace(/\[value\]/g,rows[i][1]) +"</td></tr>"					
				}else{
					result += "<tr class="+tds+"><td class='tdd'>"+rows[i][0]+"</td><td align=right class='tdd'>"+rows[i][1]+"</td></tr>"
				}
			}
		}
	}
	result += "</table>"
	return result
}

var popup1, popup2

function onPopupClose(evt) {
    map.removePopup(popup1);
}

function goto(X,Y,Z){
	Z = (Z) ? Z:10
	if (X && Y){ map.setCenter((new OpenLayers.LonLat(X,Y)), Z) }
}

var msstyle,mapstyle,filterstyle
function mapfullscreen(){
	if (msstyle){
		elem('mapsection').style=msstyle
		elem('mapsection').style=mapstyle
		elem('filters').style=filterstyle
		msstyle=""
		mapstyle=""
		filterstyle=""
	}else{
		msstyle=elem('mapsection').style
		mapstyle=elem('mapsection').style
		filterstyle=elem('filters').style
		elem('mapsection').style.top="0px"
		elem('mapsection').style.left="0px"
		elem('mapsection').style.width="100%"
		elem('mapsection').style.height="100%"
		elem('filters').style.display="none"
	}
	map.updateSize()
}
