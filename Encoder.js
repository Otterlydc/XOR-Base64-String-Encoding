/* MessageEncoder */
class MessageEncoder {
    constructor() {
        this.shiftedChars = [];
    };
    Encode(string) {
        try {
            const encodedString = btoa(string);
            this.shiftedChars.length = 0;
            for (let i = 0; i < encodedString.length; i++) {
                const shiftedCharCode = (encodedString.charCodeAt(i) - 42069) % 256;
                this.shiftedChars.push(shiftedCharCode);
            }
            const shiftedString = String.fromCharCode(...this.shiftedChars);
            return shiftedString;
        } catch (error) {
            console.error("Error Encoding", error);
        };
    };
};
let Encoder = new MessageEncoder();
