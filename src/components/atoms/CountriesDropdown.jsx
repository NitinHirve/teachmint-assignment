import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  cursor:pointer;
  border-radius:5px;
  width:150px;
  display:flex;
  align-items:center;
  justify-content:center;
  height:30px;
`;

const CountriesDropdown = ({ fetchCountryDetails, countries }) => {
    return (
        <>
            <StyledSelect onChange={fetchCountryDetails} >
                {
                    countries.length > 0 && (
                        countries.map((country, i) => (
                            <>
                                <option key={country} value={country} selected={country === 'Asia/Dubai'} >{country}</option>
                            </>
                        ))
                    )
                }
            </StyledSelect>
        </>
    )
}

export default CountriesDropdown