import axios from "axios";
import { Paciente } from "../interfaces/paciente/paciente";

export const postPatient = async (patient: Paciente): Promise<Paciente | null> => {
    try {
      const token = process.env.TOKEN; 
      if (!token) {
        throw new Error('Token not found in .env file');
      }
  
      const response = await axios.post('http://urgetrauma.pulseti.com:9000/paciente/save', 
        patient, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao salvar o paciente: ', error);
      return null;
    }
  };