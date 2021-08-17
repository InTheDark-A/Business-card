const initialState = {
    skills: [{skill: "javascript", img: ""},
        {skill: "typescript", img: ""},
        {skill: "react", img: ""},
        {skill: "redux", img: ""}, {skill: "npm", img: ""},
        {skill: "html"}, {skill: "css"},
        {skill: "ant-design", img: ""},
        {skill: "python", img: ""},
        {skill: "c#", img: ""},
        {skill: "git", img: ""},
    ] as Array<SkillType>,
    works: [],
    contacts: [
        {name: "github", url: "https://github.com/InTheDark-A"},
        {name: "vk", url: "https://vk.com/arthurshag"},
        {name: "email", url: "a79514578302@yandex.ru"},
    ] as Array<ContactType>
}


const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
};

export default profileReducer;

type ContactType = { name: string, url: string };
type SkillType = { skill: string, img?: string };
type InitialStateType = typeof initialState;
