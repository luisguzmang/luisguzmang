//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=2;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#64B1FF"; colorButton="#FFFFFF"; colorText="#000000"; colorSele="#FFFFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="'Times New Roman', Times, serif";
var fEnun="'Times New Roman', Times, serif";
var timeOnMessage=5; messageOk="¡FELICIDADES LO HAS LOGRADO!"; messageTime="¡SE TE HA ACABADO EL TIEMPO!"; messageError="TE HAS EQUIVOCADO"; messageAttempts="¡SE TE HA ACABADO EL NUMERO DE INTENTOS!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0"];
var posX=[338,208,259,233,149,83]; var posY=[119,245,188,161,94,289];
var coorx=["MzMz", "MjAz", "MjU0", "MjI4", "MTQ0", "Nzg="]; var coory=["MTE5", "MjQ1", "MTg4", "MTYx", "OTQ=", "Mjg5"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", ""]; var al2=["", "", "", "", "", ""]; var al3=["", "", "", "", "", ""]; var al4=["", "", "", "", "", ""]; answers=["Cataluña", "Andalucia", "Castila La Mancha", "Madrid", "Galicia", "Canarias"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="UGFu"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
