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

var ENGLISH = 0;
var SPANISH = 1;
var CHINESE = 2;
var CHINESE_T = 3;
var CREOLE = 4;
var FRENCH = 5;
var NumberOfVoices = 5;

//This is the language Prime III will use
var SelectedVoice = ENGLISH; 

var Voices = new Array(NumberOfVoices);
Voices[ENGLISH] = "en-US"; 
Voices[SPANISH] = "es-MX"; 
Voices[CHINESE] = "zh-CN"; 
Voices[CHINESE_T] = "zh-CN"; 
Voices[CREOLE] = "en-US";
//Voices[FRENCH] = "fr-FR"; 
//Find codes at http://stackoverflow.com/questions/14257598/what-are-language-codes-for-voice-recognition-languages-in-chromes-implementati


var langCodes = new Array(NumberOfVoices);
langCodes[ENGLISH] = "en"; 
langCodes[SPANISH] = "es"; 
langCodes[CHINESE] = "zh"; 
langCodes[CHINESE_T] = "zh"; 
langCodes[CREOLE] = "ht"

document.getElementsByTagName('html')[0].setAttribute('lang', langCodes[SelectedVoice]); 


//Load spoken phrases into Phrase Array
var NumberOfPhrasesInPrimeIII = 150; //Prime III has this number of phrases
var Phrase = new Array(NumberOfVoices);

for (var i=0; i < NumberOfVoices; i++) 
  Phrase[i] = new Array(NumberOfPhrasesInPrimeIII);

//ENGLISH
Phrase[ENGLISH][0] = "Yes"; //Yes
Phrase[ENGLISH][1] = "No"; //No
Phrase[ENGLISH][2] = "Enter access code or scan ballot to begin."; //Enter access code or scan ballot to begin.
Phrase[ENGLISH][3] = "Does the voter want to respond with the microphone?"; //Does the voter want to respond with the microphone?
Phrase[ENGLISH][5] = "Does the voter want the ballot read to them through the headphones?"; //Does the voter want the ballot read to them through the headphones?
Phrase[ENGLISH][6] = "Backspace"; //Backspace
Phrase[ENGLISH][7] = "Enter"; //Enter
Phrase[ENGLISH][8] = "Settings"; //Settings
Phrase[ENGLISH][9] = "To start voting, touch a selection on the left."; //To start voting, touch a selection on the left.
Phrase[ENGLISH][10] = "Start Voting"; //Start Voting
Phrase[ENGLISH][11] = "Vote By Party"; //Vote By Party
Phrase[ENGLISH][12] = "Review My Ballot"; //Review My Ballot
Phrase[ENGLISH][13] = "Select a voice setting."; //Select a voice setting.
Phrase[ENGLISH][14] = "Contest"; //Contest
Phrase[ENGLISH][15] = "of"; //of
Phrase[ENGLISH][16] = "Very Fast"; //Very Fast
Phrase[ENGLISH][17] = "Fast"; //Fast
Phrase[ENGLISH][18] = "Average"; //Average
Phrase[ENGLISH][19] = "Slow"; //Slow
Phrase[ENGLISH][20] = "Very Slow"; //Very Slow
Phrase[ENGLISH][21] = "Back"; //Back
Phrase[ENGLISH][22] = "Top"; //Top
Phrase[ENGLISH][23] = "Clear"; //Clear
Phrase[ENGLISH][24] = "Review"; //Review
Phrase[ENGLISH][25] = "Next"; //Next
Phrase[ENGLISH][26] = "Vote for no more than"; //Vote for no more than
Phrase[ENGLISH][27] = "Candidates"; //Candidates
Phrase[ENGLISH][28] = "Accept"; //Accept
Phrase[ENGLISH][29] = "Reject"; //Reject
Phrase[ENGLISH][30] = "Ballot Review"; //Ballot Review
Phrase[ENGLISH][31] = "Select a contest to change your selection."; //Select a contest to change your selection.
Phrase[ENGLISH][32] = "Candidate Write In"; //Candidate Write In
Phrase[ENGLISH][33] = "Type in the candidate's name and press submit."; //Type in the candidate's name and press submit.
Phrase[ENGLISH][34] = "Go Back"; //Go Back
Phrase[ENGLISH][35] = "Space"; //Space
Phrase[ENGLISH][36] = "Submit"; //Submit
Phrase[ENGLISH][37] = "You have selected "; //You have selected
Phrase[ENGLISH][38] = "MORE CANDIDATES"; //MORE CANDIDATES
Phrase[ENGLISH][39] = "MORE PARTIES"; //MORE PARTIES
Phrase[ENGLISH][40] = "MORE CONTESTS"; //MORE CONTESTS
Phrase[ENGLISH][41] = "PREVIOUS CANDIDATES"; //PREVIOUS CANDIDATES
Phrase[ENGLISH][42] = "PREVIOUS PARTIES"; //PREVIOUS PARTIES
Phrase[ENGLISH][43] = "SELECTED"; //SELECTED
Phrase[ENGLISH][44] = "No Selection"; //No Selection
Phrase[ENGLISH][45] = "Submit My Ballot"; //Submit My Ballot
Phrase[ENGLISH][46] = "Your ballot is printing."; //Your ballot is printing.
Phrase[ENGLISH][47] = "You must enter an access code or scan a barcode to begin."; //You must enter an access code or scan a barcode to begin.
Phrase[ENGLISH][48] = "Print My Ballot"; //Print My Ballot
Phrase[ENGLISH][50] = "Done Printing My Ballot"; //Done Printing My Ballot
Phrase[ENGLISH][51] = "For best results, you should use Firefox."; //For best results, you should use Firefox.
Phrase[ENGLISH][52] = "Please wait..."; //Please wait...
Phrase[ENGLISH][53] = "Your ballot has been cast."; //Your ballot has been cast.
Phrase[ENGLISH][54] = "Thank You."; //Thank You.
Phrase[ENGLISH][55] = "To start voting, "; //To start voting, 
Phrase[ENGLISH][56] = "press the start button below or select a contest from the menu."; //press the start button below or select a contest from the menu.
Phrase[ENGLISH][57] = "touch the start button below or select a contest from the menu."; //touch the start button below or select a contest from the menu.
Phrase[ENGLISH][58] = "Select a contest"; //Select a contest
Phrase[ENGLISH][59] = "Go to the previous contest"; //Go to the previous contest
Phrase[ENGLISH][60] = "Go to the first contest"; //Go to the first contest
Phrase[ENGLISH][61] = "Clear the selections for this contest"; //Clear the selections for this contest
Phrase[ENGLISH][62] = "Go to the review screen"; //Go to the review screen
Phrase[ENGLISH][63] = "Vote for no more than 1 Candidate"; //Vote for no more than 1 Candidate
Phrase[ENGLISH][64] = "selected"; //selected
Phrase[ENGLISH][65] = "Go to the next contest"; //Go to the next contest
Phrase[ENGLISH][66] = "MORE"; //MORE
Phrase[ENGLISH][67] = "party"; //party
Phrase[ENGLISH][68] = "No_Selection"; //No_Selection
Phrase[ENGLISH][69] = "Ballot print error"; //Ballot print error
Phrase[ENGLISH][70] = "Thank you. Your ballot has been cast."; //Thank you. Your ballot has been cast.
Phrase[ENGLISH][71] = "Thank you. Here's the que are code of your ballot. You should print or save this code."; //Thank you. Here's the que are code of your ballot. You should print or save this code.
Phrase[ENGLISH][72] = "Thank you. Your ballot is being printed."; //Thank you. Your ballot is being printed.
Phrase[ENGLISH][73] = "You are voting by party. There are "; //You are voting by party. There are 
Phrase[ENGLISH][74] = " parties. "; //parties.
Phrase[ENGLISH][75] = "You have selected the "; //You have selected the 
Phrase[ENGLISH][76] = "This is your ballot summary. "; //This is your ballot summary. 
Phrase[ENGLISH][77] = "You have voted in all "; //You have voted in all 
Phrase[ENGLISH][78] = "contests. "; //contests. 
Phrase[ENGLISH][79] = "You have voted in "; //You have voted in 
Phrase[ENGLISH][80] = " of the "; //of the 
Phrase[ENGLISH][81] = "You are voting for "; //You are voting for 
Phrase[ENGLISH][82] = "This is contest number "; //This is contest number 
Phrase[ENGLISH][83] = " out of "; // out of 
Phrase[ENGLISH][84] = " and "; // and 
Phrase[ENGLISH][85] = "You can select "; //You can select 
Phrase[ENGLISH][86] = " one more candidate. "; // one more candidate. 
Phrase[ENGLISH][87] = "more candidates. "; //more candidates. 
Phrase[ENGLISH][88] = "There are "; //There are 
Phrase[ENGLISH][89] = "options available. "; //options available. 
Phrase[ENGLISH][90] = "It reads as follows. "; //It reads as follows. 
Phrase[ENGLISH][91] = "candidates available. "; //candidates available. 
Phrase[ENGLISH][92] = "You can select no more than"; //You can select no more than
Phrase[ENGLISH][93] = "options. "; //options. 
Phrase[ENGLISH][94] = "Your selections for "; //Your selections for 
Phrase[ENGLISH][95] = "have been cleared. "; //have been cleared. 
Phrase[ENGLISH][96] = "go back, "; //go back, 
Phrase[ENGLISH][97] = "clear your selections, "; //clear your selections, 
Phrase[ENGLISH][98] = "go to the next contest, "; //go to the next contest, 
Phrase[ENGLISH][99] = "review your ballot, "; //review your ballot, 
Phrase[ENGLISH][100] = "the "; //the 
Phrase[ENGLISH][101] = "Changed your vote for, "; //Changed your vote for, 
Phrase[ENGLISH][102] = "To vote for"; //To vote for
Phrase[ENGLISH][103] = " as the "; // as the 
Phrase[ENGLISH][104] = "To go back "; //To go back 
Phrase[ENGLISH][105] = " say vote"; // say vote
Phrase[ENGLISH][106] = "You have selected to write in a candidate name by spelling the candidate's name. To go back, "; //You have selected to write in a candidate name by spelling the candidate's name. To go back, 
Phrase[ENGLISH][107] = "To select "; //To select 
Phrase[ENGLISH][108] = "To change your "; //To change your 
Phrase[ENGLISH][109] = "To "; //To 
Phrase[ENGLISH][110] = "To go back, "; //To go back, 
Phrase[ENGLISH][111] = "To clear your selections, "; //To clear your selections, 
Phrase[ENGLISH][112] = "To review your ballot, "; //To review your ballot, 
Phrase[ENGLISH][113] = "To go to the next contest, "; //To go to the next contest, 
Phrase[ENGLISH][114] = "To change your vote for "; //To change your vote for 
Phrase[ENGLISH][115] = "To undo your "; //To undo your 
Phrase[ENGLISH][116] = " vote for "; // vote for 
Phrase[ENGLISH][117] = "Select a contest"; // Select a contest
Phrase[ENGLISH][118] = "Go to "; //Go to 
Phrase[ENGLISH][119] = "For best results, you should use Chrome."; //For best results, you should use Chrome.
Phrase[ENGLISH][120] = " press enter or touch the screen. "; //press enter or touch the screen.
Phrase[ENGLISH][121] = " press enter. "; //press enter.
Phrase[ENGLISH][122] = " Selected, start voting. There are "; //Selected, start voting. There are 
Phrase[ENGLISH][123] = " contests for voting. "; // contests for voting. 
Phrase[ENGLISH][124] = "Selected, space. Selected, "; //Selected, space. Selected,  
Phrase[ENGLISH][125] = "Selected, back space. Selected, "; //Selected, back space. Selected,  
Phrase[ENGLISH][126] = "Selected, clear. Your write in candidate has been cleared."; //Selected, clear. Your write in candidate has been cleared. 
Phrase[ENGLISH][127] = "To change the speed of the voice to "; //To change the speed of the voice to 
Phrase[ENGLISH][128] = " VOTED"; //Voted 
Phrase[ENGLISH][129] = " or press enter"; //or press enter.
Phrase[ENGLISH][130] = "Reject My Ballot"; //Reject My Ballot
Phrase[ENGLISH][131] = "To submit your ballot"; //To submit your ballot
Phrase[ENGLISH][132] = "To reject your ballot"; //To reject your ballot
Phrase[ENGLISH][133] = "You did not make a selection "; //You did not make a selection
Phrase[ENGLISH][134] = " You selected  "; // You selected 
Phrase[ENGLISH][135] = " for  "; // for 
Phrase[ENGLISH][136] = "Your ballot is ready for printing. "; //Your ballot is ready for printing.
Phrase[ENGLISH][137] = "Do you want to reject your ballot?"; //Do you want to reject your ballot?
Phrase[ENGLISH][138] = "No. Do Not Reject My Ballot."; //No. Do Not Reject My Ballot.
Phrase[ENGLISH][139] = "If you would like to select a different candidate, you must deselect one of your current selections."; //If you would like to select a different candidate, you must deselect one of your current selections.
Phrase[ENGLISH][140] = "Invalid access code or barcode. Please try again."; //Invalid access code or barcode. Please try again.
Phrase[ENGLISH][141] = "Scan your ballot to begin."; //Scan your ballot to begin.
Phrase[ENGLISH][142] = "Thank you. Your ballot has been recorded"; //Thank you. Your ballot has been recorded
Phrase[ENGLISH][143] = ", candidates and "; //", candidates and "
Phrase[ENGLISH][144] = ", write ins available. "; //", write ins available. "
Phrase[ENGLISH][145] = "no write ins available. "; //"no write ins available. "
Phrase[ENGLISH][146] = ", write in available. "; //", write in available. "
Phrase[ENGLISH][147] = "You have over voted. "; //"You have over voted. "
Phrase[ENGLISH][148] = "press the start button below."; //press the start button below.
Phrase[ENGLISH][149] = "Print my selection(s)"; //Print my selection(s)



