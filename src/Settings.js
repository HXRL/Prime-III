/*
Prime III

URL: http://www.PrimeVotingSystem.org

Copyright (c) 2015 University of Florida

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>. 

*/

var VotingStationID = "03";
var AppName = "Gators";
var EnableScreenReading = false;
var UseAccessCode = true;
var RotateCandidates = 0;
var UseTallyMode = false;
var ReviewMode = "Review"; //ByPass, Review, ReadOnly
var PrintThe = "BallotAndQRCode"; //Ballot, QRCode, BallotAndQRCodeAndQRCodeText, BallotAndQRCode, Download, BallotWithOvals, BallotWithOvalsLeftRight, Ovals, Nothing
var PrintCandidateID = false; //July 1, 2016
var PrintCheckbox = false; //November 21, 2018
var PrintCandidatePartyLabel = true;
var LinesPerPrintedPage = 13;
var UseSettings = true; //July 1, 2016
var UseVoteByParty = true; //July 1, 2016
var UserInterface = "LEVI"; //Basic or LEVI or TIPI
var AllowVotersToSelectAudio = true;
var UseZoom = true;
var UseAudio = true;
var MicIsOn = true;
var AllowOverVotes = false; 
var DeselectCandidates = false;
var SynchAudioAndVideo = false;
var ConfirmBallotRejection = true;
var SoundDetector = "PocketSphinx"; //Chrome, Java or PocketSphinx (Note: Set Firefox media.navigator.permission.disabled)
var SoundDetectorSensitivity = 4.5; //default is 10, we have been using 3.5, the higher the number the less sensitive
var SoundDetectorSensitivityMax = 7; //maximum sensitivity level
var SoundDetectorSensitivityIncrement = 0.5;
var SayVote = Phrase[SelectedVoice][105]; //" say vote";
var BallotImageType =".png";
var QRCodeBaseURL = "p3v.us/i.htm"; //This is the location for Prime III on the web for QR Code Processing. If not processing on the web, leave this blank. "p3v.us/i.htm"
var VoterIsVerifyingQRCode = false;
var VotedMenuString = " ***";
var TextToSpeechEngine = "Chrome"; //Chrome or Speakjs
var CastVoteRecordID = "";
var PrintCastVoteRecordOnBallot = false;

var VoterBrowser = "Chrome";
var theBrowser = navigator.userAgent.toLowerCase();

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


var CalculateTimetoVote = true;
var StartedVotingAt = new Date();
var VotingDoneAt = new Date();

var VotingStarted = false;
var InBallotReview = false;
var ContestSelected = false;
var FoundQRCode = false;
var ContestColor = "#000000";

var LastTimeSelectionWasMade = new Date();
var TimeBetweenSelections = 1000;

var NumberOfCandidateButtonsColumns = 2; // Set to 1 or 2
var NumberOfCandidateButtons = 10; //6, 8, 10 or 12
var CandidateButtonFontAndSize = "font: bold 18px Arial;width:500;height:70";
var NavigationButtonFontAndSize = "font: bold 18px Arial;width:200;height:90";
var ScreenReaderSelectionButtonFontAndSize = "font: bold 14px Arial;width:400;height:40";
var TIPINextButtonFont = "font: bold 24px Arial;width:500;height:100";
var AccessButtonFont = "bold 24px Arial;width:300;height:100";
var AccessCodeBoxFont = "font: bold 18px Arial;width:910;height:50";
var NumberOfContestButtonsOnReview = 7;
var SoundListeningPeriod = 1500; //In milliseconds
var SpeakjsTalkEndedDelay = 900; //Note: SpeakjsTalkEndedDelay must be less than SoundListeningPeriod
var SoundDetectionPeriod = 500;
var SitePalTalkEndedDelay = 1500;
var SpeakjsCurrentTime = 9999;
var SwitchIsConnected = false;

if (SwitchIsConnected) SayVote += Phrase[SelectedVoice][45]; //" or press enter. ";
SayVote += ". ";

//SitePal Voice Options

