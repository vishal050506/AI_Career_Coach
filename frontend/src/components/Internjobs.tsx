import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";

function Internjobs() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  const companies = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
  ];

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <AppContainer>
      <Wrapper>
        <LeftContent>
          <Text className={animate ? "animate-text" : ""}>
            <p className="text-[rgb(92,91,143)] ">
              Launch Your Career With <br />
            </p>
            <p className="text-[rgb(22,30,100)]"> Top Companies</p>
          </Text>
          <Note className={animate ? "animate-note" : ""}>
            "Launch your career with competitive salaries, mentorship, and
            growth opportunities at industry-leading firms."
          </Note>
          <ViewAllButton
            onClick={() => navigate("/internships/jobs")} // Update with your route
            className={animate ? "animate-button" : ""}
          >
            View All Internship Jobs →
          </ViewAllButton>
        </LeftContent>
        <RightContent>
          <ColumnsContainer>
            <VerticalMarquee>
              <MarqueeGroup>
                {companies.map((el, index) => (
                  <ImageGroup
                    key={index}
                    className={animate ? `animate-logo delay-${index}` : ""}
                  >
                    <Image src={el} alt={`company logo ${index}`} />
                  </ImageGroup>
                ))}
                {/* Duplicate for seamless looping */}
                {companies.map((el, index) => (
                  <ImageGroup
                    key={`dup-${index}`}
                    className={animate ? `animate-logo delay-${index}` : ""}
                  >
                    <Image src={el} alt={`company logo ${index}`} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
            </VerticalMarquee>
            <VerticalMarquee>
              <MarqueeGroupReverse>
                {[...companies].reverse().map((el, index) => (
                  <ImageGroup
                    key={`rev-${index}`}
                    className={animate ? `animate-logo delay-${index}` : ""}
                  >
                    <Image src={el} alt={`company logo ${index}`} />
                  </ImageGroup>
                ))}
                {/* Duplicate for seamless looping */}
                {[...companies].reverse().map((el, index) => (
                  <ImageGroup
                    key={`dup-rev-${index}`}
                    className={animate ? `animate-logo delay-${index}` : ""}
                  >
                    <Image src={el} alt={`company logo ${index}`} />
                  </ImageGroup>
                ))}
              </MarqueeGroupReverse>
            </VerticalMarquee>
          </ColumnsContainer>
        </RightContent>
      </Wrapper>
    </AppContainer>
  );
}

export default Internjobs;

const dropIn = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AppContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  padding: 2rem 0;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 50vh;
    padding: 1rem 0;
  }

  .animate-text {
    animation: ${fadeIn} 0.8s ease-out forwards;
  }

  .animate-note {
    animation: ${fadeIn} 0.8s ease-out 0.3s forwards;
    opacity: 0;
  }

  .animate-logo {
    animation: ${dropIn} 0.6s ease-out forwards;
    opacity: 0;
  }

  ${Array.from({ length: 20 }).map(
    (_, i) => css`
      .delay-${i} {
        animation-delay: ${0.5 + i * 0.1}s;
      }
    `
  )}
`;
const ViewAllButton = styled.button`
  background: transparent;
  color: #5c5b8f; // Matching your text color
  border: 2px solid #5c5b8f;
  border-radius: 24px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1.5rem;

  &:hover {
    background: #5c5b8f;
    color: white;
  }

  &.animate-button {
    animation: ${fadeIn} 0.8s ease-out 0.5s forwards;
    opacity: 0;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem;
    gap: 1rem;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-right: 2rem;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const RightContent = styled.div`
  flex: 1;
  height: 500px;
  overflow: hidden;
  position: relative;
 

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const ColumnsContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const scrollY = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
`;

const scrollYReverse = keyframes`
  from {
    transform: translateY(-50%);
  }
  to {
    transform: translateY(0);
  }
`;

const VerticalMarquee = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  user-select: none;
  position: relative;
  width: 40%;
`;

const MarqueeGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-shrink: 0;
  animation: ${scrollY} 20s linear infinite;
  padding: 1rem 0;

  @media (max-width: 768px) {
    gap: 1rem;
    animation: ${scrollY} 15s linear infinite;
  }
`;

const MarqueeGroupReverse = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-shrink: 0;
  animation: ${scrollYReverse} 20s linear infinite;
  padding: 1rem 0;

  @media (max-width: 768px) {
    gap: 1rem;
    animation: ${scrollYReverse} 15s linear infinite;
  }
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 90px;
  opacity: 0;
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    height: 70px;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 90%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 0.3rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Text = styled.div`
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 500;
  margin-bottom: 1rem;
  color: #02203c;
  text-align: left;
  opacity: 0;
  line-height: 1.1;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Note = styled.div`
  font-size: clamp(0.875rem, 2vw, 1.125rem);
  font-weight: 200;
  margin-bottom: 2rem;
  color: #7c8e9a;
  text-align: left;
  max-width: 400px;
  opacity: 0;

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`;