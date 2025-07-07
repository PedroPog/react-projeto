import style from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

import { useNavigate } from 'react-router-dom'

function NewProject(){

    const navigate = useNavigate()
    function createPost(project){
        const state = { message: "Projeto criado com sucesso!" };
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5001/projects",{
        method:"POST",
        headers:{
            'Content-Type':"application/json",
        },
        body:JSON.stringify(project)
        }).then((resp) => resp.json())
        .then((data) => {
            navigate('/projects',{state})
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className={style.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviçõs</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}

export default NewProject