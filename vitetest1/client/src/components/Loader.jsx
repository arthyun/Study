import React from 'react';

const Loader = () => {

    return(
        <div class="spinner">
            <div class="spinner1"></div>
            <style jsx='true'>
            {`
                .spinner {
                    background-image: linear-gradient(rgb(186, 66, 255) 35%,rgb(0, 225, 255));
                    width: 100px;
                    height: 100px;
                    animation: spinning82341 1s linear infinite;
                    text-align: center;
                    border-radius: 50px;
                    filter: blur(1px);
                    box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
                    position: absolute;
                    top: 42.5%;
                    left: 50%;
                }
                .spinner1 {
                    background-color: rgb(36, 36, 36);
                    width: 100px;
                    height: 100px;
                    border-radius: 50px;
                    filter: blur(10px);
                }
                @keyframes spinning82341 {
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}
            </style>
        </div>
    )
}

export default Loader;