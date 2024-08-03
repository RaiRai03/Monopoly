import classes from "./shell.module.css"

interface ShellProps{
 children: JSX.Element;
}

function Shell({children}: ShellProps) {
    return (
        <div className={classes["shell-grid"]}>
            <header>Welcome to Monotpoly</header>
            <main>{children}</main>
        </div>
    )
}
export default Shell;