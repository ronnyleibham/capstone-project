// import styled from 'styled-components';

export default function Result(): JSX.Element {
  async function testoMio() {
    const testFetch = await fetch('/api/jobs');
    const currywurst = await testFetch.json();
    console.log(currywurst);
  }
  testoMio();

  return <div></div>;
}