//SPANISH
Phrase[SPANISH][0] = "Si"; //Yes
Phrase[SPANISH][1] = "No"; //No
Phrase[SPANISH][2] = "Para iniciar, escriba codigo de acceso o escanee la boleta."; //Enter access code or scan ballot to begin.
Phrase[SPANISH][3] = "¿Quiere el votante responder con el microfono?"; //Does the voter want to respond with the microphone?
Phrase[SPANISH][5] = "¿Quiere el votante que su boleta sea leída por los audífonos?"; //Does the voter want the ballot read to them through the headphones?
Phrase[SPANISH][6] = "Atras"; //Backspace
Phrase[SPANISH][7] = "Entrar"; //Enter
Phrase[SPANISH][8] = "Propiedades"; //Settings
Phrase[SPANISH][9] = "Para iniciar votacion, presione una seleccion a la izquierda."; //To start voting, touch a selection on the left.
Phrase[SPANISH][10] = "Iniciar votacion"; //Start Voting
Phrase[SPANISH][11] = "Votar por partido"; //Vote By Party
Phrase[SPANISH][12] = "Revisar mi boleta"; //Review My Ballot
Phrase[SPANISH][13] = "Seleccionar ajuste de la voz."; //Select a voice setting.
Phrase[SPANISH][14] = "Concurso"; //Contest
Phrase[SPANISH][15] = "de"; //of
Phrase[SPANISH][16] = "Muy rapido"; //Very Fast
Phrase[SPANISH][17] = "Rapido"; //Fast
Phrase[SPANISH][18] = "Promedio"; //Average
Phrase[SPANISH][19] = "Despacio"; //Slow
Phrase[SPANISH][20] = "Muy despacio"; //Very Slow
Phrase[SPANISH][21] = "Atras"; //Back
Phrase[SPANISH][22] = "Arriba"; //Top
Phrase[SPANISH][23] = "Borrar"; //Clear
Phrase[SPANISH][24] = "Revisar"; //Review
Phrase[SPANISH][25] = "siguiente"; //Next
Phrase[SPANISH][26] = "Votar por no mas de "; //Vote for no more than
Phrase[SPANISH][27] = "Candidatos"; //Candidates
Phrase[SPANISH][28] = "Aceptar"; //Accept
Phrase[SPANISH][29] = "Rechazar"; //Reject
Phrase[SPANISH][30] = "Revisar Boleta"; //Ballot Review
Phrase[SPANISH][31] = "Seleccionar un concurso para cambiar su seleccion."; //Select a contest to change your selection.
Phrase[SPANISH][32] = "Escribir Candidato"; //Candidate Write In
Phrase[SPANISH][33] = "Escriba el nombre del candidato y presione enviar."; //Type in the candidate's name and press submit.
Phrase[SPANISH][34] = "Ir Atras"; //Go Back
Phrase[SPANISH][35] = "Espacio"; //Space
Phrase[SPANISH][36] = "Enviar"; //Submit
Phrase[SPANISH][37] = "Usted selecciono"; //You have selected
Phrase[SPANISH][38] = "MAS CANDIDATOS"; //MORE CANDIDATES
Phrase[SPANISH][39] = "MAS PARTIDOS"; //MORE PARTIES
Phrase[SPANISH][40] = "MAS CONCURSOS"; //MORE CONTESTS
Phrase[SPANISH][41] = "CANDIDATOS ANTERIORES"; //PREVIOUS CANDIDATES
Phrase[SPANISH][42] = "PARTIDOS ANTERIORES"; //PREVIOUS PARTIES
Phrase[SPANISH][43] = "SELECCIONADO"; //SELECTED
Phrase[SPANISH][44] = "Ninguna seleccion"; //No Selection
Phrase[SPANISH][45] = "Enviar Mi Boleta"; //Submit My Ballot
Phrase[SPANISH][46] = "Su boleta se esta imprimiendo."; //Your ballot is printing.
Phrase[SPANISH][47] = "Para iniciar, usted debe escribir un codigo de acceso o escanear un código QR."; //You must enter an access code or scan a barcode to begin.
Phrase[SPANISH][48] = "Imprimir mi boleta"; //Print My Ballot
Phrase[SPANISH][50] = "Hacer imprimir mi boleta"; //Done Printing My Ballot
Phrase[SPANISH][51] = "Para mejores resultados, utilice Firefox como navegador."; //For best results, you should use Firefox.
Phrase[SPANISH][52] = "Por favor espere..."; //Please wait...
Phrase[SPANISH][53] = "Su boleta ah sido emitida."; //Your ballot has been cast.
Phrase[SPANISH][54] = "Gracias."; //Thank You.
Phrase[SPANISH][55] = "Para iniciar votacion, "; //To start voting, 
Phrase[SPANISH][56] = "presione el boton de inicio  abajo o seleccione un concurso del menu."; //press the start button below or select a contest from the menu.
Phrase[SPANISH][57] = "presione el boton de inicio abajo o seleccione un concurso de el menu."; //touch the start button below or select a contest from the menu.
Phrase[SPANISH][58] = "Seleccionar un concurso"; //Select a contest
Phrase[SPANISH][59] = "Ir al concurso anterior"; //Go to the previous contest
Phrase[SPANISH][60] = "Ir al primer concurso"; //Go to the first contest
Phrase[SPANISH][61] = "Borrar las selecciones de este concurso"; //Clear the selections for this contest
Phrase[SPANISH][62] = "Ir a la pantalla de revision"; //Go to the review screen
Phrase[SPANISH][63] = "Votar por no mas de 1 Candidato"; //Vote for no more than 1 Candidate
Phrase[SPANISH][64] = "seleccionado"; //selected
Phrase[SPANISH][65] = "Ir al siguiente concurso"; //Go to the next contest
Phrase[SPANISH][66] = "MAS"; //MORE
Phrase[SPANISH][67] = "partido"; //party
Phrase[SPANISH][68] = "Ninguna_Seleccion"; //No_Selection
Phrase[SPANISH][69] = "Error de impresion de boleta"; //Ballot print error
Phrase[SPANISH][70] = "Gracias. Su Boleta ha sido emitida."; //Thank you. Your ballot has been cast.
Phrase[SPANISH][71] = " Gracias. Este es el codigo QR de su boleta. Imprima o guarde este codigo."; //Thank you. Here's the que are code of your ballot. You should print or save this code.
Phrase[SPANISH][72] = "Gracias. Su boleta esta siendo impresa."; //Thank you. Your ballot is being printed.
Phrase[SPANISH][73] = "Usted esta votando por el partido. Hay "; //You are voting by party. There are 
Phrase[SPANISH][74] = " partidos. "; //parties.
Phrase[SPANISH][75] = "Usted selecciono el(la) "; //You have selected the 
Phrase[SPANISH][76] = "Este es el resumen de su boleta. "; //This is your ballot summary. 
Phrase[SPANISH][77] = "Usted voto en todos "; //You have voted in all 
Phrase[SPANISH][78] = "concursos. "; //contests. 
Phrase[SPANISH][79] = "Usted voto en"; //You have voted in 
Phrase[SPANISH][80] = " de el(la) "; //of the 
Phrase[SPANISH][81] = "Usted esta votando por"; //You are voting for 
Phrase[SPANISH][82] = "Este es el concurso numero "; //This is contest number 
Phrase[SPANISH][83] = " fuera de "; // out of 
Phrase[SPANISH][84] = " y "; // and 
Phrase[SPANISH][85] = "Usted puede seleccionar"; //You can select 
Phrase[SPANISH][86] = " un candidato mas"; // one more candidate. 
Phrase[SPANISH][87] = "mas candidatos. "; //more candidates. 
Phrase[SPANISH][88] = "Hay "; //There are 
Phrase[SPANISH][89] = "opciones  disponibles. "; //options available. 
Phrase[SPANISH][90] = "Se lee como sigue. "; //It reads as follows. 
Phrase[SPANISH][91] = "candidatos disponibles. "; //candidates available. 
Phrase[SPANISH][92] = "Usted puede seleccionar no mas de"; //You can select no more than
Phrase[SPANISH][93] = "opciones "; //options. 
Phrase[SPANISH][94] = "Sus selecciones para"; //Your selections for 
Phrase[SPANISH][95] = "han sido borradas. "; //have been cleared. 
Phrase[SPANISH][96] = "ir atras, "; //go back, 
Phrase[SPANISH][97] = "borrar sus selecciones, "; //clear your selections, 
Phrase[SPANISH][98] = "ir al siguiente concurso, "; //go to the next contest, 
Phrase[SPANISH][99] = "revisar su boleta, "; //review your ballot, 
Phrase[SPANISH][100] = "el(la) "; //the 
Phrase[SPANISH][101] = "Cambiar su voto por, "; //Changed your vote for, 
Phrase[SPANISH][102] = "Para votar por"; //To vote for
Phrase[SPANISH][103] = " como el(la) "; // as the 
Phrase[SPANISH][104] = "Para ir atras "; //To go back 
Phrase[SPANISH][105] = " diga votar"; // say vote
Phrase[SPANISH][106] = "Usted ha seleccionado escribir el nombre del candidato deletreando el nombre del candidato. Para ir atras."; //You have selected to write in a candidate name by spelling the candidate's name. To go back, 
Phrase[SPANISH][107] = "Para seleccionar "; //To select 
Phrase[SPANISH][108] = "Para cambiar su "; //To change your 
Phrase[SPANISH][109] = "Para "; //To 
Phrase[SPANISH][110] = "Para ir atras "; //To go back, 
Phrase[SPANISH][111] = "Para Borrar sus selecciones, "; //To clear your selections, 
Phrase[SPANISH][112] = "Para Revisar su boleta, "; //To review your ballot, 
Phrase[SPANISH][113] = "Para ir al siguiente concurso, "; //To go to the next contest, 
Phrase[SPANISH][114] = "Para cambiar su voto por "; //To change your vote for 
Phrase[SPANISH][115] = "Para deshacer su "; //To undo your 
Phrase[SPANISH][116] = " voto por "; // vote for 
Phrase[SPANISH][117] = "Seleccionar un concurso"; // Select a contest
Phrase[SPANISH][118] = "Ir a "; //Go to 
Phrase[SPANISH][119] = "Para mejores resultados, utilice Chrome como navegador."; //For best results, you should use Chrome.
Phrase[SPANISH][120] = " Presione la tecla de enter o toque la pantalla. "; //press enter or touch the screen.
Phrase[SPANISH][121] = " Presione la tecla de enter. "; //press enter.
Phrase[SPANISH][122] = " Seleccionado, iniciar votacion. hay ";//Selected, start voting. There are
Phrase[SPANISH][123] = " concursos para votar. "; // contests for voting.
Phrase[SPANISH][124] = "Seleccionado, Usted selecciono espacio. "; //Selected, space. Selected,
Phrase[SPANISH][125] = "Seleccionado, Usted selecciono borrar. "; //Selected, back space. Selected,
Phrase[SPANISH][126] = "Selecciono, Borrar. Su candidato  ingresado ha sido borrado. "; //Selected, clear. Your write in candidate has been cleared.
Phrase[SPANISH][127] = "Para cambiar la velocidad de la voz a "; //To change the speed of the voice to 
Phrase[SPANISH][128] = " VOTO"; //VOTED 
Phrase[SPANISH][129] = " o presione la tecla de enter"; //or press enter.
Phrase[SPANISH][130] = "Rechazar Mi Papeleta"; //Reject My Ballot
Phrase[SPANISH][131] = "Para enviar su papeleta"; //To submit your ballot
Phrase[SPANISH][132] = "Para rechazar su boleta"; //To reject your ballot
Phrase[SPANISH][133] = "Usted no hizo una selección "; //You did not make a selection
Phrase[SPANISH][134] = " seleccionó  "; // You selected 
Phrase[SPANISH][135] = " para  "; // for 
Phrase[SPANISH][136] = "Su boleta está lista para imprimir. "; //Your ballot is ready for printing.
Phrase[SPANISH][137] = "¿Quieres rechazar su papeleta?"; //Do you want to reject your ballot?
Phrase[SPANISH][138] = "No. No se rechaza la papeleta."; //No. Do Not Reject My Ballot.
Phrase[SPANISH][139] = "Si desea seleccionar un candidato diferente, debe anular la selección de una de sus selecciones actuales."; //If you would like to select a different candidate, you must deselect one of your current selections.
Phrase[SPANISH][140] = "código de acceso válido o código de barras . Por favor, inténtelo de nuevo."; //Invalid access code or barcode. Please try again.
Phrase[SPANISH][141] = "Escanear su papeleta para comenzar."; //Scan your ballot to begin.
Phrase[SPANISH][142] = "Thank you. Your ballot has been recorded"; //Thank you. Your ballot has been recorded
Phrase[SPANISH][143] = ", candidatos y "; //", candidates and "
Phrase[SPANISH][144] = ", ins de escritura disponibles. "; //", write ins available. "
Phrase[SPANISH][145] = "no hay complementos de escritura disponibles. "; //"no write ins available. "
Phrase[SPANISH][146] = ", escribir en la disposición. "; //", write in available. "
Phrase[SPANISH][147] = "Usted votado en exceso. "; //"You have over voted. "
Phrase[SPANISH][148] = "presione el boton de inicio  abajo."; //press the start button below.
Phrase[SPANISH][149] = "Imprimir mi selección (es)"; //Print my selection(s)


