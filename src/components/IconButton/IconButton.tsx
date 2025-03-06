import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'a'> {
    className?: string
}

const IconButton = ({ className, ...props }: IconButtonProps) => {
    return (
        <a
            className={twMerge(
                "p-4 bg-slate-900 hover:bg-slate-800 rounded-full space-x-2",
                className
            )}

            rel="noopener noreferrer"
            {...props}
        />
    )
}

export { IconButton }