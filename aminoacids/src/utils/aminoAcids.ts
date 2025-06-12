
export const AMINO_ACIDS = [
    'A', 'R', 'N', 'D', 'C', 'E', 'Q', 'G', 'H', 'I',
    'L', 'K', 'M', 'F', 'P', 'S', 'T', 'W', 'Y', 'V', '-'
] as const

export type AminoAcid = typeof AMINO_ACIDS[number]

export const AMINO_ACID_COLORS: Record<AminoAcid | string, string> = {
    'A': '#67e4a6', // Alanine
    'R': '#bb99ff', // Arginine
    'N': '#80bfff', // Asparagine
    'D': '#fc9cac', // Aspartic acid
    'C': '#ffea00', // Cysteine
    'E': '#fc9cac', // Glutamic acid
    'Q': '#80bfff', // Glutamine
    'G': '#67e4a6', // Glycine
    'H': '#80bfff', // Histidine
    'I': '#67e4a6', // Isoleucine
    'L': '#67e4a6', // Leucine
    'K': '#bb99ff', // Lysine
    'M': '#67e4a6', // Methionine
    'F': '#67e4a6', // Phenylalanine
    'P': '#67e4a6', // Proline
    'S': '#80bfff', // Serine
    'T': '#80bfff', // Threonine
    'W': '#67e4a6', // Tryptophan
    'Y': '#67e4a6', // Tyrosine
    'V': '#67e4a6', // Valine
    '-': '#ffffff', // Gap
}

export const AMINO_ACID_GROUPS = {
    'Цистеин': {
        color: '#ffea00',
        acids: ['C'] as AminoAcid[]
    },
    'Гидрофобные': {
        color: '#67e4a6',
        acids: ['A', 'I', 'L', 'M', 'F', 'W', 'Y', 'V', 'P'] as AminoAcid[]
    },
    'Глицин': {
        color: '#67e4a6',
        acids: ['G'] as AminoAcid[]
    },
    'Отрицательно заряженные': {
        color: '#fc9cac',
        acids: ['D', 'E'] as AminoAcid[]
    },
    'Положительно заряженные': {
        color: '#bb99ff',
        acids: ['K', 'R'] as AminoAcid[]
    },
    'Полярные незаряженные': {
        color: '#80bfff',
        acids: ['S', 'T', 'H', 'Q', 'N'] as AminoAcid[]
    },
    'Пробел': {
        color: '#ffffff',
        acids: ['-'] as AminoAcid[]
    }
}

export type AminoAcidGroupKey = keyof typeof AMINO_ACID_GROUPS;

export function isAminoAcid(char: string): char is AminoAcid {
    return AMINO_ACIDS.includes(char as AminoAcid)
}
