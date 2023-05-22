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
                setFormData({
                    name: '',
                    height: '',
                    mass: '',
                    hair_color: '',
                    eye_color: '',
                    birth_year: '',
                    gender: '',
                    homeworld: '',
                    profile_image: ''
                })

                alert('Formulário enviado com sucesso!');
            }
        } catch (error) {
            alert('Erro ao enviar o formulário.');
            console.error('Erro ao enviar o formulário: ', error);
        }
    };

    return (
        <div className="form-div">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="title">Cadastro de <br />Personagens</h2>
                
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={formData.name}
                        onChange={handleChange}
                    />
                
                    <input
                        className="form-input"
                        type="text"
                        name="height"
                        placeholder="Altura"
                        value={formData.height}
                        onChange={handleChange}
                    />
                
                    <input
                        className="form-input"
                        type="text"
                        name="mass"
                        placeholder="Peso"
                        value={formData.mass}
                        onChange={handleChange}
                    />
                
                    <input
                        className="form-input"
                        type="text"
                        name="hair_color"
                        placeholder="Cor do cabelo"
                        value={formData.hair_color}
                        onChange={handleChange}
                    />
                
                    <input
                        className="form-input"
                        type="text"
                        name="eye_color"
                        placeholder="Cor do olho"
                        value={formData.eye_color}
                        onChange={handleChange}
                    />
                
                    <input
                        className="form-input"
                        type="text"
                        name="birth_year"
                        placeholder="Ano de nascimento"
                        value={formData.birth_year}
                        onChange={handleChange}
                    />
                
                    <input
                        className="form-input"
                        type="text"
                        name="gender"
                        placeholder="Gênero"
                        value={formData.gender}
                        onChange={handleChange}
                    />
                
                    <input
                        className="form-input"
                        type="text"
                        name="homeworld"
                        placeholder="Mundo natal"
                        value={formData.homeworld}
                        onChange={handleChange}
                    />
                
                    <input
                        className="form-input"
                        type="text"
                        name="profile_image"
                        placeholder="Imagem de perfil"
                        value={formData.profile_image}
                        onChange={handleChange}
                    />
                
                <div className="btn">
                    <input type="submit" name="botao" value="Enviar" className="btn-submit" />
                </div>
            </form>
        </div>
    );
}

export default PersonsForm;