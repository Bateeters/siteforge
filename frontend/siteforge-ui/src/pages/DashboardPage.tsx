import { useState } from "react";
import { Link } from "react-router-dom";

type Website = {
    id: number;
    name: string;
    lastUpdated: string;
}

function DashboardPage() {
    const [showCreateWebsiteForm, setShowCreateWebsiteForm] = useState(false);
    const [websiteData, setWebsiteData] = useState({
        name: ""
    });

    const [websites, setWebsites] = useState<Website[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setWebsiteData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCreateWebsite = (e: React.SubmitEvent<HTMLFormElement>) => {
        const isValidName = websiteData.name.trim() !== "";
        e.preventDefault();

        if (!isValidName) {
            console.log("Website name is required and must contain only letters and spaces.");
        }
        else
        {
            console.log(`Website Created: ${websiteData.name}`);
            setWebsites(prevWebsites => [
                ...prevWebsites,
                {
                    id: prevWebsites.length, // TODO: Replace with actual ID from backend
                    name: websiteData.name,
                    lastUpdated: new Date().toISOString().split('T')[0]
                }
            ])
            setShowCreateWebsiteForm(false);
        }
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