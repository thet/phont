Phonetic Typewriter
===================

Project for an sfd.at online course.

https://github.com/thet/phont
http://adm.at/phont/src/index.html



Beschreibungen: 
Save:

Silence: 

Shift: 

Delete: 

Pfeil rechts
bewegt den cursor vor das nächste phone / moves the cursor to the next phone
Pfeil links
bewegt den cursor vor das vorherige phone / moves the cursor to the phone before


Configure NGINX to server audio files
-------------------------------------
http://drumcoder.co.uk/blog/2011/mar/13/html5-audio-and-nginx/

$ cat >> mime.types
audio/mpeg                            mp3;
audio/ogg                             ogg;
audio/wave                            wav;

TODO
----
choose license:
http://www.gnu.org/licenses/license-list
http://en.wikipedia.org/wiki/Free_Art_License
http://directory.fsf.org/wiki/License:ArtisticLicense2.0


libs
====

musical score lib
http://0xfe.blogspot.co.at/2010/05/music-notation-with-html5-canvas.html

synth lib
https://github.com/oampo/Audiolet
http://oampo.github.io/Audiolet/api.html

http://audiolibjs.org/

https://github.com/mattdiamond/Recorderjs

ui
http://kievii.net/examples.html
http://raphaeljs.com/

infos
=====

nochmal unsere schreibmaschine: http://adm.at/phont/src/index.html

zu den sounds:
die scheinen sehr gut zu sein:
http://app.lexercise.com/static/audio/phonemes/

allerdings bräuchten wir hier eine zuordnung von sounds zu den einzelnen phonemen. geht nicht aus dem filenamen hervor... in ein paar files sollen aber id3 metadaten mit diesen infos zu finden sein, allerdings nicht in allen.
orhan, hast du wen, der uns das aufbereiten kann? das könnte nämlich im schlimmsten fall einiges an zeit beanspruchen (bsp, wenn alles durchgehört und manuell zugeordnet werden muss).

hier eine andere bibliothek: http://www.uiowa.edu/~acadtech/phonetics/english/frameset.html

noch eine: http://web.uvic.ca/ling/resources/ipa/charts/IPAlab/
http://web.uvic.ca/ling/resources/ipa/handbook_downloads.htm

und noch eine: http://ipa.group.shef.ac.uk/symbols.php

das englische phonetische alphabet, allerdings mit unbrauchbaren sounds: http://www.antimoon.com/how/pronunc-soundsipa.htm

bei allen sounds stellt sich aber die frage des copyrights, die noch geklärt werden muss... ausser wir nehmens doch selbst auf.



Based on
========

Creating a Keyboard with CSS and jQuery
---------------------------------------
http://net.tutsplus.com/tutorials/javascript-ajax/creating-a-keyboard-with-css-and-jquery/
http://d2o0t5hpnwv4c1.cloudfront.net/378_jqueryKeyboard/demo/index.html




Random notes
============

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
