import type { Row } from "../../types/row";
import type { SelectedItem } from "../../types/selected";

type Props = {
    row: Row;
    setSelectedItem: React.Dispatch<React.SetStateAction<SelectedItem>>;
};

function RowView({ row, setSelectedItem }: Props) {
    return (
        <div className="row">
            {row.columns.map((col) => (
                <div
                    key={col.id}
                    className={`col-${12 / row.columns.length} d-flex justify-content-center align-items-center`}
                    style={{ 
                        backgroundColor: "yellow", 
                        minHeight: "80px", 
                        border: "1px solid gray" 
                    }}
                    onClick={() => 
                        setSelectedItem({
                            type: "column",
                            rowId: row.id,
                            columnId: col.id
                        })
                    }
                >
                    {col.components.length === 0 ? (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedItem({
                                    type: "column",
                                    rowId: row.id,
                                    columnId: col.id
                                });
                            }}
                        >
                            +
                        </button>
                    ) : (
                        <div>
                            Components will render here.
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default RowView;