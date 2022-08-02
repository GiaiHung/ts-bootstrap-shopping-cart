import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initValue: T | (() => T)) {
    const [value, setValue] = useState<T>(() => {
        const JSON_VALUE = localStorage.getItem(key)

        if (JSON_VALUE != null) return JSON.parse(JSON_VALUE)

        if (typeof JSON_VALUE === 'function') {
            return (initValue as () => T)()
        } else {
            return initValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue]
}
