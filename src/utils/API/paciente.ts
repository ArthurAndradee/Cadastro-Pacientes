import axios from "axios";
import { Paciente } from "../interfaces/paciente/paciente";

export const getPatients = async (): Promise<Paciente[]> => {
    try {
      const response = await axios.get('urgetrauma.pulseti.com:9000/');
      return response.data;
    } catch (error) {
      console.error('Erro requisitando pacientes: ', error);
      return [];
    }
  };