import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h2>Page Not Found</h2>
            <Link exact='true' to="/">
                Back to Home
            </Link>
        </div>
    );
}