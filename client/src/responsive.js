//importing styled components from CSS for responsive desighn
import { css } from "styled-components";


//for mobiles
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};


//for tablets
export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 767px) {
      ${props}
    }
  `;
};

//for desktop
export const desktop = (props) => {
  return css`
    @media only screen and (max-width: 1281px) {
      ${props}
    }
  `;
};