import {Box} from '@mui/material'
import {AMINO_ACID_COLORS} from '../utils/aminoAcids'
import {useRef, useEffect, useState} from 'react'
import CopyNotification from './CopyNotification'

interface AlignmentVisualizationProps {
    seq1: string
    seq2: string
}

export default function AlignmentVisualization({seq1, seq2}: AlignmentVisualizationProps) {
    const seq1Ref = useRef<HTMLDivElement>(null)
    const seq2Ref = useRef<HTMLDivElement>(null)
    const [copiedText, setCopiedText] = useState('')

    useEffect(() => {
        if (seq1Ref.current && seq2Ref.current) {
            const syncScroll = (source: HTMLDivElement, target: HTMLDivElement) => {
                target.scrollLeft = source.scrollLeft
            }

            const seq1El = seq1Ref.current
            const seq2El = seq2Ref.current

            const handleSeq1Scroll = () => syncScroll(seq1El, seq2El)
            const handleSeq2Scroll = () => syncScroll(seq2El, seq1El)

            seq1El.addEventListener('scroll', handleSeq1Scroll)
            seq2El.addEventListener('scroll', handleSeq2Scroll)

            return () => {
                seq1El.removeEventListener('scroll', handleSeq1Scroll)
                seq2El.removeEventListener('scroll', handleSeq2Scroll)
            }
        }
    }, [])

    const handleSequenceSelect = () => {
        const selection = window.getSelection()
        if (selection && selection.toString().length > 0) {
            navigator.clipboard.writeText(selection.toString())
            setCopiedText(selection.toString())
            setTimeout(() => setCopiedText(''), 1000)
        }
    }

    return (
        <Box sx={{overflowX: 'auto', my: 2}}>
            <Box
                ref={seq1Ref}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    fontFamily: 'monospace',
                    fontSize: '1.2rem',
                    lineHeight: '1.6',
                    userSelect: 'text',
                    minHeight: '1.6rem',
                }}
                onClick={handleSequenceSelect}
                aria-label="Визуализация первой последовательности"
            >
                {seq1.split('').map((char, index) => (
                    <span
                        key={`seq1-${index}`}
                        style={{
                            backgroundColor: AMINO_ACID_COLORS[char] || '#ffffff',
                            padding: '0 2px',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {char}
                    </span>
                ))}
            </Box>

            <Box
                ref={seq2Ref}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    fontFamily: 'monospace',
                    fontSize: '1.2rem',
                    lineHeight: '1.6',
                    userSelect: 'text',
                    minHeight: '1.6rem',
                }}
                onClick={handleSequenceSelect}
                aria-label="Визуализация второй последовательности"
            >
                {seq2.split('').map((char, index) => (
                    <span
                        key={`seq2-${index}`}
                        style={{
                            backgroundColor: seq1[index] !== char ? '#ffcccc' : 'transparent',
                            padding: '0 2px',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {char}
                    </span>
                ))}
            </Box>

            <CopyNotification text={copiedText} />
        </Box>
    )
}
