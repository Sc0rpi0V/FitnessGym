'use client'

export default function ErrorBoundary({error} : {error:Error}) {
    return (
        <div>Erreur dans review - {error.message}</div>
    )
}