import styled from "styled-components";
import { CustomParagraph, LinkText, Subtitle } from "@/components/common";
import { ContactIcon } from "@/components";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Validation {
  name: string;
  email: string;
  message: string;
}

interface ContactInputProps {
  showHelper: boolean;
  validation: Validation;
}

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [validation, setValidation] = useState<Validation>({
    name: "",
    email: "",
    message: "",
  });
  const [isValidation, setIsValidation] = useState<boolean>(false);
  const [showHelper, setShowHelper] = useState<boolean>(false);

  const handleValidation = () => {
    const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (name && emailRegex.test(email) && message) {
      setIsValidation(true);
    } else {
      setIsValidation(false);
    }

    if (!name) {
      setValidation((prev) => ({ ...prev, name: "이름을 입력해주세요." }));
    } else {
      setValidation((prev) => ({ ...prev, name: "" }));
    }

    if (!email) {
      setValidation((prev) => ({ ...prev, email: "이메일을 입력해주세요." }));
    } else if (!emailRegex.test(email)) {
      setValidation((prev) => ({
        ...prev,
        email: "이메일 형식이 올바르지 않습니다.",
      }));
    } else {
      setValidation((prev) => ({ ...prev, email: "" }));
    }

    if (!message) {
      setValidation((prev) => ({ ...prev, message: "메세지를 입력해주세요." }));
    } else {
      setValidation((prev) => ({ ...prev, message: "" }));
    }
  };

  useEffect(() => {
    handleValidation();
  }, [name, email, message, validation]);

  const postContact = async () => {
    const { data, error } = await supabase.from("contacts").insert({
      name,
      email,
      message,
    });

    if (error) {
      console.log(error);
    }

    return data;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleValidation();

    if (!isValidation) {
      setShowHelper(true);
      return;
    }

    try {
      await postContact();
      setName("");
      setEmail("");
      setMessage("");

      setValidation({ name: "", email: "", message: "" });
      setIsValidation(false);
      setShowHelper(false);
    } catch (error) {
      console.log(error);
    }
  };

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
        <ContactForm
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <ContactInput
            placeholder="NAME"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            showHelper={showHelper}
            validation={validation}
          />
          {showHelper && validation.name && (
            <ContactHelper>{validation.name}</ContactHelper>
          )}
          <ContactInput
            placeholder="EMAIL"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            showHelper={showHelper}
            validation={validation}
          />
          {showHelper && validation.email && (
            <ContactHelper>{validation.email}</ContactHelper>
          )}
          <ContactTextArea
            placeholder="MESSAGE"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            showHelper={showHelper}
            validation={validation}
          />
          {showHelper && validation.message && (
            <ContactHelper>{validation.message}</ContactHelper>
          )}
          <ContactButtonContainer>
            <ContactSubmit type="submit" disabled={showHelper && !isValidation}>
              SEND &gt;&gt;
            </ContactSubmit>
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

const ContactInput = styled.input<ContactInputProps>`
  width: 100%;
  height: 3.75rem;
  padding: 0 1rem;
  box-sizing: border-box;
  border: none;
  background: none;
  border-bottom: 1px solid #000;
  font-size: 1rem;

  &:first-child {
    margin-bottom: ${(props) =>
      props.showHelper && props.validation.name ? 0 : 2}rem;
    border: ${(props) =>
      props.showHelper && props.validation.name && "1px solid red"};
  }

  &:nth-of-type(2) {
    margin-bottom: ${(props) =>
      props.showHelper && props.validation.email ? 0 : 2}rem;
    border: ${(props) =>
      props.showHelper && props.validation.email && "1px solid red"};
  }

  &:focus {
    outline: none;
  }
`;

const ContactTextArea = styled.textarea<ContactInputProps>`
  font-family: "Pretandard", "Noto Sans KR", sans-serif;
  width: 100%;
  height: 15rem;
  padding: 1rem;
  box-sizing: border-box;
  background: none;
  font-size: 1rem;
  margin-bottom: ${(props) =>
    props.showHelper && props.validation.message ? 0 : 2}rem;
  resize: none;
  border: ${(props) =>
    props.showHelper && props.validation.message ? "1px solid red" : "none"};
  ${(props) =>
    props.showHelper && props.validation.message
      ? ""
      : "border-bottom: 1px solid #000;"}

  &:focus {
    outline: none;
  }
`;

const ContactSubmit = styled.button`
  height: 3.75rem;
  border: none;
  background: none;
  font-size: 1rem;
  margin-right: 2rem;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    color: #858585;
    cursor: not-allowed;
  }
`;

const ContactButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
`;

const ContactSubmitDescription = styled(CustomParagraph)`
  color: #858585;
`;

const ContactHelper = styled(CustomParagraph)`
  color: red;
`;

export default Contact;
