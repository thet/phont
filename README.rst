Phonetic Typewriter
===================

Project for an sfd.at online course.

https://github.com/thet/phont
http://adm.at/phont/src/index.html



Beschreibungen: 
Save:
sichert das ergebnis unter ihrem namen / saves the results as your contribution
Silence: 
sets a pause - to extend the pause type many times / setzt eine pause - um die pause zu verlängern, mehrmals tippen
Shift: 
gives access to another phone of the same category of phonems / wechselt zwischen alternativen Lauten der selben Famillie.
Delete: 
löscht das phone vor dem cusor / deletes the phone before the cursor
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


