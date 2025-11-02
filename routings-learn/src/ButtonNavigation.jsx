import { useNavigate } from "react-router-dom";

function ButtonNavigation() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        // Perform form submission logic here
navigate('/success');// Navigate to the success page after submission
    };
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
}
export default ButtonNavigation;