import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
const MySkillsContainer = () => {
    return <Component />;
};

let Component = () => {
    let skills = useSelector((state: AppStateType) => state.profile.skills);
    let skillsUI = skills.map((s) => <li>{s.skill}</li>)
    return <div>
        <ul>
            {skillsUI}
        </ul>
    </div>
}

export default MySkillsContainer;