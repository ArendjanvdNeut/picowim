<%
' ASP pagina die text files lees en schrijft
' rwf.asp?file=<file>&request=<r|w|a>&content=asci text 
'    file is een textfile inclusief pad
'    request is [r]ead [w]rite e[x]ist [c]ount lines or [a]ppend
'    content zijn regels, een ";" is een newline

Dim filepath	
filepath = array("c:\inetpub\wwwroot\PICOwim\data\")

Const ForReading = 1 '- Open a file for reading. You cannot write to this file.
Const ForWriting = 2 '- Open a file for writing.
Const ForAppending =8 '- Open a file and write to the end of the file. 

Function  ReadFile( textfile )
	'read file , if it exists
	dim fs, result
	result=""
	set fs=Server.CreateObject("Scripting.FileSystemObject")
	if fs.FileExists( textfile ) then
		set t=fs.OpenTextFile(textfile,ForReading,false)
		result = t.ReadAll
		t.close
	else
		result="no file"
	end if
	set fs=nothing
	readfile = result
end function

Function  CountFile( textfile )
	'read file , if it exists
	dim fs, result
	result=0
	set fs=Server.CreateObject("Scripting.FileSystemObject")
	if fs.FileExists( textfile ) then
		set t=fs.OpenTextFile(textfile,ForReading,false)
		'jump to last line
		Do While t.AtEndOfStream <> True
			t.SkipLine 
		Loop
		result = t.Line-1 
		t.close
	else
		result="no file"
	end if
	set fs=nothing
	countfile = result
end function

Function  ExistFile( textfile )
	'read file , if it exists
	dim fs, result
	result=0
	set fs=Server.CreateObject("Scripting.FileSystemObject")
	if fs.FileExists( textfile ) then
		result="yes"
	else
		result="no file"
	end if
	set fs=nothing
	ExistFile = result
end function

Function  ExistFileStart( foldername, filename )
	Dim objFSO 
	Set objFSO = Server.CreateObject("Scripting.FileSystemObject") 
	'Get the folder object associated with the directory 
	Dim objFolder 
	'Response.Write foldername 
	Set objFolder = objFSO.GetFolder(foldername) 
	'Loop through the Files collection 
	Dim objFile, result,thisfile
	result="not found"
	For Each objFile in objFolder.Files
		thisfile=mid(objFile,len(foldername)+1)	
		if left(thisFile,len(filename)) = filename then 
			result = thisfile 
		end if 
	Next 

	'Clean up! 
	Set objFolder = Nothing 
	Set objFile = Nothing 
	Set objFSO = Nothing 

	ExistFileStart = result
end function

Function  AppendFile( textfile, extraRow )
	'read file , if it exists
	dim fs, result
	result=""
	set fs=Server.CreateObject("Scripting.FileSystemObject")
	if fs.FileExists( textfile ) then
		set t=fs.OpenTextFile(textfile,ForAppending,false)
		t.WriteLine(extraRow)
		t.close
		result="done"
	else
		result="no file"
	end if
	set fs=nothing
	Appendfile = result
end function

Function  WriteFile( textfile, content )
	'read file , if it exists
	dim fs, result
	result="done"
	Err.Clear
	set fs=Server.CreateObject("Scripting.FileSystemObject")
	set f=fs.CreateTextFile(textfile,true)	
	contentlines=Split(content,";")
	for each line in contentlines
		f.WriteLine(line)	
	next
	set fs=nothing

	'Er is wat fout gegaan..
	If Err.Number <> 0 Then	
		result = "("&Err.Number&")" & Err.Description
		Response.Write  result 
	end if
	On Error GoTo 0
	
	writefile = result
end function


'initialising...
'On Error Resume Next
set objHttp = Server.CreateObject("Msxml2.ServerXMLHTTP")
totalBytes = Request.TotalBytes
data = Request.BinaryRead(totalBytes)
method = Request.ServerVariables("REQUEST_METHOD")
contentType = Request.ServerVariables("CONTENT_TYPE")


'read stuff from the url
dim Action, Filename, Content, debug
Action = Request.QueryString("request") 
Filename = Request.QueryString("file")
Content = Request.QueryString("content")
debug = Request.QueryString("debug")

'some logic..
If Action = "" or Filename = "" Then
	Response.ContentType = "application/json"
	Response.Status = 200
	Response.Write "{""File"":""" & Filename &"""," 
	Response.Write """Request"":""" & Action &"""," 
	Response.Write """Content"":""" & content & """}" 
	Response.Write vbCrLF
Elseif inStr(Filename,"/")>0 or inStr(Filename,"\")>0  Then
	Response.Write "{""result"":""illegal filename""}" 
Elseif Action = "r" then
	result = ReadFile( filepath(0) & filename )
	result = replace( result, vbCrLF, "" )
	Response.Write "{""result"":"""&result&"""}" 
Elseif Action = "c" then
	result = CountFile( filepath(0) & filename )
	Response.Write "{""result"":"""&result&"""}" 
Elseif Action = "x" then
	result = ExistFile( filepath(0) & filename )
	Response.Write "{""result"":"""&result&"""}" 
Elseif Action = "s" then
	result = ExistFileStart( filepath(0), filename )
	Response.Write "{""result"":"""&result&"""}" 
Elseif Action = "w" then
	result=""
	For Each path In filepath
		result = result+WriteFile( path & filename, content )
	Next
	Response.Write "{""result"":"""&result&"""}" 
Elseif Action = "a" then
	result=""
	For Each path In filepath
		result = result+AppendFile( path & filename, content )
		if result= "no file" then
			result = result+WriteFile( path & filename, content )
		end if
	Next
	Response.Write "{""result"":"""&result&"""}" 
End If



%>