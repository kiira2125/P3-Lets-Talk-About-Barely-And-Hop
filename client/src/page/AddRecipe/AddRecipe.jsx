import React from 'react';
import { userAtom } from '../../App';
import {useAtom } from 'jotai'
import RecipeForm from './../../components/RecipeForm';

const AddRecipe = () =>{
    const [user] = useAtom(userAtom)
  
    return (<>
        {
            user ? <RecipeForm/> : <SignAlert />
        }
    </>)
}
export default AddRecipe;