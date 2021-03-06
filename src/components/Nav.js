import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';


const Nav = props => {
        return (
                <nav>
                        <h1>Music Player</h1>
                        <button onClick={()=> props.set_library_status(!props.library_status)}>
                                Library
                                <FontAwesomeIcon icon={faMusic} />
                        </button>
                </nav>
        );
}

export default Nav;