import styled from '@emotion/styled';
import { InputBase } from '@mui/material';
import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react';
import Layout from '../components/LayOut'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


const Search = styled('div')(() => ({
  position: 'relative',
  borderRadius: "8px",
  backgroundColor: "#F5F5F5",
  '&:hover': {
    backgroundColor: "#F5F5F5",
  },
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(( ) => ({
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(( ) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    width: '100%',
  },
}));


const Contacts: any = () => {
  const { getContacts } = useActions();
  
  useEffect(() => { 
    getContacts();
  },[])

   const { data, error, loading } = useTypedSelector(
    (state) => state.contact
   );
  console.log({data})
  return (
    <Layout>
           <Search>
            <SearchIconWrapper>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Link href="/newcontact">+</Link>
          <p>Contact List</p>
          <Link href="/contactprofile">Shiva Mahadev</Link>
    </Layout>
  )
}

export default Contacts
