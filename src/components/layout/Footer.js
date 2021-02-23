import React from 'react'

export default function Footer() {

    return (
        <div className="footer">
            <span>Made with</span>
            {' '}
            ❤️‍🔥
            {' '}
            <span>{'Copyright © '}</span>
            {new Date().getFullYear()}
        </div>
    )
}