//var SitePalVoice = 1; //Kate-NeoSpeech
//var SitePalVoice = 3; //Julie-NeoSpeech
//var SitePalVoice = 2; //Dave-Loquendo
//var SitePalVoice = 3; //Tom-Nuance ***
//var SitePalVoice = 8; //Steven-Loquendo
var SitePalVoice = 2; //Paul-NeoSpeech ***
var SitePalLanguage = 1; //English
var SitePalEngine = 3; //NeoSpeech ***
//var SitePalEngine = 2; //Loquendo
//var SitePalEngine = 4; //Nuance ***

var ContestsCells = new Array();

var BaselineNumberOfContestsForDisplay = 20;
var VeryLargeNumberOfContests = 30;
var DefaultSizeBase = 20;
var MediumSizeBase = 30;
var ZoomSizeBase = 50;
var DefaultSize = DefaultSizeBase;
var MediumSize = MediumSizeBase;
var ZoomSize = ZoomSizeBase;
var TABKEY = 9;
var ENTERKEY = 13;
var SelectionColor = "#FFFFDF";
var DefaultColor = "#BDBDBD";
var CurrentContest = 0;
var LoadContest = 0;
var NumberOfCandidatesAvailable = 0;
var NumberOfWriteInCandidatesAvailable= 0;
var CurrentContestIndex = -1;
var SubmitButtonInReviewValue = 2015;
var RejectButtonInReviewValue = 2016; 
var RejectBallotYes = -47;
var RejectBallotNo = -46;
var CurrentCandidateIndex = 0;
var MoreButtonIndex = -1;

var RejectBallot = "--- " + Phrase[SelectedVoice][130] + " ---";
var SubmitBallot = "--- " + Phrase[SelectedVoice][45] + " ---";
var SubmitButtonFont = "bold 36px arial,serif";
var SubmitButtonColor = "#FFFFFF"; //white
var SubmitButtonBackground = "#000000"; //black

var ReviewButtonFont = "bold 24px arial,serif";
var ReviewButtonColor = "#000000"; //black
var ReviewButtonBackground = "#f8f8ff"; //ghostwhite

var MoreContestsFont = "bold 30px arial,serif";
var MoreContestColor = "#000000"; //black
var MoreContestBackground = "#f8f8ff"; //ghostwhite

var KeyFont = "font: bold 40px Arial;width:100;height:100";
var WriteInKeyFont = "font: bold 40px Arial;width:300;height:100";
var MoreParties = "<img src=\"downarrow.png\"> &nbsp; " + Phrase[SelectedVoice][39] + " &nbsp; <img src=\"downarrow.png\">";
var MorePartiesUp = "<img src=\"uparrow.png\"> &nbsp; " + Phrase[SelectedVoice][42] + " &nbsp; <img src=\"uparrow.png\">";
var MoreContests = "<img src=\"downarrow.png\"> &nbsp; " + Phrase[SelectedVoice][40] + " &nbsp; <img src=\"downarrow.png\">";
var MoreContestsUp = "<img src=\"uparrow.png\"> &nbsp; " + Phrase[SelectedVoice][40] + " &nbsp; <img src=\"uparrow.png\">";
var MoreCandidates = "<img src=\"downarrow.png\"> &nbsp; " + Phrase[SelectedVoice][38] + " &nbsp; <img src=\"downarrow.png\">";
var MoreCandidatesUp = "<img src=\"uparrow.png\"> &nbsp; " + Phrase[SelectedVoice][41] + " &nbsp; <img src=\"uparrow.png\">";
var NoSelection = window.top.Phrase[window.top.SelectedVoice][68];
var NoSelectionID = "999";
var VotingInstructions = "<font id=\"PropositionOrAmendmentText\" size=\"8\"><img src=\"leftarrow.png\" align=\"middle\"> " + window.top.Phrase[window.top.SelectedVoice][9] + "</font>";
var WriteIn = Phrase[SelectedVoice][32]; //"Candidate Write In";
var WriteInID = "888";
var WriteInBoxIsReadOnly = false;
var UseWriteInKeyboard = true;
var AccessCodeBoxIsReadOnly = false;
var PropositionOrAmendment = "Proposition or Amendment";
var CenterPropositionOrAmendmentText = false;
var VoteByParty = "Vote By Party";
var Settings = Phrase[SelectedVoice][8]; //"Settings"
var BallotReview = "Ballot Review";

