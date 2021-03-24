function xor(a, b) {
    return !(a == b);
}
var ScramblerSimulator = /** @class */ (function () {
    function ScramblerSimulator(size) {
        this.bits = new Array(size);
        this.size = size;
    }
    ScramblerSimulator.prototype.setBit = function (index, bit) {
        this.bits[index] = bit;
    };
    ScramblerSimulator.prototype.setBits = function (bits) {
        this.bits = bits;
    };
    ScramblerSimulator.prototype.setPolyParams = function (params) {
        this.polyparams = params;
        this.polybits = new Array(this.size);
        for (var i = 0; i < this.size; i++) {
            this.polybits[i] = false;
        }
        for (var i = 0; i < this.polyparams.length; i++) {
            this.polybits[i] = true;
        }
    };
    ScramblerSimulator.prototype.setBitStream = function (bitStream) {
        this.bitStream = bitStream;
    };
    ScramblerSimulator.prototype.getNext = function () {
        var outcome = false;
        for (var i = 0; i < this.size; i++) {
            if (this.polybits[i]) {
                outcome = xor(outcome, this.bits[i]);
            }
        }
        var new_bit = this.bitStream.pop();
        this.bits.splice(0, 0, new_bit);
        this.bits.pop();
        return outcome;
    };
    ScramblerSimulator.prototype.getNextNBits = function (quantity) {
        var return_array = new Array(0);
        for (var i = 0; i < quantity; i++) {
            return_array.push(this.getNext());
        }
        return return_array;
    };
    return ScramblerSimulator;
}());
//# sourceMappingURL=main.js.map