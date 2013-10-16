var soundbanks,
    playerdat,
    sounds,
    characters,
    player,
    alet;

$(document).ready(function() {

    // setup phonemes setting id, character/string and path to soundfile
    soundbanks = [
        {name: 'male',
         sounds: [
            {id:1,  char:'aɪ̯',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/1_O.wav'},
            {id:2,  char:'aʊ̯',    sound:'++resource++adm.sfd.course.phont/src/data/phonemes/2_O.wav'},
            {id:3,  char:'ɔʏ̯',    sound:'++resource++adm.sfd.course.phont/src/data/phonemes/3_O.wav'},
            {id:4,  char:'eəʳ',    sound:'++resource++adm.sfd.course.phont/src/data/phonemes/4_O.wav'},
            {id:5,  char:'ʊəʳ',    sound:'++resource++adm.sfd.course.phont/src/data/phonemes/5_O.wav'},
            {id:6,  char:'ɪəʳ', sound:'++resource++adm.sfd.course.phont/src/data/phonemes/6_O.wav'},
            {id:7,  char:'ʁ',  sound:'++resource++adm.sfd.course.phont/src/data/phonemes/7_O.wav'},
            {id:8,  char:'ɹ',  sound:'++resource++adm.sfd.course.phont/src/data/phonemes/8_O.wav'},
            {id:9,  char:'r',  sound:'++resource++adm.sfd.course.phont/src/data/phonemes/9_O.wav'},
            {id:10, char:'ð',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/10_O.wav'},
            {id:11, char:'ç',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/11_O.wav'},
            {id:12, char:'s',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/12_O.wav'},
            {id:13, char:'tʃ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/13_O.wav'},
            {id:14, char:'e',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/14_O.wav'},
            {id:15, char:'œ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/15_O.wav'},
            {id:16, char:'ɛ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/16_O.wav'},
            {id:17, char:'i',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/17_O.wav'},
            {id:18, char:'ʒ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/18_O.wav'},
            {id:19, char:'z',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/19_O.wav'},
            {id:20, char:'dʒ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/20_O.wav'},
            {id:21, char:'m',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/21_O.wav'},
            {id:22, char:'w',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/22_O.wav'},
            {id:23, char:'p',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/23_O.wav'},
            {id:24, char:'k',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/24_O.wav'},
            {id:25, char:'ʃ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/25_O.wav'},
            {id:26, char:'h',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/26_O.wav'},
            {id:27, char:'ɑ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/27_O.wav'},
            {id:28, char:'ɐ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/28_O.wav'},
            {id:29, char:'o',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/29_O.wav'},
            {id:30, char:'y',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/30_O.wav'},
            {id:31, char:'g',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/31_O.wav'},
            {id:32, char:'d',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/32_O.wav'},
            {id:33, char:'j',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/33_O.wav'},
            {id:34, char:'ŋ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/34_O.wav'},
            {id:35, char:'l',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/35_O.wav'},
            {id:36, char:'t',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/36_O.wav'},
            {id:37, char:'f',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/37_O.wav'},
            {id:38, char:'ɜʳ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/38_O.wav'},
            {id:39, char:'ʌ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/39_O.wav'},
            {id:40, char:'ʊ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/40_O.wav'},
            {id:41, char:'v',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/41_O.wav'},
            {id:42, char:'b',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/42_O.wav'},
            {id:43, char:'n',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/43_O.wav'},
            {id:44, char:',',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/44_O.wav'},
            {id:45, char:'.',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/45_O.wav'},
            {id:46, char:'?',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/46_O.wav'},
            {id:47, char:'!',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/47_O.wav'},
            {id:48, char:' ',  sound:'++resource++adm.sfd.course.phont/src/data/silence.wav'}
      ]},
        {name: 'female',
         sounds: [
            {id:1,  char:'aɪ̯',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/1_Y.wav'},
            {id:2,  char:'aʊ̯',    sound:'++resource++adm.sfd.course.phont/src/data/phonemes/2_Y.wav'},
            {id:3,  char:'ɔʏ̯',    sound:'++resource++adm.sfd.course.phont/src/data/phonemes/3_Y.wav'},
            {id:4,  char:'eəʳ',    sound:'++resource++adm.sfd.course.phont/src/data/phonemes/4_Y.wav'},
            {id:5,  char:'ʊəʳ',    sound:'++resource++adm.sfd.course.phont/src/data/phonemes/5_Y.wav'},
            {id:6,  char:'ɪəʳ', sound:'++resource++adm.sfd.course.phont/src/data/phonemes/6_Y.wav'},
            {id:7,  char:'ʁ',  sound:'++resource++adm.sfd.course.phont/src/data/phonemes/7_Y.wav'},
            {id:8,  char:'ɹ',  sound:'++resource++adm.sfd.course.phont/src/data/phonemes/8_Y.wav'},
            {id:9,  char:'r',  sound:'++resource++adm.sfd.course.phont/src/data/phonemes/9_Y.wav'},
            {id:10, char:'ð',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/10_Y.wav'},
            {id:11, char:'ç',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/11_Y.wav'},
            {id:12, char:'s',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/12_Y.wav'},
            {id:13, char:'tʃ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/13_Y.wav'},
            {id:14, char:'e',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/14_Y.wav'},
            {id:15, char:'œ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/15_Y.wav'},
            {id:16, char:'ɛ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/16_Y.wav'},
            {id:17, char:'i',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/17_Y.wav'},
            {id:18, char:'ʒ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/18_Y.wav'},
            {id:19, char:'z',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/19_Y.wav'},
            {id:20, char:'dʒ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/20_Y.wav'},
            {id:21, char:'m',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/21_Y.wav'},
            {id:22, char:'w',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/22_Y.wav'},
            {id:23, char:'p',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/23_Y.wav'},
            {id:24, char:'k',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/24_Y.wav'},
            {id:25, char:'ʃ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/25_Y.wav'},
            {id:26, char:'h',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/26_Y.wav'},
            {id:27, char:'ɑ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/27_Y.wav'},
            {id:28, char:'ɐ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/28_Y.wav'},
            {id:29, char:'o',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/29_Y.wav'},
            {id:30, char:'y',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/30_Y.wav'},
            {id:31, char:'g',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/31_Y.wav'},
            {id:32, char:'d',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/32_Y.wav'},
            {id:33, char:'j',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/33_Y.wav'},
            {id:34, char:'ŋ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/34_Y.wav'},
            {id:35, char:'l',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/35_Y.wav'},
            {id:36, char:'t',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/36_Y.wav'},
            {id:37, char:'f',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/37_Y.wav'},
            {id:38, char:'ɜʳ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/38_Y.wav'},
            {id:39, char:'ʌ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/39_Y.wav'},
            {id:40, char:'ʊ',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/40_Y.wav'},
            {id:41, char:'v',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/41_Y.wav'},
            {id:42, char:'b',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/42_Y.wav'},
            {id:43, char:'n',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/43_Y.wav'},
            {id:44, char:',',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/44_Y.wav'},
            {id:45, char:'.',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/45_Y.wav'},
            {id:46, char:'?',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/46_Y.wav'},
            {id:47, char:'!',   sound:'++resource++adm.sfd.course.phont/src/data/phonemes/47_Y.wav'},
            {id:48, char:' ',  sound:'++resource++adm.sfd.course.phont/src/data/silence.wav'},
        ]},
    ];

    // get two mappings
    playerdat   = initPlayer(soundbanks);
    sounds      = playerdat[0];
    characters  = playerdat[1];
    player      = playerdat[2];
    alet        = playerdat[3];

});
