import {useState} from 'react';
import {Box, Button, Typography, Collapse, Paper} from '@mui/material';
import AnimatedChain from './AnimatedChain';
import {AMINO_ACID_GROUPS} from '../utils/aminoAcids';

interface SequenceComparisonProps {
    seq1: string;
    seq2: string;
}

export default function SequenceComparison({seq1, seq2}: SequenceComparisonProps) {
    const [showChains, setShowChains] = useState(false);
    const [activeChain, setActiveChain] = useState<'seq1' | 'seq2' | 'both'>('both');

    const similarity = seq1.split('').reduce((acc, char, i) =>
        acc + (char === seq2[i] ? 1 : 0), 0) / seq1.length * 100;

    return (
        <Paper sx={{p: 3, mt: 4, bgcolor: 'background.paper'}}>
            <Typography variant="h5" gutterBottom>
                Сравнение последовательностей
            </Typography>

            <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 2}}>
                <Typography>
                    Сходство <strong>{similarity.toFixed(1)}%</strong>
                </Typography>
                <Button
                    variant="outlined"
                    onClick={() => setShowChains(!showChains)}
                >
                    {showChains ? 'Hide Chains' : 'Show Animated Chains'}
                </Button>
            </Box>

            <Collapse in={showChains}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{mb: 4, width: '100%'}}>
                        <Typography variant="h6" gutterBottom>Первая последовательность</Typography>
                        <Box sx={{display: 'flex', justifyContent: 'center'}}>
                            <Button
                                variant={activeChain === 'seq1' ? 'contained' : 'outlined'}
                                size="small"
                                sx={{mr: 1}}
                                onClick={() => setActiveChain('seq1')}
                            >
                                Оживить
                            </Button>
                        </Box>
                        <AnimatedChain
                            sequence={seq1}
                            isActive={activeChain === 'seq1' || activeChain === 'both'}
                        />
                    </Box>

                    <Box sx={{mb: 4, width: '100%'}}>
                        <Typography variant="h6" gutterBottom>Вторая последовательность</Typography>
                        <Box sx={{display: 'flex', justifyContent: 'center'}}>
                            <Button
                                variant={activeChain === 'seq2' ? 'contained' : 'outlined'}
                                size="small"
                                sx={{mr: 1}}
                                onClick={() => setActiveChain('seq2')}
                            >
                                Оживить
                            </Button>
                        </Box>
                        <AnimatedChain
                            sequence={seq2}
                            isActive={activeChain === 'seq2' || activeChain === 'both'}
                        />
                    </Box>

                    <Button
                        variant="contained"
                        onClick={() => setActiveChain('both')}
                        sx={{mt: 2}}
                    >
                        Оживите обе цепочки
                    </Button>
                </Box>
            </Collapse>

            <Box sx={{mt: 3}}>
                <Typography variant="h6" gutterBottom>Группы аминокислот:</Typography>
                <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}>
                    {Object.entries(AMINO_ACID_GROUPS).map(([group, {color}]) => (
                        <Box key={group} sx={{display: 'flex', alignItems: 'center', mr: 2}}>
                            <Box sx={{
                                width: 16,
                                height: 16,
                                bgcolor: color,
                                borderRadius: '50%',
                                mr: 1
                            }} />
                            <Typography variant="body2">{group}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Paper>
    );
}
