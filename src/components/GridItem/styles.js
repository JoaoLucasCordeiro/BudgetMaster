import styled from "styled-components";

export const Tr = styled.tr``

export const Td = styled.td`
padding-top: 1rem;
text-align: ${(props) => (props.alingCenter ? "center" : "start")};
word-break: break-all;

svg {
    width: 18px;
    height: 18px;
}

`

