import styled , {css} from 'styled-components';

import {Link} from 'react-router-dom';


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  
`;

export const LogoContainer = styled(Link)`
        height: 100%;
        width: 70px;
        padding: 25px;
`;

export const OptionsContainer = styled.div`
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
`;

const Options = css`
        padding: 10px 15px;
        font-size:20px;
        cursor:pointer;
`;

export const LinkOptions = styled(Link)`
    ${Options}
    `;

export const DivOptions = styled.div`
    ${Options}
`;  