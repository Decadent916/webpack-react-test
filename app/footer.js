import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute, Link, IndexLink } from 'react-router';

const ACTIVE = {
	color: '#ffa6a6'
};
const styles = {};
styles.link = {
	color: '#ccc',
};
styles.activeLink = {
	//	...styles.link,
	color: '#ffa6a6'
};
class Footer extends React.Component{
	render() {
		return(
			<div className="bui_avg_sm_4 bui_ta_c bui_bac_lgray bui_ptb_6">
				<li>
					<IndexLink to="/" styles={styles.link} activeStyle={styles.activeLink} className="bui_block bui_plr_24 bui_tc_gray">
						<i className="fa-ticket fa fa-2x bui_fac_gray"></i>
						<p className="bui_ts_14">教程</p>
					</IndexLink>
				</li>
				<li>
					<Link to="/circle" styles={styles.link} activeStyle={styles.activeLink} className="bui_block bui_plr_24 bui_tc_gray">
						<i className="fa-plus-circle fa fa-2x bui_fac_gray"></i>
						<p className="bui_ts_14">烘焙圈</p>
					</Link>
				</li>
				<li>
					<Link to="/mall" styles={styles.link} activeStyle={styles.activeLink} className="bui_block bui_plr_24 bui_tc_gray">
						<i className="fa-delicious fa fa-2x bui_fac_gray"></i>
						<p className="bui_ts_14">商城</p>
					</Link>
				</li>
				<li>
					<Link to="/my" styles={styles.link} activeStyle={styles.activeLink} className="bui_block bui_plr_24 bui_tc_gray">
						<i className="fa-user fa fa-2x bui_fac_gray"></i>
						<p className="bui_ts_14">我的</p>
					</Link>
				</li>
			</div>
		)
	}
};
export default Footer;