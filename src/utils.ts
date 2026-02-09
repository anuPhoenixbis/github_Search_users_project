import { Repository } from "./types";


// calculates the top 10 latest most forked repos
export const calculateLatestMostForkedRepos = (
    repositories:Repository[]
):{
    repo:string;
    count:number
}[] =>{
    if(repositories.length === 0) return []
    // console.log(repositories)

    const forkedRepos = repositories.map((repo)=>{
        return{
            repo:repo.name,
            count:repo.forkCount,
        }
    })
    .sort((a,b) => b.count - a.count)//decreasing repo fork count
    .slice(repositories.length-10,repositories.length) //getting the top 5
    return forkedRepos
}

// calculates the 10 most latest starred repos
export const calculateLatestMostStarredRepos = (
    repositories:Repository[]
):{
    repo:string,
    stars:number
}[] =>{
    const starredRepos = repositories.map((repo)=>{
        return{
            repo:repo.name,
            stars:repo.stargazerCount
        }
    })
    .sort((a,b) => b.stars - a.stars)//decreasing repo fork count
    .slice(repositories.length-10,repositories.length) //getting the top 5
    return starredRepos
}

// Top 5 most used programming languages across all repos
export const calculatePopularLanguages = (repositories:Repository[]):{
    language:string,
    count:number
}[] =>{
    if(repositories.length === 0) return [];
    const languageMap:{[key:string]:number} = {}//its a map that holds the languages as the key and used number as the value
    repositories.forEach((repo)=>{
        if(repo.languages.edges.length === 0) return;
        repo.languages.edges.forEach((language)=>{
            const {name} = language.node
            languageMap[name] = (languageMap[name] || 0) + 1;//map.set(map.getOrDefault,0)+1 for each language used in the current repo
        })
    })
    if(Object.keys(languageMap).length === 0) return []
    return (
        Object.entries(languageMap)
        .sort(([,a],[,b])=>b-a)//decreasing from most used 
        .slice(0,10)
        .map(([language,count])=>({language,count}))//returns a map containing the languages and their respective counts(no of times they were used)
    )
}