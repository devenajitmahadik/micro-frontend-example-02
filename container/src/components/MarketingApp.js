import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
        return () => {
            // cleanup function to avoid 2 initial renders
        }
    }, []);

    return <div ref={ref} />
};