var SpeakingRates = new Array();

SpeakingRates["Very Fast"] = 2;
SpeakingRates["Fast"] = 1.5;
SpeakingRates["Average"] = 1;
SpeakingRates["Slow"] = 0.8;
SpeakingRates["Very Slow"] = 0.4;

var SpeakingRate = SpeakingRates["Average"];

var ChromeSpeechSynthesizer; //new SpeechSynthesisUtterance('I am Chrome');
var elapsedTime = 0;
var VoiceName = "US English Female TTS (by Google)"; //"US English Female TTS (by Google)" or "Alex" or "Google US English" or "Google español" or "native";
var voicesAvailable; //speechSynthesis.getVoices();
					
function setVoice()
{
	voicesAvailable = speechSynthesis.getVoices();

	if (voicesAvailable.length == 0)
	{
		setTimeout("setVoice()", 100);
		return;
	}
					
	var i = 0;
	for (i = 0; i < voicesAvailable.length; i++) 
	{
		if (voicesAvailable[i].name == VoiceName) break;
	}
	
	if (i >= voicesAvailable.length) i = 0; //set it back to the default
						  
	ChromeSpeechSynthesizer.voiceURI = "native";
	ChromeSpeechSynthesizer.default = false;
	ChromeSpeechSynthesizer.rate = 1.0;
	ChromeSpeechSynthesizer.lang = Voices[SelectedVoice];
	ChromeSpeechSynthesizer.voice = voicesAvailable[i];
}

invisibleImage = "invisible.gif";
checkImage = "check.gif";
DivOrP = "p";

check = new Image();
check.src = checkImage;

function getParty(p)
{
	if ((p=="none") || (p=="")) return new Party("","");
	
	var plabel = "(" + p +")";
	for (i=0;i<Parties.length;i++)
	{
		if ((Parties[i].PartyName == p) || (Parties[i].PartyLabel == plabel)) return Parties[i];
	}
	return new Party("","");
}


function getContest(c)
{
	for (i=0;i<Contests.length;i++)
		if ((Contests[i].ContestName == c) || (Contests[i].ContestID == c)) return Contests[i];
	return Contests[i-1];
}


function Party(party, plabel)
{
	if ((party == WriteIn) || (party == PropositionOrAmendment) || (party == ""))
	{
		this.PartyName = "";
		this.PartyLabel = "";
	}
	else
	{
		this.PartyName = party;
		
		if ((plabel == ",") || (plabel == ""))
			this.PartyLabel = "";
		else
			this.PartyLabel = "(" + plabel +")";
	}
	this.PartySelected = false;
	this.ButtonIndex = -1;
	this.WhenSelected = new Date();
	this.WhenSelected.setFullYear(2800,0,14);
}

function Candidate(id, cname, party, contest, photo, soundslike, left, top, line)
{
	this.CandidateID = id;
	this.CandidateName = cname;
	this.Party = getParty(party);
	this.Contest = getContest(contest);
	this.left = left;
	this.top = top;
	this.line = line;
	if ((soundslike == "") || (soundslike == "undefined"))
		this.SoundsLike = cname;
	else
		this.SoundsLike = soundslike;
	this.CandidateSelected = false;
	this.ButtonIndex = -1;
	this.WhenSelected = new Date();
	this.WhenSelected.setFullYear(2800,0,14);
	this.WriteInDefaultName = WriteIn;
	
	if ((photo != "none") && (photo.trim().length > 0))
	{
		var img=new Image();
    	img.src=photo;	
    	this.CandidatePhoto = photo;
    }
    else
    	this.CandidatePhoto = "none";
	
	if (cname == WriteIn)
		this.WriteInCandidate = true;
	else
		this.WriteInCandidate = false;
		
	this.setWriteInName = function (wn)
	{
		this.CandidateName = wn;
		this.SoundsLike = wn;
		this.WriteInDefaultName = wn;
	};
		
	this.setWriteInNameToDefault = function ()
	{
		this.CandidateName = this.WriteInDefaultName;
		this.SoundsLike = this.WriteInDefaultName;
	};
	
}

