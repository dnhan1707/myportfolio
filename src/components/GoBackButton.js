import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

function GoBackButton() {
    return (
        <div className="fixed top-6 left-6 z-50">
            <Link to="/" className="group flex items-center space-x-2 bg-gray-900 bg-opacity-60 hover:bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-800 hover:border-purple-400 transition-all duration-300 transform hover:translate-y-[-2px] shadow-md">
                <FaArrowLeft className="text-purple-400 group-hover:translate-x-[-2px] transition-transform duration-300" />
                <span className="font-medium">Home Page</span>
            </Link>
        </div>
    );
}

export default GoBackButton;