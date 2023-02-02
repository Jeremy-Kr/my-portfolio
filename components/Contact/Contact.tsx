import styled from "styled-components";
import { CustomParagraph, LinkText, Subtitle } from "@/components/common";
import { ContactIcon } from "@/components";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactTitle>
        <Subtitle>Contact</Subtitle>
        <ContactIconContainer>
          <ContactBoxIcon />
          <ContactIcon />
        </ContactIconContainer>
      </ContactTitle>
      <ContactBody>
        <ContactText>
          <Subtitle>Are you interested in me?</Subtitle>
          <Subtitle>Contact Me</Subtitle>
          <SocialLinks>
            <SocialLinkText href="https://github.com/Jeremy-Kr">
              GITHUB &gt;&gt;
            </SocialLinkText>
            <SocialLinkText href="#">ROKETPUNCH &gt;&gt;</SocialLinkText>
            <SocialLinkText href="mailto:wjddlr905@gmail.com">
              EMAIL &gt;&gt;
            </SocialLinkText>
            <SocialLinkText href="https://open.kakao.com/o/smL6Sa2e">
              KAKAOTALK &gt;&gt;
            </SocialLinkText>
          </SocialLinks>
        </ContactText>
        <ContactForm>
          <ContactInput placeholder="NAME" />
          <ContactInput placeholder="EMAIL" />
          <ContactTextArea placeholder="MESSAGE" />
          <ContactButtonContainer>
            <ContactSubmit>SEND &gt;&gt;</ContactSubmit>
            <ContactSubmitDescription>
              The data you submit is stored in my database.
            </ContactSubmitDescription>
          </ContactButtonContainer>
        </ContactForm>
      </ContactBody>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  width: 80rem;
  margin: 0 auto;
  height: 50rem;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;

const ContactTitle = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 6rem 4rem 3rem;
  border-bottom: 1px solid #000;
`;

const ContactIconContainer = styled.div`
  position: absolute;
  bottom: -3px;
  right: 0px;
`;

const ContactBoxIcon = styled.div`
  position: absolute;
  background-color: #000;
  top: -2.75rem;
  right: 0;
  height: 8rem;
  width: 4rem;
`;

const ContactText = styled.div`
  width: 43.75rem;
  height: 37.5rem;
  border-right: 1px solid #000;
  padding: 3rem 4rem;
`;

const ContactForm = styled.form`
  width: 36.25rem;
  padding: 3rem 4rem;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const SocialLinkText = styled(LinkText)`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 4rem;
`;

const ContactBody = styled.div`
  display: flex;
`;

const ContactInput = styled.input`
  width: 100%;
  height: 3.75rem;
  padding: 0 1rem;
  box-sizing: border-box;
  border: none;
  background: none;
  border-bottom: 1px solid #000;
  font-size: 1rem;
  margin-bottom: 2rem;

  &:focus {
    outline: none;
  }
`;

const ContactTextArea = styled.textarea`
  font-family: "Pretandard", "Noto Sans KR", sans-serif;
  width: 100%;
  height: 15rem;
  padding: 1rem;
  box-sizing: border-box;
  border: none;
  background: none;
  border-bottom: 1px solid #000;
  font-size: 1rem;
  margin-bottom: 2rem;
  resize: none;

  &:focus {
    outline: none;
  }
`;

const ContactSubmit = styled.button`
  height: 3.75rem;
  border: none;
  background: none;
  font-size: 1rem;
`;

const ContactButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactSubmitDescription = styled(CustomParagraph)`
  color: #858585;
`;

export default Contact;
