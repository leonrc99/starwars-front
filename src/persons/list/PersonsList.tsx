import { useEffect, useState } from 'react';
import axios from 'axios';
import './PersonsList.scss';
import DATA_MOCK from '../../data/mock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export interface Data {
    id: number;
    name: string;
    gender: string;
}

function PersonsList() {
    const [dataList, setDataList] = useState<Data[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3030/persons');

            if (response.status === 200) {
                setDataList(response.data);
            } else {
                console.error('Erro ao buscar os dados.');
            }
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };

    const deleteItem = async (id: number) => {
        try {
            const response = await axios.delete(`http://localhost:3030/person/${id}`);

            if (response.status === 200) {
                alert('Dado excluído com sucesso!');
                // Atualizar a lista de dados após a exclusão
                fetchData();
            } else {
                alert('Erro ao excluir o dado.');
            }
        } catch (error) {
            alert('Erro ao excluir o dado.');
            console.error('Erro ao excluir o dado:', error);
        }
    };

    return (
        <div className="data-list">
            <h2 className='title-table'>Lista de Personagens</h2>
            {DATA_MOCK.length > 0 ? (
                <table className='persons-table'>
                    <thead>
                        <tr>
                            <th className='item-title'>Nome</th>
                            <th className='item-title'>Gênero</th>
                            <th className='item-title'></th>
                            <th className='item-title'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {DATA_MOCK.map((data) => (
                            <tr className='item' key={data.id}>
                                <td className='item-info'>{data.name}</td>
                                <td className='item-info'>{data.gender}</td>
                                <td className='item-edit'> <FontAwesomeIcon icon={faPenToSquare} /> </td>
                                <td className='item-delete'>
                                    <FontAwesomeIcon icon={faTrash} onClick={() => deleteItem(data.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>                
            ) : (
                <p className='not-found'>Nenhum dado encontrado.</p>
            )}
            <button className='btn'>Cadastrar Personagem</button>
        </div>
    );

}

export default PersonsList;