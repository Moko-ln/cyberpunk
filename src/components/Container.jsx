export const Container = ({ children, className }) => {
    return (
        <div className={`container w-10/12 mx-auto ${className}`}>
            {children}
        </div>
    )
}