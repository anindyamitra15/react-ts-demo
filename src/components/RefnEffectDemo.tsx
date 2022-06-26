import { FC, useEffect, useRef } from 'react';

const RefnEffectDemo: FC = () => {
    const BlinkerDivRef = useRef<HTMLDivElement>(null);


    useEffect(() => {

        const interval = setInterval(() => {
            if (BlinkerDivRef.current)
                BlinkerDivRef.current.hidden = !BlinkerDivRef.current.hidden; // FIXME: this wion't work on flex elements

        }, 1000);

        return () => {
            // cleanup code (run during component destruction)
            clearInterval(interval);
        };

    }, []);


    return (
        <>
            <div className="blinker" ref={BlinkerDivRef}>useEffect used</div>

        </>
    )
}

export default RefnEffectDemo;
