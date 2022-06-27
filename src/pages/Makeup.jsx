import React from "react";
import makeupstyles from "./Styles/Makeup.module.css";
import ReactStars from "react-rating-stars-component";
import {Box,
    ListItem,
    UnorderedList,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Checkbox 
} from "@chakra-ui/react"


 const Makeup=()=>
{

    const [data,setData]=React.useState([]);
    const getData=()=>
    {
        fetch(`http://localhost:8080/makeup`)
        .then((res)=>res.json())
        .then((res)=>
        {
            setData(res)
        })
        .catch((error)=>
        {
            console.log(error)
        })
    }

    React.useEffect(
        ()=>
        {
            getData();
        },[]
    )
    

    return(
        <Box className={makeupstyles.container}>
            <Box className={makeupstyles.leftContainer}>
                <h1 style={{fontSize:"30px",
                            fontWeight:"600",
                            marginLeft:"35px"
                    }}>Makeup</h1>
                <UnorderedList className={makeupstyles.typeContainer}>
                    <ListItem>Face(807)</ListItem>
                    <ListItem>Eye(884)</ListItem>
                    <ListItem>Lip(502)</ListItem>
                    <ListItem>Cheek(237)</ListItem>
                    <ListItem>Value & Gift Sets(283)</ListItem>
                    <ListItem>Makeup Palettes(186)</ListItem>
                    <ListItem>Brushes & Applicators(244)</ListItem>
                    <ListItem>Accessories (93)</ListItem>
                    <ListItem>Nail (56)</ListItem>
                    <ListItem>Vegan (606)</ListItem>
                    <ListItem>Mini Size (279)</ListItem>
                </UnorderedList>
                <h3 style={{paddingLeft:"35px", fontWeight:"600", color:"grey",marginBottom:"-10px", marginTop:"40px"}} >Filters</h3>
                <Box className={makeupstyles.filterContainer} padding="20px">
                    <Accordion defaultIndex={[0]} allowMultiple allowToggle width="250px" padding="0px">
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Pickup & Delivery</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <UnorderedList>
                            <Checkbox>Pickup : Choose a store</Checkbox>
                            <Checkbox>Same-day Delivery: Set Your Location</Checkbox>
                        </UnorderedList>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>New</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>New(171)</Checkbox>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' fontWeight="600">
                            <h4 className={makeupstyles.filterHeading}>Rating</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display="flex" flexDirection="column">
                        <Checkbox> 4 & Up</Checkbox>
                        <Checkbox> 3 & Up</Checkbox>
                        <Checkbox> 2 & Up</Checkbox>
                        <Checkbox> 1 & Up</Checkbox>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Brand</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Checkbox>HAUS LABS BY LADY GAGA (7)</Checkbox>
                        <Checkbox>MAKE UP FOR EVER (71)</Checkbox>
                        <Checkbox>DANESSA MYRICKS BEAUTY</Checkbox>
                        <Checkbox>SEPHORA COLLECTION(226)</Checkbox>
                        <Checkbox> Too Faced (59)</Checkbox>
                        <Checkbox> The Ordinary (3)</Checkbox>
                        <Checkbox> NARS(55)</Checkbox>
                        <Checkbox> Fenty Beauty by Rihanna (73)</Checkbox>
                        <Checkbox> LANEIGE(4)</Checkbox>
                        <Checkbox>Bite Beauty (13)</Checkbox>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Concerns</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Dullness / Uneven tecture (111) </Checkbox>
                            <Checkbox>Uneven skin tone (81)</Checkbox>
                            <Checkbox> Redness(79)</Checkbox>
                            <Checkbox>Dark Spots (64)</Checkbox>
                            <Checkbox>Acne/ Blemishes(53)</Checkbox>
                            <Checkbox> Dark circles(52)</Checkbox>
                            <Checkbox> Fine-lines/ Wrinkles (65) </Checkbox>
                            <Checkbox> Anti-aging (50)</Checkbox>
                            <Checkbox> Volumizing (5)</Checkbox>
                            <a href="/">Show more</a>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Sale</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Sale (131)</Checkbox>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Ingredient Preferences</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Vegan (1288)</Checkbox>
                            <Checkbox>Cruelty-free (729)</Checkbox>
                            <Checkbox>Fragrance Free (508)</Checkbox>
                            <Checkbox>Clean at Sephora(434)</Checkbox>
                            <Checkbox>Hyaluronic Acid (220)</Checkbox>
                            <Checkbox>Peptides (91)</Checkbox>
                            <Checkbox>Parben-free (1307)</Checkbox>
                            <Checkbox>Sulfate-free (636)</Checkbox>
                            <Checkbox>Antioxidants (269)</Checkbox>
                            <Checkbox>Minerals (50)</Checkbox>
                            <a href="/">Show more</a>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Finish</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Matte (444)</Checkbox>
                            <Checkbox>Shimmer (140)</Checkbox>
                            <Checkbox>High Shine (149)</Checkbox>
                            <Checkbox>Metallic (58)</Checkbox>
                            <Checkbox>Satin (139)</Checkbox>
                            <Checkbox>Radiant (247)</Checkbox>
                            <Checkbox>Glitter (23)</Checkbox>
                            <Checkbox>Natural (362)</Checkbox>
                            <Checkbox>Creme (6)</Checkbox>
                            <Checkbox>Gel (2)</Checkbox>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Benefits</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Matte (444)</Checkbox>
                            
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Formulation</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Matte (444)</Checkbox>
                            
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Color Family</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Matte (444)</Checkbox>
                            
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Shopping Preferences</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Matte (444)</Checkbox>
                            
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Skin Type</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Matte (444)</Checkbox>
                        
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Coverage</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Matte (444)</Checkbox>
                        
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Size</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Matte (444)</Checkbox>
                            
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Age Range</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Matte (444)</Checkbox>
                        
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Volume</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Matte (444)</Checkbox>
                        
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Price Range</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Matte (444)</Checkbox>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Bristle Type</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Matte (444)</Checkbox>
                        
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Sun Protections</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Matte (444)</Checkbox>
                            
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Type</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Matte (444)</Checkbox>
                        
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Frangrance Family</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Matte (444)</Checkbox>
                        
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <h4 className={makeupstyles.filterHeading}>Frangrance Type</h4>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Checkbox>Matte (444)</Checkbox>
                            
                        </AccordionPanel>
                    </AccordionItem>
                    </Accordion>
                </Box>
            </Box>
            <Box className={makeupstyles.rightContainer}>
                <Box>
                    <UnorderedList className={makeupstyles.categoryContainer} display="grid" gridTemplateColumns="repeat(4,1fr)">
                        <ListItem>New <img src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/new.svg" alt="" /></ListItem>
                        <ListItem>Bestsellers <img src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/bestsellers.svg" alt="" /></ListItem>
                        <ListItem >Clean <img src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/clean_beauty32.svg" alt="" /></ListItem>
                        <ListItem >Vegan <img src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/Icon_Vegan.svg" alt="" /></ListItem>
                        <ListItem>Mini Size <img src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/minis.svg" alt="" /></ListItem>
                        <ListItem>Lip Quiz <img src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/lip_quiz.svg" alt="" /></ListItem>
                        <ListItem>Cruelty-Free <img src="https://www.sephora.com/contentimages/meganav/icons/crueltyfree.svg" alt="" /></ListItem>
                        <ListItem>Foundation Quiz <img src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/foundation_quiz.svg" alt="" /></ListItem>
                    </UnorderedList>
                </Box>
                <p style={{marginTop:"3px",marginLeft:"15px",fontSize:"15px"}}>2696 results</p>
                <Box className={makeupstyles.productsContainer}>
                
                    {
                        data.map((item)=>
                        ( 
                           <div>
                            <div style={{display:"flex" ,justifyContent:"space-between",height:"25px",width:"90%"}}>
                                {item.currentSku.isNew?<img width="35px"  src="https://img.icons8.com/material/344/new--v1.png" alt="" />:<img width="35px" height="20px" src="https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png" alt="" />}
                                <img  width="20px" height="5px" src="https://cdn-icons-png.flaticon.com/512/812/812327.png" alt="" />
                            </div>
                            <img src={item.heroImage} alt="" /> 
                            <h5 style={{fontSize:"15px" , fontWeight:"650"}}>{item.brandName}</h5>
                            <h5>{item.displayName}</h5>
                            <p style={{fontSize:"13px",fontWeight:"500" ,color:"grey"}}>{item.moreColors} colours</p>
                            <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                                <ReactStars  count={5} value={item.rating}  isHalf size={20} activeColor="black" edit={false}/>
                                <p style={{marginTop:"3px",fontSize:"13px"}}>{item.reviews}</p>
                            </div>
                            <h3 style={{fontWeight:"700",fontSize:"18px"}}>{item.currentSku.listPrice}</h3>
                           </div>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}
export default Makeup;