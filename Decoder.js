/* MessageDecoder */
class MessageDecoder {
    constructor() {
        this.shiftedChars = [];
    };
    Decode(string) {
        try {
            this.shiftedChars.length = 0;
            for (let i = 0; i < string.length; i++) {
                const shiftedCharCode = (string.charCodeAt(i) + 42069) % 256;
                this.shiftedChars.push(shiftedCharCode);
            }
            const shiftedString = String.fromCharCode(...this.shiftedChars);
            const decodedString = atob(shiftedString);
            return decodedString;
        } catch (error) {
            console.error("Error Decoding", error);
        };
    };
};
let Decoder = new MessageDecoder();

// Example Usage (With your encoded string)
Decoder.Decode("￾￲！＞－￲￣２！￝￤Ｄ－￲￼３")
// Output --> "Hello World!"