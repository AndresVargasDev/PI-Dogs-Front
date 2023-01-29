const TemperamentsFilter = ({ form, temperamentsSorted, temperamentsHandler }) => {

    return (
        <div>
            <select onChange={temperamentsHandler}>
                <option disabled value="Selecciona temperamento a filtrar" selected> Selecciona temperamento a filtrar</option>
                {temperamentsSorted.map((temp) => {
                    return (
                        <option key={temp.id} name={temp.name}>
                            {temp.name}
                        </option>
                    );
                })}
            </select>
            <div>
                <h4>Temperamentos seleccionados: </h4>
                {form.temperaments.map((el) => (
                    <div key={el}>
                        <p>{el}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TemperamentsFilter;