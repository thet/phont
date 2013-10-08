// setup phonemes setting id, character/string and path to soundfile
// ( or load from external file @see data/setup.json )
var soundbank = {
    male: [
        {id:1,  char:'aɪ̯',   sound:'data/phonemes/1. aɪ̯ (O).wav'},
        {id:2,  char:'aʊ̯',    sound:'data/phonemes/2. aʊ̯ (O).wav'},
        {id:3,  char:'ɔʏ̯',    sound:'data/phonemes/3. ɔʏ̯ (O).wav'},
        {id:4,  char:'eəʳ',    sound:'data/phonemes/4. eəʳ (O).wav'},
        {id:5,  char:'ʊəʳ',    sound:'data/phonemes/5. ʊəʳ (O).wav'},
        {id:6,  char:'ɪəʳ', sound:'data/phonemes/6. ɪəʳ (O).wav'},
        {id:7,  char:'ʁ',  sound:'data/phonemes/7. ʁ (O).wav'},
        {id:8,  char:'ɹ',  sound:'data/phonemes/8. ɹ (O).wav'},
        {id:9,  char:'r',  sound:'data/phonemes/9. r (O).wav'},
        {id:10, char:'ð',   sound:'data/phonemes/10. ð (O).wav'},
        {id:11, char:'ç',   sound:'data/phonemes/11. ç (O).wav'},
        {id:12, char:'s',   sound:'data/phonemes/12. s (O).wav'},
        {id:13, char:'tʃ',   sound:'data/phonemes/13. tʃ (O).wav'},
        {id:14, char:'e',   sound:'data/phonemes/14. e (O).wav'},
        {id:15, char:'œ',   sound:'data/phonemes/15. œ (O).wav'},
        {id:16, char:'ɛ',   sound:'data/phonemes/16. ɛ (O).wav'},
        {id:17, char:'i',   sound:'data/phonemes/17. i (O).wav'},
        {id:18, char:'ʒ',   sound:'data/phonemes/18. ʒ (O).wav'},
        {id:19, char:'z',   sound:'data/phonemes/19. z (O).wav'},
        {id:20, char:'dʒ',   sound:'data/phonemes/20. dʒ (O).wav'},
        {id:21, char:'m',   sound:'data/phonemes/21. m (O).wav'},
        {id:22, char:'w',   sound:'data/phonemes/22. w (O).wav'},
        {id:23, char:'p',   sound:'data/phonemes/23. p (O).wav'},
        {id:24, char:'k',   sound:'data/phonemes/24. k (O).wav'},
        {id:25, char:'ʃ',   sound:'data/phonemes/25. ʃ (O).wav'},
        {id:26, char:'h',   sound:'data/phonemes/26. h (O).wav'},
        {id:27, char:'ɑ',   sound:'data/phonemes/27. ɑ (O).wav'},
        {id:28, char:'ɐ',   sound:'data/phonemes/28. ɐ (O).wav'},
        {id:29, char:'o',   sound:'data/phonemes/29. o (O).wav'},
        {id:30, char:'y',   sound:'data/phonemes/30. y (O).wav'},
        {id:31, char:'g',   sound:'data/phonemes/31. g (O).wav'},
        {id:32, char:'d',   sound:'data/phonemes/32. d (O).wav'},
        {id:33, char:'j',   sound:'data/phonemes/33. j (O).wav'},
        {id:34, char:'ŋ',   sound:'data/phonemes/34. ŋ (O).wav'},
        {id:35, char:'l',   sound:'data/phonemes/35. l (O).wav'},
        {id:36, char:'t',   sound:'data/phonemes/36. t (O).wav'},
        {id:37, char:'f',   sound:'data/phonemes/37. f (O).wav'},
        {id:38, char:'ɜʳ',   sound:'data/phonemes/38. ɜʳ (O).wav'},
        {id:39, char:'ʌ',   sound:'data/phonemes/39. ʌ (O).wav'},
        {id:40, char:'ʊ',   sound:'data/phonemes/40. ʊ (O).wav'},
        {id:41, char:'v',   sound:'data/phonemes/41. v (O).wav'},
        {id:42, char:'b',   sound:'data/phonemes/42. b (O).wav'},
        {id:43, char:'n',   sound:'data/phonemes/43. n (O).wav'},
        {id:44, char:',',   sound:'data/phonemes/44. Beistrich (O).wav'},
        {id:45, char:'.',   sound:'data/phonemes/45. Punkt (O).wav'},
        {id:46, char:'?',   sound:'data/phonemes/46. Fragezeichen (O).wav'},
        {id:47, char:'!',   sound:'data/phonemes/47. Rufzeichen (O).wav'},
        {id:48, char:' ',  sound:'data/silence.wav'},
    ],
    female: [
        {id:1,  char:'aɪ̯',   sound:'data/phonemes/1. aɪ̯ (Y).wav'},
        {id:2,  char:'aʊ̯',    sound:'data/phonemes/2. aʊ̯ (Y).wav'},
        {id:3,  char:'ɔʏ̯',    sound:'data/phonemes/3. ɔʏ̯ (Y).wav'},
        {id:4,  char:'eəʳ',    sound:'data/phonemes/4. eəʳ (Y).wav'},
        {id:5,  char:'ʊəʳ',    sound:'data/phonemes/5. ʊəʳ (Y).wav'},
        {id:6,  char:'ɪəʳ', sound:'data/phonemes/6. ɪəʳ (Y).wav'},
        {id:7,  char:'ʁ',  sound:'data/phonemes/7. ʁ (Y).wav'},
        {id:8,  char:'ɹ',  sound:'data/phonemes/8. ɹ (Y).wav'},
        {id:9,  char:'r',  sound:'data/phonemes/9. r (Y).wav'},
        {id:10, char:'ð',   sound:'data/phonemes/10. ð (Y).wav'},
        {id:11, char:'ç',   sound:'data/phonemes/11. ç (Y).wav'},
        {id:12, char:'s',   sound:'data/phonemes/12. s (Y).wav'},
        {id:13, char:'tʃ',   sound:'data/phonemes/13. tʃ (Y).wav'},
        {id:14, char:'e',   sound:'data/phonemes/14. e (Y).wav'},
        {id:15, char:'œ',   sound:'data/phonemes/15. œ (Y).wav'},
        {id:16, char:'ɛ',   sound:'data/phonemes/16. ɛ (Y).wav'},
        {id:17, char:'i',   sound:'data/phonemes/17. i (Y).wav'},
        {id:18, char:'ʒ',   sound:'data/phonemes/18. ʒ (Y).wav'},
        {id:19, char:'z',   sound:'data/phonemes/19. z (Y).wav'},
        {id:20, char:'dʒ',   sound:'data/phonemes/20. dʒ (Y).wav'},
        {id:21, char:'m',   sound:'data/phonemes/21. m (Y).wav'},
        {id:22, char:'w',   sound:'data/phonemes/22. w (Y).wav'},
        {id:23, char:'p',   sound:'data/phonemes/23. p (Y).wav'},
        {id:24, char:'k',   sound:'data/phonemes/24. k (Y).wav'},
        {id:25, char:'ʃ',   sound:'data/phonemes/25. ʃ (Y).wav'},
        {id:26, char:'h',   sound:'data/phonemes/26. h (Y).wav'},
        {id:27, char:'ɑ',   sound:'data/phonemes/27. ɑ (Y).wav'},
        {id:28, char:'ɐ',   sound:'data/phonemes/28. ɐ (Y).wav'},
        {id:29, char:'o',   sound:'data/phonemes/29. o (Y).wav'},
        {id:30, char:'y',   sound:'data/phonemes/30. y (Y).wav'},
        {id:31, char:'g',   sound:'data/phonemes/31. g (Y).wav'},
        {id:32, char:'d',   sound:'data/phonemes/32. d (Y).wav'},
        {id:33, char:'j',   sound:'data/phonemes/33. j (Y).wav'},
        {id:34, char:'ŋ',   sound:'data/phonemes/34. ŋ (Y).wav'},
        {id:35, char:'l',   sound:'data/phonemes/35. l (Y).wav'},
        {id:36, char:'t',   sound:'data/phonemes/36. t (Y).wav'},
        {id:37, char:'f',   sound:'data/phonemes/37. f (Y).wav'},
        {id:38, char:'ɜʳ',   sound:'data/phonemes/38. ɜʳ (Y).wav'},
        {id:39, char:'ʌ',   sound:'data/phonemes/39. ʌ (Y).wav'},
        {id:40, char:'ʊ',   sound:'data/phonemes/40. ʊ (Y).wav'},
        {id:41, char:'v',   sound:'data/phonemes/41. v (Y).wav'},
        {id:42, char:'b',   sound:'data/phonemes/42. b (Y).wav'},
        {id:43, char:'n',   sound:'data/phonemes/43. n (Y).wav'},
        {id:44, char:',',   sound:'data/phonemes/44. Beistrich (Y).wav'},
        {id:45, char:'.',   sound:'data/phonemes/45. Punkt (Y).wav'},
        {id:46, char:'?',   sound:'data/phonemes/46. Fragezeichen (Y).wav'},
        {id:47, char:'!',   sound:'data/phonemes/47. Rufzeichen (Y).wav'},
        {id:48, char:' ',  sound:'data/silence.wav'},
    ]};

// get two mappings
var playerdat   = initPlayer(soundbank.male);
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


