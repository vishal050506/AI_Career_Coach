import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

function Carousel() {
  const [animate, setAnimate] = useState(false);
  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <AppContainer>
      <Wrapper>
        <Text className={animate ? "animate-text" : ""}>
          <span className="text-[rgb(92,91,143)]">Why Settle?</span>{" "}
          <span className="text-[rgb(22,30,100)]">Get Placed at the Best</span>
        </Text>
        <Note className={animate ? "animate-note" : ""}>
          "Our alumni work at Fortune 500 companies—let’s make you next."
        </Note>
        <MarqueeContainer>
          <MarqueeWrapper>
            <Marquee>
              <MarqueeGroup>
                {row1.map((el, index) => (
                  <ImageGroup
                    key={index}
                    className={animate ? `animate-logo delay-${index}` : ""}
                  >
                    <Image src={el} alt={`company logo ${index}`} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
              <MarqueeGroup>
                {row1.map((el, index) => (
                  <ImageGroup
                    key={`dup-${index}`}
                    className={animate ? `animate-logo delay-${index}` : ""}
                  >
                    <Image src={el} alt={`company logo ${index}`} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
            </Marquee>
            <Marquee>
              <MarqueeGroup2>
                {row2.map((el, index) => (
                  <ImageGroup
                    key={index}
                    className={
                      animate ? `animate-logo delay-${index + row1.length}` : ""
                    }
                  >
                    <Image src={el} alt={`company logo ${index}`} />
                  </ImageGroup>
                ))}
              </MarqueeGroup2>
              <MarqueeGroup2>
                {row2.map((el, index) => (
                  <ImageGroup
                    key={`dup2-${index}`}
                    className={
                      animate ? `animate-logo delay-${index + row1.length}` : ""
                    }
                  >
                    <Image src={el} alt={`company logo ${index}`} />
                  </ImageGroup>
                ))}
              </MarqueeGroup2>
            </Marquee>
          </MarqueeWrapper>
        </MarqueeContainer>
      </Wrapper>
    </AppContainer>
  );
}

export default Carousel;

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
  min-height: 40vh;
  padding: 2rem 0;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 35vh;
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

  ${Array.from({ length: 12 }).map(
    (_, i) => css`
      .delay-${i} {
        animation-delay: ${0.5 + i * 0.1}s;
      }
    `
  )}
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem;
`;

const Text = styled.div`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #02203c;
  text-align: center;
  opacity: 0;
`;

const Note = styled.div`
  font-size: clamp(0.875rem, 2vw, 1.125rem);
  font-weight: 200;
  margin-bottom: 2rem;
  color: #7c8e9a;
  text-align: center;
  max-width: 600px;
  padding: 0 1rem;
  opacity: 0;
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const MarqueeWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
  margin: 1rem 0;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 5%,
    hsl(0 0% 0% / 1) 95%,
    hsl(0 0% 0% / 0)
  );

  @media (max-width: 768px) {
    mask-image: linear-gradient(
      to right,
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 2%,
      hsl(0 0% 0% / 1) 98%,
      hsl(0 0% 0% / 0)
    );
  }
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 20s linear infinite;

  @media (max-width: 768px) {
    animation: ${scrollX} 15s linear infinite;
  }
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 200px;
  padding: 0.5rem;
  opacity: 0;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 0.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
