import React, {useState} from 'react';

import { BlogCard, CardInfo, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Link, Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Paginate from '../../components/Pagination'

const Projects = () => {
  const [cards, setCards] = useState(projects.slice(0, 20))
  const [page, setPage] = useState(0)

  const cardsPage = 6
  const cardsVisited = page * cardsPage

  const pageCount = Math.ceil(cards.length / cardsPage)

  const handleChange = ({selected}) => {
    setPage(selected)
  }
  
  const displayCards = cards
      .slice(cardsVisited, cardsVisited + cardsPage)
      .map(card => {
        return (
          <BlogCard key={card.id}>
          <Img src={card.image} />
            <TitleContent>
              <HeaderThree title>{card.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{card.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {card.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <Link href={card.visit}>Demo</Link>
              <Link href={card.source}>Source</Link>
            </UtilityList>
          </BlogCard>
        );
      })

  return (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
        {/* {projects.map(p => {
          return (
            <BlogCard key={p.id}>
              <Img src={p.image} />
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <Link href={p.visit} target='_blank'>Demo</Link>
                <Link href={p.source} target='_blank'>Source</Link>
              </UtilityList>
            </BlogCard>
          )
         })} */}
        {displayCards}
    </GridContainer>
    <Paginate pageCount={pageCount} handleChange={handleChange} />
  </Section>
  )
};

export default Projects;