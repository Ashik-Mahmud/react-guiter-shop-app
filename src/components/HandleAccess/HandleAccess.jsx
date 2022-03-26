import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HandleAccess = () => {
  const navigate = useNavigate();
  const sessionUsername = sessionStorage.getItem("user");
  useEffect(() => {
    if (!sessionUsername) {
      navigate("/login");
    }
  }, [navigate, sessionUsername]);

  return null;
};

export default HandleAccess;
