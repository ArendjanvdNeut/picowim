<!--#include file="RunURL.inc"-->
<%
  on error resume next
  '-----------------------------------------------------------------------------
  '
  ' ASP PROXY
  '
  ' For the Postcode Selector (o.a. Nierstichting)
  '
  '-----------------------------------------------------------------------------
  ' Input:
  ' contains two URL parameters:
  ' coordlist = list with coord pairs to pass to the WFS filter. The x/y coords
  '             are separated by a comma, the coord pairs are separated by
  '             a space: 141326.5,488305.5 140678.5,487671 141623.5,487104
  ' userid = geoserver.nl user id. May be omitted.
  ' maxresults = [max number of results from wfs server]. Default = 100;
  '
  ' Output:
  ' HTML table
  '
  ' Usage:
  ' http://myserver/wfsproxy.asp?coordlist=141326.5,488305.5 140678.5,487671 141623.5,487104&userid=dksjf7dst6f87sdgfsdkjfs7
  '-----------------------------------------------------------------------------
  Dim url
  Dim xmlText
  Dim sFilter
  Dim maxResults
  Dim action
  Dim tableName
  Dim coordlist
  Dim userId

  'Maximum number of results back
  maxResults = 250
  if (request.QueryString("maxresults").count > 0) then
    maxResults = request.QueryString("maxresults")
  end if

  url = "http://geoserver.nl/postcodewfs/mapserv.cgi?map=postcodewfs/nlpc6hnr.map&reaspect=false&service=WFS&version=1.0.0&request=getfeature&OUTPUTFORMAT=gml2&MAXFEATURES=" & maxResults & "&SRSNAME=epsg:28992&TYPENAME=nlpc6punten&Filter="
  sFilter  = "<Filter><Contains><PropertyName>msGeometry</PropertyName><gml:Polygon><gml:outerBoundaryIs><gml:LinearRing><gml:coordinates>@coordinatelist@</gml:coordinates></gml:LinearRing></gml:outerBoundaryIs></gml:Polygon></Contains></Filter>"
  coordlist = request.QueryString("coordlist")
  userId = request.QueryString("userid")

  'replace the tag @coordinatelist@ bij the given coordinate list
  sFilter = Server.URLEncode(replace(sFilter,"@coordinatelist@",coordlist))

  'add the userID for the geoserver
  url = url & sFilter & "&userid=" & userId

  'execute an xmlHttp request to the WFS service
  xmlText = RunURL(url)
  xmlText = replace(xmlText,"""","'")

  dim columnArray(5)
  dim tagArray(5)

  columnArray(0) = "PC6"
  columnArray(1) = "STRAAT"
  columnArray(2) = "ADRESSEN"
  columnArray(3) = "PLAATS"
  columnArray(4) = "GEMEENTE"

  tagArray(0) = "ms:PC6"
  tagArray(1) = "ms:STRAAT"
  tagArray(2) = "ms:ADRESSEN"
  tagArray(3) = "ms:PLAATS"
  tagArray(4) = "ms:GEMEENTE"

  response.write ParseXml(xmlText,"gml:featureMember", columnArray, tagArray)

  if (Err) then
    dim tb
    tb = "<table><tr><td><b>Error</b></td></tr><tr><td>"+Err.Description+"</td></tr></table>"
    response.write tb

  else
    response.write htmlTable
	'response.write  "<br>"+url

  end if

  response.Flush()

%>


