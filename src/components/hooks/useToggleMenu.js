import { useState } from "react"


export const useToggleMenu = () => {
    const [show, setShow] = useState({
        mobileMenu: false,
    });
    const { mobileMenu } = show;
    const handleToggleBar = () => {
        setShow({
            ...show,
            mobileMenu: !mobileMenu,
        })
    }

    return {
        mobileMenu,
        handleToggleBar,
    }
}
