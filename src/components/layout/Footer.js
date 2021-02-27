import React from 'react'

export default function Footer() {

    return (
        <div className="footer">
            <p>
                Made with
                {' '}
                ❤️‍🤍🖤
                by James Cox
                </p>
            <p>
                {'Copyright © '}
                {new Date().getFullYear()}
            </p>
        </div>
    )
}