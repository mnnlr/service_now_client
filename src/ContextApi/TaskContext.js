import React, { createContext, useState, useContext } from 'react';


const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [formData,setFormData] = useState({
        caller:"",
        shortdescription:"",
    })
    const [errors, setErrors] = useState({});
   

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({...errors, [name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let errors = {};
        if (!formData.caller) {
            errors.caller = "Caller is required";
        }
        if (!formData.shortdescription) {
            errors.shortdescription = "Shortdescription is required";
        }
            setErrors(errors);
      
        }

    return (
        <TaskContext.Provider value={{ formData, errors, handleChange, handleSubmit }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    const context = useContext(TaskContext);

    if(context === undefined){
        throw new Error('create in the AuthState')
    }
    
    return context;
}
  