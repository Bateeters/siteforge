import { useState } from "react";
import { Link } from "react-router-dom";

function DashboardPage() {
    const [showCreateWebsiteForm, setShowCreateWebsiteForm] = useState(false);
    const [websiteData, setWebsiteData] = useState({
        name: ""
    });

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
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setWebsiteData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCreateWebsite = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Website Created: ${websiteData.name}`);
        setShowCreateWebsiteForm(false);
        setWebsiteData({ name: "" });
    };

    return (
        <>
            <h1>Welcome (FirstName)</h1>
            <button type="button" onClick={() => setShowCreateWebsiteForm(true)}>Create Website</button>

            {showCreateWebsiteForm ? 
                <div>
                    <form onSubmit={handleCreateWebsite}>
                        <label>Site Name:</label>
                        <input
                            type="text"
                            placeholder="Website Name"
                            name="name"
                            value={websiteData.name}
                            onChange={handleChange}/>
                        <button type="submit">Create</button>
                        <button type="button" onClick={() => setShowCreateWebsiteForm(false)}>Cancel</button>
                    </form>
                </div> 
            : null}

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