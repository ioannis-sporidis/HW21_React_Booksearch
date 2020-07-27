import React from 'react';

const Button = (props) => {
    if (props.href) {
        return (
            <button className='btn btn-info btn-lg btn-block'>
                <a href={props.href} target="_blank">{props.children}</a>
            </button>
        )
    }
    else if (props.onClick) {
        return (
            <button
                className={props.type}
                role="button"
                onClick={props.onClick}
                data-id={props.id}
            >
                {props.children}
            </button>
        )
    }

}

export default Button;