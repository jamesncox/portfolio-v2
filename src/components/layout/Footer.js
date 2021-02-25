import React from 'react'

export default function Footer() {

    return (
        <div className="footer">
            <p>
                Made with
                {' '}
                ❤️‍ and 💡
                by James Cox
                </p>
            <p>
                {'Copyright © '}
                {new Date().getFullYear()}
            </p>
        </div>
    )
}