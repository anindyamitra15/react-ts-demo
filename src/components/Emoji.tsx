import { FC, useContext } from 'react';
import { MoodContext } from '../App';

const Emoji: FC = () => {
    const context = useContext(MoodContext);
    return (
        <>
            <p>Value is coming from Emoji component through context: {context.happy}</p>
        </>
    );
};

export default Emoji;