function Contest(id, ctype, nocts, coname, soundslike, patext, papronunciation, rtc)
{//Proposition or Amendment
	this.ContestID = id;
	this.ContestType = ctype;
	this.NumberOfCandidatesToSelect = nocts;
	this.ContestName = coname;
	this.NumberOfSelectedCandidates = 0;
	this.ButtonIndex = -1;
	this.PropositionOrAmendmentText = patext;
	
	if ((typeof(soundslike) == 'undefined') || (soundslike.trim().length == 0))
		this.SoundsLike = coname;
	else
		this.SoundsLike = soundslike;
	
	if (typeof(papronunciation) == 'undefined')
		this.PropositionOrAmendmentPronunciation = patext;
	else
		this.PropositionOrAmendmentPronunciation = papronunciation;
		
	if (ctype != "Contest")
		this.RotateThisContest = false;
	else if (typeof(rtc) == 'undefined')
		this.RotateThisContest = false;
	else
		this.RotateThisContest = rtc;
}



function getDateTimeDifference(dateone, datetwo, format)
{
	var difference;
	
	//format = "Days", Hours, Minutes, Seconds 
	if(dateone > datetwo) 
		difference = dateone.getTime() - datetwo.getTime();
	else 
		difference = datetwo.getTime() - dateone.getTime();
	

	if (format=="Days")
		difference = (difference/1000/60/60/24);
	else if (format=="Hours")
		difference = (difference/1000/60/60);
	else if (format=="Minutes")
		difference = (difference/1000/60);
 	else //"Seconds"
 		difference = (difference/1000);

	return difference;
}


var WriteInPrefixes = new Array('First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth');


/* Write-In Stuff */

var WriteInGroups = new Array();
WriteInGroups[0] = "ABCDE";
WriteInGroups[1] = "FGHIJ";
WriteInGroups[2] = "KLMNO";
WriteInGroups[3] = "PQRST";
WriteInGroups[4] = "UVWXYZ";
WriteInGroups[5] = "space";
WriteInGroups[6] = "back space";
WriteInGroups[7] = "clear";
WriteInGroups[8] = "submit";

var WriteInPrompts = new Array();
WriteInPrompts["ABCDE"] = "ay, bee, see, dee, or ee"; //0
WriteInPrompts["FGHIJ"] = "ef, gee, h, eye, or jay"; //1
WriteInPrompts["KLMNO"] = "kay, el, im, in, or oh"; //2
WriteInPrompts["PQRST"] = "pee, que, are, es, or tee"; //3
WriteInPrompts["UVWXYZ"] = "you, vee, w, ex, why, or zee"; //4
WriteInPrompts["space"] = "a space";
WriteInPrompts["back space"] = "a back space";
WriteInPrompts["clear"] = "clear your letters";
WriteInPrompts["submit"] = "submit your name";

var NextGroup = new Array();
NextGroup["A"] = 2;
NextGroup["B"] = 3;
NextGroup["C"] = 0;
NextGroup["D"] = 0;
NextGroup["E"] = 2;
NextGroup["F"] = 3;
NextGroup["G"] = 0;
NextGroup["H"] = 0;
NextGroup["I"] = 3;
NextGroup["J"] = 0;
NextGroup["K"] = 0;
NextGroup["L"] = 0;
NextGroup["M"] = 0;
NextGroup["N"] = 2;
NextGroup["O"] = 2;
NextGroup["P"] = 0;
NextGroup["Q"] = 4;
NextGroup["R"] = 2;
NextGroup["S"] = 0;
NextGroup["T"] = 3;
NextGroup["U"] = 2;
NextGroup["V"] = 1;
NextGroup["W"] = 1;
NextGroup["X"] = 0;
NextGroup["Y"] = 0;
NextGroup["Z"] = 0;

