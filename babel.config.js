export default {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: 'chrome>=79, safari>=13.1, firefox>=72, not IE 11'
            }
        ]
    ]
};
