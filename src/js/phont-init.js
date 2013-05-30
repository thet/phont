// setup phonemes setting id, character/string and path to soundfile
// ( or load from external file @see data/setup.json )
var testsetup = {
    phonemes_list:[
        {id:1, char:'ʌ', sound:'data/phonemes/phoneme_15_2009-10-09_05-33-54.wav'},
        {id:2, char:'ɑ:', sound:'data/phonemes/phoneme_49_2009-10-22_17-27-19.wav'},
        {id:3, char:'æ', sound:'data/phonemes/phoneme_19_2009-10-21_10-31-10.wav'},
        {id:4, char:'e', sound:'data/phonemes/phoneme_53_2009-10-23_10-31-04.wav'},
        {id:5, char:'ə', sound:'data/phonemes/phoneme_2_2009-10-08_08-37-54.wav'},
        {id:6, char:'ɜ:', sound:'data/phonemes/phoneme_55_2009-10-23_10-43-20.wav'},
        {id:7, char:'ɪ', sound:'data/phonemes/phoneme_23_2009-10-23_11-02-48.wav'},
        {id:8, char:'i:', sound:'data/phonemes/phoneme_44_2009-10-22_16-42-12.wav'},
        {id:9, char:'ɒ', sound:'data/phonemes/phoneme_26_2009-10-23_11-21-41.wav'},
        {id:10, char:'ɔ:', sound:'data/phonemes/phoneme_45_2009-10-22_17-17-39.wav'},
        {id:11, char:'ʊ', sound:'data/phonemes/phoneme_28_2009-10-23_11-06-28.wav'},
        {id:12, char:'u:', sound:'data/phonemes/phoneme_56_2009-10-23_10-46-47.wav'},
        {id:13, char:'aɪ', sound:'data/phonemes/phoneme_30_2009-10-21_10-23-00.wav'},
        {id:14, char:'aʊ', sound:'data/phonemes/phoneme_31_2009-10-21_10-30-25.wav'},
        {id:15, char:'eɪ', sound:'data/phonemes/phoneme_3_2009-10-08_08-54-10.wav'},
        {id:16, char:'oʊ', sound:'data/phonemes/phoneme_32_2009-10-21_10-35-23.wav'},
        {id:17, char:'ɔɪ', sound:'data/phonemes/phoneme_33_2009-10-21_10-45-21.wav'},
        {id:18, char:'eə', sound:'data/phonemes/phoneme_34_2009-10-21_10-46-23.wav'},
        {id:19, char:'ɪə', sound:'data/phonemes/phoneme_35_2009-10-22_13-57-03.wav'},
        {id:20, char:'ʊə', sound:'data/phonemes/phoneme_36_2009-10-22_13-57-32.wav'},
        {id:21, char:'b', sound:'data/phonemes/phoneme_37_2009-10-22_15-24-50.wav'},
        {id:22, char:'d', sound:'data/phonemes/phoneme_38_2009-10-22_15-32-42.wav'},
        {id:23, char:'f', sound:'data/phonemes/phoneme_39_2009-10-22_16-07-48.wav'},
        {id:24, char:'g', sound:'data/phonemes/phoneme_40_2009-10-22_16-21-31.wav'},
        {id:25, char:'h', sound:'data/phonemes/phoneme_56_2009-10-23_10-46-47.wav'},
        {id:43, char:'j', sound:'data/phonemes/phoneme_41_2009-10-22_16-25-36.wav'},
        {id:26, char:'k', sound:'data/phonemes/phoneme_4_2009-10-08_08-58-28.wav'},
        {id:27, char:'l', sound:'data/phonemes/phoneme_42_2009-10-22_16-34-34.wav'},
        {id:28, char:'m', sound:'data/phonemes/phoneme_43_2009-10-22_16-34-50.wav'},
        {id:29, char:'n', sound:'data/phonemes/phoneme_44_2009-10-22_16-42-12.wav'},
        {id:30, char:'ŋ', sound:'data/phonemes/phoneme_45_2009-10-22_17-17-39.wav'},
        {id:31, char:'r', sound:'data/phonemes/phoneme_46_2009-10-22_17-22-07.wav'},
        {id:32, char:'s', sound:'data/phonemes/phoneme_47_2009-10-22_17-23-36.wav'},
        {id:33, char:'ʃ', sound:'data/phonemes/phoneme_48_2009-10-22_17-24-55.wav'},
        {id:34, char:'t', sound:'data/phonemes/phoneme_49_2009-10-22_17-27-19.wav'},
        {id:35, char:'tʃ', sound:'data/phonemes/phoneme_50_2009-10-22_17-28-24.wav'},
        {id:36, char:'θ', sound:'data/phonemes/phoneme_51_2009-10-22_17-30-40.wav'},
        {id:37, char:'ð', sound:'data/phonemes/phoneme_5_2009-10-08_09-01-16.wav'},
        {id:38, char:'v', sound:'data/phonemes/phoneme_52_2009-10-23_10-20-31.wav'},
        {id:39, char:'w', sound:'data/phonemes/phoneme_53_2009-10-23_10-31-04.wav'},
        {id:40, char:'z', sound:'data/phonemes/phoneme_54_2009-10-23_10-40-04.wav'},
        {id:41, char:'ʒ', sound:'data/phonemes/phoneme_55_2009-10-23_10-43-20.wav'},
        {id:42, char:'dʒ', sound:'data/phonemes/phoneme_56_2009-10-23_10-46-47.wav'},
    ]};

// get two mappings
var playerdat   = initPlayer(testsetup);
var sounds      = playerdat[0];
var characters  = playerdat[1];
var player      = playerdat[2];
var alet        = playerdat[3];
