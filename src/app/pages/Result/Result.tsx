import { useEffect, useState } from 'react';
import styled from 'styled-components';
import getJobTags from '../../utils/getJobTags';
import NavBarMain from '../../components/NavBarMain/NavBarMain';

export default function Result(): JSX.Element {
  const [tags, tagsSet] = useState([]);

  useEffect(() => {
    async function createTags() {
      const jobTags = await getJobTags();
      tagsSet(jobTags);
    }
    createTags();
  }, []);

  return (
    <StyledBody>
      <StyledHeading>YOUR RESULT</StyledHeading>
      <StyledDiv>
        {tags &&
          tags.map((singleTag) => (
            <StyledTag key={tags.indexOf(singleTag)}>{singleTag}</StyledTag>
          ))}
      </StyledDiv>
      <NavBarMain />
    </StyledBody>
  );
}

const StyledBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px auto;
  grid-template-areas: 'Top' 'Center';
  justify-items: center;
  /* height: 90vh; */
`;

const StyledHeading = styled.div`
  align-self: start;
  grid-area: Top;
  font-family: CocoGooseLight;
  font-size: 2.5em;
  font-weight: 500;
  padding-top: 30px;
`;

const StyledDiv = styled.div`
  display: flex;
  grid-area: Center;
  padding: 50px 20px 20px 20px;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
  overflow: hidden;
`;

const StyledTag = styled.p`
  margin: 0;
  font-weight: 600;
  background-color: var(--yellow-dark);
  padding: 5px 25px;
  color: var(--grey-dark);
  font-size: 20px;
  border-radius: 10px;
`;

// async function testoGetJob() {
//   const testFetch = await fetch('/api/jobs');
//   const currywurst = await testFetch.json();
//   console.log(currywurst);
// }
// testoGetJob();

// async function testStartJob() {
//   const testFetch = await fetch(`/api/getJobId/`);
//   const gluehwein = await testFetch.json();
//   console.log(gluehwein);
// }
// testStartJob();

// async function testGetStorageId() {
//   const testFetch = await fetch(`/api/getStorageId/`);
//   const gluehwein = await testFetch.json();
//   console.log(gluehwein);
// }
// testGetStorageId();
