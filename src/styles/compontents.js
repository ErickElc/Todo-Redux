import styled from "styled-components";
export const DivBody = styled.div`
    display: flex;
    flex-flow: wrap column;
    margin-top: 100px;
    align-items: center;
    height: 70vh;
`
export const ContaierTodo = styled.div`
    display: flex;
    flex-flow: wrap column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 40px;
    @media (max-width: 386px) {
        padding: 12px;
    }
    background-color: white;
    box-shadow: 0px 1px 5px 0px #676767;
`
export const ContainerForm = styled.form`
    display: flex;
    flex-flow: wrap row;
    align-items: flex-end;
    margin: 20px;
`   

export const ContainerList = styled.ul`
    position: relative;
    display: flex;
    flex-flow: column;
    list-style-type: none;
    max-height: 320px;
    overflow-y: auto;
`
export const ListComponent = styled.li`
    padding: 10px;
    background-color: #CFFFDC;
    border-radius: 10px;
    box-shadow: 0px 1px 5px 0px #676767;
    width: 356px;
    @media (max-width: 456px) {
        margin: 0px;
        margin-bottom: 10px;
        width: 225px;
    }
    margin: 10px;
    word-break: break-all;
`
export const SpanList = styled.span`
    margin-right: 10px;
`