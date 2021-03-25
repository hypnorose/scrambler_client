function xor(a, b) {
    return !(a == b);
}
function bitToBool(a) {
    if (a == 1)
        return true;
    else
        return false;
}
function boolToBit(a) {
    if (a)
        return 1;
    else
        return 0;
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
        var outcome = true;
        for (var i = 0; i < this.size; i++) {
            if (this.polybits[i]) {
                outcome = xor(outcome, this.bits[i]);
            }
        }
        console.log(this.bitStream);
        this.bits.splice(0, 0, outcome);
        this.bits.pop();
        var next_bit = this.bitStream.pop();
        return xor(outcome, next_bit);
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