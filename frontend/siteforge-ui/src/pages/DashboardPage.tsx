import { Link } from "react-router-dom";

function DashboardPage() {
    const websites = [
        { 
            id: 1,
            name: "Porfolio Website",
            lastUpdated: "2026-05-15"
        },
        {
            id: 2,
            name: "Food Chain Rumble",
            lastUpdated: "2026-04-11"
        },
        {
            id: 3,
            name: "Test Site",
            lastUpdated: "2026-03-20"
        }
    ]
    return (
        <>
            <h1>Welcome (FirstName)</h1>
            <button>Create Website</button>

            <h2>Your Websites</h2>
            {/* Each card should link to "/editor/:siteid" */}
            {websites.map((site) => (
                <div key={site.id}>
                    <h3>{site.name}</h3>
                    <h5>Last Updated: {site.lastUpdated}</h5>
                    <Link to={`/editor/${site.id}`}>Open</Link>
                </div>
            ))}
        </>
    );
}

export default DashboardPage;