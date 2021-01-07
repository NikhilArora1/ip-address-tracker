import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getIPLocation, getIP } from '../../redux/features/ipInfoSlice';
import './Search.css';

const ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const domain = /^((?:(?:(?:\w[.\-+]?)*)\w)+)((?:(?:(?:\w[.\-+]?){0,62})\w)+)\.(\w{2,6})$/;
const email = /\S+@\S+\.\S+/;

const mapDispatchToProps = { getIPLocation, getIP }

function Search(props) {
    const [input, setInput] = useState('');
    const { getIP } = props;

    useEffect(() => {
        getIP();
    }, [getIP]);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = () => {
        let param;
        if (input.match(ipformat)) {
            param = `ipAddress=${input}`;
        } else if (input.match(domain)) {
            param = `domain=${input}`;
        } else if (input.match(email)) {
            param = `email=${input}`;
        }
        props.getIPLocation(param);
    }

    return (
        <div className="container">
            <h2 className="header">IP Address Tracker</h2>
            <div>
                <input className="search-bar" placeholder="Search for any IP address or domain" onChange={handleChange} />
                <button className="button" onClick={handleSubmit}><img src={process.env.PUBLIC_URL + '/icon-arrow.svg'} alt="Arrow Icon" /></button>
            </div>
        </div>
    );
}


export default connect(null, mapDispatchToProps)(Search);