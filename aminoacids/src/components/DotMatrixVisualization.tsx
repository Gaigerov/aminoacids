import {useRef, useEffect} from 'react'
import {Box, Typography} from '@mui/material'
import {AMINO_ACID_COLORS} from '../utils/aminoAcids'

interface DotMatrixVisualizationProps {
    seq1: string
    seq2: string
}

export default function DotMatrixVisualization({seq1, seq2}: DotMatrixVisualizationProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (!canvasRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const cellSize = 20
        const padding = 30
        const width = seq1.length * cellSize + padding * 2
        const height = seq2.length * cellSize + padding * 2

        canvas.width = width
        canvas.height = height

        ctx.strokeStyle = '#333'
        ctx.lineWidth = 1
        ctx.beginPath()

        // Ось X (seq1)
        ctx.moveTo(padding, padding)
        ctx.lineTo(padding, height - padding)

        // Ось Y (seq2)
        ctx.moveTo(padding, height - padding)
        ctx.lineTo(width - padding, height - padding)
        ctx.stroke()

        // Подписи для оси X (seq1)
        ctx.font = '12px monospace'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        for (let i = 0; i < seq1.length; i++) {
            const x = padding + i * cellSize + cellSize / 2
            const y = height - padding / 2
            ctx.fillText(seq1[i], x, y)
        }

        // Подписи для оси Y (seq2)
        ctx.textAlign = 'right'
        ctx.textBaseline = 'middle'
        for (let i = 0; i < seq2.length; i++) {
            const x = padding / 2
            const y = padding + i * cellSize + cellSize / 2
            ctx.fillText(seq2[i], x, y)
        }

        for (let i = 0; i < seq2.length; i++) {
            for (let j = 0; j < seq1.length; j++) {
                if (seq1[j] === seq2[i]) {
                    const x = padding + j * cellSize + cellSize / 2
                    const y = padding + i * cellSize + cellSize / 2

                    const aminoAcid = seq1[j]
                    ctx.fillStyle = AMINO_ACID_COLORS[aminoAcid] || '#000'

                    ctx.beginPath()
                    ctx.arc(x, y, 5, 0, Math.PI * 2)
                    ctx.fill()

                    if (i === j) {
                        ctx.strokeStyle = '#000'
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.arc(x, y, 7, 0, Math.PI * 2)
                        ctx.stroke()
                    }
                }
            }
        }

        ctx.strokeStyle = '#888'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(padding, padding)
        ctx.lineTo(
            padding + Math.min(seq1.length, seq2.length) * cellSize,
            padding + Math.min(seq1.length, seq2.length) * cellSize
        )
        ctx.stroke()

    }, [seq1, seq2])

    return (
        <Box sx={{mt: 4}}>
            <Typography variant="h5" gutterBottom>
                Точечная матрица
            </Typography>
            <Box
                sx={{
                    overflow: 'auto',
                    border: '1px solid #ddd',
                    borderRadius: 1,
                    p: 2,
                    backgroundColor: '#f9f9f9',
                    maxWidth: '100%'
                }}
            >
                <canvas ref={canvasRef} />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{mt: 1}}>
                Диагональные точки указывают на совпадающие аминокислоты в одном и том же положении. Недиагональные точки указывают на совпадения в разных положениях.
            </Typography>
        </Box>
    )
}
