import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import AminoAcidInput from './components/AminoAcidInput'
import AlignmentVisualization from './components/AlignmentVisualization'
import ColorLegend from './components/ColorLegend'
import DotMatrixVisualization from './components/DotMatrixVisualization'
import SequenceComparison from './components/SequenceComparison';
import { AlignmentFormData } from './types'

function App() {
  const { control, handleSubmit, watch, formState } = useForm<AlignmentFormData>({
    mode: 'onChange',
  })
  const [alignment, setAlignment] = useState<{seq1: string; seq2: string} | null>(null)

  const onSubmit = (data: AlignmentFormData) => {
    setAlignment({ seq1: data.sequence1, seq2: data.sequence2 })
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Инструмент для выравнивания аминокислотных последовательностей
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mb: 4 }}>
        <Stack spacing={3}>
          <AminoAcidInput 
            name="sequence1"
            label="Первая последовательность"
            control={control}
            otherSequence={watch('sequence2')}
          />
          
          <AminoAcidInput 
            name="sequence2"
            label="Вторая последовательность"
            control={control}
            otherSequence={watch('sequence1')}
          />
          
          <Button 
            type="submit" 
            variant="contained" 
            disabled={!formState.isValid}
            fullWidth
          >
            Выровнять
          </Button>
        </Stack>
      </Box>
      
      {alignment && (
        <>
          <ColorLegend />
          <AlignmentVisualization seq1={alignment.seq1} seq2={alignment.seq2} />
          <DotMatrixVisualization seq1={alignment.seq1} seq2={alignment.seq2} />
          <SequenceComparison seq1={alignment.seq1} seq2={alignment.seq2} />
        </>
      )}
    </Container>
  )
}

export default App
