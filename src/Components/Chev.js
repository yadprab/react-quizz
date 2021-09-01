import React from 'react'

function Chev() {
    return (
      <>
        <svg
          width={19}
          height={20}
          viewBox="0 0 19 20"
          fill="none"
          id='chev'
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M9.5 0.5C4.25329 0.5 0 4.75329 0 10C0 15.2467 4.25329 19.5 9.5 19.5C14.7467 19.5 19 15.2467 19 10C19 4.75329 14.7467 0.5 9.5 0.5ZM8.32977 15.3488L7.44249 14.4644L11.8924 10L7.44249 5.53558L8.32977 4.65123L13.6611 10L8.32977 15.3488Z"
              fill="#FCFDFD"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width={19}
                height={19}
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </>
    );
}

export  {Chev}
