import './index.css';

function TabItem(props) {
    const { text, handleSearch } = props;

    return (
        <li>
            <button onClick={()=>{handleSearch(text)}}>{text}</button>
        </li>
    );
}

export default TabItem;