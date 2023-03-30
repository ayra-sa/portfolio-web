import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { projects } from "../../constants/constants";
import { Section, Container, LeftDiv, RightDiv, Title, TopDiv, TopTitle, ImageDesc, Block, LinkTo, Back } from "../../components/ProjectDescription/ProjectDescriptionStyles";
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa";


export default function ProjectPage({ dataExport }) {
  const router = useRouter();
  const { title } = router.query;
  const [dataItem, setDataItem] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    const item = projects.filter(p => p.id == title)
    console.log(item);
    setDataItem(item)
  }, [router.query.title, router.isReady]);

  return (
    <Section>
      <Back>
        <Link href='/'>
          <FaArrowLeft />
        </Link>
      </Back>
      {dataItem.map(data => (
        <Container key={data.id}>
          <TopDiv>
            <LeftDiv>
              <Block>
                <TopTitle>Project</TopTitle>
                <Title>{data.full_title}</Title>
              </Block>
              <Block>
                <TopTitle>Built With</TopTitle>
                <ul>
                  {data.built_with.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </Block>
              <Block>
                <TopTitle>Demo</TopTitle>
                <LinkTo href={data.visit} target='_blank'>View Live Site Here</LinkTo>
              </Block>
              <Block>
                <TopTitle>Available On Github</TopTitle>
                <LinkTo href={data.source} target='_blank'>View Code Here</LinkTo>
              </Block>
            </LeftDiv>

            <RightDiv>
              <p>{data.full_description}</p>
            </RightDiv>
          </TopDiv>

          {data.image_description.map((img, index) => (
            <ImageDesc 
              key={index}
            >
              <Image 
                src={img}
                alt='image'
                // width={790}
                // height={600}
                // sizes='100vw'
                layout="fill"
              />
            </ImageDesc>
          ))}
        </Container>
      ))}
    </Section>
  );
}