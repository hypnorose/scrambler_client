

function xor(a: boolean, b:boolean): boolean{
	return ! (a == b);
}

class ScramblerSimulator {

	size: number;
	bits: boolean[];
	polyparams: number[];
	polybits:boolean[];
	bitStream: boolean[];

	constructor(size: number){
		this.bits = new Array(size);
		this.size = size;
	}

	setBit(index: number,bit: boolean) : void{
		this.bits[index] = bit;
	}
	setBits(bits: boolean[]) : void {
		this.bits = bits;
	}
	setPolyParams(params: number[]) : void{
		this.polyparams = params;
		this.polybits = new Array(this.size);
		for(let i = 0 ; i < this.size;i++){
			this.polybits[i] = false;
		}
		for(let i = 0 ; i < this.polyparams.length;i++){
			this.polybits[i] = true;
		}
		
	}
	setBitStream(bitStream: boolean[]) : void{
		this.bitStream = bitStream;
	}
	getNext() : boolean{
		let outcome = false;
		for(let i = 0; i < this.size;i++){
			if (this.polybits[i]){
				outcome = xor(outcome,this.bits[i]);
			}
		}
	
		let new_bit = this.bitStream.pop();
		this.bits.splice(0,0,new_bit);
		this.bits.pop();
		return outcome;
	}
	getNextNBits(quantity: number): boolean[]{
		let return_array = new Array<boolean>(0);
		for(let i = 0; i < quantity;i++){
			return_array.push(this.getNext());
		}
		return return_array;
	}
}