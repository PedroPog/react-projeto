import Message from '../layouts/Message';
import Container from '../layouts/Container';
import style from './Projects.module.css';
import { useLocation } from 'react-router-dom';
import LinkButton from '../layouts/LinkButton';
import ProjectCard from '../project/ProjectCard';
import { useState,useEffect } from 'react';
import Loading from '../layouts/Loading';

function Projects(){

    const [projects,setProjects]= useState([]);
    const [removeLoading,setRemoveLoading] = useState(false);
    const [projectMessage,setProjectMessage] = useState("");


    const location = useLocation()
    let message = '';

    if(location.state){
        message = location.state.message;
    }

    useEffect(()=>{

        setTimeout(()=>{
            fetch("http://localhost:5001/projects",{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
        }).then((resp)=>resp.json())
        .then((data)=>{
            console.log(data)
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch((err)=>{
            console.log(err)
        })
        },3000)

    },[])

    function removeProject(id){
        fetch(`http://localhost:5001/projects/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        }).then(resp =>resp.json())
        .then(() => {
            setProjects(projects.filter((project)=>project.id !== id))
            setProjectMessage("Projeto removido com sucesso!");
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={style.project_container}>
            <div className={style.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newprojects" text="Novo Projeto"/>
            </div>
            {message && <Message message={message} type="success"/>}
            {projectMessage && <Message message={projectMessage} type="success"/>}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project)=>(
                        <ProjectCard 
                            id={project.id} name={project.name} 
                            budget={project.budget} category={project.category} 
                            key={project.id} handleRemove={removeProject}/>
                    ))
                }
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrado</p>
                )}
            </Container>
        </div>
    )
}

export default Projects