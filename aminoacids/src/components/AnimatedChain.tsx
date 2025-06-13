/* eslint-disable @typescript-eslint/no-unused-vars */
import {useEffect, useState} from 'react';
import {Box} from '@mui/material';
import {AMINO_ACID_GROUPS, AminoAcid, AminoAcidGroupKey} from '../utils/aminoAcids';
import {motion, AnimatePresence} from 'framer-motion';

interface AnimatedChainProps {
    sequence: string;
    isActive: boolean;
}

const AminoAcidIcon = ({acid}: {acid: AminoAcid}) => {
    const group = Object.entries(AMINO_ACID_GROUPS).find(([_, group]) =>
        group.acids.includes(acid)
    )?.[0] as AminoAcidGroupKey | undefined;

    const getIcon = () => {
        if (!group) return acid;

        switch (group) {
            case 'Цистеин':
                return (
                    <motion.div
                        animate={{rotate: [0, 20, 0, -20, 0]}}
                        transition={{duration: 1, repeat: Infinity}}
                    >
                        🛡️
                    </motion.div>
                );
            case 'Гидрофобные':
                return (
                    <motion.div
                        animate={{scale: [1, 1.2, 1]}}
                        transition={{duration: 1, repeat: Infinity}}
                    >
                        💧
                    </motion.div>
                );
            case 'Глицин':
                return (
                    <motion.div
                        animate={{rotate: [0, 360]}}
                        transition={{duration: 2, repeat: Infinity, ease: "linear"}}
                    >
                        🔄
                    </motion.div>
                );
            case 'Отрицательно заряженные':
                return (
                    <motion.div
                        animate={{x: [-5, 5, -5]}}
                        transition={{duration: 0.5, repeat: Infinity}}
                    >
                        ⚡
                    </motion.div>
                );
            case 'Положительно заряженные':
                return (
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            backgroundColor: ['#bb99ff', '#d1c2ff', '#bb99ff']
                        }}
                        transition={{duration: 1, repeat: Infinity}}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        ➕
                    </motion.div>
                );
            case 'Полярные незаряженные':
                return (
                    <motion.div
                        animate={{opacity: [0.7, 1, 0.7]}}
                        transition={{duration: 1, repeat: Infinity}}
                    >
                        ❄️
                    </motion.div>
                );
            case 'Пробел':
                return (
                    <motion.div
                        animate={{width: [10, 20, 10]}}
                        transition={{duration: 1, repeat: Infinity}}
                        style={{
                            height: 2,
                            backgroundColor: '#333',
                        }}
                    />
                );
            default:
                return acid;
        }
    };

    const color = group ? AMINO_ACID_GROUPS[group].color : '#eeeeee';

    return (
        <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 0.3}}
            style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                backgroundColor: color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
                fontWeight: 'bold',
                fontSize: 14,
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                overflow: 'hidden',
            }}
        >
            {getIcon()}
        </motion.div>
    );
};

export default function AnimatedChain({sequence, isActive}: AnimatedChainProps) {
    const [displayMode, setDisplayMode] = useState<'letters' | 'graphic'>('letters');

    useEffect(() => {
        if (isActive) {
            const timer = setTimeout(() => {
                setDisplayMode('graphic');
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            setDisplayMode('letters');
        }
    }, [isActive]);

    const getGroupColor = (char: string) => {
        const group = Object.entries(AMINO_ACID_GROUPS).find(([_, group]) =>
            group.acids.includes(char as AminoAcid)
        )?.[0] as AminoAcidGroupKey | undefined;

        return group ? AMINO_ACID_GROUPS[group].color : '#eeeeee';
    };

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            justifyContent: 'center',
            my: 3,
            minHeight: 40,
            position: 'relative'
        }}>
            <AnimatePresence>
                {sequence.split('').map((char, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, scale: 0.5}}
                        transition={{delay: index * 0.05, duration: 0.5}}
                    >
                        {displayMode === 'letters' ? (
                            <motion.span
                                style={{
                                    display: 'inline-flex',
                                    width: 32,
                                    height: 32,
                                    borderRadius: 4,
                                    backgroundColor: getGroupColor(char),
                                    color: '#000',
                                    fontWeight: 'bold',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {char}
                            </motion.span>
                        ) : (
                            <AminoAcidIcon acid={char as AminoAcid} />
                        )}
                    </motion.div>
                ))}
            </AnimatePresence>

            {displayMode === 'graphic' && (
                <motion.div
                    initial={{width: 0}}
                    animate={{width: '100%'}}
                    transition={{duration: 1}}
                    style={{
                        height: 2,
                        backgroundColor: '#1976d2',
                        marginTop: 15,
                        position: 'absolute',
                        top: '100%',
                    }}
                />
            )}
        </Box>
    );
}
