import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="DESK" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem nobis voluptas reiciendis facilis alias beatae
              veniam quo consequuntur qui consequatur vitae natus similique
              deserunt eligendi ducimus, tempore eveniet eum blanditiis dolore!
              Libero distinctio enim officiis sint omnis? Porro soluta quae
              ipsam eligendi enim optio quod, rerum quis ullam nisi. Incidunt
              vel laudantium, numquam necessitatibus earum exercitationem magni
              alias, nulla nobis accusamus adipisci. Perspiciatis ullam ipsa,
              error tenetur nobis maxime reiciendis, eveniet odit alias
              obcaecati incidunt sunt consectetur corporis molestias. Quod
              maiores et soluta eaque? Cumque non asperiores dignissimos
              excepturi sint? Et ut nulla sapiente aspernatur optio? Consequatur
              provident nemo nam.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
