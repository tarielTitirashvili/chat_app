import React from 'react'
import css from './loading.module.css'

export default function Loading() {
    return (
        <div>
             <div style = {{height:window.innerHeight}} className = {css.loading}>
                Loading...
            </div>
        </div>
    )
}
