import Link from 'next/link';
import React from 'react';

const LightButton = ({ text, linkTo }) => {
    return (
        <button className="lightBtn">
            <Link href={linkTo}>{text}</Link>
        </button>
    );
};

export default LightButton;
