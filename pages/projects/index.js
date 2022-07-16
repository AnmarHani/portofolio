import { useState } from "react"

import * as classes from '../../styles/classes'

export const getStaticProps = async() => {
    let response = await fetch('https://api.github.com/users/AnmarHani/repos')
    let data = await response.json()
  
    return {
      props: {
        reposotories: data
      }
    }
}
export default function index(props){
    const [filter, setFilter] = useState("all")

    let webQuery = props.reposotories.filter(repo => {
        return repo.topics.includes("web")
    })    
    let mobileQuery = props.reposotories.filter(repo => {
        return repo.topics.includes("mobile")
    })    
    let desktopQuery = props.reposotories.filter(repo => {
        return repo.topics.includes("desktop")
    })    
    let otherQuery = props.reposotories.filter(repo => {
        return repo.topics.includes("other")
    })

    return (
        <div>        
            <div className={classes.filterContainer}>
                <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All Projects</option>
                    <option value="web">Web Projects</option>
                    <option value="mobile">Mobile Projects</option>
                    <option value="desktop">Desktop Projects</option>
                    <option value="other">Other Projects</option>
                </select>
            </div>
            {
                filter === "all" &&
                props.reposotories.map(repo => (
                    <a className={classes.text} href={repo.html_url} key={repo.id}>
                            &gt;{repo.name}
                            <p className={classes.descriptionSecondary}>{repo.description}</p>
                    </a>
                ))
            }
            {
                filter === "web" &&
                webQuery.map(repo => (
                    <a className={classes.text} href={repo.html_url} key={repo.id}>
                            &gt;{repo.name}
                            <p className={classes.descriptionSecondary}>{repo.description}</p>
                    </a>
                ))
            }
            {
                filter === "mobile" &&
                mobileQuery.map(repo => (
                    <a className={classes.text} href={repo.html_url} key={repo.id}>
                            &gt;{repo.name}
                            <p className={classes.descriptionSecondary}>{repo.description}</p>
                    </a>
                ))
            }            
            {
                filter === "desktop" &&
                desktopQuery.map(repo => (
                    <a className={classes.text} href={repo.html_url} key={repo.id}>
                            &gt;{repo.name}
                            <p className={classes.descriptionSecondary}>{repo.description}</p>
                    </a>
                ))
            }            
            {
                filter === "other" &&
                otherQuery.map(repo => (
                    <a className={classes.text} href={repo.html_url} key={repo.id}>
                            &gt;{repo.name}
                            <p className={classes.descriptionSecondary}>{repo.description}</p>
                    </a>
                ))
            }
        </div>
    )
}