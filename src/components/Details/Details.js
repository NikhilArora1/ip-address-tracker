import { connect } from 'react-redux';
import './Details.css';

function Details(props) {

    return (
        <div>
            {props.info.ip &&
                <div className="details-container">
                    <div className="details">
                        <div className="caption">IP ADDRESS</div>
                        <div className="value">{props.info.ip}</div>
                    </div>
                    <div className="divider"></div>
                    <div className="details">
                        <div className="caption">LOCATION</div>
                        <div className="value">{props.info.location.city}, {props.info.location.region} {props.info.location.postalCode}</div>
                    </div>
                    <div className="divider"></div>
                    <div className="details">
                        <div className="caption">TIMEZONE</div>
                        <div className="value">UTC{props.info.location.timezone}</div>
                    </div>
                    <div className="divider"></div>
                    <div className="details">
                        <div className="caption">ISP</div>
                        <div className="value">{props.info.isp}</div>
                    </div>
                </div>
            }
        </div>
    );
}

function mapStateToProps(state) {
    return { info: state.ipInfo.info };
}

export default connect(mapStateToProps, null)(Details);
