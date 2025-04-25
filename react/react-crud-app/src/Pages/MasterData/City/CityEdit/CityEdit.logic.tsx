import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { getCities, SaveUpdateCity } from "../../../../Services/CityServices";
import { GetStates } from "../../../../Services/StateServices";
import { ICityPostData, IState, ICity } from "../../../../Utils/Interfaces";
import CityEditView from "./CityEdit.view";

interface ICityEditLogicProps {
    cityId: number;
    setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

const CityEditLogic: React.FC<ICityEditLogicProps> = (props: ICityEditLogicProps) => {

    const { cityId, setIsSuccess }: ICityEditLogicProps = props;

    const emptyEditData: ICityPostData = {
        cityId: 0,
        cityName: "",
        stateId: 0
    }

    const [stateData, setStateData] = React.useState<IState[]>([]);
    const [cityEditData, setCityEditData] = React.useState<ICityPostData>(emptyEditData)

    useEffect(() => {
        const fetchStates = async () => {
            const data: IState[] = await GetStates(null);
            setStateData(data);
        }

        fetchStates();
    }, []);

    useEffect(() => {
        if (cityId > 0) {
            const fetchCities = async () => {
                const data: ICity[] = await getCities(cityId);
                setCityEditData(data[0]);
            }
            fetchCities();
        }
    }, [cityId]);

    const onSaveClick = async () => {
        await SaveUpdateCity(cityEditData).then((data) => {
            if (data) {
                setIsSuccess(true);
                setCityEditData(emptyEditData);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "City Added successfully!",
                    showConfirmButton: false,
                    timer: 2000
                });
            } else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "City not added successfully!",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        })
    }


    return (
        <>
            <CityEditView
                cityEditData={cityEditData}
                setCityEditData={setCityEditData}
                stateData={stateData}
                setIsSuccess={setIsSuccess}
                onSaveClick={onSaveClick}
            />
        </>
    )
}

export default CityEditLogic;