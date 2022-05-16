import React, { useEffect, useState } from "react";
export const ReactNativeRecoilPersistGate = ({ store, children, fallback, onInit, }) => {
    const [hasLoaded, setHasLoaded] = useState(false);
    useEffect(() => {
        store.init().then(() => {
            setHasLoaded(true);
            onInit && onInit();
        });
    }, []);
    return <>{hasLoaded ? children : fallback || null}</>;
};
//# sourceMappingURL=PersistGate.js.map