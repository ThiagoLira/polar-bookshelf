"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringBuffer_1 = require("polar-shared/src/util/StringBuffer");
class FontReplacer {
    static createFontReplacements() {
        const buff = new StringBuffer_1.StringBuffer();
        const standardFontIndex = this.createStandardFontIndex();
        for (const fontName of Object.keys(standardFontIndex)) {
            const fontType = standardFontIndex[fontName];
            if (fontType.type === 'serif') {
                buff.append(this.createFontReplacementUsingMerriweather(fontName));
            }
            else if (fontType.type === 'sans-serif') {
                buff.append(this.createFontReplacementUsingRoboto(fontName));
            }
        }
        return buff.toString();
    }
    static createFontReplacementUsingRoboto(newFontName) {
        return `<style id="polar-font-mapping-from-${newFontName}-to-roboto">

            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
              unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
              unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* greek-ext */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
              unicode-range: U+1F00-1FFF;
            }
            /* greek */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
              unicode-range: U+0370-03FF;
            }
            /* vietnamese */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
              unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
              unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }            
            
        </style>`;
    }
    static createFontReplacementUsingMerriweather(newFontName) {
        return `<style id="polar-font-mapping-from-${newFontName}-to-merriweather">

            /* cyrillic-ext */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v19/u-440qyriQwlOrhSvowK_l5-cSZMZ-Y.woff2) format('woff2');
              unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
            }
            /* cyrillic */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v19/u-440qyriQwlOrhSvowK_l5-eCZMZ-Y.woff2) format('woff2');
              unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            }
            /* vietnamese */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v19/u-440qyriQwlOrhSvowK_l5-cyZMZ-Y.woff2) format('woff2');
              unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v19/u-440qyriQwlOrhSvowK_l5-ciZMZ-Y.woff2) format('woff2');
              unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
              font-family: '${newFontName}';
              font-style: normal;
              font-weight: 400;
              src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v19/u-440qyriQwlOrhSvowK_l5-fCZM.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            
        </style>`;
    }
    static createReplacementStylesheet() {
    }
    static createStandardFontIndex() {
        return {
            "sans-serif": {
                type: 'sans-serif'
            },
            "serif": {
                type: 'serif'
            },
            "monospace": {
                type: 'monospace'
            },
            "helvetica": {
                type: 'sans-serif'
            },
            "helvetica neue": {
                type: 'sans-serif'
            },
            "neue helvetica": {
                type: 'sans-serif'
            },
            "arial": {
                type: 'sans-serif'
            },
            "tehoma": {
                type: 'sans-serif'
            },
            "geneva": {
                type: 'sans-serif'
            },
            "gadget": {
                type: 'sans-serif'
            },
            "times new roman": {
                type: 'serif'
            },
            "courier new": {
                type: 'monospace'
            },
            "courier": {
                type: 'monospace'
            },
            "lucida console": {
                type: 'monospace'
            },
            "monaco": {
                type: 'monospace'
            },
            "verdana": {
                type: 'sans-serif'
            },
            "georgia": {
                type: 'serif'
            },
            "palatino": {
                type: 'serif'
            },
            "palatino linotype": {
                type: 'serif'
            },
            "book antiqua": {
                type: 'serif'
            },
            "garamond": {
                type: 'serif'
            },
            "bookman": {
                type: 'serif'
            },
            "comic sans ms": {
                type: 'sans-serif'
            },
            "trebuchet ms": {
                type: 'sans-serif'
            },
            "arial black": {
                type: 'sans-serif'
            },
            "impact": {
                type: 'sans-serif'
            },
            "charcoal": {
                type: 'sans-serif'
            },
        };
    }
}
exports.FontReplacer = FontReplacer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9udFJlcGxhY2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRm9udFJlcGxhY2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUVBQWdFO0FBVWhFLE1BQWEsWUFBWTtJQVNkLE1BQU0sQ0FBQyxzQkFBc0I7UUFFaEMsTUFBTSxJQUFJLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7UUFFaEMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUV6RCxLQUFLLE1BQU0sUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUNuRCxNQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUU3QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ3RFO2lCQUFNLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDaEU7U0FFSjtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRTNCLENBQUM7SUFLTyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsV0FBbUI7UUFFL0QsT0FBTyxzQ0FBc0MsV0FBVzs7OzhCQUdsQyxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7O2lCQU94QixDQUFDO0lBRWQsQ0FBQztJQUVPLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxXQUFtQjtRQUVyRSxPQUFPLHNDQUFzQyxXQUFXOzs7OzhCQUlsQyxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7Ozs4QkFRWCxXQUFXOzs7Ozs7O2lCQU94QixDQUFDO0lBRWQsQ0FBQztJQU9NLE1BQU0sQ0FBQywyQkFBMkI7SUFFekMsQ0FBQztJQUVNLE1BQU0sQ0FBQyx1QkFBdUI7UUFFakMsT0FBTztZQUNILFlBQVksRUFBRTtnQkFDVixJQUFJLEVBQUUsWUFBWTthQUNyQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxJQUFJLEVBQUUsT0FBTzthQUNoQjtZQUNELFdBQVcsRUFBRTtnQkFDVCxJQUFJLEVBQUUsV0FBVzthQUNwQjtZQUNELFdBQVcsRUFBRTtnQkFDVCxJQUFJLEVBQUUsWUFBWTthQUNyQjtZQUNELGdCQUFnQixFQUFFO2dCQUNkLElBQUksRUFBRSxZQUFZO2FBQ3JCO1lBQ0QsZ0JBQWdCLEVBQUU7Z0JBQ2QsSUFBSSxFQUFFLFlBQVk7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLFlBQVk7YUFDckI7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFlBQVk7YUFDckI7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFlBQVk7YUFDckI7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFlBQVk7YUFDckI7WUFDRCxpQkFBaUIsRUFBRTtnQkFDZixJQUFJLEVBQUUsT0FBTzthQUNoQjtZQUNELGFBQWEsRUFBRTtnQkFDWCxJQUFJLEVBQUUsV0FBVzthQUNwQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxJQUFJLEVBQUUsV0FBVzthQUNwQjtZQUNELGdCQUFnQixFQUFFO2dCQUNkLElBQUksRUFBRSxXQUFXO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLElBQUksRUFBRSxXQUFXO2FBQ3BCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLElBQUksRUFBRSxZQUFZO2FBQ3JCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0QsbUJBQW1CLEVBQUU7Z0JBQ2pCLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0QsY0FBYyxFQUFFO2dCQUNaLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLElBQUksRUFBRSxZQUFZO2FBQ3JCO1lBQ0QsY0FBYyxFQUFFO2dCQUNaLElBQUksRUFBRSxZQUFZO2FBQ3JCO1lBQ0QsYUFBYSxFQUFFO2dCQUNYLElBQUksRUFBRSxZQUFZO2FBQ3JCO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLElBQUksRUFBRSxZQUFZO2FBQ3JCO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxZQUFZO2FBQ3JCO1NBQ0osQ0FBQztJQUVOLENBQUM7Q0FFSjtBQW5QRCxvQ0FtUEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0cmluZ0J1ZmZlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1N0cmluZ0J1ZmZlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhbmRhcmRGb250SW5kZXgge1xuICAgIFtuYW1lOiBzdHJpbmddOiBGb250VHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb250VHlwZSB7XG4gICAgdHlwZTogJ3NhbnMtc2VyaWYnIHwgJ3NlcmlmJyB8ICdtb25vc3BhY2UnO1xufVxuXG5leHBvcnQgY2xhc3MgRm9udFJlcGxhY2VyIHtcblxuICAgIC8vIFRPRE86IGFub3RoZXIgYXBvcm9hY2ggaXMgdG8ganVzdCByZXBsYWNlIHRoZSBzdGFuZGFyZCBmb250cyBieSBuYW1lLi4uXG4gICAgLy8gdGhpcyB3b3VsZCBiZSBlYXNpZXIgdG8gaW1wbGVtZW50LlxuXG4gICAgLy8gRklYTUU6IEknbSBub3Qgc3VyZSByb2JvdG8gY2FuIGJlIGRpc3BsYXllZCBib2xkLi4uIGZpbmQgb3V0Li4uXG4gICAgLy9cbiAgICAvLyBGSVhNRTogbW9ub3NwYWNlXG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUZvbnRSZXBsYWNlbWVudHMoKTogc3RyaW5nIHtcblxuICAgICAgICBjb25zdCBidWZmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXG4gICAgICAgIGNvbnN0IHN0YW5kYXJkRm9udEluZGV4ID0gdGhpcy5jcmVhdGVTdGFuZGFyZEZvbnRJbmRleCgpO1xuXG4gICAgICAgIGZvciAoY29uc3QgZm9udE5hbWUgb2YgT2JqZWN0LmtleXMoc3RhbmRhcmRGb250SW5kZXgpKSB7XG4gICAgICAgICAgICBjb25zdCBmb250VHlwZSA9IHN0YW5kYXJkRm9udEluZGV4W2ZvbnROYW1lXTtcblxuICAgICAgICAgICAgaWYgKGZvbnRUeXBlLnR5cGUgPT09ICdzZXJpZicpIHtcbiAgICAgICAgICAgICAgICBidWZmLmFwcGVuZCh0aGlzLmNyZWF0ZUZvbnRSZXBsYWNlbWVudFVzaW5nTWVycml3ZWF0aGVyKGZvbnROYW1lKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZvbnRUeXBlLnR5cGUgPT09ICdzYW5zLXNlcmlmJykge1xuICAgICAgICAgICAgICAgIGJ1ZmYuYXBwZW5kKHRoaXMuY3JlYXRlRm9udFJlcGxhY2VtZW50VXNpbmdSb2JvdG8oZm9udE5hbWUpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJ1ZmYudG9TdHJpbmcoKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHNpbXBsZS9lYXN5IHJlcGxhY2VtZW50IHdoaWNoICpwcm9iYWJseSogd29ya3MuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlRm9udFJlcGxhY2VtZW50VXNpbmdSb2JvdG8obmV3Rm9udE5hbWU6IHN0cmluZykge1xuXG4gICAgICAgIHJldHVybiBgPHN0eWxlIGlkPVwicG9sYXItZm9udC1tYXBwaW5nLWZyb20tJHtuZXdGb250TmFtZX0tdG8tcm9ib3RvXCI+XG5cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJyR7bmV3Rm9udE5hbWV9JztcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBzcmM6IGxvY2FsKCdSb2JvdG8nKSwgbG9jYWwoJ1JvYm90by1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NzJ4S096WS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgICAgICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIGN5cmlsbGljICovXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICcke25ld0ZvbnROYW1lfSc7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgc3JjOiBsb2NhbCgnUm9ib3RvJyksIGxvY2FsKCdSb2JvdG8tUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbUNucUV1OTJGcjFNdTVteEtPelkud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICAgICAgICAgICAgdW5pY29kZS1yYW5nZTogVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogZ3JlZWstZXh0ICovXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICcke25ld0ZvbnROYW1lfSc7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgc3JjOiBsb2NhbCgnUm9ib3RvJyksIGxvY2FsKCdSb2JvdG8tUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbUNucUV1OTJGcjFNdTdteEtPelkud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICAgICAgICAgICAgdW5pY29kZS1yYW5nZTogVSsxRjAwLTFGRkY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBncmVlayAqL1xuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnJHtuZXdGb250TmFtZX0nO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIHNyYzogbG9jYWwoJ1JvYm90bycpLCBsb2NhbCgnUm9ib3RvLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT21DbnFFdTkyRnIxTXU0V3hLT3pZLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgICAgICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogdmlldG5hbWVzZSAqL1xuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnJHtuZXdGb250TmFtZX0nO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIHNyYzogbG9jYWwoJ1JvYm90bycpLCBsb2NhbCgnUm9ib3RvLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT21DbnFFdTkyRnIxTXU3V3hLT3pZLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgICAgICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSsxRUEwLTFFRjksIFUrMjBBQjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIGxhdGluLWV4dCAqL1xuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnJHtuZXdGb250TmFtZX0nO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIHNyYzogbG9jYWwoJ1JvYm90bycpLCBsb2NhbCgnUm9ib3RvLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT21DbnFFdTkyRnIxTXU3R3hLT3pZLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgICAgICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBsYXRpbiAqL1xuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnJHtuZXdGb250TmFtZX0nO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIHNyYzogbG9jYWwoJ1JvYm90bycpLCBsb2NhbCgnUm9ib3RvLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT21DbnFFdTkyRnIxTXU0bXhLLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgICAgICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgPC9zdHlsZT5gO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlRm9udFJlcGxhY2VtZW50VXNpbmdNZXJyaXdlYXRoZXIobmV3Rm9udE5hbWU6IHN0cmluZykge1xuXG4gICAgICAgIHJldHVybiBgPHN0eWxlIGlkPVwicG9sYXItZm9udC1tYXBwaW5nLWZyb20tJHtuZXdGb250TmFtZX0tdG8tbWVycml3ZWF0aGVyXCI+XG5cbiAgICAgICAgICAgIC8qIGN5cmlsbGljLWV4dCAqL1xuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnJHtuZXdGb250TmFtZX0nO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIHNyYzogbG9jYWwoJ01lcnJpd2VhdGhlciBSZWd1bGFyJyksIGxvY2FsKCdNZXJyaXdlYXRoZXItUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21lcnJpd2VhdGhlci92MTkvdS00NDBxeXJpUXdsT3JoU3Zvd0tfbDUtY1NaTVotWS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgICAgICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIGN5cmlsbGljICovXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICcke25ld0ZvbnROYW1lfSc7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgc3JjOiBsb2NhbCgnTWVycml3ZWF0aGVyIFJlZ3VsYXInKSwgbG9jYWwoJ01lcnJpd2VhdGhlci1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWVycml3ZWF0aGVyL3YxOS91LTQ0MHF5cmlRd2xPcmhTdm93S19sNS1lQ1pNWi1ZLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgICAgICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIHZpZXRuYW1lc2UgKi9cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJyR7bmV3Rm9udE5hbWV9JztcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBzcmM6IGxvY2FsKCdNZXJyaXdlYXRoZXIgUmVndWxhcicpLCBsb2NhbCgnTWVycml3ZWF0aGVyLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tZXJyaXdlYXRoZXIvdjE5L3UtNDQwcXlyaVF3bE9yaFN2b3dLX2w1LWN5Wk1aLVkud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICAgICAgICAgICAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogbGF0aW4tZXh0ICovXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICcke25ld0ZvbnROYW1lfSc7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgc3JjOiBsb2NhbCgnTWVycml3ZWF0aGVyIFJlZ3VsYXInKSwgbG9jYWwoJ01lcnJpd2VhdGhlci1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWVycml3ZWF0aGVyL3YxOS91LTQ0MHF5cmlRd2xPcmhTdm93S19sNS1jaVpNWi1ZLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgICAgICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBsYXRpbiAqL1xuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnJHtuZXdGb250TmFtZX0nO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIHNyYzogbG9jYWwoJ01lcnJpd2VhdGhlciBSZWd1bGFyJyksIGxvY2FsKCdNZXJyaXdlYXRoZXItUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21lcnJpd2VhdGhlci92MTkvdS00NDBxeXJpUXdsT3JoU3Zvd0tfbDUtZkNaTS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgICAgICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIDwvc3R5bGU+YDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdvIG92ZXIgYWxsIHRoZSBzdHlsZXNoZWV0cyBvbiB0aGUgcGFnZSBhbmQgcmVwbGFjZSB0aGVtIHdpdGggYSBuZXdcbiAgICAgKiBzdHlsZXNoZWV0IHRoYXQgd29ya3MgYWNyb3NzIHBsYXRmb3JtcyBieSByZXBsYWNpbmcgc3lzdGVtIGZvbnRzIHdpdGhcbiAgICAgKiB0aGUgc2FtZSBmb250IGFjcm9zcyBwbGF0Zm9ybXMuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVSZXBsYWNlbWVudFN0eWxlc2hlZXQoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVN0YW5kYXJkRm9udEluZGV4KCk6IFN0YW5kYXJkRm9udEluZGV4IHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgXCJzYW5zLXNlcmlmXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2Fucy1zZXJpZidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNlcmlmXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VyaWYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtb25vc3BhY2VcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdtb25vc3BhY2UnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJoZWx2ZXRpY2FcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaGVsdmV0aWNhIG5ldWVcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibmV1ZSBoZWx2ZXRpY2FcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYXJpYWxcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidGVob21hXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2Fucy1zZXJpZidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdlbmV2YVwiOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NhbnMtc2VyaWYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnYWRnZXRcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidGltZXMgbmV3IHJvbWFuXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VyaWYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3VyaWVyIG5ld1wiOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ21vbm9zcGFjZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvdXJpZXJcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdtb25vc3BhY2UnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsdWNpZGEgY29uc29sZVwiOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ21vbm9zcGFjZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1vbmFjb1wiOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ21vbm9zcGFjZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInZlcmRhbmFcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2VvcmdpYVwiOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicGFsYXRpbm9cIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzZXJpZidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBhbGF0aW5vIGxpbm90eXBlXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VyaWYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJib29rIGFudGlxdWFcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzZXJpZidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdhcmFtb25kXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VyaWYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJib29rbWFuXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VyaWYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb21pYyBzYW5zIG1zXCI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2Fucy1zZXJpZidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInRyZWJ1Y2hldCBtc1wiOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NhbnMtc2VyaWYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhcmlhbCBibGFja1wiOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NhbnMtc2VyaWYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpbXBhY3RcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hhcmNvYWxcIjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgIH1cblxufVxuIl19