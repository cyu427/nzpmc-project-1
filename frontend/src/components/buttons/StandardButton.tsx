import React from 'react';
import { Button } from '@mui/material';

const templateButtonStyle = {
    borderRadius: 100,
    textTransform: 'none',
    fontSize: '13px',
    padding: '9px 10px',
    width: '120px',
    height: '40px',
    border: '1px solid black',
    fontWeight: '550'
};

const blueButtonStyle = {
    backgroundColor: '#285DE5',
    color: 'white',
    border: '2px solid #285DE5',
    '&:hover': {
        backgroundColor: 'white',
        color: '#285DE5',
    },
};

const whiteButtonStyle = {
    backgroundColor: 'white',
    color: '#285DE5',
    '&:hover': {
        backgroundColor: '#1C4BB9',
        color: 'white',
    },
};

interface StandardButtonProps {
    label: string;
    buttonColor: 'blue' | 'white';
}

const AuthorisationButton: React.FC<StandardButtonProps> = ({ label, buttonColor }) => {
    // Conditionally apply the styles based on the buttonType
    let buttonColorStyle;
    switch (buttonColor) {
        case 'blue':
            buttonColorStyle = {...blueButtonStyle};
            break;
        case 'white':
            buttonColorStyle = {...whiteButtonStyle}
    }

    return (
        <div>
            <Button type="submit" sx={{...templateButtonStyle,  ...buttonColorStyle}}>
                {label}
            </Button>
        </div>
    );
};

export default AuthorisationButton;