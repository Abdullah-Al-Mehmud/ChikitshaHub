import { useEffect, useState } from 'react';
const MoreSpecialties = () => {
    const [specialtiesData, setSpecialtiesData] = useState([]);

    useEffect(() => {
        fetch('../../../public/specialtiesData.json')
            .then(res => res.json())
            .then(data => setSpecialtiesData(data))
    }, [])
    return(
        <div>
           {
            specialtiesData.map(special=>)
           }
        </div>
    )}
export default MoreSpecialties;