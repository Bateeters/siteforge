import type { Row } from "../../types/row";
import type { SelectedItem } from "../../types/selected";

type Props = {
    row: Row;
    setSelectedItem: React.Dispatch<React.SetStateAction<SelectedItem>>;
    selectedItem: SelectedItem;
};

function RowView({ row, setSelectedItem, selectedItem }: Props) {
    const isSelected = (columnId: number) => {
        return (
            selectedItem?.type === "column" &&
            selectedItem.rowId === row.id &&
            selectedItem.columnId === columnId
        );
    };

    return (
        <div className="row">
            {row.columns.map((column) => (
                <div
                    key={column.id}
                    className={`col-${12 / row.columns.length} d-flex justify-content-center align-items-center`}
                    style={{ 
                        backgroundColor: "yellow", 
                        minHeight: "80px", 
                        border: isSelected(column.id)
                            ? "7px solid rgba(10, 68, 5, 0.5)"
                            : "3px solid rgba(0,0,0,0.25)",
                        position: "relative" 
                    }}
                    onClick={() => 
                        setSelectedItem({
                            type: "column",
                            rowId: row.id,
                            columnId: column.id
                        })
                    }
                >
                    {column.components.length === 0 ? (
                        /* EMPTY COLUMN STATE */
                        <button
                            className="btn btn-primary"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedItem({
                                    type: "column",
                                    rowId: row.id,
                                    columnId: column.id
                                });
                            }}
                            style={{
                                position: "absolute"
                            }}
                        >
                            +
                        </button>
                    ) : (
                        /* Future: Render components here */
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