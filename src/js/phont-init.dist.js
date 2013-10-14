// setup phonemes setting id, character/string and path to soundfile
// ( or load from external file @see data/setup.json )
var soundbanks = [
    {name: 'male',
     sounds: [
        {id:1,  char:'aɪ̯',   sound:'http://adm.at/phont/src/data/phonemes/1. aɪ̯ (O).wav'},
        {id:2,  char:'aʊ̯',    sound:'http://adm.at/phont/src/data/phonemes/2. aʊ̯ (O).wav'},
        {id:3,  char:'ɔʏ̯',    sound:'http://adm.at/phont/src/data/phonemes/3. ɔʏ̯ (O).wav'},
        {id:4,  char:'eəʳ',    sound:'http://adm.at/phont/src/data/phonemes/4. eəʳ (O).wav'},
        {id:5,  char:'ʊəʳ',    sound:'http://adm.at/phont/src/data/phonemes/5. ʊəʳ (O).wav'},
        {id:6,  char:'ɪəʳ', sound:'http://adm.at/phont/src/data/phonemes/6. ɪəʳ (O).wav'},
        {id:7,  char:'ʁ',  sound:'http://adm.at/phont/src/data/phonemes/7. ʁ (O).wav'},
        {id:8,  char:'ɹ',  sound:'http://adm.at/phont/src/data/phonemes/8. ɹ (O).wav'},
        {id:9,  char:'r',  sound:'http://adm.at/phont/src/data/phonemes/9. r (O).wav'},
        {id:10, char:'ð',   sound:'http://adm.at/phont/src/data/phonemes/10. ð (O).wav'},
        {id:11, char:'ç',   sound:'http://adm.at/phont/src/data/phonemes/11. ç (O).wav'},
        {id:12, char:'s',   sound:'http://adm.at/phont/src/data/phonemes/12. s (O).wav'},
        {id:13, char:'tʃ',   sound:'http://adm.at/phont/src/data/phonemes/13. tʃ (O).wav'},
        {id:14, char:'e',   sound:'http://adm.at/phont/src/data/phonemes/14. e (O).wav'},
        {id:15, char:'œ',   sound:'http://adm.at/phont/src/data/phonemes/15. œ (O).wav'},
        {id:16, char:'ɛ',   sound:'http://adm.at/phont/src/data/phonemes/16. ɛ (O).wav'},
        {id:17, char:'i',   sound:'http://adm.at/phont/src/data/phonemes/17. i (O).wav'},
        {id:18, char:'ʒ',   sound:'http://adm.at/phont/src/data/phonemes/18. ʒ (O).wav'},
        {id:19, char:'z',   sound:'http://adm.at/phont/src/data/phonemes/19. z (O).wav'},
        {id:20, char:'dʒ',   sound:'http://adm.at/phont/src/data/phonemes/20. dʒ (O).wav'},
        {id:21, char:'m',   sound:'http://adm.at/phont/src/data/phonemes/21. m (O).wav'},
        {id:22, char:'w',   sound:'http://adm.at/phont/src/data/phonemes/22. w (O).wav'},
        {id:23, char:'p',   sound:'http://adm.at/phont/src/data/phonemes/23. p (O).wav'},
        {id:24, char:'k',   sound:'http://adm.at/phont/src/data/phonemes/24. k (O).wav'},
        {id:25, char:'ʃ',   sound:'http://adm.at/phont/src/data/phonemes/25. ʃ (O).wav'},
        {id:26, char:'h',   sound:'http://adm.at/phont/src/data/phonemes/26. h (O).wav'},
        {id:27, char:'ɑ',   sound:'http://adm.at/phont/src/data/phonemes/27. ɑ (O).wav'},
        {id:28, char:'ɐ',   sound:'http://adm.at/phont/src/data/phonemes/28. ɐ (O).wav'},
        {id:29, char:'o',   sound:'http://adm.at/phont/src/data/phonemes/29. o (O).wav'},
        {id:30, char:'y',   sound:'http://adm.at/phont/src/data/phonemes/30. y (O).wav'},
        {id:31, char:'g',   sound:'http://adm.at/phont/src/data/phonemes/31. g (O).wav'},
        {id:32, char:'d',   sound:'http://adm.at/phont/src/data/phonemes/32. d (O).wav'},
        {id:33, char:'j',   sound:'http://adm.at/phont/src/data/phonemes/33. j (O).wav'},
        {id:34, char:'ŋ',   sound:'http://adm.at/phont/src/data/phonemes/34. ŋ (O).wav'},
        {id:35, char:'l',   sound:'http://adm.at/phont/src/data/phonemes/35. l (O).wav'},
        {id:36, char:'t',   sound:'http://adm.at/phont/src/data/phonemes/36. t (O).wav'},
        {id:37, char:'f',   sound:'http://adm.at/phont/src/data/phonemes/37. f (O).wav'},
        {id:38, char:'ɜʳ',   sound:'http://adm.at/phont/src/data/phonemes/38. ɜʳ (O).wav'},
        {id:39, char:'ʌ',   sound:'http://adm.at/phont/src/data/phonemes/39. ʌ (O).wav'},
        {id:40, char:'ʊ',   sound:'http://adm.at/phont/src/data/phonemes/40. ʊ (O).wav'},
        {id:41, char:'v',   sound:'http://adm.at/phont/src/data/phonemes/41. v (O).wav'},
        {id:42, char:'b',   sound:'http://adm.at/phont/src/data/phonemes/42. b (O).wav'},
        {id:43, char:'n',   sound:'http://adm.at/phont/src/data/phonemes/43. n (O).wav'},
        {id:44, char:',',   sound:'http://adm.at/phont/src/data/phonemes/44. Beistrich (O).wav'},
        {id:45, char:'.',   sound:'http://adm.at/phont/src/data/phonemes/45. Punkt (O).wav'},
        {id:46, char:'?',   sound:'http://adm.at/phont/src/data/phonemes/46. Fragezeichen (O).wav'},
        {id:47, char:'!',   sound:'http://adm.at/phont/src/data/phonemes/47. Rufzeichen (O).wav'},
        {id:48, char:' ',  sound:'http://adm.at/phont/src/data/silence.wav'}
  ]},
    {name: 'female',
     sounds: [
        {id:1,  char:'aɪ̯',   sound:'http://adm.at/phont/src/data/phonemes/1. aɪ̯ (Y).wav'},
        {id:2,  char:'aʊ̯',    sound:'http://adm.at/phont/src/data/phonemes/2. aʊ̯ (Y).wav'},
        {id:3,  char:'ɔʏ̯',    sound:'http://adm.at/phont/src/data/phonemes/3. ɔʏ̯ (Y).wav'},
        {id:4,  char:'eəʳ',    sound:'http://adm.at/phont/src/data/phonemes/4. eəʳ (Y).wav'},
        {id:5,  char:'ʊəʳ',    sound:'http://adm.at/phont/src/data/phonemes/5. ʊəʳ (Y).wav'},
        {id:6,  char:'ɪəʳ', sound:'http://adm.at/phont/src/data/phonemes/6. ɪəʳ (Y).wav'},
        {id:7,  char:'ʁ',  sound:'http://adm.at/phont/src/data/phonemes/7. ʁ (Y).wav'},
        {id:8,  char:'ɹ',  sound:'http://adm.at/phont/src/data/phonemes/8. ɹ (Y).wav'},
        {id:9,  char:'r',  sound:'http://adm.at/phont/src/data/phonemes/9. r (Y).wav'},
        {id:10, char:'ð',   sound:'http://adm.at/phont/src/data/phonemes/10. ð (Y).wav'},
        {id:11, char:'ç',   sound:'http://adm.at/phont/src/data/phonemes/11. ç (Y).wav'},
        {id:12, char:'s',   sound:'http://adm.at/phont/src/data/phonemes/12. s (Y).wav'},
        {id:13, char:'tʃ',   sound:'http://adm.at/phont/src/data/phonemes/13. tʃ (Y).wav'},
        {id:14, char:'e',   sound:'http://adm.at/phont/src/data/phonemes/14. e (Y).wav'},
        {id:15, char:'œ',   sound:'http://adm.at/phont/src/data/phonemes/15. œ (Y).wav'},
        {id:16, char:'ɛ',   sound:'http://adm.at/phont/src/data/phonemes/16. ɛ (Y).wav'},
        {id:17, char:'i',   sound:'http://adm.at/phont/src/data/phonemes/17. i (Y).wav'},
        {id:18, char:'ʒ',   sound:'http://adm.at/phont/src/data/phonemes/18. ʒ (Y).wav'},
        {id:19, char:'z',   sound:'http://adm.at/phont/src/data/phonemes/19. z (Y).wav'},
        {id:20, char:'dʒ',   sound:'http://adm.at/phont/src/data/phonemes/20. dʒ (Y).wav'},
        {id:21, char:'m',   sound:'http://adm.at/phont/src/data/phonemes/21. m (Y).wav'},
        {id:22, char:'w',   sound:'http://adm.at/phont/src/data/phonemes/22. w (Y).wav'},
        {id:23, char:'p',   sound:'http://adm.at/phont/src/data/phonemes/23. p (Y).wav'},
        {id:24, char:'k',   sound:'http://adm.at/phont/src/data/phonemes/24. k (Y).wav'},
        {id:25, char:'ʃ',   sound:'http://adm.at/phont/src/data/phonemes/25. ʃ (Y).wav'},
        {id:26, char:'h',   sound:'http://adm.at/phont/src/data/phonemes/26. h (Y).wav'},
        {id:27, char:'ɑ',   sound:'http://adm.at/phont/src/data/phonemes/27. ɑ (Y).wav'},
        {id:28, char:'ɐ',   sound:'http://adm.at/phont/src/data/phonemes/28. ɐ (Y).wav'},
        {id:29, char:'o',   sound:'http://adm.at/phont/src/data/phonemes/29. o (Y).wav'},
        {id:30, char:'y',   sound:'http://adm.at/phont/src/data/phonemes/30. y (Y).wav'},
        {id:31, char:'g',   sound:'http://adm.at/phont/src/data/phonemes/31. g (Y).wav'},
        {id:32, char:'d',   sound:'http://adm.at/phont/src/data/phonemes/32. d (Y).wav'},
        {id:33, char:'j',   sound:'http://adm.at/phont/src/data/phonemes/33. j (Y).wav'},
        {id:34, char:'ŋ',   sound:'http://adm.at/phont/src/data/phonemes/34. ŋ (Y).wav'},
        {id:35, char:'l',   sound:'http://adm.at/phont/src/data/phonemes/35. l (Y).wav'},
        {id:36, char:'t',   sound:'http://adm.at/phont/src/data/phonemes/36. t (Y).wav'},
        {id:37, char:'f',   sound:'http://adm.at/phont/src/data/phonemes/37. f (Y).wav'},
        {id:38, char:'ɜʳ',   sound:'http://adm.at/phont/src/data/phonemes/38. ɜʳ (Y).wav'},
        {id:39, char:'ʌ',   sound:'http://adm.at/phont/src/data/phonemes/39. ʌ (Y).wav'},
        {id:40, char:'ʊ',   sound:'http://adm.at/phont/src/data/phonemes/40. ʊ (Y).wav'},
        {id:41, char:'v',   sound:'http://adm.at/phont/src/data/phonemes/41. v (Y).wav'},
        {id:42, char:'b',   sound:'http://adm.at/phont/src/data/phonemes/42. b (Y).wav'},
        {id:43, char:'n',   sound:'http://adm.at/phont/src/data/phonemes/43. n (Y).wav'},
        {id:44, char:',',   sound:'http://adm.at/phont/src/data/phonemes/44. Beistrich (Y).wav'},
        {id:45, char:'.',   sound:'http://adm.at/phont/src/data/phonemes/45. Punkt (Y).wav'},
        {id:46, char:'?',   sound:'http://adm.at/phont/src/data/phonemes/46. Fragezeichen (Y).wav'},
        {id:47, char:'!',   sound:'http://adm.at/phont/src/data/phonemes/47. Rufzeichen (Y).wav'},
        {id:48, char:' ',  sound:'http://adm.at/phont/src/data/silence.wav'},
    ]},
];

