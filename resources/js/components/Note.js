import styled from 'styled-components';


export const Note = styled.div`
    display:block;
    position:relative;
    height:150px;

    background: -moz-linear-gradient(bottom,#FFEA5A,#FFF29A);
    margin:0 auto;
    padding:0;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    &:before {
        content: "";
        position: absolute;
        right: 0px;
        border-color: #FFF #FFF #E5CF33 #E5CF33;
        border-style: solid;
        border-width: 0px 20px 20px 0px;
        height: 0px;
        width: 0px;
        display: block;
        -moz-box-shadow: 0pt 2px 1px rgba(0, 0, 0, 0.2), -2px 1px 1px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 0pt 2px 1px rgba(0, 0, 0, 0.2), -2px 1px 1px rgba(0, 0, 0, 0.1);
        box-shadow: 0pt 2px 1px rgba(0, 0, 0, 0.2), -2px 1px 1px rgba(0, 0, 0, 0.1);
        -moz-border-radius: 0pt 0pt 0pt 5px;
        -webkit-border-radius: 0pt 0pt 0pt 5px;
        border-radius: 0pt 0pt 0pt 5px;
        border-color: #FFFFFF #FFFFFF #E5CF33 #E5CF33;
        border-width: 10px;
    }

`;

