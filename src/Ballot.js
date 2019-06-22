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


var BallotName = "NIST Standard Ballot"; 
var BallotID = "NIST"; //No spaces

var AccessCodes = new Array();
AccessCodes.push("1853");
AccessCodes.push("1111");
AccessCodes.push("0000");

var ContestTypes = new Array();
ContestTypes.push("Contest");
ContestTypes.push("Proposition or Amendment");
ContestTypes.push("Ballot Review");
ContestTypes.push("Vote By Party");
ContestTypes.push("Settings");

var Contests = new Array();
Contests.push(new Contest("00", ContestTypes[4], 1, window.top.Settings, window.top.Settings.toLowerCase(), "", "",true));
Contests.push(new Contest("01", ContestTypes[3], 1, window.top.VoteByParty, window.top.VoteByParty.toLowerCase(), "", "",true));
Contests.push(new Contest("CP", ContestTypes[0], 1, "President and Vice-President", "president and vice president", "", "",true));
Contests.push(new Contest("US", ContestTypes[0], 1, "US Senate", "you, ess senate", "", "",true));
Contests.push(new Contest("UR", ContestTypes[0], 1, "US Representative", "you es representative", "", "",true));
Contests.push(new Contest("GO", ContestTypes[0], 1, "Governor", "Governor", "", "",true));
Contests.push(new Contest("LG", ContestTypes[0], 1, "Lieutenant-Governor", "lieutenant governor", "", "",false));
Contests.push(new Contest("CC", ContestTypes[0], 3, "County Commissioners", "county commissioners", "", "",true));
Contests.push(new Contest("P1", ContestTypes[1], 1, "Proposition #1", "proposition one", "Retain Robert Demergue as Chief Justice of the Supreme Court?"));
Contests.push(new Contest("A1", ContestTypes[1], 1, "Amendment #1", "amendment one, ballot measure one", "Requires primary elections where voters may vote for any state or federal candidate regardless of party registration of voter or candidate. The two primary-election candidates receiving most votes for an office, whether they are candidates with no party or members of same or different party, would be listed on general election ballot. Exempts presidential nominations. Fiscal Impact: No significant net fiscal effect on state and local governments.", "Requires primary elections where voters may vote for any state or federal candidate regardless of party registration of voter or candidate. The two primary election candidates receiving most votes for an office, whether they are candidates with no party or members of same or different party, would be listed on general election ballot. Exempts presidential nominations. Fiscal Impact, No significant net fiscal effect on state and local governments."));
Contests.push(new Contest("10", ContestTypes[2], 0, Phrase[SelectedVoice][12], Phrase[SelectedVoice][12], ""));

var Parties = new Array();
Parties.push(new Party("Blue", "B"));
Parties.push(new Party("Yellow", "Y"));
Parties.push(new Party("Purple", "P"));
Parties.push(new Party("Pink", "V"));
Parties.push(new Party("Gold", "G"));
Parties.push(new Party("Gray", "R"));
Parties.push(new Party("Aqua", "A"));
Parties.push(new Party("Brown", "W"));
Parties.push(new Party("Orange", "O"));

var Candidates = new Array();
Candidates.push(new Candidate("10648", "Joseph Barchi and Joseph Hallaren", "Blue", "President and Vice-President", "none", "","296.3625","287.6250",""));
Candidates.push(new Candidate("169", "Adam Cramer and Greg Vuocolo", "Yellow", "President and Vice-President", "none", "","697","339",""));
Candidates.push(new Candidate("405224", "Daniel Court and Amy Blumhardt", "Purple", "President and Vice-President", "none", "","697","416",""));
Candidates.push(new Candidate("3418801", "Alvin Boone and James Lian", "Orange", "President and Vice-President", "none", "","697","495",""));
Candidates.push(new Candidate("91125", "Austin Hildebrand-MacDougall and James Garritty", "Pink", "President and Vice-President", "none", "","697","572",""));
Candidates.push(new Candidate("92900", "Martin Patterson and Clay Lariviere", "Gold", "President and Vice-President", "none", "","1488","262",""));
Candidates.push(new Candidate("8031810176", "Elizabeth Harp and Antoine Jefferson", "Gray", "President and Vice-President", "none", "","1488","339",""));
Candidates.push(new Candidate("15752961", "Charles Layne and Andrew Kowalski", "Aqua", "President and Vice-President", "none", "","1488","416",""));
Candidates.push(new Candidate("2176782336", "Marzena Pazgier and Welton Phelps", "Brown", "President and Vice-President", "none", "","1488","495",""));
Candidates.push(new Candidate(WriteInID, Phrase[SelectedVoice][32], "", "President and Vice-President", "none", "","1488","572","1022,583"));

