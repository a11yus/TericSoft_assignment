import React from 'react';
import { 
    Box, 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel 
} from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faStar, 
    faBiking, 
    faPersonSwimming,
    faSailboat, 
    faPersonWalking, 
    faHorse, 
    faMountain, 
    faSwords
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router';

const FeaturedSports = () => { 

    const navigate = useNavigate();
  return (
    <Box>
        <Tabs>
            <TabList
            style = 
            {{
                display: "flex",
                justifyContent: "space-evenly",
                paddingTop: "1rem",
            }}
            >
            <FontAwesomeIcon 
                color= "white"
                size= "4x"
                top= "6rem"
                icon={faStar}
            />
                <Tab
                onClick={() => navigate('/')}
                >
                <FontAwesomeIcon 
                color= "white"
                size= "4x"
                icon={faBiking}
            /></Tab>
                <Tab
                onClick={() => navigate('/river')}
                >
                <FontAwesomeIcon 
                color= "white"
                size= "4x"
                top= "6rem"
                icon={faPersonSwimming}
            /></Tab>
                <Tab
                onClick={() => navigate('/horse')}
                >
                <FontAwesomeIcon 
                color= "white"
                size= "4x"
                top= "6rem"
                icon={faHorse}
            /></Tab>
          
                <Tab
                onClick={() => navigate('/skate')}
                >
                <FontAwesomeIcon 
                color= "white"
                size= "4x"
                top= "6rem"
                icon={faMountain}
            /></Tab>
     
          
                <Tab
                onClick={() => navigate('/fencing')}
                >
                <FontAwesomeIcon 
                color= "white"
                size= "4x"
                top= "6rem"
                icon={faMountain}
            /></Tab>
            
          
                <Tab
                onClick={() => navigate('/golf')}
                >
                <FontAwesomeIcon 
                color= "white"
                size= "4x"
                top= "6rem"
                icon={faBiking}
            /></Tab>
              
                <Tab
                onClick={() => navigate('/gymnastics')}
                >
                <FontAwesomeIcon 
                color= "white"
                size= "4x"
                top= "6rem"
                icon={faPersonWalking}
            /></Tab>
              
                <Tab
                onClick={() => navigate('/boating')}
                >
                <FontAwesomeIcon 
                color= "white"
                size= "4x"
                top= "6rem"
                icon={faSailboat}
            /></Tab>

            </TabList>
{/* 
            <TabPanels>
                <TabPanel 
                style = 
                {{
                    display: 'flex',
                    justifyContent: 'space-around',
                    textAlign: 'center',
                    color: 'white',
                }}
                >
                <p
                // onClick={() => {
                //     dispatch(getData())
                // }}
                >BMX</p>
                <p>Mountain</p>
                <p>Road</p>
                <p>Track</p>
                </TabPanel>

                <TabPanel 
                style = 
                {{
                    display: 'flex',
                    justifyContent: 'space-around',
                    textAlign: 'center',
                    color: 'white',
                }}
                >
                <p>River</p>
                <p>Sea</p>
                <p>Swimming Pool</p>
                </TabPanel>

                <TabPanel 
                style = 
                {{
                    display: 'flex',
                    justifyContent: 'space-around',
                    textAlign: 'center',
                    color: 'white',
                }}
                >
                <p>Horse Ridding</p>
                </TabPanel>

                <TabPanel 
                style = 
                {{
                    display: 'flex',
                    justifyContent: 'space-around',
                    textAlign: 'center',
                    color: 'white',
                }}
                >
                <p>Skate</p>
                <p>Climbing</p>
                </TabPanel>

                <TabPanel 
                style = 
                {{
                    display: 'flex',
                    justifyContent: 'space-around',
                    textAlign: 'center',
                    color: 'white',
                }}
                >
                <p>Fencing</p>
                <p>Shooting</p>
                <p>Archery</p>
                </TabPanel>

                <TabPanel 
                style = 
                {{
                    display: 'flex',
                    justifyContent: 'space-around',
                    textAlign: 'center',
                    color: 'white',
                }}
                >
                <p>Golf</p>
                </TabPanel>


                <TabPanel 
                style = 
                {{
                    display: 'flex',
                    justifyContent: 'space-around',
                    textAlign: 'center',
                    color: 'white',
                }}
                >
                <p>Gymnastics</p>
                </TabPanel>

                <TabPanel 
                style = 
                {{
                    display: 'flex',
                    justifyContent: 'space-around',
                    textAlign: 'center',
                    color: 'white',
                }}
                >
                <p>Boating</p>
                <p>Surfing</p>
                <p>Wind Surfing</p>
                </TabPanel>     */}
        {/* </TabPanels> */}
        </Tabs>
        {/* <Box>
            <h1
            style =
            {{
                color: 'white',
                borderBottom: '1px solid white',
                display: 'flex',
                marginLeft: '1rem'
            }}
            >
                Highlights</h1>
        </Box> */}

    </Box>
  )
}

export default FeaturedSports