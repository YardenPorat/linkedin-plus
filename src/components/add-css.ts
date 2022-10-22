import { filterMainClass, filterSvgClass } from '../const';

export const addCss = () => {
    document.head.insertAdjacentHTML(
        'beforeend',
        `<style>
              .${filterMainClass} {
                  border-radius: 50px;
                  position: absolute;
                  right: 46px;
                  top: 4px;
                  z-index: 1;
                  cursor: pointer;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 3.2rem;
                  width: 3.2rem;
              }
          
              .${filterMainClass}:hover {
                  background-color: rgb(235,235,235);
              }
              .${filterMainClass}:active {
                  background-color: #D9D9D9;
              }
  
              .${filterSvgClass} {
                  z-index: 0;
                  height: 20px;
                  fill: #797979;
              }
              </style>`.trim()
    );
};
