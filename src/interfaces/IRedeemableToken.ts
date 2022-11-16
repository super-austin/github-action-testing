export interface IRedeemableToken {
	signature: {
		signature_p1: number[],
		signature_p2: number[],
		public_key: number[],
	},
	nonce?: string,
}