//$.getJSON("setup.json").done(function(data) {
//    debugger;
//    soundbanks = data.soundbanks;
//});

// get two mappings
var playerdat   = initPlayer(soundbanks);
var sounds      = playerdat[0];
var characters  = playerdat[1];
var player      = playerdat[2];
var alet        = playerdat[3];



//
//var rec =  alet.output.device.sink.record()
//rec.stop();
//var buf = rec.join();
//for (i in buf) console.log(buf[i]); ...
//
//


//// sink test :
//var k, v, n = 0;
//var sink = Sink(function(buffer, channelCount){
//    for (var j=0; j<buffer.length; j+=2, n++) {
//            v = Math.sin(k*n);
//            buffer[j] = v;
//            buffer[j+1] = v;
//        }
//}, 2); // 2 channels ... which is already the default
//
//k = 2*Math.PI*440/sink.sampleRate;
//
//var recording = sink.record();
//
////And when you want to stop recording:
//
//recording.stop();
//
////To join the recording into a single buffer:
//
//var buffer = recording.join();
// https://github.com/jussi-kalliokoski/sink.js/





/*
aɪ̯
aʊ̯
ɔʏ̯
eəʳ
ʊəʳ
ɪəʳ
ʁ
ɹ
r
ð
ç
s
tʃ
e
œ
ɛ
i
ʒ
z
dʒ
m
w
p
k
ʃ
h
ɑ
ɐ
o
y
g
d
j
ŋ
l
t
f
ɜʳ
ʌ
ʊ
v
b
n
,
.
?
!
*/


