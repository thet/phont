  // setup phonemes setting id, character/string and path to soundfile 
  // ( or load from external file @see data/setup.json ) 
  var testsetup = {
		  phonemes_list:[
		                 {id:1, char:'ʌ',  sound:'data/testsound1.wav'} ,
		                 {id:2, char:'ɑ', sound:'data/testsound2.wav'} ,
		                 {id:3, char:'æ',  sound:'data/testsound3.wav'} ,
		                 {id:4, char:'e',  sound:'data/testsound4.wav'} ,
		                 {id:4, char:'ə',  sound:'data/testsound5.wav'} ,
		                 {id:5, char:'ɜ', sound:'data/testsound6.wav'} ,
		                 {id:6, char:'i',  sound:'data/testsound7.wav'} ,
		                 {id:7, char:'ɒ',  sound:'data/testsound4.wav'} ,
		                 {id:8, char:'ɔ',  sound:'data/testsound4.wav'} ,
		                 {id:9, char:'ʊ',  sound:'data/testsound4.wav'} ,
		                 {id:10, char:'u',  sound:'data/testsound4.wav'} ,
		                 {id:11, char:'a',  sound:'data/testsound4.wav'} ,
		                 {id:12, char:'o',  sound:'data/testsound4.wav'} ,
		                 {id:13, char:'b',  sound:'data/testsound4.wav'} ,
		                 {id:14, char:'d',  sound:'data/testsound4.wav'} ,
		                 {id:15, char:'g',  sound:'data/testsound4.wav'} ,
		                 {id:16, char:'h',  sound:'data/testsound4.wav'} ,
		                 {id:17, char:'j',  sound:'data/testsound4.wav'} ,
		                 {id:19, char:'k',  sound:'data/testsound4.wav'} ,
		                 {id:20, char:'l',  sound:'data/testsound4.wav'} ,
		                 {id:21, char:'m',  sound:'data/testsound4.wav'} ,
		                 {id:22, char:'n',  sound:'data/testsound4.wav'} ,
		                 {id:23, char:'ŋ',  sound:'data/testsound4.wav'} ,
		                 {id:24, char:'r',  sound:'data/testsound4.wav'} ,
		                 {id:25, char:'s',  sound:'data/testsound4.wav'} ,
		                 {id:26, char:'ʃ',  sound:'data/testsound4.wav'} ,
		                 {id:27, char:'t',  sound:'data/testsound4.wav'} ,
		                 {id:28, char:'θ',  sound:'data/testsound4.wav'} ,
		                 {id:29, char:'ð',  sound:'data/testsound4.wav'} ,
		                 {id:30, char:'v',  sound:'data/testsound4.wav'} ,
		                 {id:31, char:'w',  sound:'data/testsound4.wav'} ,
		                 {id:32, char:'z',  sound:'data/testsound4.wav'} ,
		                 {id:33, char:'ʒ',  sound:'data/testsound4.wav'} ,
		             ]};

  // get two mappings 
  var playerdat   = initPlayer(testsetup);
  var sounds      = playerdat[0];
  var characters  = playerdat[1];
  
  // demo sequence as int 
  var mySequence = Array(1,2,3,4,5,6,7);
  
  // convert a string sequence (pass in the character mapping)
	var convertedSequence = getSequenceFromString("ʌ ɑ:æ", characters)

  // $(document).ready(function() {});
  
  // to play sound pass soundbankd (int->sound mapping) and sequence of ints:
  // playSequence(sounds, mySequence);
  // playSequence(sounds, convertedSequence);
  
  // play just one character :
	// playSample(sounds, getSequenceFromString( "ʌ" , characters)[0])
 
