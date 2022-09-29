
import React from 'react'
import styled from "styled-components";
import { mobile } from "../../responsive.js";

const Container = styled.div`
   height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  line-height: 2rem;
  text-align: justify;
  letter-spacing: 3px;
  font-size: large;
  font-weight: 700;
  border: 1px solid gray;
  padding: 8px;
  background-color: #ddc7c7;
  ${mobile({ flexDirection: "column" })}
`;

export const TermsConditions = () => {
  return (
   <> 
   <h1 style={{marginBottom:"10px", marginLeft:"800px", marginTop:"20px", fontSize:"50px"}}>Terms And Conditions</h1>
   <Container>
   
   <p> SONOMI Terms and Conditions Policy
Welcome to SONOMI These terms and conditions outline the rules and regulations for the use of SONOMI’s Website.

SONOMI is located at: , Germany.

By accessing this website we assume you accept these terms and conditions in full. Do not continue to use SONOMI’s website if you do not accept all of the terms and conditions stated on this page.

The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: Client, You and Your refers to you, the person accessing this website and accepting the Company’s terms and conditions. The Company, Ourselves, We, Our and Us, refers to our Company. Party, Parties, or Us, refers to both the Client and ourselves, or either the Client or ourselves.

All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing law of GERMANY.

Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.

All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing law of GERMANY.

Cookies

We employ the use of cookies. By using SONOMI’s website you consent to the use of cookies in accordance with SONOMI’s privacy policy. Most of the modern day interactive websites use cookies to enable us to retrieve user details for each visit.

Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.

License

Unless otherwise stated, SONOMI and/or its licensors own the intellectual property rights for all material on SONOMI.

All intellectual property rights are reserved. You may view and/or print pages from (Add URL) for your own personal use subject to restrictions set in these terms and conditions.

You must not:

Republish material from Our Website.
Sell, rent or sub-license material from SONOMI.
Reproduce, duplicate or copy material from SONOMI.
Redistribute content from SONOMI (unless content is specifically made for redistribution).
Disclaimer

To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill).

Nothing in this disclaimer will:

Limit or exclude our or your liability for death or personal injury resulting from negligence.
Limit or exclude our or your liability for fraud or fraudulent misrepresentation.
Limit any of our or your liabilities in any way that is not permitted under applicable law.
Or exclude any of our or your liabilities that may not be excluded under applicable law.
The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer:

are subject to the preceding paragraph; and
govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities that arise in contract, tort (including negligence) and for breach of statutory duty.
To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.

</p>
</Container>
    
    </> 
  )
}

