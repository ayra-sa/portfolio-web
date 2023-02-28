import styled from "styled-components";


export const PaginateWrap = styled.div`
    .container {
        display: flex;
        column-gap: 10px;
        justify-content: center;
        align-items: center;
        margin-top: 60px;
    }

    .item {
        background-color: #EFFFFD;
        color: #42C2FF;
        width: 30px;
        height: 30px;
        border-radius: 4px;
        font-size: 1em;
        font-weight: 700;
        cursor: pointer;
        position: relative;
        
        a {
            position: absolute;
            inset: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    
    .item.active {
        background-color: #42C2FF;
        color: #fff;
    }
`