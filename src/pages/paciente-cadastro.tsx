import { useState } from 'react';
import { postPatient } from '../utils/API/paciente';
import { Paciente } from '../utils/interfaces/paciente/paciente';
import './paciente-cadastro.css'

function PacienteCadastro() {
    const [formData, setFormData] = useState<Paciente>({
        cpf: '',
        dataNascimento: '',
        email: '',
        idConvenio: 0,
        nome: '',
        sexo: '',
        telefone: ''
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log(formData)
        try {
          const token = process.env.REACT_APP_TOKEN; 
          if (token) {
            const response = await postPatient(formData, token);
            console.log('Paciente salvo com sucesso:', response);
          } else {
            console.error('Token não encontrado');
          }
        } catch (error) {
          console.error('Erro ao salvar o paciente:', error);
        }
      };
    
      return (
        <div className="container p-5 d-flex flex-column align-items-center">
          <h2>Cadastro de Paciente</h2>
          <form onSubmit={handleSubmit} className="form-group w-75">
            <label htmlFor="cpf" className="form-label">CPF</label>
            <input type="text" className="form-control mb-1" id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} required />
            
            <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
            <input type="text" className="form-control mb-1" id="dataNascimento" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} placeholder="DDMMYYYY" required />
            
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control mb-1" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="idConvenio" className="form-label">ID Convenio</label>
            <input type="number" className="form-control mb-1" id="idConvenio" name="idConvenio" value={formData.idConvenio} onChange={handleChange} required />

            <label htmlFor="nome" className="form-label">Nome</label>
            <input type="text" className="form-control mb-1" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />

            <label htmlFor="sexo" className="form-label">Sexo</label>
            <select className="form-select" id="sexo" name="sexo" value={formData.sexo} onChange={handleChange} required >
              <option value="">Selecione</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
              <option value="Outro">Outro</option>
            </select>

            <label htmlFor="telefone" className="form-label">Telefone</label>
            <input type="text" className="form-control mb-4" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required/>

            <button type="submit" className="btn btn-primary w-100">Salvar Paciente</button>
          </form>
        </div>
      );
}

export default PacienteCadastro;