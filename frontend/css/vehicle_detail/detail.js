const vehicleNo = document.getElementById('vehicle');
const sumit = document.getElementById('submit');
const name = document.getElementById('name');

sumit.addEventListener("click", async ()=>{
    let no=vehicleNo.value;
    no=no.toUpperCase()
    const data = await fetchData(no);
    console.log(data)
    name.value=data.owner_name;
    fuel.value=data.fuel_type;
    permit_issue_date.value=data.permit_issue_date;
    permit_type.value=data.permit_type;
    permit_validity.value=data.Permit_validity;
    status.value=data.status;
    rto.value=data.RTO_Name;
    Registration_Date.value=data.Registration_Date;
    Registration_Number.value=data.Registration_Number;
    vehicle_class.value=data.vehicle_class;
    Maker_Model.value=data.Maker_Model;
    Insurance_Details.value=data.Insurance_Details;
    Insurance_Validity.value=data.Insurance_Validity;
    Mv_Tax_Upto.value=data.Mv_Tax_Upto;
    Avg_Gross_Vehicle_Weight.value=data.Avg_Gross_Vehicle_Weight;
    Chasis_Number.value=data.Chasis_Number;
    Color.value=data.Color;
    emission_norms.value=data.emission_norms;
    engine_number.value=data.engine_number;
    fitness_upto.value=data.fitness_upto;
})    

const fetchData = async (vehicle='GJ09BD8896') => {
    const url = 'https://vehicle-rc-verification.p.rapidapi.com/v3/tasks/sync/verify_with_source/ind_rc_basic';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '1f69b743e4msh244d1e67df50b11p151a0fjsn545da79585cc',
            'X-RapidAPI-Host': 'vehicle-rc-verification.p.rapidapi.com'
        },
        body: JSON.stringify({
            task_id: '74f4c926-250c-43ca-9c53-453e87ceacd1',
            group_id: '8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e',
            data: {
                rc_number: vehicle
            }
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.result.extraction_output;
    } catch (error) {
        console.error(error);
    }
}