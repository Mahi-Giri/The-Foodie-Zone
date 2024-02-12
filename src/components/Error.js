import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <p>{err}</p>
            <p>Oops! </p>
            <p>Something went wrong!!</p>
        </div>
    );
};

export default Error;
