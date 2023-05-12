import axios from "axios";
import { FormEvent, useState } from "react";

import './PersonForm.scss'

const PersonsForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        height: '',
        mass: '',
        hair_color: '',
        eye_color: '',
        birth_year: '',
        gender: '',
        homeworld: '',
        profile_image: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3030/person',
                formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                // Sucesso! Você pode adicionar o código aqui para lidar com o envio bem-sucedido do formulário.
                console.log('Formulário enviado com sucesso!');
            } else {
                // Algo deu errado. Você pode adicionar o código aqui para lidar com o erro.
                console.error('Erro ao enviar o formulário.');
            }
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
        }
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Meu Formulário</h2>
                <label>
                    Nome:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Altura:
                    <input
                        type="text"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Peso:
                    <input
                        type="text"
                        name="mass"
                        value={formData.mass}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cor do Cabelo:
                    <input
                        type="text"
                        name="hair_color"
                        value={formData.hair_color}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cor do Olho:
                    <input
                        type="text"
                        name="eye_color"
                        value={formData.eye_color}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Ano de Nascimento:
                    <input
                        type="text"
                        name="birth_year"
                        value={formData.birth_year}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Gênero:
                    <input
                        type="text"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Planeta Natal:
                    <input
                        type="text"
                        name="homeworld"
                        value={formData.homeworld}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Imagem de Perfil:
                    <input
                        type="text"
                        name="profile_image"
                        value={formData.profile_image}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default PersonsForm;