import "@passageidentity/passage-elements/passage-auth";
import { useEffect, useRef } from "react";

function Home() {
    const ref = useRef();

    const beforeAuth = (phone) =>{
        console.log(phone);
        return true;
      }

    useEffect(() => {
        const {current} = ref;
        current.beforeAuth = beforeAuth;
        return () => {}
    });

    return (
        <passage-auth ref={ref} app-id={process.env.REACT_APP_PASSAGE_APP_ID}></passage-auth>
    );
}

export default Home;