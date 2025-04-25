import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { getCities, DeleteCity } from "../../../Services/CityServices";
import { ICity } from "../../../Utils/Interfaces";
import CityView from "./City.view";

const CityLogic: React.FC = () => {

    const [cityData, setCityData] = React.useState<ICity[]>([]);
    const [cityId, setCityId] = React.useState<number>(0);
    const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

    useEffect(() => {
        const fetchCities = async () => {
            const data: ICity[] = await getCities(null);
            setCityData(data);
            setIsSuccess(false);
        }
        fetchCities();
    }, [isSuccess]);

    const onDeleteClick = async (cityId: number) => {
        Swal.fire({
            title: "Are you sure you want to delete this city?",
            text: "This will delete your all dependant data as well",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await DeleteCity(cityId).then((data) => {
                    if (data) {
                        setIsSuccess(true);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "City deleted successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
            }
        });
    }


    return (
        <>
            <CityView
                cityId={cityId}
                setIsSuccess={setIsSuccess}
                setCityId={setCityId}
                cityData={cityData}
                onDeleteClick={onDeleteClick}
            />
        </>
    )
}

export default CityLogic;