/* Import of main stylesheet generated by the SCSS files */
import '../scss/main.css';
import {StyledLink} from "../styled-components/styled-components";

export const HomeButton = () => {
    return (
        <StyledLink
            to={"/"}
            type={"button"}
        >
            Home
        </StyledLink>
    )
}