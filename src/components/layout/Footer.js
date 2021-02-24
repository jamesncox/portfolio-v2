import React from 'react'

export default function Footer() {

    return (
        <div className="footer">
            <span>Made by James with</span>
            {' '}
            ❤️‍🔥
            {' '}
            <span>{'Copyright © '}</span>
            {new Date().getFullYear()}
        </div>
    )
}