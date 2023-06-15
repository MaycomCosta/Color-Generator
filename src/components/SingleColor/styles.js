import styled from 'styled-components'

export const Article = styled.article`
    padding: 1rem 2rem;
    cursor: pointer;
    font-size: 1rem;
    text-transform: none;

  .percent-value {
  margin-bottom: 0;
  color: hsl(209, 61%, 16%);
  }

  .color-value {
    color: hsl(209, 61%, 16%);
    margin-bottom: 0;
  }

  .alert {
  text-transform: uppercase;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  }

  .color-light {
    color: #fff;
  }
`
export const FilterButton = styled.button`
  background: transparent;
  border-color: transparent;
  font-size: 1rem;
  text-transform: capitalize;
  margin: 0 0.5rem;
  letter-spacing: 1px;
  padding: 0.375rem 0.75rem;
  color: #c59d5f;
  cursor: pointer;
  transition: all 0.3s linear;
  border-radius: 0.25rem;

  :hover {
    background: #c59d5f;
    color: #fff;
  }
`
// export const Container = styled.div`
  
// `
