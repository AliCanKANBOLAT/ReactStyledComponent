import { StyledButton } from "./Button.styled";

export function Button ({children,...restProps}) {
    return <StyledButton {...restProps}>
        {children}
        </StyledButton>
}