import { createContext, useState, useEffect } from "react";
import * as api from '../helper/api';
export const DropDownContext = createContext();

// eslint-disable-next-line react/prop-types
export const DropDownProvider = ({ children }) => {
  const [optionsCategory, setOptionsCategory] = useState([])
  const [optionsState, setOptionsState] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getCategories = async () => {
      try{
        const categories = await api.getCategories(signal);
        setOptionsCategory(categories.map((category) => ({
          label: category.nombre,
          value: category.id,
        })));
        setLoading(false);
      }catch(error){
        console.error('Error al obtener las categorias:', error);
        setOptionsCategory([{label:'',value:''}]);
      }
    }
    const getStates = async () => {
      try{
        const states = await api.getStates(signal);
        setOptionsState(states.map((state) => ({
          label: state.nombre,
          value: state.id,
        })));
      }catch(error){
        console.error('Error al obtener los estados:', error);
        setOptionsState([{label:'',value:''}]);
        setLoading(false);
      }
    }
    getCategories();
    getStates();
    return () => {
      controller.abort();
    }
  }, []);
  return (
    <DropDownContext.Provider value={{ optionsCategory, optionsState, loading }}>
      {children}
    </DropDownContext.Provider>
  )

}