export interface Paciente {
    cpf: string;
    dataNascimento: string; // exemplo: 06052005
    email: string;
    idConvenio: number; // Int32
    nome: string;
    sexo: string, // M, F ou Outro
    telefone: string,
}

// export interface PacienteUpdate {
//     id: number;
//     paciente: Paciente;
// }