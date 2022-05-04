import React, {useEffect, useState} from 'react';

import { BlogCard, CardInfo, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Link, Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Paginate from '../../components/Pagination'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Projects = () => {
  const [cards, setCards] = useState(projects.slice(0, 20))
  const [page, setPage] = useState(0)

  const cardsPage = 6
  const cardsVisited = page * cardsPage

  const pageCount = Math.ceil(cards.length / cardsPage)

  const handleChange = ({selected}) => {
    setPage(selected)
  }

  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  
  const displayCards = cards
      .slice(cardsVisited, cardsVisited + cardsPage)
      .map(card => {
        return (
          <BlogCard key={card.id} data-aos='fade-up'>
          <Img src={card.image} />
            <TitleContent>
              <HeaderThree title>{card.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{card.description}</CardInfo>
            <div>
              <TitleContent>Technology</TitleContent>
              <TagList>
                {card.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <Link href={card.visit} target='_blank'>Demo</Link>
              <Link href={card.source} target='_blank'>Source</Link>
            </UtilityList>
          </BlogCard>
        );
      })

  return (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
        {displayCards}
    </GridContainer>
    <Paginate pageCount={pageCount} handleChange={handleChange} />
  </Section>
  )
};

export default Projects;