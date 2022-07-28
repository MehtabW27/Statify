import { useState } from "react";

const ModalClass = () => {
    const [isOpen, setIsOpen] = useState(false);
    function toggle() {
        setIsOpen(!isOpen);
    }
    return {isOpen, toggle};
}

export default ModalClass;

