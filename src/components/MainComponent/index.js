import { Component } from 'react';
import { MdOutlineImageSearch } from "react-icons/md";
import ImageComponent from '../ImageComponent';
import TabItem from '../TabItem';



import './index.css';
let tabs = ['Nature', 'Technology', 'Animals', 'Food']
class MainComponent extends Component {
    
    state = {
        searchTerm: '',
        images: [],
    };
    

    handleSearch = async(search="") => {
        let { searchTerm } = this.state;
        if(search!==""){searchTerm=search}
        let url = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=eBBTAJOOp4vQBvkTCZGuJFFo93XQY2z-4LPjFau2SCU`;
        
        let options = {
            headers: { Method: 'GET'}
        };
        let response = await fetch(url, options);
        let data = await response.json();
        console.log(data);
        let images = data.results.map((image) => ({
            id: image.id,
            url: image.urls.small,
            title: image.alt_description,
        }));
        this.setState({ images });
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    render() {
        const { searchTerm, images } = this.state;

        return (
            <div className="main-container">
                <div className='input-container'> 
                <input
                    type="text"
                    value={searchTerm}
                    onChange={this.handleChange}
                    placeholder="Search for images"
                    onKeyDown={(event) => {if(event.key==='Enter'){this.handleSearch()}}}
                />
                <button onClick={this.handleSearch}><MdOutlineImageSearch/></button>
            </div>

            <ul>{tabs.map(eachTab=>(
                    <TabItem key={eachTab} text={eachTab} handleSearch={this.handleSearch}/>
                ))}
            </ul>

            {images.length > 0 ? <div className='image-container'>
                   
            {images.map((image) => (
                <ImageComponent key={image.id} src={image.url} alt={image.title} />
            ))}
        </div> : null}
            </div>
        );
    }
}

export default MainComponent;