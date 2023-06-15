import styled from 'styled-components'

export const SectionContainer = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  height: 100px;
  padding-left: 2rem;

  h3 {
    margin-bottom: 0;
    margin-right: 2rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 1rem;
  }
`
export const SectionColors = styled.section`
  min-height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
`
export const Form = styled.form`


  input {
    border-color: transparent;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  input.error {
    border: 2px solid hsl(360, 67%, 44%);
  }
`
export const Button = styled.button`
    background: hsl(205, 78%, 60%);
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-color: transparent;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  text-transform: capitalize;
  color: #fff;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    font-size: 0.85rem;
  }
`
// export const Container = styled.div`

// `