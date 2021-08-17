import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";

export const Contacts = () => {
    return <div><ContactComponent /></div>;
};

const ContactComponent = () => {
    let stateContacts = useSelector((state:AppStateType) => state.profile.contacts);
    let Contacts= stateContacts.map(c => <li>{<a href={c.url}>{c.name}: {c.url}</a>}</li>);
    return <div>{Contacts}</div>;
};

