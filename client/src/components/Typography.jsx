/* eslint-disable react/prop-types */
import "./Typography.css"
export function Typography({ type, children }) {
    return (
        <span className={type}>{children}</span>
    )
}