Candidates.push(new Candidate("927", "Dennis Weiford", "Blue", "US Senate", "none", "","422.3625","287.6250",""));
Candidates.push(new Candidate("289031", "Lloyd Garriss", "Yellow", "US Senate", "none", "","697","881",""));
Candidates.push(new Candidate("23054", "Sylvia Wentworth-Farthington", "Purple", "US Senate", "none", "","697","958",""));
Candidates.push(new Candidate("9834496", "John Hewetson", "Orange", "US Senate", "none", "","697","1033",""));
Candidates.push(new Candidate("577591", "Victor Martinez", "Pink", "US Senate", "none", "","1488","803",""));
Candidates.push(new Candidate("4567019", "Heather Portier", "Gold", "US Senate", "none", "","1488","958",""));
Candidates.push(new Candidate("13841287201", "David Platt", "Gray", "US Senate", "none", "","1488","881",""));
Candidates.push(new Candidate(WriteInID, Phrase[SelectedVoice][32], "", "US Senate", "none", "","50","50","1045,1029"));

Candidates.push(new Candidate("164", "Brad Plunkard", "Blue", "US Representative", "none", "","697","1231",""));
Candidates.push(new Candidate("3905", "Bruce Reeder", "Yellow", "US Representative", "none", "","697","1308",""));
Candidates.push(new Candidate("777600000", "Brad Schott", "Purple", "US Representative", "none", "","697","1385",""));
Candidates.push(new Candidate("94931877133", "Glen Tawney", "Orange", "US Representative", "none", "","1488","1231",""));
Candidates.push(new Candidate("70168848", "Carroll Forrest", "Pink", "US Representative", "none", "","1488","1308",""));
Candidates.push(new Candidate(WriteInID, Phrase[SelectedVoice][32], "", "US Representative", "none", "","1488","1385","1062,1368"));

Candidates.push(new Candidate("823", "Charlene Franz", "Blue", "Governor", "emoji1.jpg", "","697","1537",""));
Candidates.push(new Candidate("9145", "Gerard Harris", "Yellow", "Governor", "emoji2.jpg", "","697","1613",""));
Candidates.push(new Candidate("916132832", "Linda Bargmann", "Purple", "Governor", "emoji3.jpg", "","697","1690",""));
Candidates.push(new Candidate("816720", "Barbara Adcock", "Orange", "Governor", "emoji4.jpg", "","697","1771",""));
Candidates.push(new Candidate("1073741824", "Carrie Steel-Loy", "Pink", "Governor", "emoji5.jpg", "","697","1846",""));
Candidates.push(new Candidate("1522435234375", "Frederick Sharp", "Gold", "Governor", "emoji6.jpg", "","1488","1537",""));
Candidates.push(new Candidate("16777216", "Alex Wallace", "Gray", "Governor", "emoji7.jpg", "","1488","1613",""));
Candidates.push(new Candidate("262144000000", "Barbara Williams", "Aqua", "Governor", "emoji8.jpg", "","1488","1771",""));
Candidates.push(new Candidate("31640625", "Althea Sharp", "Brown", "Governor", "emoji9.jpg", "","1488","1690",""));
Candidates.push(new Candidate(WriteInID, Phrase[SelectedVoice][32], "", "Governor", "none", "","1488","1846","1019,1854"));

Candidates.push(new Candidate("2742241", "Chris Norberg ", "Blue", "Lieutenant-Governor", "none", "","500","187",""));
Candidates.push(new Candidate("625", "Anthony Parks", "Yellow", "Lieutenant-Governor", "none", "","500","266",""));
Candidates.push(new Candidate("91125211", "Luis Garcia", "Purple", "Lieutenant-Governor", "none", "","500","345",""));
Candidates.push(new Candidate("17565568854912", "Charles Qualey", "Orange", "Lieutenant-Governor", "none", "","500","424",""));
Candidates.push(new Candidate("4298", "George Hovis", "Pink", "Lieutenant-Governor", "none", "","500","499",""));
Candidates.push(new Candidate("902618", "Burt Zirkle", "Gold", "Lieutenant-Governor", "none", "","1293","187",""));
Candidates.push(new Candidate("2535525376", "Brenda Davis", "Gray", "Lieutenant-Governor", "none", "","1293","266",""));
Candidates.push(new Candidate("96059601", "Edward Freeman", "Aqua", "Lieutenant-Governor", "none", "","1293","345",""));
Candidates.push(new Candidate("68719476736", "Paul Swan", "Brown", "Lieutenant-Governor", "none", "","1293","424",""));
Candidates.push(new Candidate(WriteInID, Phrase[SelectedVoice][32], "", "Lieutenant-Governor", "none", "","1293","499","823,488"));

