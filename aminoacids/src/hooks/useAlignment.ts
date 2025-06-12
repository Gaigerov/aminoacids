import {useState} from 'react'

interface AlignmentResult {
    seq1: string
    seq2: string
}

export function useAlignment() {
    const [alignment, setAlignment] = useState<AlignmentResult | null>(null)
    const [error, setError] = useState<string | null>(null)

    const alignSequences = (seq1: string, seq2: string) => {
        try {
            if (seq1.length !== seq2.length) {
                throw new Error('Последовательности должны быть одинаковой длины')
            }

            setAlignment({seq1, seq2})
            setError(null)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Alignment failed')
            setAlignment(null)
        }
    }

    return {alignment, error, alignSequences}
}
