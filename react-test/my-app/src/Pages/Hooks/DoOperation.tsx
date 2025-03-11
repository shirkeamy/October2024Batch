import { memo } from "react";

interface IOperationPorps {
    operations: string[];
    doOperation: () => void;
}

const DoOperation: React.FC<IOperationPorps> = (props: IOperationPorps) => {
    const { operations, doOperation }: IOperationPorps = props;

    console.log(operations);
    return (
        <>
            <button className="btn btn-success" onClick={doOperation}>Do Operation</button>

            {
                operations.map((opr: string, index: number) => {
                    return <p key={index}>{`You did operation: ${opr} number ${index+1}`}</p>
                })
            }
        </>
    )
}

export default memo(DoOperation);