Candidates.push(new Candidate("287", "Camille Argent", "Blue", "County Commissioners", "none", "","500","696",""));
Candidates.push(new Candidate("8530162", "Chloe Witherspoon", "Blue", "County Commissioners", "none", "","500","771",""));
Candidates.push(new Candidate("5320", "Clayton Bainbridge", "Blue", "County Commissioners", "none", "","500","850",""));
Candidates.push(new Candidate("107918163081", "Amanda Marracini", "Yellow", "County Commissioners", "none", "","500","927",""));
Candidates.push(new Candidate("884736", "Charlene Hennessey", "Yellow", "County Commissioners", "none", "","500","1004",""));
Candidates.push(new Candidate("4717", "Eric Savoy", "Yellow", "County Commissioners", "none", "","500","1083",""));
Candidates.push(new Candidate("64339296875", "Sheila Moskowitz", "Purple", "County Commissioners", "none", "","500","1162",""));
Candidates.push(new Candidate("593", "Mary Tawa", "Purple", "County Commissioners", "none", "","500","1237",""));
Candidates.push(new Candidate("405224405", "Damian Rangel", "Purple", "County Commissioners", "none", "","1293","696",""));
Candidates.push(new Candidate("40867559636992", "Valarie Altman", "Orange", "County Commissioners", "none", "","1293","771",""));
Candidates.push(new Candidate("2402318", "Helen Moore", "Orange", "County Commissioners", "none", "","1293","850",""));
Candidates.push(new Candidate("104976", "John White", "Orange", "County Commissioners", "none", "","1293","927",""));
Candidates.push(new Candidate("21332881", "Joe Lee", "Pink", "County Commissioners", "none", "","1293","1004",""));
Candidates.push(new Candidate("3010936384", "Joe Barry", "Pink", "County Commissioners", "none", "","1293","1083",""));
Candidates.push(new Candidate("511600", "Martin Schreiner", "Gray", "County Commissioners", "none", "","1293","1162",""));
Candidates.push(new Candidate(WriteInID, Phrase[SelectedVoice][32], "", "County Commissioners", "none", "","1293","1237","801,1235"));
Candidates.push(new Candidate(WriteInID, Phrase[SelectedVoice][32], "", "County Commissioners", "none", "","1293","1237","801,1235"));
Candidates.push(new Candidate(WriteInID, Phrase[SelectedVoice][32], "", "County Commissioners", "none", "","1293","1237","801,1235"));

Candidates.push(new Candidate("900299", Phrase[SelectedVoice][0], "", "Proposition #1", "none", "","500","1435",""));
Candidates.push(new Candidate("373", Phrase[SelectedVoice][1], "", "Proposition #1", "none", "","500","1515",""));

Candidates.push(new Candidate("3618", Phrase[SelectedVoice][28], "", "Amendment #1", "none", "","500","1823",""));
Candidates.push(new Candidate("248832", Phrase[SelectedVoice][29], "", "Amendment #1", "none", "","500","1902",""));

//Voice Settings
Candidates.push(new Candidate("Set1", Phrase[SelectedVoice][16], "", window.top.Settings, "none", "","","",""));
Candidates.push(new Candidate("Set2", Phrase[SelectedVoice][17], "", window.top.Settings, "none", "","","",""));
Candidates.push(new Candidate("Set3", Phrase[SelectedVoice][18], "", window.top.Settings, "none", "","","",""));
Candidates[(Candidates.length-1)].CandidateSelected = true;
Candidates[(Candidates.length-1)].WhenSelected = new Date();
Candidates.push(new Candidate("Set4", Phrase[SelectedVoice][19], "", window.top.Settings, "none", "","","",""));
Candidates.push(new Candidate("Set5", Phrase[SelectedVoice][20], "", window.top.Settings, "none", "","","",""));

