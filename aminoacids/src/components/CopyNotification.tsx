import {Snackbar, Alert} from '@mui/material'
import {useState, useEffect} from 'react'

interface CopyNotificationProps {
    text: string
}

export default function CopyNotification({text}: CopyNotificationProps) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (text) {
            setOpen(true)
            const timer = setTimeout(() => setOpen(false), 1000)
            return () => clearTimeout(timer)
        }
    }, [text])

    return (
        <Snackbar
            open={open}
            autoHideDuration={1000}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        >
            <Alert severity="success" sx={{width: '100%'}}>
                Скопировано в буфер обмена: {text}
            </Alert>
        </Snackbar>
    )
}
