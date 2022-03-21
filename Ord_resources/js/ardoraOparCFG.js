//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=90; timeIni=90; timeBon=0;
var successes=0; successesMax=2; attempts=0; attemptsMax=3;
var score=0; scoreMax=2; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="INICIAR";
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
var timeOnMessage=3; messageOk="¡FELICIDADES LO HAS LOGRADO!"; messageTime="¡SE TE HA ACABADO EL TIEMPO!"; messageError="TE HAS EQUIVOCADO"; messageErrorG="TE HAS EQUIVOCADO"; messageAttempts="¡SE TE HAN ACABADO LOS NUMEROS DE INTENTOS!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T3Jk"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="Ord_resources/media/";
var indexG=0;
var words1G=["MjQ=","MjAuMg==","MjA=","MTg=","MTA=","NQ==","MA==","LTE="];
var words2G=["NV40","M3heMg==","MjB4","MTA=","Ng=="];
var words3G=[];
var c1=[2,4,2,2,2,1,1,2];
var c2=[3,4,3,2,1];
var c3=[];
