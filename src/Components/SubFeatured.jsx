import { TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react'

const SubFeatured = ({ data, handleData}) => {
    console.log(data);
    console.log('aah raha h');
  return (
    <div>
        <Tabs>
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
                { 
                    data?.map((elm) => (
                        <p
                        onClick={() => handleData(elm)}
                        >{ elm }</p>
                    ))
                }
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
  )
}

export default SubFeatured;