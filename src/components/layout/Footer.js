import React from 'react'

export default function Footer() {

    return (
        <div className="footer">
            <p>
                Made by James Cox with
                {' '}
                ❤️‍🔥
                </p>
            <p>
                {'Copyright © '}
                {new Date().getFullYear()}
            </p>
        </div>
    )
}