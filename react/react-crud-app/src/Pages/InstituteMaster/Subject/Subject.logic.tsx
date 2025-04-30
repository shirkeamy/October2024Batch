import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { GetStates, DeleteState } from "../../../Services/StateServices";
import { IState, ISubject } from "../../../Utils/Interfaces";
import SubjectView from "./Subject.view";
import { DeleteSubject, GetSubjests } from "../../../Services/InstituteServives";

const SubjectLogic: React.FC = () => {

    const [subjectData, setSubjectData] = useState<ISubject[]>([]);
    const [subjectId, setSubjectId] = useState<number>(0);
    const [isSaved, setIsSaved] = useState<boolean>(false);

    useEffect(() => {
        const fetchSubject = async () => {
            const data: ISubject[] = await GetSubjests();
            setSubjectData(data);
            setIsSaved(false);
        }

        fetchSubject();
    }, [isSaved])

    const onDeleteClick = async (subjectId: number) => {
        Swal.fire({
            title: "Are you sure you want to delete this subject?",
            text: "This will delete your all dependant data as well",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await DeleteSubject(subjectId).then((data) => {
                    if (data) {
                        setIsSaved(true);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "subject deleted successfully!",
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
            <SubjectView
                subjectId={subjectId}
                subjectData={subjectData}
                setIsSaved={ setIsSaved }
                setSubjectId={ setSubjectId }
                onDeleteClick={ onDeleteClick }
            />
        </>
    )
}

export default SubjectLogic;