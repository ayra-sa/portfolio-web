import React, { useState } from "react";

import {
  BlogCard,
  GridContainer,
  Tag,
  TagList,
  BlogFront,
  Desc,
  Heading1

} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Link from 'next/link'
import { projects } from "../../constants/constants";
// import Paginate from "../../components/Pagination";
import Image from "next/image";
import Paginate from "../Paginate/Pagination";
import { motion } from "framer-motion";

const Projects = () => {
  const [cards, setCards] = useState(projects.slice(0, 20));
  const [page, setPage] = useState(0);

  const cardsPage = 4;
  const cardsVisited = page * cardsPage;

  const pageCount = Math.ceil(cards.length / cardsPage);

  const handleChange = ({ selected }) => {
    setPage(selected);
  };

  const displayCards = cards
    .slice(cardsVisited, cardsVisited + cardsPage)
    .map((card, index) => {

      return (
        <Link href={`/project/${card.id}`} key={index}>
          <BlogCard
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
              height={170}
              priority
            />
            <BlogFront>
              <Heading1>{card.title}</Heading1>
              <Desc>{card.description}</Desc>
              <TagList>
                {card.tags.map((tag) => {
                  return <Tag key={tag}>{tag}</Tag>;
                })}
              </TagList>
            </BlogFront>
          </BlogCard>
        </Link>
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
