import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SearchBar from '../SearchBar/SearchBar';
import SelectSmall from '../SelectBox/SelectBox';
import PostBox from '../PostBox'


export default function DiscussionPage() {
    return (
      <div>
      <div>
      <div style={{ display: 'flex'}}>
      <SearchBar/>
      <Button style={{width: '18%',
                    borderRadius: "20px",
                    backgroundColor: '#FAE1DD',
                    alignItems: "center",
                    color: "white",
                    margin: "10px",
                    fontSize: "20px"
                  }}
                    >
                      Create Post</Button>
     
   
      </div>
      </div>
      <SelectSmall  label = {"User Type"}
                  array ={["1","2","3"]}
                  
                  />

      <SelectSmall  label = {"Most Popular"}
                  array ={["Most Rated","N/A","N/A"]}
                  
                        />
      
      <SelectSmall label = {"Most Relevant"}
                  array ={["N/A","N/A","N/A"]}
                  />
      
      <SelectSmall label = {"Topic"}
                  array ={["SE","UI/UX","N/A"]}
                  />
      
      <PostBox />
      <PostBox />
      <PostBox />  

            
                
                </div>
    );
  }



