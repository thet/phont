/*
 * from http://www.sk89q.com/playground/jswav/
 */
	
    var channels = 2;
    var sampleRate = 44000;
    var bitsPerSample = 16;

    function encodeWav(buffer) {
    	var data = [];
    	var samples = 0;
    	
    	for(i in buffer) {
    		data.push(pack("v", buffer[i]));
    		samples++;
    	}
    
	    // Format sub-chunk
	    var chunk1 = [
	        "fmt ", // Sub-chunk identifier
	        pack("V", 16), // Chunk length
	        pack("v", 1), // Audio format (1 is linear quantization)
	        pack("v", channels),
	        pack("V", sampleRate),
	        pack("V", sampleRate * channels * bitsPerSample / 8), // Byte rate
	        pack("v", channels * bitsPerSample / 8),
	        pack("v", bitsPerSample)
	    ].join('');
	
	    // Data sub-chunk (contains the sound)
	    var chunk2 = [
	        "data", // Sub-chunk identifier
	        pack("V", samples * channels * bitsPerSample / 8), // Chunk length
	        data
	    ].join('');
	    
	    // Header
	    var header = [
	        "RIFF",
	        pack("V", 4 + (8 + chunk1.length) + (8 + chunk2.length)), // Length
	        "WAVE"
	    ].join('');
	
	    var out = [header, chunk1, chunk2].join('');
	    var dataURI = "data:audio/wav;base64," + escape(btoa(out));
    
	    return out;
    }

// Base 64 encoding function, for browsers that do not support btoa()
// by Tyler Akins (http://rumkin.com), available in the public domain
if (!window.btoa) {
    function btoa(input) {
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        do {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + 
                     keyStr.charAt(enc3) + keyStr.charAt(enc4);
        } while (i < input.length);

        return output;
    }
}

// pack() emulation (from the PHP version), for binary crunching
function pack(fmt) {
    var output = '';
    
    var argi = 1;
    for (var i = 0; i < fmt.length; i++) {
        var c = fmt.charAt(i);
        var arg = arguments[argi];
        argi++;
        
        switch (c) {
            case "a":
                output += arg[0] + "\0";
                break;
            case "A":
                output += arg[0] + " ";
                break;
            case "C":
            case "c":
                output += String.fromCharCode(arg);
                break;
            case "n":
                output += String.fromCharCode((arg >> 8) & 255, arg & 255);
                break;
            case "v":
                output += String.fromCharCode(arg & 255, (arg >> 8) & 255);
                break;
            case "N":
                output += String.fromCharCode((arg >> 24) & 255, (arg >> 16) & 255, (arg >> 8) & 255, arg & 255);
                break;
            case "V":
                output += String.fromCharCode(arg & 255, (arg >> 8) & 255, (arg >> 16) & 255, (arg >> 24) & 255);
                break;
            case "x":
                argi--;
                output += "\0";
                break;
            default:
                throw new Error("Unknown pack format character '"+c+"'");
        }
    }
    
    return output;
}

// Generates a hex dump
function hexDump(out) {
    var lines = [];
    
    for (var i = 0; i < out.length; i += 16) {
        var hex = [];
        var ascii = [];           
        
        for (var x = 0; x < 16; x++) {
            var b = out.charCodeAt(i + x).toString(16).toUpperCase();
            b = b.length == 1 ? '0' + b : b;
            hex.push(b + " ");
            
            if (out.charCodeAt(i + x) > 126 || out.charCodeAt(i + x) < 32) {
                ascii.push('.');
            } else {
                ascii.push(out.charAt(i + x));
            }
            
            if ((x + 1) % 8 == 0) {
                hex.push(" ");
            }
        }
        
        lines.push([hex.join(''), ascii.join('')].join(''));
    }
    
    return lines.join('\n');
}
