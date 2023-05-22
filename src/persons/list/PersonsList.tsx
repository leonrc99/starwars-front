import { useEffect, useState } from 'react';
import axios from 'axios';
import './PersonsList.scss';
import DATA_MOCK from '../../data/mock';

interface Data {
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

    return (
        <div className="data-list">
            <h2>Lista de Dados</h2>
            {DATA_MOCK.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Gênero</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DATA_MOCK.map((data) => (
                            <tr key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Nenhum dado encontrado.</p>
            )}
        </div>
    );

}

export default PersonsList;