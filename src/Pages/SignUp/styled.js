import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const Container = styled.div`
    width: 360px;
    height: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 2px red solid;
`;
export const Nav = styled.div`
    width: 360px;
    height: 64px;
    display: flex;
    align-items: center;
    border: 2px solid black;
`;
export const ImgSignup = styled.img`
    width: 104px;
    height: 58px;
`;
export const Forms = styled.form`
    border: 2px blue solid;
    width: 328px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const InputSignup = styled(TextField)`
`;