// Mainland/Simplified CHINESE
Phrase[CHINESE][0] = "是(Yes)"; //Yes
Phrase[CHINESE][1] = "否(No)"; //No
Phrase[CHINESE][2] = "输入接入码(access code)或扫码选票以开始投票。"; //Enter access code or scan ballot to begin.
Phrase[CHINESE][3] = "选民是否要通过麦克风来回应？"; //Does the voter want to respond with the microphone?
Phrase[CHINESE][5] = "选民是否要通过耳机读出选票内容？"; //Does the voter want the ballot read to them through the headphones?
Phrase[CHINESE][6] = "(退格键)Backspace"; //Backspace
Phrase[CHINESE][7] = "(回车键)Enter"; //Enter
Phrase[CHINESE][8] = "(设置)Settings"; //Settings
Phrase[CHINESE][9] = "点击一个左边的选项开始投票。"; //To start voting, touch a selection on the left.
Phrase[CHINESE][10] = "开始投票"; //Start Voting
Phrase[CHINESE][11] = "按政党投票"; //Vote By Party
Phrase[CHINESE][12] = "审核我的选票"; //Review My Ballot
Phrase[CHINESE][13] = "选择语音的语速。"; //Select a voice speed.
// need context
Phrase[CHINESE][14] = "竞选"; //Contest
// need context
Phrase[CHINESE][15] = "共有"; //of
Phrase[CHINESE][16] = "非常快"; //Very Fast
Phrase[CHINESE][17] = "快"; //Fast
Phrase[CHINESE][18] = "平均"; //Average
Phrase[CHINESE][19] = "慢"; //Slow
Phrase[CHINESE][20] = "非常慢"; //Very Slow
// need context
Phrase[CHINESE][21] = "后退"; //Back
// need context
Phrase[CHINESE][22] = "顶部"; //Top
// need context
Phrase[CHINESE][23] = "清除"; //Clear
// need context
Phrase[CHINESE][24] = "审核"; //Review
Phrase[CHINESE][25] = "继续"; //Continue
// because of the different grammar structure between English and CHINESE, this sentence may be re-written
Phrase[CHINESE][26] = "投票不能超过"; //Vote for no more than
Phrase[CHINESE][27] = "候选人"; //Candidates
Phrase[CHINESE][28] = "接受"; //Accept
// need context
Phrase[CHINESE][29] = "拒绝"; //Reject
Phrase[CHINESE][30] = "审核选票"; //Ballot Review
Phrase[CHINESE][31] = "选择一场竞选来更改您的已选项。"; //Select a contest to change your selection.
// need context
Phrase[CHINESE][32] = "输入候选人"; //Candidate Write In
Phrase[CHINESE][33] = "输入候选人的名字并按提交(Submit)键"; //Type in the candidate's name and press submit.
Phrase[CHINESE][34] = "后退(Go Back)"; //Go Back
Phrase[CHINESE][35] = "空格(Space)"; //Space
Phrase[CHINESE][36] = "提交(Submit)"; //Submit
Phrase[CHINESE][37] = "您已选择了 "; //You have selected
Phrase[CHINESE][38] = "更多候选人"; //MORE CANDIDATES
Phrase[CHINESE][39] = "更多政党"; //MORE PARTIES
Phrase[CHINESE][40] = "更多竞选"; //MORE CONTESTS
Phrase[CHINESE][41] = "上一批候选人"; //PREVIOUS CANDIDATES
Phrase[CHINESE][42] = "上一批政党"; //PREVIOUS PARTIES
Phrase[CHINESE][43] = "已选择"; //SELECTED need context
Phrase[CHINESE][44] = "没有选择任何选项"; //No Selection
Phrase[CHINESE][45] = "提交我的选票"; //Submit My Ballot
Phrase[CHINESE][46] = "您的选票正在打印。"; //Your ballot is printing.
Phrase[CHINESE][47] = "如要开始，您必须输入接入码(access code)或扫码条形码。"; //You must enter an access code or scan a barcode to begin.
Phrase[CHINESE][48] = "打印我的选票"; //Print My Ballot
Phrase[CHINESE][50] = "我的选票已完成打印"; //Done Printing My Ballot
Phrase[CHINESE][51] = "为确保最正确结果，请使用火狐Firefox浏览器"; //For best results, you should use Firefox.
Phrase[CHINESE][52] = "请等待。。。"; //Please wait...
Phrase[CHINESE][53] = "您的选票已投出。"; //Your ballot has been cast.
Phrase[CHINESE][54] = "谢谢。"; //Thank You.
Phrase[CHINESE][55] = "准备开始投票，"; //To start voting,
Phrase[CHINESE][56] = "请按下方的开始键(start)或从菜单中选择一场竞选。"; //press the start button below or select a contest from the menu.
Phrase[CHINESE][57] = "请点击下方的开始键(start)或从菜单中选择一场竞选。"; //touch the start button below or select a contest from the menu.
Phrase[CHINESE][58] = "选择一场竞选"; //Select a contest
Phrase[CHINESE][59] = "前往上一场竞选"; //Go to the previous contest
Phrase[CHINESE][60] = "前往第一场竞选"; //Go to the first contest
Phrase[CHINESE][61] = "清除这场竞选中已选择的项目"; //Clear the selections for this contest
Phrase[CHINESE][62] = "前往审核(review)页面"; //Go to the review screen
Phrase[CHINESE][63] = "请不要为多于一名候选人投票"; //Vote for no more than 1 Candidate
Phrase[CHINESE][64] = "已选择"; //selected
Phrase[CHINESE][65] = "前往下一场竞选"; //Go to the next contest
Phrase[CHINESE][66] = "更多"; //MORE
Phrase[CHINESE][67] = "政党"; //party
//need context
Phrase[CHINESE][68] = "没有选择任何选项"; //No_Selection
Phrase[CHINESE][69] = "选票打印出错"; //Ballot print error
Phrase[CHINESE][70] = "谢谢。您的选票已投出。"; //Thank you. Your ballot has been cast.
Phrase[CHINESE][71] = "谢谢。这是您选票的二维码。请打印或保存。"; //Thank you. Here's the que are code of your ballot. You should print or save this code.
Phrase[CHINESE][72] = "谢谢。您的选票正在打印中。"; //Thank you. Your ballot is being printed.
Phrase[CHINESE][73] = "您正在按政党投票。现有 "; //You are voting by party. There are
Phrase[CHINESE][74] = "个政党。"; //parties.
Phrase[CHINESE][75] = "您已经选择了 "; //You have selected the
Phrase[CHINESE][76] = "这是您的选票总结。"; //This is your ballot summary.
Phrase[CHINESE][77] = "您已经参与投票了所有 "; //You have voted in all
Phrase[CHINESE][78] = "场竞选。"; //contests.
//need context TODO
Phrase[CHINESE][79] = "You have voted in "; //You have voted in
//need context TODO
Phrase[CHINESE][80] = " of the "; //of the
Phrase[CHINESE][81] = "您正在投票的是 "; //You are voting for
//need context TODO
Phrase[CHINESE][82] = "这是竞选编号为 "; //This is contest number
//need context TODO
Phrase[CHINESE][83] = " out of "; // out of
//need context
Phrase[CHINESE][84] = " 和 "; // and
Phrase[CHINESE][85] = "您还可以选择 "; //You can select
//need context
Phrase[CHINESE][86] = " 一名候选人。"; // one more candidate.
Phrase[CHINESE][87] = "更多候选人。"; //more candidates.
Phrase[CHINESE][88] = "总共有 "; //There are
Phrase[CHINESE][89] = "选项可以选择。 "; //options available.
// need context TODO
Phrase[CHINESE][90] = "It reads as follows. "; //It reads as follows.
// need context
Phrase[CHINESE][91] = "名候选人供选择。"; //candidates available.
Phrase[CHINESE][92] = "您可以选择不多于"; //You can select no more than
Phrase[CHINESE][93] = "个选项。 "; //options.
Phrase[CHINESE][94] = "您选择的 "; //Your selections for
Phrase[CHINESE][95] = "已被清除。 "; //have been cleared.
Phrase[CHINESE][96] = "后退，"; //go back,
Phrase[CHINESE][97] = "清除您已选择的选项。"; //clear your selections,
Phrase[CHINESE][98] = "前往下一场竞选。"; //go to the next contest,
Phrase[CHINESE][99] = "审核您的选票，"; //review your ballot,
// need context TODO
Phrase[CHINESE][100] = "the "; //the
// need context and the phrase looks confusing TODO
Phrase[CHINESE][101] = "已更改您的选票给，"; //Changed your vote for,
Phrase[CHINESE][102] = "投票给"; //To vote for
// need context
Phrase[CHINESE][103] = " 作为 "; // as the
Phrase[CHINESE][104] = "如要后退 "; //To go back
// need context
Phrase[CHINESE][105] = " 请说投票"; // say vote
Phrase[CHINESE][106] = "您已选择通过拼写候选人的名字来输入候选人姓名。如要后退，"; //You have selected to write in a candidate name by spelling the candidate's name. To go back,
// need context
Phrase[CHINESE][107] = "如要选择 "; //To select
// need context
Phrase[CHINESE][108] = "如要更改您的 "; //To change your
// need context TODO
Phrase[CHINESE][109] = "如要 "; //To
Phrase[CHINESE][110] = "如要后退，"; //To go back,
Phrase[CHINESE][111] = "如要清除您的已选项，"; //To clear your selections,
Phrase[CHINESE][112] = "如要审核您的选票，"; //To review your ballot,
Phrase[CHINESE][113] = "如要前往下一场竞选，"; //To go to the next contest,
// need context TODO maybe rephrased for CHINESE
Phrase[CHINESE][114] = "如要更改您已投的票给"; //To change your vote for
Phrase[CHINESE][115] = "如要撤销您的 "; //To undo your
// need context
Phrase[CHINESE][116] = " 投票给 "; // vote for
Phrase[CHINESE][117] = "选择一场竞选"; // Select a contest
Phrase[CHINESE][118] = "前往 "; //Go to
Phrase[CHINESE][119] = "为确保最正确结果，请使用Chrome浏览器"; //For best results, you should use Chrome.
Phrase[CHINESE][120] = " 按回车(enter)键或点击屏幕。"; //press enter or touch the screen.
Phrase[CHINESE][121] = " 按回车(enter)键。"; //press enter.
// need context
Phrase[CHINESE][122] = " 已选择，开始投票。现在有 "; //Selected, start voting. There are
Phrase[CHINESE][123] = " 场竞选需要投票。"; // contests for voting.
// need context TODO
Phrase[CHINESE][124] = "Selected, space. Selected, "; //Selected, space. Selected,
// need context TODO
Phrase[CHINESE][125] = "Selected, back space. Selected, "; //Selected, back space. Selected,
Phrase[CHINESE][126] = "已选择，清除。您输入的候选人已被清除。"; //Selected, clear. Your write in candidate has been cleared.
// need context
Phrase[CHINESE][127] = "如要更改语音的语速 "; //To change the speed of the voice to
// need context
Phrase[CHINESE][128] = "已投票"; //Voted
Phrase[CHINESE][129] = "或按回车(enter)键"; //or press enter.
Phrase[CHINESE][130] = "取消我的选票"; //Reject My Ballot
// need context
Phrase[CHINESE][131] = "提交您的选票"; //To submit your ballot
// need context
Phrase[CHINESE][132] = "取消您的选票"; //To reject your ballot
Phrase[CHINESE][133] = "您没有选择任何选项"; //You did not make a selection
Phrase[CHINESE][134] = "您选择了"; // You selected
//need context TODO
Phrase[CHINESE][135] = " for "; // for
Phrase[CHINESE][136] = "您的选票已经准备就绪，可以开始打印"; //Your ballot is ready for printing.
Phrase[CHINESE][137] = "您是否想取消您的选票？"; //Do you want to reject your ballot?
Phrase[CHINESE][138] = "否(No)。不要取消我的选票。"; //No. Do Not Reject My Ballot.
Phrase[CHINESE][139] = "如果您想选择一名其他候选人，必须从已选择的候选人中取消一名。"; //If you would like to select a different candidate, you must deselect one of your current selections.
Phrase[CHINESE][140] = "无效的接入码(access code)或条形码。请再试一次。"; //Invalid access code or barcode. Please try again.
Phrase[CHINESE][141] = "扫描您的选票以开始投票。"; //Scan your ballot to begin.
Phrase[CHINESE][142] = "谢谢。您的选票已被记录"; //Thank you. Your ballot has been recorded
Phrase[CHINESE][143] = "，候选人与 "; //", candidates and "
Phrase[CHINESE][144] = "，输入可用。 "; //", write ins available. "
Phrase[CHINESE][145] = "没有可用的输入。 "; //"no write ins available. "
Phrase[CHINESE][146] = "，输入可用。 "; //", write in available. "
Phrase[CHINESE][147] = "Usted votado en exceso. "; //"You have over voted. "
Phrase[CHINESE][148] = "请按下方的开始键(start)或从菜单中选择一场竞选。"; //press the start button below.
Phrase[CHINESE][149] = "打印我的选择"; //Print my selection(s)


