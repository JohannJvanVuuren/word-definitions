/* Import of the main stylesheet generated by the SCSS files */
import '../scss/main.css';

/* Main error message. Usually when internet connection problems are encountered */
export const Error = () => {
    return (
        <div className={"error-page"}>
            <h1>Error:</h1>
            <ol>
                <li>Check your internet connection</li>
                <li>Check your console for other causes</li>
            </ol>
        </div>
    );
};
