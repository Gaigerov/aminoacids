import {isAminoAcid} from './aminoAcids'

export const validateAminoAcidSequence = (sequence: string) => {
    if (!sequence) return 'Последовательность обязательна'

    const upperSequence = sequence.toUpperCase()
    for (const char of upperSequence) {
        if (!isAminoAcid(char)) {
            return `Недопустимый символ '${char}'. Только A,R,N,D,C,E,Q,G,H,I,L,K,M,F,P,S,T,W,Y,V и - разрешены.`
        }
    }
    return true
}

export const validateSequenceLength = (sequence: string, otherSequence?: string) => {
    if (otherSequence && sequence.length !== otherSequence.length) {
        return 'Последовательности должны быть одинаковой длины'
    }
    return true
}
