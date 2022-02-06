import React, { ButtonHTMLAttributes } from 'react';
import s from './Button.module.scss';
import cn from 'classnames';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string
    className?: string
    variant?: 'primary' | 'secondary'
    active?: boolean
    type?: 'submit' | 'reset' | 'button'
    width?: string | number
    loading?: boolean
    disabled?: boolean
}


const Button: React.FC<ButtonProps> = (props) => {

    const {
        className,
        variant = 'flat',
        children,
        active,
        width,
        loading = false,
        disabled = false,
        style = {},
        ...rest
    } = props;

    const rootClassName = cn(
        s.button__root,
        {
            [s.button__primary]: variant === 'primary',
            [s.button__secondary]: variant === 'secondary',
            [s.loading]: loading,
            [s.disabled]: disabled,
        },
        className
    )

    return (
        <button className={rootClassName} disabled={disabled} style={{ width, ...style, }} {...rest}>
            {props.children}
        </button>
    )
}

export default Button