// Traditional/Taiwan CHINESE
Phrase[CHINESE_T][0] = "是(Yes)"; //Yes
Phrase[CHINESE_T][1] = "否(No)"; //No
Phrase[CHINESE_T][2] = "輸入接入碼(access code)或掃碼選票以開始投票。"; //Enter access code or scan ballot to begin.
Phrase[CHINESE_T][3] = "選民是否要通過麥克風來回應？"; //Does the voter want to respond with the microphone?
Phrase[CHINESE_T][5] = "選民是否要通過耳機讀出選票內容？"; //Does the voter want the ballot read to them through the headphones?
Phrase[CHINESE_T][6] = "(退格鍵)Backspace"; //Backspace
Phrase[CHINESE_T][7] = "(回車鍵)Enter"; //Enter
Phrase[CHINESE_T][8] = "(設置)Settings"; //Settings
Phrase[CHINESE_T][9] = "點擊一個左邊的選項開始投票。"; //To start voting, touch a selection on the left.
Phrase[CHINESE_T][10] = "開始投票"; //Start Voting
Phrase[CHINESE_T][11] = "按政黨投票"; //Vote By Party
Phrase[CHINESE_T][12] = "審核我的選票"; //Review My Ballot
Phrase[CHINESE_T][13] = "選擇語音的語速。"; //Select a voice speed.
// need context
Phrase[CHINESE_T][14] = "競選"; //Contest
// need context
Phrase[CHINESE_T][15] = "共有"; //of
Phrase[CHINESE_T][16] = "非常快"; //Very Fast
Phrase[CHINESE_T][17] = "快"; //Fast
Phrase[CHINESE_T][18] = "平均"; //Average
Phrase[CHINESE_T][19] = "慢"; //Slow
Phrase[CHINESE_T][20] = "非常慢"; //Very Slow
// need context
Phrase[CHINESE_T][21] = "後退"; //Back
// need context
Phrase[CHINESE_T][22] = "頂部"; //Top
// need context
Phrase[CHINESE_T][23] = "清除"; //Clear
// need context
Phrase[CHINESE_T][24] = "審核"; //Review
Phrase[CHINESE_T][25] = "繼續"; //Continue
// because of the different grammar structure between English and CHINESE_T, this sentence may be re-written
Phrase[CHINESE_T][26] = "投票不能超過"; //Vote for no more than
Phrase[CHINESE_T][27] = "候選人"; //Candidates
Phrase[CHINESE_T][28] = "接受"; //Accept
// need context
Phrase[CHINESE_T][29] = "拒絕"; //Reject
Phrase[CHINESE_T][30] = "審核選票"; //Ballot Review
Phrase[CHINESE_T][31] = "選擇一場競選來更改您的已選項。"; //Select a contest to change your selection.
// need context
Phrase[CHINESE_T][32] = "輸入候選人"; //Candidate Write In
Phrase[CHINESE_T][33] = "輸入候選人的名字並按提交(Submit)鍵"; //Type in the candidate's name and press submit.
Phrase[CHINESE_T][34] = "後退(Go Back)"; //Go Back
Phrase[CHINESE_T][35] = "空格(Space)"; //Space
Phrase[CHINESE_T][36] = "提交(Submit)"; //Submit
Phrase[CHINESE_T][37] = "您已經選擇了 "; //You have selected
Phrase[CHINESE_T][38] = "更多候選人"; //MORE CANDIDATES
Phrase[CHINESE_T][39] = "更多政黨"; //MORE PARTIES
Phrase[CHINESE_T][40] = "更多競選"; //MORE CONTESTS
Phrase[CHINESE_T][41] = "上一批候選人"; //PREVIOUS CANDIDATES
Phrase[CHINESE_T][42] = "上一批政黨"; //PREVIOUS PARTIES
Phrase[CHINESE_T][43] = "已選擇"; //SELECTED
//need context
Phrase[CHINESE_T][44] = "沒有選擇任何選項"; //No Selection
Phrase[CHINESE_T][45] = "提交我的選票"; //Submit My Ballot
Phrase[CHINESE_T][46] = "您的選票正在打印。"; //Your ballot is printing.
Phrase[CHINESE_T][47] = "如要開始，您必須輸入接入碼(access code)或掃碼條形碼。"; //You must enter an access code or scan a barcode to begin.
Phrase[CHINESE_T][48] = "打印我的選票"; //Print My Ballot
// need context, phrasing is confusing
Phrase[CHINESE_T][50] = "我的選票完成打印"; //Done Printing My Ballot
Phrase[CHINESE_T][51] = "為確保最正確結果，請使用火狐Firefox瀏覽器"; //For best results, you should use Firefox.
Phrase[CHINESE_T][52] = "請等待。 。 。"; //Please wait...
Phrase[CHINESE_T][53] = "您的選票已投出。"; //Your ballot has been cast.
Phrase[CHINESE_T][54] = "謝謝。"; //Thank You.
Phrase[CHINESE_T][55] = "準備開始投票，"; //To start voting,
Phrase[CHINESE_T][56] = "請按下方的開始鍵(start)或從菜單中選擇一場競選。"; //press the start button below or select a contest from the menu.
Phrase[CHINESE_T][57] = "請點擊下方的開始鍵(start)或從菜單中選擇一場競選。"; //touch the start button below or select a contest from the menu.
Phrase[CHINESE_T][58] = "選擇一場競選"; //Select a contest
Phrase[CHINESE_T][59] = "前往上一場競選"; //Go to the previous contest
Phrase[CHINESE_T][60] = "前往第一場競選"; //Go to the first contest
Phrase[CHINESE_T][61] = "清除這場競選中已選擇的項目"; //Clear the selections for this contest
Phrase[CHINESE_T][62] = "前往審核(review)頁面"; //Go to the review screen
Phrase[CHINESE_T][63] = "請不要為多於一名候選人投票"; //Vote for no more than 1 Candidate
Phrase[CHINESE_T][64] = "已選擇"; //selected
Phrase[CHINESE_T][65] = "前往下一場競選"; //Go to the next contest
Phrase[CHINESE_T][66] = "更多"; //MORE
Phrase[CHINESE_T][67] = "政黨"; //party
//need context
Phrase[CHINESE_T][68] = "沒有選擇任何選項"; //No_Selection
Phrase[CHINESE_T][69] = "選票打印出錯"; //Ballot print error
Phrase[CHINESE_T][70] = "謝謝。您的選票已投出。"; //Thank you. Your ballot has been cast.
Phrase[CHINESE_T][71] = "謝謝。這是您選票的二維碼。請打印或保存。"; //Thank you. Here's the que are code of your ballot. You should print or save this code.
Phrase[CHINESE_T][72] = "謝謝。您的選票正在打印中。"; //Thank you. Your ballot is being printed.
Phrase[CHINESE_T][73] = "您正在按政黨投票。現有 "; //You are voting by party. There are
Phrase[CHINESE_T][74] = "個政黨。"; //parties.
Phrase[CHINESE_T][75] = "您已經選擇了 "; //You have selected the
Phrase[CHINESE_T][76] = "這是您的選票總結。"; //This is your ballot summary.
Phrase[CHINESE_T][77] = "您已經參與投票了所有 "; //You have voted in all
Phrase[CHINESE_T][78] = "場競選。"; //contests.
//need context TODO
Phrase[CHINESE_T][79] = "You have voted in "; //You have voted in
//need context TODO
Phrase[CHINESE_T][80] = " of the "; //of the
Phrase[CHINESE_T][81] = "您正在投票的是 "; //You are voting for
//need context TODO
Phrase[CHINESE_T][82] = "這是競選編號為 "; //This is contest number
//need context TODO
Phrase[CHINESE_T][83] = " out of "; // out of
//need context
Phrase[CHINESE_T][84] = " 和 "; // and
Phrase[CHINESE_T][85] = "您還可以選擇 "; //You can select
//need context
Phrase[CHINESE_T][86] = " 一名候選人。"; // one more candidate.
Phrase[CHINESE_T][87] = "更多候選人。"; //more candidates.
Phrase[CHINESE_T][88] = "總共有 "; //There are
Phrase[CHINESE_T][89] = "選項可以選擇。 "; //options available.
// need context TODO
Phrase[CHINESE_T][90] = "It reads as follows. "; //It reads as follows.
// need context
Phrase[CHINESE_T][91] = "名候選人供選擇。"; //candidates available.
Phrase[CHINESE_T][92] = "您可以選擇不多於"; //You can select no more than
Phrase[CHINESE_T][93] = "個選項。 "; //options.
Phrase[CHINESE_T][94] = "您選擇的 "; //Your selections for
Phrase[CHINESE_T][95] = "已被清除。 "; //have been cleared.
Phrase[CHINESE_T][96] = "後退，"; //go back,
Phrase[CHINESE_T][97] = "清除您已選擇的選項。"; //clear your selections,
Phrase[CHINESE_T][98] = "前往下一場競選。"; //go to the next contest,
Phrase[CHINESE_T][99] = "審核您的選票，"; //review your ballot,
// need context TODO
Phrase[CHINESE_T][100] = "the "; //the
// need context and the phrase looks confusing TODO
Phrase[CHINESE_T][101] = "已更改您的選票給，"; //Changed your vote for,
Phrase[CHINESE_T][102] = "投票給"; //To vote for
// need context
Phrase[CHINESE_T][103] = " 作為 "; // as the
Phrase[CHINESE_T][104] = "如要後退 "; //To go back
// need context
Phrase[CHINESE_T][105] = " 請說投票"; // say vote
Phrase[CHINESE_T][106] = "您已選擇通過拼寫候選人的名字來輸入候選人姓名。如要後退，"; //You have selected to write in a candidate name by spelling the candidate's name. To go back,
// need context
Phrase[CHINESE_T][107] = "如要選擇 "; //To select
// need context
Phrase[CHINESE_T][108] = "如要更改您的 "; //To change your
// need context TODO
Phrase[CHINESE_T][109] = "如要 "; //To
Phrase[CHINESE_T][110] = "如要後退，"; //To go back,
Phrase[CHINESE_T][111] = "如要清除您的已選項，"; //To clear your selections,
Phrase[CHINESE_T][112] = "如要審核您的選票，"; //To review your ballot,
Phrase[CHINESE_T][113] = "如要前往下一場競選，"; //To go to the next contest,
// need context TODO maybe rephrased for CHINESE
Phrase[CHINESE_T][114] = "如要更改您已投的票給"; //To change your vote for
Phrase[CHINESE_T][115] = "如要撤銷您的 "; //To undo your
// need context
Phrase[CHINESE_T][116] = " 投票給 "; // vote for
Phrase[CHINESE_T][117] = "選擇一場競選"; // Select a contest
Phrase[CHINESE_T][118] = "前往 "; //Go to
Phrase[CHINESE_T][119] = "為確保最正確結果，請使用Chrome瀏覽器"; //For best results, you should use Chrome.
Phrase[CHINESE_T][120] = " 按回車(enter)鍵或點擊屏幕。"; //press enter or touch the screen.
Phrase[CHINESE_T][121] = " 按回車(enter)鍵。"; //press enter.
// need context
Phrase[CHINESE_T][122] = " 已選擇，開始投票。現在有 "; //Selected, start voting. There are
Phrase[CHINESE_T][123] = " 場競選需要投票。"; // contests for voting.
// need context TODO
Phrase[CHINESE_T][124] = "Selected, space. Selected, "; //Selected, space. Selected,
// need context TODO
Phrase[CHINESE_T][125] = "Selected, back space. Selected, "; //Selected, back space. Selected,
Phrase[CHINESE_T][126] = "已選擇，清除。您輸入的候選人已被清除。"; //Selected, clear. Your write in candidate has been cleared.
// need context
Phrase[CHINESE_T][127] = "如要更改語音的語速 "; //To change the speed of the voice to
// need context
Phrase[CHINESE_T][128] = "已投票"; //Voted
Phrase[CHINESE_T][129] = "或按回車(enter)鍵"; //or press enter.
Phrase[CHINESE_T][130] = "取消我的選票"; //Reject My Ballot
// need context
Phrase[CHINESE_T][131] = "提交您的選票"; //To submit your ballot
// need context
Phrase[CHINESE_T][132] = "取消您的選票"; //To reject your ballot
Phrase[CHINESE_T][133] = "您沒有選擇任何選項"; //You did not make a selection
Phrase[CHINESE_T][134] = "您選擇了"; // You selected
//need context TODO
Phrase[CHINESE_T][135] = " for "; // for
Phrase[CHINESE_T][136] = "您的選票已經準備就緒，可以開始打印"; //Your ballot is ready for printing.
Phrase[CHINESE_T][137] = "您是否想取消您的選票？"; //Do you want to reject your ballot?
Phrase[CHINESE_T][138] = "否(No)。不要取消我的選票。"; //No. Do Not Reject My Ballot.
Phrase[CHINESE_T][139] = "如果您想選擇一名其他候選人，必須從已選擇的候選人中取消一名。"; //If you would like to select a different candidate, you must deselect one of your current selections.
Phrase[CHINESE_T][140] = "無效的接入碼(access code)或條形碼。請再試一次。"; //Invalid access code or barcode. Please try again.
Phrase[CHINESE_T][141] = "掃描您的選票以開始投票。"; //Scan your ballot to begin.
Phrase[CHINESE_T][142] = "謝謝。您的選票已被記錄"; //Thank you. Your ballot has been recorded
Phrase[CHINESE_T][143] = "，候選人與 "; //", candidates and "
Phrase[CHINESE_T][144] = "，輸入可用。 "; //", write ins available. "
Phrase[CHINESE_T][145] = "沒有可用的輸入。 "; //"no write ins available. "
Phrase[CHINESE_T][146] = "，輸入可用。 "; //", write in available. "
Phrase[CHINESE_T][147] = "，輸入可用。 "; //", write in available. "
Phrase[CHINESE_T][148] = "請按下方的開始鍵(start)或從菜單中選擇一場競選。"; //press the start button below.
Phrase[CHINESE_T][149] = "打印我的选择"; //Print my selection(s)


