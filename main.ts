

function xor(a: boolean, b:boolean): boolean{
	return ! (a == b);
}

function bitToBool(a: number) : boolean{
	if(a==1)return true;
	else return false;
}
function boolToBit(a: boolean) : number{
	if(a)return 1;
	else return 0;
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
		let outcome = true;
		for(let i = 0; i < this.size;i++){
			if (this.polybits[i]){
				outcome = xor(outcome,this.bits[i]);
			}
		}
	
		
		console.log(this.bitStream);
		this.bits.splice(0,0,outcome);
		this.bits.pop();
		let next_bit = this.bitStream.pop();
		return xor(outcome,next_bit);
	}
	getNextNBits(quantity: number): boolean[]{
		let return_array = new Array<boolean>(0);
		for(let i = 0; i < quantity;i++){
			return_array.push(this.getNext());
		}
		return return_array;
	}
}