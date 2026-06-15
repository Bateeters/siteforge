import type { Row } from "../../types/row";
import type { SelectedItem } from "../../types/selected";

type Props = {
    row: Row;
    setSelectedItem: React.Dispatch<React.SetStateAction<SelectedItem>>;
};

function getColumnClass(count: number) {
    if (count === 1) return "col-12";
    if (count === 2) return "col-6";
    return "col-4";
}

function RowView({ row, setSelectedItem }: Props) {
    return (
        <div className="row">
            {row.columns.map((col) => (
                <div
                    key={col.id}
                    className={`d-flex ${getColumnClass(row.columns.length)} justify-content-center align-items-center`}
                    style={{ backgroundColor: "yellow", minHeight: "80px" }}
                    onClick={() => 
                        setSelectedItem({
                            type: "column",
                            rowId: row.id,
                            columnId: col.id
                        })
                    }
                >
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
                </div>
            ))}
        </div>
    );
}

export default RowView;