Phrase[CREOLE][0] = "Wi"; //Yes
Phrase[CREOLE][1] = "Non"; //No
Phrase[CREOLE][2] = "Antre kòd aksè oswa eskane bilten vòt ou a pou ou kòmanse"; //Enter access code or scan ballot to begin.
Phrase[CREOLE][3] = "Èske votè a vle reponn ak mikwofòn li a ? "; //Does the voter want to respond with the microphone?
Phrase[CREOLE][5] = "Èske votè a vle tande yo li bilten vòt la pou li nan kas ekoutè yo?"; //Does the voter want the ballot read to him/her through the headphones?
Phrase[CREOLE][6] = "Backspace an arye/efase"; //Backspace ***
Phrase[CREOLE][7] = "antre "; //Enter
Phrase[CREOLE][8] = "Settings konfigirasyon"; //Settings***configuration
Phrase[CREOLE][9] = "Pou ou kòmanse vote , touche yon seleksyon ki sou bò gòch la ."; //To start voting, touch a selection on the left.
Phrase[CREOLE][10] = "Kòmanse Vote "; //Start Voting
Phrase[CREOLE][11] = "Vote pa Pati "; //Vote By Party
Phrase[CREOLE][12] = "Revize Bilten Vòt mwen "; //Review My Ballot
Phrase[CREOLE][13] = "Chwazi  vitès vwa."; //Select a voice speed.
Phrase[CREOLE][14] = "Konkou "; //Contest 
Phrase[CREOLE][15] = "de "; //of ****
Phrase[CREOLE][16] = "Trè Vit "; //Very Fast
Phrase[CREOLE][17] = "Vit "; //Fast
Phrase[CREOLE][18] = "Mwayèn "; //Average
Phrase[CREOLE][19] = "Dousman "; //Slow
Phrase[CREOLE][20] = "Tou Dousman"; //Very Slow
Phrase[CREOLE][21] = "Bak "; //Back
Phrase[CREOLE][22] = "Anwo/Anlè"; //Top ***
Phrase[CREOLE][23] = "Efase"; //Clear**
Phrase[CREOLE][24] = "Revize"; //Review
Phrase[CREOLE][25] = "Kontinye "; //Continue
Phrase[CREOLE][26] = "Pa vote pou plis pase"; //Vote for no more than **
Phrase[CREOLE][27] = "Kandida yo "; //Candidates
Phrase[CREOLE][28] = "Dakò"; //Accept
Phrase[CREOLE][29] = "Pa dakò"; //Reject
Phrase[CREOLE][30] = "Revize  bilten Vòt"; //Ballot Review
Phrase[CREOLE][31] = "Chwazi  yon konpetisyon  pou change seleksyon w la."; //Select a contest to change your selection. **
Phrase[CREOLE][32] = "Ekri  Kandida a "; //Candidate Write In **
Phrase[CREOLE][33] = "Tape non kandida a epi peze soumèt."; //Type in the candidate's name and press submit.**
Phrase[CREOLE][34] = "Fè Bak"; //Go Back
Phrase[CREOLE][35] = "Espas"; //Space
Phrase[CREOLE][36] = "Soumèt"; //Submit***
Phrase[CREOLE][37] = "Ou chwazi "; //You have selected
Phrase[CREOLE][38] = "PLIS KANDIDA "; //MORE CANDIDATES
Phrase[CREOLE][39] = "PLIS PATI "; //MORE PARTIES ** politik
Phrase[CREOLE][40] = "PLIS KONPETISYON "; //MORE CONTESTS***
Phrase[CREOLE][41] = "Kandida Yo ki ANVAN "; //PREVIOUS CANDIDATES
Phrase[CREOLE][42] = "PATI Politik yo ki te ANVAN "; //PREVIOUS PARTIES**politik
Phrase[CREOLE][43] = "CHWAZI"; //SELECTED
Phrase[CREOLE][44] = "Okenn Seleksyon/chwa "; //No Selection(CHANGE)(pa gen chwa)
Phrase[CREOLE][45] = "Soumèt bilten Vot mwen"; //Submit My Ballot
Phrase[CREOLE][46] = "Bilten vòt ou a ap enprime ."; //Your ballot is printing.
Phrase[CREOLE][47] = "Ou dwe antre yon kòd aksè oswa eskane  yon bar pou kòmanse."; //You must enter an access code or scan a barcode to begin.
Phrase[CREOLE][48] = "Enprime bilten vòt "; //Print Ballot
Phrase[CREOLE][50] = "Fini "; //Done
Phrase[CREOLE][51] = "Itilize Firefox pou w ka gen pi bon rezilta."; //For best results, you should use Firefox.
Phrase[CREOLE][52] = "Fè yon ti tann souple ..."; //Please wait...
Phrase[CREOLE][53] = "Yo resevwa bilten vòt ou a."; //Your ballot has been cast.*****
Phrase[CREOLE][54] = "Mèsi."; //Thank You.
Phrase[CREOLE][55] = "Pou w kòmanse vote, "; //To start voting, 
Phrase[CREOLE][56] = "Peze bouton ki make kòmanse a anba a, oubyen chwazi yon konpetisyon ki nan meni a."; //press the start button below or select a contest from the menu.
Phrase[CREOLE][57] = "Peze bouton ki make kòmanse a anba a  oubyen chwazi yon konpetisyon sou  meni a."; //touch the start button below or select a contest from the menu.
Phrase[CREOLE][58] = "Chwazi yon konpetisyon "; //Select a contest
Phrase[CREOLE][59] = "Ale nan konpetisyon ki anvan an "; //Go to the previous contest
Phrase[CREOLE][60] = "Ale nan premye konpetisyon an"; //Go to the first contest
Phrase[CREOLE][61] = "Efase seleksyon yo pou konkou sa a "; //Clear the selections for this contest
Phrase[CREOLE][62] = "Ale nan ekran revizyon an"; //Go to the review screen
Phrase[CREOLE][63] = "Pa vote pou plis ke 1 kandida  "; //Vote for no more than 1 Candidate
Phrase[CREOLE][64] = "chwazi"; //selected
Phrase[CREOLE][65] = "Ale nan konkou ki vini apre a"; //Go to the next contest…..
Phrase[CREOLE][66] = "PLIS"; //MORE
Phrase[CREOLE][67] = "pati "; //party ***
Phrase[CREOLE][68] = "Okenn_Seleksyon "; //No_Selection
Phrase[CREOLE][69] = "Erè nan enpresyon bilten vòt la  "; //Ballot print error****printing error
Phrase[CREOLE][70] = "Mèsi. Yo  resevwa bilten vòt ou a ."; //Thank you. Your ballot has been cast.
Phrase[CREOLE][71] = "Mèsi. Men QR kòd pou bilten vò ou a. Ou dwe enprime oubyen sere kòd sa a "; //Thank you. Here's the que are code of your ballot. You should print or save this code.??
Phrase[CREOLE][72] = "Mèsi. Bilten vòt ou a ap enprime."; //Thank you. Your ballot is being printed.
Phrase[CREOLE][73] = "Ou ap vote pou yon pati politik. Genyen "; //You are voting by party. There are 
Phrase[CREOLE][74] = " pati. "; //parties.****
Phrase[CREOLE][75] = "Ou te chwazi "; //You have selected the ****
Phrase[CREOLE][76] = "Sa a se rezime bilten vòt ou a. "; //This is your ballot summary. 
Phrase[CREOLE][77] = "Ou te vote nan tout "; //You have voted in all 
Phrase[CREOLE][78] = "konpetisyon yo. "; //contests. 
Phrase[CREOLE][79] = "Ou te vote nan "; //You have voted in 
Phrase[CREOLE][80] = " nan "; //of the ****
Phrase[CREOLE][81] = "Ou ap vote pou "; //You are voting for 
Phrase[CREOLE][82] = "Sa se nimewo konpetisyon an "; //This is contest number 
Phrase[CREOLE][83] = "nan "; // out of 
Phrase[CREOLE][84] = "ak "; // and 
Phrase[CREOLE][85] = "Ou ka chwazi "; //You can select 
Phrase[CREOLE][86] = " yon lòt kandida. "; // one more candidate. 
Phrase[CREOLE][87] = "plis kandida. "; //more candidates. 
Phrase[CREOLE][88] = "Genyen "; //There are 
Phrase[CREOLE][89] = "opsyon ki disponib. "; //options available. 
Phrase[CREOLE][90] = "men yo. "; //It reads as follows. ***here they are
Phrase[CREOLE][91] = "kandida ki disponib. "; //candidates available. 
Phrase[CREOLE][92] = "Ou ka chwazi pa plis pase "; //You can select no more than
Phrase[CREOLE][93] = "opsyon. "; //options. 
Phrase[CREOLE][94] = "seleksyon ou pou "; //Your selections for 
Phrase[CREOLE][95] = "efase. "; //have been cleared. ***erased
Phrase[CREOLE][96] = "fè bak, "; //go back, 
Phrase[CREOLE][97] = "efase seleksyon ou yo, "; //clear your selections, 
Phrase[CREOLE][98] = "ale nan konpetisyon ki apre sa, "; //go to the next contest, ****
Phrase[CREOLE][99] = "revize bilten vòt ou a, "; //review your ballot, 
Phrase[CREOLE][100] = "la "; //the *******
Phrase[CREOLE][101] = "Chanje vòt ou pou, "; //Changed your vote for, 
Phrase[CREOLE][102] = "vote pou"; //To vote for
Phrase[CREOLE][103] = " kòm "; // as the 
Phrase[CREOLE][104] = "Pou w fè bak "; //To go back 
Phrase[CREOLE][105] = "di vote"; // say vote
Phrase[CREOLE][106] = "Ou te chwazi pou w ekri non yon kandida lè w eple Non kandida a. Pou w retounen, "; //You have selected to write in a candidate name by spelling the candidate's name. To go back, ##
Phrase[CREOLE][107] = "Pou chwazi "; //To select 
Phrase[CREOLE][108] = "Pou chanje "; //To change your ***********
Phrase[CREOLE][109] = "Pou "; //To *********
Phrase[CREOLE][110] = "Pou fè bak, "; //To go back,
Phrase[CREOLE][111] = "Pou efase seleksyon ou yo, "; //To clear your selections, erase
Phrase[CREOLE][112] = "Pou revize bilten vòt ou a, "; //To review your ballot, 
Phrase[CREOLE][113] = "Pou w ale nan konpetisyon ki vinn apre a, "; //To go to the next contest, 
Phrase[CREOLE][114] = "Pou w chanje vòt ou an pou "; //To change your vote for 
Phrase[CREOLE][115] = "Pou ou defèt "; //To undo your 
Phrase[CREOLE][116] = " vote pou "; // vote for 
Phrase[CREOLE][117] = "Chwazi yon konkou"; // Select a contest
Phrase[CREOLE][118] = "Ale nan "; //Go to 
Phrase[CREOLE][119] = "Pou pi bon rezilta, ou ta dwe itilize Chrome."; //For best results, you should use Chrom
Phrase[CREOLE][120] = "Peze antre oswa manyen ekran an. "; //press enter or touch the screen.
Phrase[CREOLE][121] = "Peze antre. "; //press enter.
Phrase[CREOLE][122] = "Chwazi, kòmanse vote. Genyen "; //Selected, start voting. There are 
Phrase[CREOLE][123] = "Konpetisyon pou vote. "; // contests for voting. 
Phrase[CREOLE][124] = "Chwazi, espas. Chwazi, "; //Selected, space. Selected,  
Phrase[CREOLE][125] = "Chwazi, fè bak. Chwazi, "; //Selected, back space. Selected,  
Phrase[CREOLE][126] = "Chwazi, Efase. Kandida ou ekri a efase"; //Selected, clear. Your write in candidate has been cleared. 
Phrase[CREOLE][127] = "Pou chanje vitès vwa a "; //To change the speed of the voice to 
Phrase[CREOLE][128] = "VOTE"; //Voted 
Phrase[CREOLE][129] = "osinon peze antre"; //or press enter.
Phrase[CREOLE][130] = "Rejte Bilten Vòt mwen"; //Reject My Ballot
Phrase[CREOLE][131] = "Pou soumèt bilten ou"; //To submit your ballot
Phrase[CREOLE][132] = "Pou rejte bilten ou"; //To reject your ballot
Phrase[CREOLE][133] = "Ou pa t 'fè yon seleksyon"; //You did not make a selection
Phrase[CREOLE][134] = "Ou chwazi  "; // You selected 
Phrase[CREOLE][135] = "pou  "; // for 
Phrase[CREOLE][136] = "Bilten ou a pare pou enprime. "; //Your ballot is ready for printing.
Phrase[CREOLE][137] = "Èske ou vle rejte bilten ou?"; //Do you want to reject your ballot?
Phrase[CREOLE][138] = "Non. Pa rejte bilten mwen."; //No. Do Not Reject My Ballot.
Phrase[CREOLE][139] = "Si wou ta renmen chwazi yon lòt kandida , ou dwe retire yonn nan chwa ou yo kounye a."; //If you would like to select a different candidate, you must deselect one of your current selections.****
Phrase[CREOLE][140] = "kòd aksè envalid. Tanpri eseye ankò."; //Invalid access code or barcode. Please try again.**
Phrase[CREOLE][141] = "eskanè bilten ou a pou kòmanse."; //Scan your ballot to begin.
Phrase[CREOLE][142] = "Mèsi. bilten ou a te anrejistre"; //Thank you. Your ballot has been recorded
Phrase[CREOLE][143] = ", Kandida yo ak "; //", candidates and "
Phrase[CREOLE][144] = ", ou ka ekri yon lòt non. "; //", write ins available. "***********you can write another name
Phrase[CREOLE][145] = "ou pa ka ekri yon lòt non. "; //"no write ins available. "***********you can not write another name
Phrase[CREOLE][146] = ", ou ka ekri yon lòt non. "; //", write in available. "***********you can write another name
Phrase[CREOLE][147] = "You have over voted. "; //"You have over voted. "
Phrase[CREOLE][148] = "Peze bouton ki make kòmanse a anba a, oubyen chwazi yon konpetisyon ki nan meni a."; //press the start button below.
Phrase[CREOLE][149] = "Print my selection(s)"; //Print my selection(s)
