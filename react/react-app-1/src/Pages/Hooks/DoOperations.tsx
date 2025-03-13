import { memo } from "react";

interface IOperationsProps {
    operations: string[];
    doOperation: () => void;
}

const DoOperations: React.FC<IOperationsProps> = (props: IOperationsProps) => {
    const { operations, doOperation }: IOperationsProps = props;
    console.log("operations", operations);
    return (
        <>

            <button className="btn btn-danger" type="button" onClick={doOperation}>Do Operation</button>

            {
                operations.map((optr: string, index: number)=>{
                    return <p key={`opertaion-${index}`}>operation is : {optr}</p>
                })
            }

        </>
    )
}

export default memo(DoOperations);