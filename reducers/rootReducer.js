

const initState = {
    projects: [
        {id: '1', name: "AAA", detail: "BBB"},
        {id: '2', name: "CCC", detail: "DDD"},
        {id: '3', name: "EEE", detail: "FFF"}
    ]
    // projects: dataFetch
}

const rootReducer = (state= initState, action) => {
    if (action.type === 'DELETE_PROJECT'){
        console.log(action.type);
        let newProjects = state.projects.filter(project => {
            return action.id !== project.id
        });
        console.log(newProjects)
        return {
            ...state,
            projects: newProjects
        }
    }
    if (action.type === 'NEW_PROJECT'){
        console.log(action.type)
        // let newProjects = state.projects.push(action.project);
        let newProject = {
            id: action.project.id || 0,
            name: action.project.name,
            detail: action.project.detail
        };
        return {
            ...state,
            projects: state.projects.push(newProject)
        }
    }
    return state;
}


export default rootReducer;