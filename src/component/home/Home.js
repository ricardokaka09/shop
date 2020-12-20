import React ,{useEffect, useState}from 'react';
import SlideShow from './slide/SlideShow'
import Product from './product/Product'
import './Home.css'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import StarBorder from '@material-ui/icons/StarBorder';
import {abc} from '../../js/script'

function Home(){
    useEffect(()=>{
        abc();
    })

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
      };
    return(
        <div className='home'>
            <div className="home__container">
                <div className="home__img__1">
                    {/* <img src="" alt=""/> */}
                    <div className="home__img-info">
                        <h2>THuc pham Sach</h2>
                        <h1>Nhin laf Ngon</h1>
                        <h4>dam bao an toan thuc pham</h4>
                    </div>
                </div>
                <div className="home__sp__1">
                    <fieldset>
                        <legend className='home__sp__1-title'>San pham ban chay</legend>
                        <div className="home__sp__1-product">
                            <Product 
                            id={1}    
                            title='sp thu 1'
                            image="https://vn-test-11.slatic.net/p/7c9365befc1dcf3bce58882ad29ed8a2.jpg_200x200Q100.jpg_.webp"
                            price={10}
                            rating={4}
                            />
                            <Product 
                                id={2}    
                                title='sp thu 2'
                                image="https://vn-test-11.slatic.net/p/7c9365befc1dcf3bce58882ad29ed8a2.jpg_200x200Q100.jpg_.webp"
                                price={15}
                                rating={3}
                            />
                            <Product 
                                id={3}    
                                title='sp thu 3'
                                image="https://vn-test-11.slatic.net/p/7c9365befc1dcf3bce58882ad29ed8a2.jpg_200x200Q100.jpg_.webp"
                                price={20}
                                rating={5}
                            />
                        </div>
                       
                        {/* <input value={temperature}
                            onChange={this.handleChange} /> */}
                    </fieldset>
                </div>
                <div className="home__category">
                    <List
                        >
                        <ListItem button>
                            <ListItemIcon>
                            <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sent mail" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                            <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                        <ListItem button onClick={handleClick}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                            {open ? <NavigateBeforeIcon/>
                            : <NavigateNextIcon/>}

                        </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItem button className='list__items'>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItem>
                            </List>
                            </Collapse>
                        </List>
                        
                </div>
                <SlideShow/>
                <div className="home__product">
                    <Product 
                        id={1}    
                        title='sp thu 1'
                        image="https://vn-test-11.slatic.net/p/7c9365befc1dcf3bce58882ad29ed8a2.jpg_200x200Q100.jpg_.webp"
                        price={10}
                        rating={4}
                    />
                    <Product 
                        id={2}    
                        title='sp thu 2'
                        image="https://vn-test-11.slatic.net/p/7c9365befc1dcf3bce58882ad29ed8a2.jpg_200x200Q100.jpg_.webp"
                        price={15}
                        rating={3}
                    />
                    <Product 
                        id={3}    
                        title='sp thu 3'
                        image="https://vn-test-11.slatic.net/p/7c9365befc1dcf3bce58882ad29ed8a2.jpg_200x200Q100.jpg_.webp"
                        price={20}
                        rating={5}
                    />
                    

                </div>
            </div>
            <script src='../../js/script.js'></script>
        </div>
        
    )
}
export default Home;