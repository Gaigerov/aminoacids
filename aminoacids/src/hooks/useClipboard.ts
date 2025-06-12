import {useState} from 'react'

export function useClipboard() {
    const [copiedText, setCopiedText] = useState('')

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedText(text)
            setTimeout(() => setCopiedText(''), 1000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    return {copiedText, copyToClipboard}
}
