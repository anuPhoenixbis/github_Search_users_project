import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { FormEvent, useState } from 'react'
import { toast } from 'sonner';

type SearchFormProps = {
    userName:string,
    setUserName:React.Dispatch<React.SetStateAction<string>>;//dispatch function type of useState 
}

function SearchForm({userName,setUserName}:SearchFormProps) {
    const [text,setText] = useState(userName)
    const handleSearch = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(text === ''){
            toast('Please give a valid Username')
            return;
        }
        setUserName(text)
    }
  return (
    <form onSubmit={handleSearch} className='flex items-center gap-x-2 w-full lg:w-1/3 mb-8'>
        <Label htmlFor='search' className='sr-only'>Search</Label>
        <Input 
            type='text' 
            id='search' 
            value={text} 
            onChange={(e)=> setText(e.target.value)} 
            placeholder='Search Github Users...'
            className='grow bg-background'
            />
            <Button type='submit'>Search</Button>
    </form>
  )
}

export default SearchForm
/**
 * GraphQL is a modern query language and runtime for APIs that allows clients to request specific data they need and nothing more. Unlike traditional REST APIs where you get fixed data from multiple endpoints, GraphQL provides a single endpoint where you can specify exactly what data you want to receive.

- **Schema**: The blueprint that defines all available data types and operations in your API
- **Query**: A request to read or fetch data (similar to GET in REST)
- **Mutation**: A request to create, update, or delete data (similar to POST/PUT/DELETE in REST)
- **Fields**: The individual pieces of data you can request (like user.name or post.title)
- **Arguments**: Parameters you can pass to fields to filter or modify the results (like limit: 10)
- **Types**: The different kinds of data objects available (like User, Post, Comment)
- **Nodes**: Objects in a GraphQL schema that have a unique identifier, typically representing entities in your data model (like a specific user or post)
 */