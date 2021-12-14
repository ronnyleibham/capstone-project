// import styled from 'styled-components';

export default function Result(): JSX.Element {
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

  async function testGetStorageId() {
    const testFetch = await fetch(`/api/getStorageId/`);
    const gluehwein = await testFetch.json();
    console.log(gluehwein);
  }
  testGetStorageId();

  return <div></div>;
}
