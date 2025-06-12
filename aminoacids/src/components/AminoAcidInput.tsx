import {Controller, Control} from 'react-hook-form'
import {TextField, TextFieldProps} from '@mui/material'
import {validateAminoAcidSequence, validateSequenceLength} from '../utils/validation'
import {AlignmentFormData} from '../types'

interface AminoAcidInputProps {
    name: keyof AlignmentFormData
    label: string
    control: Control<AlignmentFormData>
    otherSequence: string
}

export default function AminoAcidInput({
    name,
    label,
    control,
    otherSequence
}: AminoAcidInputProps) {
    const textFieldProps: TextFieldProps = {
        label,
        variant: 'outlined',
        fullWidth: true,
        InputProps: {
            style: {fontFamily: 'monospace'},
        },
        inputProps: {
            'aria-label': `${label} input`,
            'data-testid': `${name}-input`
        }
    }

    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required: 'Необходима последовательность',
                validate: {
                    validChars: validateAminoAcidSequence,
                    sameLength: (value) => validateSequenceLength(value, otherSequence),
                }
            }}
            render={({field, fieldState}) => (
                <TextField
                    {...textFieldProps}
                    {...field}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                />
            )}
        />
    )
}
