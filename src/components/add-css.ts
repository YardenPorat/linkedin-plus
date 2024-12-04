import { filterIconContainer, filterSvgClass } from '../const';

export const addCss = (filterIconCss?: string) => {
    document.head.insertAdjacentHTML(
        'beforeend',
        `<style>
          :root {
            --scaffold-layout-aside-width: minmax(0, 100px) !important;
          }
          #voyager-feed .scaffold-layout__aside {
            display: none;
          }
                
            .${filterIconContainer} {
                border-radius: 50px;
                position: absolute;
                right: 75px;
                top: 4px;
                z-index: 1;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 3.2rem;
                width: 3.2rem;
                ${filterIconCss || ''}
              }
          
              .${filterIconContainer}:hover {
                background-color: rgb(235,235,235);
              }
              .${filterIconContainer}:active {
                background-color: #D9D9D9;
              }
  
              .${filterSvgClass} {
                z-index: 0;
                height: 20px;
                fill: #797979;
              }

              .hiddenPromoted {
                height: 20px;
                padding: 5px 10px;
              }
              </style>
        `.trim()
    );
};
