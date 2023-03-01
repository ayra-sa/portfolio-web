import React, { useState } from "react";

import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  BlogBody,
  BlogBodyTop,
  BlogBodyBottom,
} from "./ProjectsStyles";
import {
  Link,
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
// import Paginate from "../../components/Pagination";
import Image from "next/image";
import Paginate from "../Paginate/Pagination";
import { motion } from "framer-motion";

const Projects = () => {
  const [cards, setCards] = useState(projects.slice(0, 20));
  const [page, setPage] = useState(0);

  const cardsPage = 6;
  const cardsVisited = page * cardsPage;

  const pageCount = Math.ceil(cards.length / cardsPage);

  const handleChange = ({ selected }) => {
    setPage(selected);
  };

  const displayCards = cards
    .slice(cardsVisited, cardsVisited + cardsPage)
    .map((card) => {
      
      // const parser = new DOMParser();
      // const node = parser.parseFromString(card.description, "text/html");
      // console.log(node.body.innerHTML);

      return (
        <BlogCard 
          key={card.id}
          as={motion.div}
          initial={{
            y: 50,
            opacity: 0
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 1.2
          }}
          viewport={{
            once: true
          }}
        >
          <Image
            src={card.image}
            layout="responsive"
            width={300}
            height={200}
          />
          <BlogBody>
            <BlogBodyTop>
              <TitleContent>
                <HeaderThree title>{card.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{card.description}</CardInfo>
            </BlogBodyTop>

            <BlogBodyBottom>
              <div>
                {/* <TitleContent>Technology</TitleContent> */}
                <TagList>
                  {card.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <Link href={card.visit} target="_blank">
                  Demo
                </Link>
                <Link href={card.source} target="_blank">
                  Source
                </Link>
              </UtilityList>
            </BlogBodyBottom>
          </BlogBody>
        </BlogCard>
      );
    });

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>{displayCards}</GridContainer>
      <Paginate pageCount={pageCount} handleChange={handleChange} />
    </Section>
  );
};

export default Projects;
