import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Select = () => {
    const { register, handleSubmit, watch } = useForm();

    const data = ['볼보', '벤츠', '토요타', '렉서스', '폭스바겐', '포르쉐'];
    const [rowCar, setRowCar] = useState([]);
    const selectWatch = watch('cars');

    useEffect(() => {
        setRowCar(data);
    }, []);

    // 제출
    const onSubmit = (formData) => {
        formData.cars = rowCar;
        console.log(formData);
    }

    // 삭제를 위한 select 값 감지

    const onDelete = () => {
        if(selectWatch.length === 0){
            alert('비었습니다.')
        } else {
            if(selectWatch.length === rowCar.length){
                setRowCar([]);
            } else {
                const filteredRow = rowCar.filter((item) => !selectWatch.includes(item));
                setRowCar(filteredRow);
            }
        }
    }

    return (
        <>
            <h1 style={{ padding: '1rem 2rem', boxSizing: 'border-box' }}>Select Page.</h1>

            <label htmlFor="cars">Choose a car:</label>

            <form onSubmit={handleSubmit(onSubmit)}>
                <select id="cars" {...register('cars')} multiple>
                {rowCar.length > 0 ? 
                    rowCar.map((item, index) => {
                        return (
                            <option key={index} value={item}>{item}</option>
                        )
                    })
                    :
                    <option value=''>비었음</option>
                }    
                </select>
                <button type='submit'>콘솔</button>
                <button type='button' onClick={onDelete}>제거</button>
            </form>
        </>
    )
}

export default Select;