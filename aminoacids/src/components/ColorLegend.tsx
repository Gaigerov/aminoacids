import {Box, Typography, Chip, Stack} from '@mui/material'
import {AMINO_ACID_GROUPS} from '../utils/aminoAcids'

export default function ColorLegend() {
    return (
        <Box sx={{mb: 3, p: 2, bgcolor: 'background.paper', borderRadius: 1}}>
            <Typography variant="h6" gutterBottom component="div">
                Цветовая схема выравнивания аминокислот
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {Object.entries(AMINO_ACID_GROUPS).map(([group, {color, acids}]) => (
                    <Chip
                        key={group}
                        label={`${group}: ${acids.join(', ')}`}
                        sx={{
                            backgroundColor: color,
                            mb: 1,
                            '& .MuiChip-label': {
                                fontSize: {xs: '0.75rem', sm: '0.8125rem'}
                            }
                        }}
                        size="small"
                    />
                ))}
            </Stack>
        </Box>
    )
}
