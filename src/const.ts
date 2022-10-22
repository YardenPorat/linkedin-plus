export const HIDDEN_POST_FLAG = 'hiddenPost';
export const filterMainClass = 'filter-ad';
export const filterIconIdentifier = `filter-icon-zzz`;
export const filterSvgClass = 'filterSvg';

export const classesToHide = [
    '.feed-shared-update-v2__update-content-wrapper',
    '.feed-shared-update-v2__description-wrapper',
    '.feed-shared-update-v2__content',
    '.social-details-social-activity',
    '.Elevation-0dp',
    '.ad-banner-container',
    '.feed-shared-document__container',
    '.feed-shared-showcase', // Assessment badges, Open to work,
    '.update-components-showcase', // Open to work
];

export const filterIconHtml = () => `<div class="${filterMainClass}">
                    <svg ${filterIconIdentifier} class="${filterSvgClass}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" 
                        style="enable-background:new 0 0 512 512;" xml:space="preserve"
                        >
                            <g>
                                <path d="M276,246c-5.52,0-10,4.48-10,10c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10C286,250.48,281.52,246,276,246z"/>
                            </g>
                            <g>
                                <path d="M472,26H40C17.944,26,0,43.944,0,66c0,22.097,17.898,40,40,40h11.194L206,299.508V476c0,3.466,1.795,6.685,4.743,8.506    c2.948,1.823,6.63,1.987,9.729,0.438l80-40C303.86,443.25,306,439.788,306,436V299.508L460.806,106H472c22.056,0,40-17.944,40-40    C512,43.903,494.102,26,472,26z M286,429.82l-60,30V306h60V429.82z M291.193,286h-70.387l-144-180h358.388L291.193,286z M472,86    H40c-11.045,0-20-8.954-20-20c0-11.028,8.972-20,20-20h432c11.045,0,20,8.954,20,20C492,77.028,483.028,86,472,86z"/>
                            </g>
                            <g>
                                <path d="M379.027,128.191c-4.312-3.451-10.606-2.75-14.056,1.562l-71.33,89.16c-3.45,4.313-2.75,10.606,1.562,14.056    c4.304,3.443,10.598,2.76,14.056-1.562l71.33-89.16C384.039,137.934,383.34,131.642,379.027,128.191z"/>
                            </g>
                        </svg>
                    </div>`;
