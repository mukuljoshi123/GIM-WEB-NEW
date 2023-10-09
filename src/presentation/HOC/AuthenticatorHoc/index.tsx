import React, { ComponentType } from 'react';
import "./styles.less";

interface AuthenticatorProps {
}

const AuthenticatorHOC = <IProps extends AuthenticatorProps>(
    WrappedComponent: ComponentType<IProps>
) => {
    return (props: IProps) => (
        <div className='authenticatorHoc__container'>
            <div className='left_child'>
                <span className='logo'>Logo</span>
                <span className='digital_image'>Digital Image</span>
            </div>
            <div className='right_child'>
                <WrappedComponent {...props} />
            </div>
        </div>
    );
};

export default AuthenticatorHOC;