var WriteInLetters = new Array();
WriteInLetters["ay"] = "A";
WriteInLetters["bee"] = "B";
WriteInLetters["see"] = "C";
WriteInLetters["dee"] = "D";
WriteInLetters["ee"] = "E";
WriteInLetters["ef"] = "F";
WriteInLetters["gee"] = "G";
WriteInLetters["h"] = "H";
WriteInLetters["eye"] = "I";
WriteInLetters["jay"] = "J";
WriteInLetters["kay"] = "K";
WriteInLetters["el"] = "L";
WriteInLetters["im"] = "M";
WriteInLetters["in"] = "N";
WriteInLetters["oh"] = "O";
WriteInLetters["pee"] = "P";
WriteInLetters["que"] = "Q";
WriteInLetters["are"] = "R";
WriteInLetters["es"] = "S";
WriteInLetters["tee"] = "T";
WriteInLetters["you"] = "U";
WriteInLetters["vee"] = "V";
WriteInLetters["w"] = "W";
WriteInLetters["ex"] = "X";
WriteInLetters["why"] = "Y";
WriteInLetters["zee"] = "Z";

/* Write-In Stuff */

var numbers = '0123456789';
var lowercaseletters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function isValid(parm,val) 
{
	if (parm == "") return true;
	
	for (i=0; i<parm.length; i++) 
	{
		if (val.indexOf(parm.charAt(i),0) == -1) return false;
	}
	return true;
}

function isNumber(parm) {return isValid(parm,numbers);}
function isLowercase(parm) {return isValid(parm,lowercaseletters);}
function isUppercase(parm) {return isValid(parm,uppercaseletters);}
function isAlpha(parm) {return isValid(parm,lowercaseletters+uppercaseletters);}
function isAlphanum(parm) {return isValid(parm,lowercaseletters+uppercaseletters+numbers);}


var KeyboardRows = 3;
var NumberOfKeysPerRow = 10;
var Keyboard = new Array(KeyboardRows);
Keyboard[0] = new Array(NumberOfKeysPerRow); 
Keyboard[1] = new Array(NumberOfKeysPerRow);
Keyboard[2] = new Array(NumberOfKeysPerRow);

var Qwerty = new Array('Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '\'', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '-');
var j=0;
var k=0;
var row=0
for (i=0;i<Qwerty.length;i++)
{
	if ((i == row) && (row == 0)) 
		row += Keyboard[j].length;
	else if (i == row)
	{
		j++;
		k=0;
		row += Keyboard[j].length;
	}
	
	Keyboard[j][k] = Qwerty[i];
	k++;
}

function trim(stringToTrim) 
{
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}


function explode (delimiter, string, limit) 
{
    // http://kevin.vanzonneveld.net
    // +     original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     improved by: kenneth
    // +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     improved by: d3x
    // +     bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: explode(' ', 'Kevin van Zonneveld');
    // *     returns 1: {0: 'Kevin', 1: 'van', 2: 'Zonneveld'}
    // *     example 2: explode('=', 'a=bc=d', 2);
    // *     returns 2: ['a', 'bc=d']
    var emptyArray = {
        0: ''
    };

    // third argument is not required
    if (arguments.length < 2 || typeof arguments[0] == 'undefined' || typeof arguments[1] == 'undefined') {
        return null;
    }

    if (delimiter === '' || delimiter === false || delimiter === null) {
        return false;
    }

    if (typeof delimiter == 'function' || typeof delimiter == 'object' || typeof string == 'function' || typeof string == 'object') {
        return emptyArray;
    }

    if (delimiter === true) {
        delimiter = '1';
    }

    if (!limit) {
        return string.toString().split(delimiter.toString());
    }
    // support for limit argument
    var splitted = string.toString().split(delimiter.toString());
    var partA = splitted.splice(0, limit - 1);
    var partB = splitted.join(delimiter.toString());
    partA.push(partB);
    return partA;
}
