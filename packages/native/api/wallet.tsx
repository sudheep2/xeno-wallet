import 'react-native-get-random-values';
import '@ethersproject/shims';
import { ethers } from 'ethers';

export function generateMnemonic() {
    try {
        const mnemonic = ethers.Wallet.createRandom().mnemonic;
        return mnemonic ? mnemonic : undefined;
    } catch (err) {
        console.log("Some error while fetching mnemonic: ", err);
        return undefined;
    }
}

export const deriveEtherFromMnemonic = (phrase, accountNumber = 0) => {
    try {
        if (!ethers.Mnemonic.isValidMnemonic(phrase)) {
            throw new Error("Invalid mnemonic phrase");
        }        
        const wallet = ethers.HDNodeWallet.fromPhrase(phrase)
        return wallet;
    } catch (err) {
        console.error("Error deriving wallet from mnemonic:", err);
        throw err;
    }
};
