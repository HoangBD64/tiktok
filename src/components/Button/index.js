import React from 'react';

import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    small = false,
    large = false,
    disabled = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';
    const props = {
        onClick,
        
        ...passProps,
    };

    // remove event listeners when the button is disabled
    if(disabled){
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key];
            }
        })
        console.log(Object.keys(props))
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        
        rounded,
        [className]: className
    });
    return (
        <Comp className={classes} {...props}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
};

export default Button;
